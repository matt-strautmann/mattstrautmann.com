#!/bin/bash
#
# Claude Code Post-Commit Hook for AEO Metadata Updates
#
# This hook automatically updates SEO/AEO metadata after commits to your website.
# Setup: Copy this to your website project's .claude/hooks/ directory
#

set -e

# Configuration - Customize these for your project
WEBSITE_DIR="$(pwd)"
AEO_NOW_DIR="../aeo-now"  # Relative path to aeo-now from your website
OUTPUT_DIR="./public"
SITE_URL="http://localhost:3000"  # or your production URL

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 AEO Post-Commit Hook${NC}"
echo ""

# Check if this is a website project (has public/ or app/ directory)
if [ ! -d "public" ] && [ ! -d "app" ] && [ ! -d "pages" ]; then
  echo -e "${YELLOW}⏭️  Skipping AEO update (not a website project)${NC}"
  exit 0
fi

# Check what files changed in the last commit
CHANGED_FILES=$(git diff HEAD~1 HEAD --name-only 2>/dev/null || echo "")

# Skip if only config files changed (package.json, tsconfig, etc.)
if echo "$CHANGED_FILES" | grep -qE '\.(tsx?|jsx?|mdx?|html)$'; then
  echo -e "${GREEN}✓ Content files changed, updating AEO metadata...${NC}"
else
  echo -e "${YELLOW}⏭️  Only config files changed, skipping AEO update${NC}"
  exit 0
fi

# Check if aeo-now exists
if [ ! -d "$AEO_NOW_DIR" ]; then
  echo -e "${RED}❌ AEO-Now not found at $AEO_NOW_DIR${NC}"
  echo -e "${YELLOW}💡 Clone it: git clone https://github.com/matt-strautmann/aeo-now.git $AEO_NOW_DIR${NC}"
  exit 0
fi

# Check if dev server is running (for local analysis)
DEV_SERVER_RUNNING=false
if curl -s -o /dev/null -w "%{http_code}" "$SITE_URL" | grep -q "200\|301\|302"; then
  DEV_SERVER_RUNNING=true
  ANALYSIS_URL="$SITE_URL"
  echo -e "${GREEN}✓ Dev server detected at $SITE_URL${NC}"
else
  # Try to detect production URL from package.json or vercel config
  if [ -f "package.json" ]; then
    PROD_URL=$(grep -o '"homepage":\s*"[^"]*"' package.json | cut -d'"' -f4)
    if [ ! -z "$PROD_URL" ]; then
      ANALYSIS_URL="$PROD_URL"
      echo -e "${BLUE}ℹ️  Using production URL: $PROD_URL${NC}"
    else
      echo -e "${YELLOW}⚠️  No dev server running and no production URL found${NC}"
      echo -e "${YELLOW}💡 Start dev server (npm run dev) or set homepage in package.json${NC}"
      exit 0
    fi
  else
    echo -e "${YELLOW}⚠️  Cannot determine site URL${NC}"
    exit 0
  fi
fi

echo ""
echo -e "${BLUE}📡 Running AEO analysis...${NC}"
echo -e "${BLUE}   URL: $ANALYSIS_URL${NC}"
echo -e "${BLUE}   Output: $OUTPUT_DIR${NC}"
echo ""

# Ensure output directory exists
mkdir -p "$OUTPUT_DIR"

# Run AEO pipeline
cd "$AEO_NOW_DIR"

# Step 1: Crawl and analyze
echo -e "${YELLOW}Step 1/2: Crawling website...${NC}"
if node scripts/run-aeo-pipeline.mjs "$ANALYSIS_URL" "../$(basename $WEBSITE_DIR)/$OUTPUT_DIR" 2>&1 | tail -5; then
  echo -e "${GREEN}✓ Crawl complete${NC}"
else
  echo -e "${RED}❌ Crawl failed${NC}"
  exit 1
fi

echo ""

# Step 2: Generate outputs
echo -e "${YELLOW}Step 2/2: Generating output files...${NC}"
if node scripts/generate-all-outputs.mjs "../$(basename $WEBSITE_DIR)/$OUTPUT_DIR/aeo-analysis.json" "../$(basename $WEBSITE_DIR)/$OUTPUT_DIR" 2>&1 | tail -10; then
  echo -e "${GREEN}✓ Files generated${NC}"
else
  echo -e "${RED}❌ Generation failed${NC}"
  exit 1
fi

cd "$WEBSITE_DIR"

echo ""
echo -e "${GREEN}✨ AEO metadata updated!${NC}"
echo ""

# Check if any AEO files changed
if git status --porcelain "$OUTPUT_DIR" | grep -qE '\.(xml|txt|html|json)$'; then
  echo -e "${BLUE}📝 Committing updated metadata...${NC}"

  # Add the generated files
  git add "$OUTPUT_DIR/sitemap.xml" \
          "$OUTPUT_DIR/robots.txt" \
          "$OUTPUT_DIR/llms.txt" \
          "$OUTPUT_DIR/llms-full.txt" \
          "$OUTPUT_DIR/aeo-report.html" \
          "$OUTPUT_DIR/aeo-analysis.json" 2>/dev/null || true

  # Commit with a descriptive message
  if git commit -m "chore: update AEO metadata (automated)" --no-verify; then
    echo -e "${GREEN}✓ Committed updated metadata${NC}"
    echo ""
    echo -e "${BLUE}📊 View report: file://$(pwd)/$OUTPUT_DIR/aeo-report.html${NC}"
  else
    echo -e "${YELLOW}⚠️  No changes to commit${NC}"
  fi
else
  echo -e "${YELLOW}ℹ️  No metadata changes detected${NC}"
fi

echo ""
echo -e "${GREEN}✅ AEO hook complete!${NC}"
