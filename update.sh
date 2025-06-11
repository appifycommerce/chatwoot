#!/bin/bash
set -e

echo "🚀 Starting Chatwoot deployment and CDN sync..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Chatwoot project directory
CHATWOOT_DIR="/home/sukhvirkushwah/chatwoot"
# CDN repository path
CDN_REPO_PATH="/home/sukhvirkushwah/cdn"

# Navigate to chatwoot directory
echo -e "${YELLOW}📁 Navigating to chatwoot directory: $CHATWOOT_DIR${NC}"
cd "$CHATWOOT_DIR"

# Verify docker-compose.yaml exists
if [ ! -f "docker-compose.yaml" ]; then
    echo -e "${RED}❌ docker-compose.yaml not found in $CHATWOOT_DIR${NC}"
    echo -e "${YELLOW}💡 Please check if chatwoot is installed in the correct directory${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Stopping existing containers...${NC}"
sudo docker-compose down

echo -e "${YELLOW}⬇️ Pulling latest images...${NC}"
sudo docker-compose pull

echo -e "${YELLOW}🔨 Building and starting containers...${NC}"
sudo docker-compose up -d

echo -e "${YELLOW}⏳ Waiting for services to be ready...${NC}"
sleep 60

echo -e "${YELLOW}🔍 Checking if CDN repository exists...${NC}"
if [ ! -d "$CDN_REPO_PATH" ]; then
    echo -e "${RED}❌ CDN repository not found at $CDN_REPO_PATH${NC}"
    echo -e "${YELLOW}💡 Please clone the repository first:${NC}"
    echo -e "${YELLOW}   git clone https://github.com/appifycommerce/cdn.git $CDN_REPO_PATH${NC}"
    exit 1
fi

echo -e "${YELLOW}📥 Updating CDN repository...${NC}"
cd "$CDN_REPO_PATH"
git fetch origin
git reset --hard origin/main
echo -e "${GREEN}✅ CDN repository updated${NC}"

# Return to chatwoot directory
cd "$CHATWOOT_DIR"

echo -e "${YELLOW}🔍 Checking if assets are built...${NC}"
# Get the rails container ID
RAILS_CONTAINER=$(sudo docker-compose ps -q rails)

if [ -z "$RAILS_CONTAINER" ]; then
    echo -e "${RED}❌ Rails container not found!${NC}"
    echo -e "${YELLOW}📋 Available containers:${NC}"
    sudo docker-compose ps
    exit 1
fi

echo -e "${GREEN}✅ Found rails container: $RAILS_CONTAINER${NC}"

# Check if assets exist
PACKS_EXISTS=$(sudo docker exec $RAILS_CONTAINER sh -c "[ -d /app/public/packs ] && [ \"\$(ls -A /app/public/packs 2>/dev/null)\" ] && echo 'yes' || echo 'no'")
VITE_EXISTS=$(sudo docker exec $RAILS_CONTAINER sh -c "[ -d /app/public/vite ] && [ \"\$(ls -A /app/public/vite 2>/dev/null)\" ] && echo 'yes' || echo 'no'")

echo -e "${YELLOW}📁 Assets status:${NC}"
echo -e "   Packs: $PACKS_EXISTS"
echo -e "   Vite: $VITE_EXISTS"

if [ "$PACKS_EXISTS" = "no" ] && [ "$VITE_EXISTS" = "no" ]; then
    echo -e "${RED}❌ No assets found! Building assets first...${NC}"
    sudo docker exec $RAILS_CONTAINER sh -c "cd /app && pnpm install && pnpm run build:sdk && npx vite build"
    sleep 10
    
    # Re-check assets after building
    PACKS_EXISTS=$(sudo docker exec $RAILS_CONTAINER sh -c "[ -d /app/public/packs ] && [ \"\$(ls -A /app/public/packs 2>/dev/null)\" ] && echo 'yes' || echo 'no'")
    VITE_EXISTS=$(sudo docker exec $RAILS_CONTAINER sh -c "[ -d /app/public/vite ] && [ \"\$(ls -A /app/public/vite 2>/dev/null)\" ] && echo 'yes' || echo 'no'")
    
    echo -e "${YELLOW}📁 Assets status after build:${NC}"
    echo -e "   Packs: $PACKS_EXISTS"
    echo -e "   Vite: $VITE_EXISTS"
fi

echo -e "${YELLOW}🗑️ Cleaning old assets from CDN repository...${NC}"
sudo rm -rf "$CDN_REPO_PATH/web/chatwoot/packs"
sudo rm -rf "$CDN_REPO_PATH/web/chatwoot/vite"
echo -e "${GREEN}✅ Old assets removed${NC}"

echo -e "${YELLOW}📁 Creating fresh directories...${NC}"
mkdir -p "$CDN_REPO_PATH/web/chatwoot/packs"
mkdir -p "$CDN_REPO_PATH/web/chatwoot/vite"

echo -e "${YELLOW}📋 Copying packs assets from container...${NC}"
if [ "$PACKS_EXISTS" = "yes" ]; then
    sudo docker cp "$RAILS_CONTAINER:/app/public/packs/." "$CDN_REPO_PATH/web/chatwoot/packs/"
    PACKS_COUNT=$(find "$CDN_REPO_PATH/web/chatwoot/packs" -type f 2>/dev/null | wc -l)
    echo -e "${GREEN}✅ Packs assets copied ($PACKS_COUNT files)${NC}"
else
    echo -e "${YELLOW}⚠️ No packs assets found${NC}"
fi

echo -e "${YELLOW}📋 Copying vite assets from container...${NC}"
if [ "$VITE_EXISTS" = "yes" ]; then
    sudo docker cp "$RAILS_CONTAINER:/app/public/vite/." "$CDN_REPO_PATH/web/chatwoot/vite/"
    VITE_COUNT=$(find "$CDN_REPO_PATH/web/chatwoot/vite" -type f 2>/dev/null | wc -l)
    echo -e "${GREEN}✅ Vite assets copied ($VITE_COUNT files)${NC}"
else
    echo -e "${YELLOW}⚠️ No vite assets found${NC}"
fi

echo -e "${YELLOW}📊 Assets summary:${NC}"
echo -e "   Packs files: $(find "$CDN_REPO_PATH/web/chatwoot/packs" -type f 2>/dev/null | wc -l)"
echo -e "   Vite files: $(find "$CDN_REPO_PATH/web/chatwoot/vite" -type f 2>/dev/null | wc -l)"

echo -e "${YELLOW}💾 Committing and pushing changes...${NC}"
cd "$CDN_REPO_PATH"

# Configure git if not already configured
git config user.name "Chatwoot Deploy Script" 2>/dev/null || true
git config user.email "deploy@chatwoot.com" 2>/dev/null || true

git add .

if [ -n "$(git status --porcelain)" ]; then
    git commit -m "Automated deployment sync from Chatwoot $(date) - cleaned old assets"
    git push origin main
    echo -e "${GREEN}✅ Assets successfully pushed to CDN repository${NC}"
else
    echo -e "${YELLOW}ℹ️ No changes to commit${NC}"
fi

echo -e "${GREEN}🎉 Deployment and CDN sync completed successfully!${NC}"
echo -e "${GREEN}🧹 Old assets were cleaned up before pushing new ones${NC}"
echo -e "${GREEN}🌐 Your application is ready at: http://localhost:3000${NC}"
echo -e "${GREEN}📊 Vite dev server at: http://localhost:3036${NC}"
echo -e "${GREEN}📁 CDN assets updated at: $CDN_REPO_PATH${NC}"