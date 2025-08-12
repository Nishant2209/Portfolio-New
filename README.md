# 🚀 Nishant's Portfolio - Modern Developer Portfolio

A cutting-edge, AI-powered portfolio website built with Next.js 14, TypeScript, and Google Gemini AI. Features stunning animations, interactive components, and an intelligent chatbot that can answer questions about professional experience and projects.

## ✨ Features

### 🎨 **Modern Design & Animations**

- **Responsive Design**: Optimized for all devices and screen sizes
- **Framer Motion**: Smooth animations and transitions
- **Three.js Integration**: Interactive 3D elements and backgrounds
- **Aceternity UI**: Beautiful, modern UI components
- **Dark Theme**: Sleek dark mode design with neon accents

### 🤖 **AI-Powered Chatbot**

- **Google Gemini AI**: Intelligent responses about professional background
- **Real-time Chat**: Instant answers to portfolio-related questions
- **Context-Aware**: Understands complete work history, skills, and projects
- **Fallback System**: Keyword-based responses when AI is unavailable
- **Cost-Optimized**: Uses free Gemini models for zero-cost operation

### 📱 **Interactive Components**

- **Hero Section**: Dynamic spotlight effects and animated text
- **Experience Timeline**: Interactive work experience showcase
- **Project Gallery**: Hover effects and detailed project cards
- **Testimonials**: Client feedback with smooth animations
- **Contact Form**: Secure form with email integration
- **Floating Navigation**: Smooth scroll navigation

### 🛡️ **Security & Performance**

- **Input Validation**: Zod schema validation for all forms
- **XSS Protection**: HTML sanitization and security headers
- **Rate Limiting**: Protection against spam and abuse
- **Sentry Integration**: Error monitoring and performance tracking
- **SEO Optimized**: Meta tags, sitemap, and search engine optimization
- **PWA Ready**: Progressive Web App capabilities

### 📊 **Monitoring & Analytics**

- **Sentry Error Tracking**: Real-time error monitoring
- **Performance Metrics**: Core Web Vitals tracking
- **Build Optimization**: Code splitting and bundle optimization
- **Image Optimization**: Next.js Image component for fast loading

## 🏗️ Project Structure

```
Portfolio-New/
├── 📁 app/                          # Next.js App Router
│   ├── 📄 layout.tsx                # Root layout with metadata
│   ├── 📄 page.tsx                  # Homepage
│   ├── 📄 globals.css               # Global styles
│   ├── 📁 about/                    # About page
│   ├── 📁 contact-us/               # Contact page
│   ├── 📁 experience/               # Experience page
│   ├── 📁 projects/                 # Projects showcase
│   ├── 📁 testimonials/             # Client testimonials
│   └── 📁 api/                      # API routes
│       └── 📁 chat/                 # AI chatbot API endpoint
├── 📁 components/                   # React components
│   ├── 📄 Hero.tsx                  # Hero section component
│   ├── 📄 Experience.tsx            # Work experience timeline
│   ├── 📄 RecentProjects.tsx        # Projects showcase
│   ├── 📄 Footer.tsx                # Site footer
│   ├── 📄 ContactUsPage.tsx         # Contact form
│   └── 📁 ui/                       # Reusable UI components (Aceternity)
│       ├── 📄 Chatbot.tsx           # AI chatbot interface
│       ├── 📄 FloatingNavbar.tsx    # Navigation component
│       ├── 📄 BentoGrid.tsx         # Grid layout component
│       ├── 📄 SparklesCore.tsx      # Particle effects
│       └── 📄 ...                   # Other UI components
├── 📁 lib/                          # Utility libraries
│   ├── 📁 actions/                  # Server actions
│   │   └── 📄 form.actions.ts       # Contact form handling
│   ├── 📁 ai/                       # AI integration
│   │   ├── 📄 portfolio-ai.ts       # Core AI service
│   │   └── 📄 portfolio-ai-client.ts # Client-side AI service
│   ├── 📁 chatbot/                  # Chatbot data
│   │   └── 📄 portfolio-data.ts     # Knowledge base
│   └── 📄 utils.ts                  # Utility functions
├── 📁 data/                         # Static data
│   ├── 📄 index.ts                  # Portfolio data (experience, projects)
│   ├── 📄 confetti.json             # Animation data
│   └── 📄 globe.json                # Globe animation data
├── 📁 validation/                   # Form validation schemas
│   ├── 📄 contact.ts                # Contact form validation
│   └── 📄 index.ts                  # Validation exports
├── 📁 public/                       # Static assets
│   ├── 🖼️ images/                   # Project images and icons
│   ├── 📄 manifest.json             # PWA manifest
│   └── 📄 ...                       # Other static files
├── 📁 config files/                 # Configuration
│   ├── 📄 next.config.mjs           # Next.js configuration
│   ├── 📄 tailwind.config.ts        # Tailwind CSS config
│   ├── 📄 tsconfig.json             # TypeScript config
│   ├── 📄 package.json              # Dependencies
│   └── 📄 components.json           # UI components config
└── 📁 docs/                         # Documentation
    ├── 📄 SECURITY.md               # Security practices
    ├── 📄 AI_SETUP_GUIDE.md         # AI chatbot setup
    └── 📄 GEMINI_AI_IMPLEMENTATION.md # AI implementation details
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17 or later
- **Yarn** or **npm** package manager
- **Git** for version control

### 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio-new.git
   cd portfolio-new
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.sample .env.local
   ```

   Edit `.env.local` with your actual values (see Environment Variables section below)

4. **Run the development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌍 Environment Setup

### Development Environment

- **Branch**: `dev`
- **URL**: `http://localhost:3000`
- **Database**: Development database
- **AI Model**: `gemini-1.5-flash` (development)
- **Error Tracking**: Sentry (development mode)

### Production Environment

- **Branch**: `main`
- **URL**: Your production domain
- **Database**: Production database
- **AI Model**: `gemini-2.0-flash-001` (production)
- **Error Tracking**: Sentry (production mode)

## 🔑 Environment Variables

Create a `.env.local` file based on `.env.sample`:

### Required Variables

```bash
# Gmail Configuration (for contact form)
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password

# Google Gemini AI (for chatbot)
NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key

# Sentry Error Tracking
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
SENTRY_AUTH_TOKEN=your-sentry-auth-token
SENTRY_ORG=your-sentry-org
SENTRY_PROJECT=your-sentry-project
```

### Getting API Keys

#### 🤖 Google Gemini AI

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to `NEXT_PUBLIC_GEMINI_API_KEY`

#### 📧 Gmail App Password

1. Enable 2-factor authentication on your Google account
2. Go to Google Account settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Use this password in `GMAIL_PASS`

#### 🔍 Sentry Setup

1. Create account at [Sentry.io](https://sentry.io)
2. Create a new project
3. Copy DSN to `NEXT_PUBLIC_SENTRY_DSN`
4. Generate auth token for deployments

## 📋 Available Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
yarn type-check   # Run TypeScript checks

# Utilities
yarn audit        # Check for vulnerabilities
yarn clean        # Clean build files
```

## 🎯 Key Features Explained

### AI Chatbot

The portfolio includes an intelligent chatbot powered by Google Gemini AI that can:

- Answer questions about work experience
- Provide details about technical skills
- Discuss projects and achievements
- Share contact information
- Handle general portfolio inquiries

### Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Dynamic imports for heavy components
- **Font Optimization**: Optimized Google Fonts loading
- **Bundle Analysis**: Webpack optimization for smaller bundles
- **Lazy Loading**: Components load only when needed

### Security Features

- **Input Sanitization**: All user inputs are validated and sanitized
- **XSS Protection**: HTML escaping for dynamic content
- **CSRF Protection**: Form validation with secure tokens
- **Rate Limiting**: Protection against spam and abuse
- **Security Headers**: Comprehensive HTTP security headers

## 🛠️ Customization

### Updating Portfolio Data

Edit `data/index.ts` to update:

- Work experience
- Projects
- Skills
- Testimonials
- Contact information

### Modifying AI Responses

Update `lib/ai/portfolio-ai.ts` to:

- Customize AI prompts
- Add new fallback responses
- Modify response parameters

### Styling Changes

- **Global Styles**: `app/globals.css`
- **Tailwind Config**: `tailwind.config.ts`
- **Component Styles**: Individual component files

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The project is compatible with:

- **Netlify**
- **Railway**
- **Heroku**
- **AWS Amplify**
- **DigitalOcean App Platform**

## 📈 Performance Monitoring

### Sentry Integration

- **Error Tracking**: Automatic error capturing and reporting
- **Performance Monitoring**: Core Web Vitals tracking
- **User Sessions**: Session replay for debugging
- **Custom Events**: Track specific user interactions

### Analytics

The portfolio is ready for analytics integration:

- Google Analytics
- Vercel Analytics
- Plausible
- Umami

## 🔒 Security

### Security Measures Implemented

- ✅ Input validation with Zod schemas
- ✅ HTML sanitization for XSS prevention
- ✅ CSRF protection on forms
- ✅ Rate limiting on API endpoints
- ✅ Security headers (CSP, HSTS, etc.)
- ✅ Environment variable protection
- ✅ Dependency vulnerability scanning

### Security Best Practices

- Regular dependency updates
- Environment variable validation
- Secure API key management
- Error handling without sensitive data exposure


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Aceternity UI** for beautiful components
- **Framer Motion** for smooth animations
- **Google Gemini** for AI capabilities
- **Vercel** for hosting and deployment
- **Sentry** for error monitoring

---

**⭐ Star this repository if you find it helpful!**

Built with ❤️ by [Nishant Kumar Singh](https://github.com/your-username)
