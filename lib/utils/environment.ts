/**
 * Environment Detection Utilities
 * Helps identify the current deployment environment
 */

export const isProduction = process.env.NODE_ENV === "production";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isPreview = process.env.VERCEL_ENV === "preview";
export const isVercel = !!process.env.VERCEL;

/**
 * Get comprehensive environment information
 */
export const getEnvironmentInfo = () => ({
  environment: process.env.NODE_ENV || "development",
  vercelEnv: process.env.VERCEL_ENV || "development",
  isProduction,
  isDevelopment,
  isPreview,
  isVercel,
  branch: process.env.VERCEL_GIT_COMMIT_REF || "local",
  commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "local",
  url: process.env.VERCEL_URL || "localhost:3000",
});

/**
 * Get environment-specific configuration
 */
export const getConfig = () => {
  const env = getEnvironmentInfo();

  return {
    // AI Model selection based on environment
    aiModel: env.isProduction ? "gemini-2.0-flash-001" : "gemini-1.5-flash",

    // API rate limits
    rateLimits: {
      ai: env.isProduction ? 100 : 1000, // Requests per hour
      contact: env.isProduction ? 10 : 50, // Contact form submissions per hour
    },

    // Error tracking
    sentry: {
      tracesSampleRate: env.isProduction ? 0.1 : 1.0,
      environment: env.isProduction ? "production" : "development",
    },

    // Feature flags
    features: {
      chatbot: true,
      analytics: env.isProduction,
      debugging: !env.isProduction,
    },
  };
};

/**
 * Log environment information (development only)
 */
export const logEnvironmentInfo = () => {
  if (isDevelopment) {
    const info = getEnvironmentInfo();
    console.log("🌍 Environment Info:", info);
  }
};

/**
 * Get deployment URL based on environment
 */
export const getDeploymentUrl = () => {
  if (isVercel) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (isProduction) {
    return process.env.NEXT_PUBLIC_DOMAIN || "https://your-domain.com";
  }

  return "http://localhost:3000";
};

/**
 * Environment-specific error messages
 */
export const getErrorMessage = (error: string) => {
  if (isProduction) {
    // User-friendly messages for production
    switch (error) {
      case "AI_ERROR":
        return "Sorry, the AI assistant is temporarily unavailable. Please try again later.";
      case "RATE_LIMIT":
        return "Too many requests. Please wait a moment before trying again.";
      case "VALIDATION_ERROR":
        return "Please check your input and try again.";
      default:
        return "Something went wrong. Please try again later.";
    }
  } else {
    // Detailed messages for development
    return `Development Error: ${error}`;
  }
};
