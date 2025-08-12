#!/bin/bash

# Portfolio Deployment Script
# Usage: ./scripts/deploy.sh [dev|prod]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Functions
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️ $1${NC}"
}

# Check if argument is provided
if [ $# -eq 0 ]; then
    print_error "Please specify environment: dev or prod"
    echo "Usage: ./scripts/deploy.sh [dev|prod]"
    exit 1
fi

ENVIRONMENT=$1

# Validate environment
if [[ "$ENVIRONMENT" != "dev" && "$ENVIRONMENT" != "prod" ]]; then
    print_error "Invalid environment. Use 'dev' or 'prod'"
    exit 1
fi

print_info "Starting deployment to $ENVIRONMENT environment..."

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "Not in a git repository"
    exit 1
fi

# Check for uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
    print_warning "You have uncommitted changes. Commit them first:"
    git status --short
    exit 1
fi

# Pre-deployment checks
print_info "Running pre-deployment checks..."

# Install dependencies
print_info "Installing dependencies..."
yarn install

# Type checking
print_info "Running type checks..."
if yarn type-check; then
    print_success "Type checks passed"
else
    print_error "Type checks failed"
    exit 1
fi

# Linting
print_info "Running linter..."
if yarn lint; then
    print_success "Linting passed"
else
    print_error "Linting failed"
    exit 1
fi

# Build test
print_info "Testing build..."
if yarn build; then
    print_success "Build test passed"
else
    print_error "Build test failed"
    exit 1
fi

# Environment-specific deployment
if [[ "$ENVIRONMENT" == "dev" ]]; then
    print_info "Deploying to DEVELOPMENT environment..."
    
    # Switch to dev branch
    CURRENT_BRANCH=$(git branch --show-current)
    if [[ "$CURRENT_BRANCH" != "dev" ]]; then
        print_info "Switching to dev branch..."
        git checkout dev
    fi
    
    # Push to dev branch
    print_info "Pushing to dev branch..."
    git push origin dev
    
    print_success "Development deployment initiated!"
    print_info "Preview URL will be available at: https://portfolio-new-git-dev-username.vercel.app"
    
elif [[ "$ENVIRONMENT" == "prod" ]]; then
    print_info "Deploying to PRODUCTION environment..."
    
    # Confirm production deployment
    read -p "Are you sure you want to deploy to PRODUCTION? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Production deployment cancelled"
        exit 0
    fi
    
    # Switch to main branch
    CURRENT_BRANCH=$(git branch --show-current)
    if [[ "$CURRENT_BRANCH" != "main" ]]; then
        print_info "Switching to main branch..."
        git checkout main
    fi
    
    # Merge dev to main
    print_info "Merging dev branch to main..."
    git merge dev
    
    # Tag release
    CURRENT_VERSION=$(git describe --tags --abbrev=0 2>/dev/null || echo "v0.0.0")
    print_info "Current version: $CURRENT_VERSION"
    read -p "Enter new version tag (e.g., v1.0.1): " NEW_VERSION
    
    if [[ -n "$NEW_VERSION" ]]; then
        git tag -a "$NEW_VERSION" -m "Release $NEW_VERSION"
        print_success "Tagged release: $NEW_VERSION"
    fi
    
    # Push to main branch
    print_info "Pushing to main branch..."
    git push origin main
    
    # Push tags
    if [[ -n "$NEW_VERSION" ]]; then
        git push origin --tags
    fi
    
    print_success "Production deployment initiated!"
    print_info "Production URL: https://your-domain.com"
fi

# Post-deployment info
print_info "Deployment Summary:"
echo "================================"
echo "Environment: $ENVIRONMENT"
echo "Branch: $(git branch --show-current)"
echo "Commit: $(git rev-parse --short HEAD)"
echo "Time: $(date)"
echo "================================"

print_success "Deployment completed successfully!"

# Optional: Open Vercel dashboard
read -p "Open Vercel dashboard to monitor deployment? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if command -v open >/dev/null 2>&1; then
        open "https://vercel.com/dashboard"
    elif command -v xdg-open >/dev/null 2>&1; then
        xdg-open "https://vercel.com/dashboard"
    else
        print_info "Please open https://vercel.com/dashboard manually"
    fi
fi