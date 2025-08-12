# 🌍 Environment Configuration Guide

This guide explains how to set up and manage different environments for Nishant's Portfolio project.

## 📋 Environment Overview

| Environment     | Branch | AI Model               | Sentry Mode | Rate Limits | Error Handling |
| --------------- | ------ | ---------------------- | ----------- | ----------- | -------------- |
| **Development** | `dev`  | `gemini-1.5-flash`     | Development | Relaxed     | Detailed       |
| **Production**  | `main` | `gemini-2.0-flash-001` | Production  | Strict      | User-friendly  |

## 🔧 Development Environment Setup

### Branch Configuration

```bash
# Switch to development branch
git checkout dev

# Create new feature branch from dev
git checkout -b feature/your-feature-name

# Merge back to dev when complete
git checkout dev
git merge feature/your-feature-name
```

### Environment Variables

Create `.env.local` for development:

```bash
# Copy sample file
cp env.sample .env.local

# Edit with development values
NODE_ENV=development
NEXT_PUBLIC_GEMINI_API_KEY=your-dev-api-key
NEXT_PUBLIC_SENTRY_DSN=your-dev-sentry-dsn
SENTRY_ORG=your-org
SENTRY_PROJECT=your-project-dev
GMAIL_USER=your-dev-email@gmail.com
GMAIL_PASS=your-dev-password
```

### Development Server

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Access at http://localhost:3000
```

### Development Features

- **Hot Reload**: Instant code changes
- **Detailed Errors**: Full stack traces and debugging info
- **AI Model**: `gemini-1.5-flash` (free tier)
- **Relaxed Rate Limits**: Higher request limits for testing
- **Development Sentry**: Separate error tracking

## 🚀 Production Environment Setup

### Branch Configuration

```bash
# Production deployments use main branch
git checkout main

# Merge dev to main for production release
git checkout main
git merge dev
git push origin main
```

### Environment Variables

Configure production environment variables in your hosting platform:

#### Vercel Configuration

```bash
# Production environment variables
NODE_ENV=production
NEXT_PUBLIC_GEMINI_API_KEY=your-prod-api-key
NEXT_PUBLIC_SENTRY_DSN=your-prod-sentry-dsn
SENTRY_AUTH_TOKEN=your-prod-sentry-token
SENTRY_ORG=your-org
SENTRY_PROJECT=your-project-prod
GMAIL_USER=your-prod-email@gmail.com
GMAIL_PASS=your-prod-password
```

### Production Features

- **Optimized Builds**: Minified and compressed code
- **Production AI**: `gemini-2.0-flash-001` (latest model)
- **Strict Rate Limits**: Production-ready API limits
- **Error Sanitization**: User-friendly error messages
- **Performance Monitoring**: Production Sentry tracking

## 🔄 Deployment Workflow

### Development Workflow

```bash
# 1. Create feature branch from dev
git checkout dev
git pull origin dev
git checkout -b feature/new-feature

# 2. Develop and test locally
yarn dev

# 3. Commit changes
git add .
git commit -m "feat: add new feature"

# 4. Push and create PR to dev
git push origin feature/new-feature
```

### Production Deployment

```bash
# 1. Merge dev to main (after testing)
git checkout main
git pull origin main
git merge dev

# 2. Tag release (optional)
git tag -a v1.0.0 -m "Release version 1.0.0"

# 3. Push to trigger production deployment
git push origin main
git push origin --tags
```

## 🎯 Environment-Specific Configurations

### AI Model Configuration

File: `lib/ai/portfolio-ai.ts`

```typescript
// Model selection based on environment
const getModel = () => {
  const isDev = process.env.NODE_ENV === "development";
  // Use cost-effective model for dev, latest for production
  return isDev ? "gemini-1.5-flash" : "gemini-2.0-flash-001";
};
```

### Sentry Configuration

File: `sentry.client.config.ts` & `sentry.server.config.ts`

```typescript
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1 : 0.1,
});
```

### Next.js Configuration

File: `next.config.mjs`

```javascript
const nextConfig = {
  // Development vs Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizeCss: process.env.NODE_ENV === "production",
  },
};
```

## 📊 Monitoring & Analytics

### Development Monitoring

- **Console Logging**: Detailed logs for debugging
- **Error Tracking**: Development Sentry project
- **Performance**: Local performance profiling
- **API Usage**: Monitor Gemini API usage in Google AI Studio

### Production Monitoring

- **Error Tracking**: Production Sentry project
- **Performance Metrics**: Core Web Vitals tracking
- **User Analytics**: Production analytics integration
- **API Monitoring**: Production API usage and rate limits

## 🔒 Security Considerations

### Development Security

- Use separate API keys for development
- Never commit `.env.local` to version control
- Use development-specific Sentry projects
- Test with non-production data

### Production Security

- Use strong, unique API keys
- Enable all security headers
- Monitor error rates and unusual activity
- Regular security audits and updates

## 🧪 Testing Strategy

### Development Testing

```bash
# Run type checking
yarn type-check

# Run linting
yarn lint

# Build test (without deployment)
yarn build

# Test AI chatbot functionality
# Visit http://localhost:3000 and test chatbot
```

### Production Testing

```bash
# Production build test
yarn build
yarn start

# Performance testing
yarn build
# Test with production data

# E2E testing (if configured)
yarn test:e2e
```

## 🚨 Troubleshooting

### Common Development Issues

1. **AI Not Working**: Check `NEXT_PUBLIC_GEMINI_API_KEY` in `.env.local`
2. **Build Errors**: Run `yarn type-check` and fix TypeScript errors
3. **Slow Performance**: Check for unnecessary imports in development

### Common Production Issues

1. **Environment Variables**: Verify all vars are set in hosting platform
2. **API Rate Limits**: Monitor usage in Google AI Studio
3. **Sentry Errors**: Check production Sentry dashboard

## 📝 Best Practices

### Development Best Practices

- Always test in development before merging to main
- Use descriptive commit messages
- Keep `.env.local` up to date with `.env.sample`
- Regularly update dependencies

### Production Best Practices

- Monitor performance metrics regularly
- Set up alerts for high error rates
- Keep API keys secure and rotate regularly
- Monitor costs and usage limits

## 🔄 Environment Migration

### Development to Production Checklist

- [ ] All environment variables configured
- [ ] API keys updated for production
- [ ] Sentry project switched to production
- [ ] Rate limits appropriate for production traffic
- [ ] Error handling sanitized for users
- [ ] Performance optimizations enabled
- [ ] Security headers configured
- [ ] Monitoring and analytics set up

---

This configuration ensures a smooth development experience while maintaining production security and performance standards.
