import { GoogleGenAI } from "@google/genai";
import {
  gridItems,
  projects,
  workExperience,
  testimonials,
  socialMedia,
} from "@/data/index";
import { getConfig, logEnvironmentInfo } from "@/lib/utils/environment";

// Log environment info in development
logEnvironmentInfo();

// Initialize Google GenAI client
const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "",
});

// Get environment-specific configuration
const config = getConfig();

// Rate limiting for API calls
let lastApiCall = 0;
const API_RATE_LIMIT_MS = 2000; // 2 seconds between calls

// Model selection based on environment
const getModel = () => {
  return config.aiModel;
};

// Build comprehensive context from all portfolio data
function buildPortfolioContext(): string {
  const personalInfo = {
    name: "Nishant Kumar Singh",
    title: "Software Engineer | Full Stack Developer",
    email: "nishant220902@gmail.com",
    linkedin: "https://www.linkedin.com/in/nishant-kumar-singh-1252nks/",
    github: "https://github.com/Nishant2209",
    traits: [
      "Tech enthusiast with passion for web development",
      "Prioritizes client collaboration and open communication",
      "Flexible with time zone communications",
      "Team leader and mentor",
      "Performance optimization expert",
    ],
  };

  const skills = [
    "Frontend: React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion",
    "Backend: Node.js, Express.js, NestJS, REST APIs, GraphQL",
    "Databases: MongoDB, SQL",
    "Cloud & DevOps: AWS (SQS, S3), Docker, CI/CD pipelines",
    "Tools: SonarQube, Socket.IO, Chart.js, Xterm, Git",
    "Specialized: RLHF (Reinforcement Learning from Human Feedback)",
  ];

  const currentWork = workExperience.find((exp) => exp.current);
  const experienceDetails = workExperience.map((exp) => ({
    position: exp.position,
    company: exp.company,
    duration: `${exp.startDate} - ${exp.endDate || "Present"}`,
    achievements: exp.description,
    website: exp.website,
  }));

  const projectDetails = projects.map((proj) => ({
    name: proj.title,
    description: proj.des,
    technologies: proj.iconLists,
    link: proj.link,
  }));

  const testimonialDetails = testimonials.map((test) => ({
    quote: test.quote,
    author: `${test.name}, ${test.title}`,
  }));

  return `
PORTFOLIO CONTEXT FOR NISHANT KUMAR SINGH:

PERSONAL INFORMATION:
- Name: ${personalInfo.name}
- Title: ${personalInfo.title}
- Email: ${personalInfo.email}
- LinkedIn: ${personalInfo.linkedin}
- GitHub: ${personalInfo.github}
- Key Traits: ${personalInfo.traits.join(", ")}

TECHNICAL SKILLS:
${skills.map((skill) => `- ${skill}`).join("\n")}

CURRENT POSITION:
${
  currentWork
    ? `
- Position: ${currentWork.position}
- Company: ${currentWork.company}
- Duration: ${currentWork.startDate} - Present
- Key Achievements:
${currentWork.description.map((desc) => `  • ${desc}`).join("\n")}
- Website: ${currentWork.website}
`
    : "No current position information available"
}

WORK EXPERIENCE:
${experienceDetails
  .map(
    (exp) => `
- ${exp.position} at ${exp.company} (${exp.duration})
  Achievements:
${exp.achievements.map((achievement) => `  • ${achievement}`).join("\n")}
  Website: ${exp.website}
`
  )
  .join("\n")}

PROJECTS:
${projectDetails
  .map(
    (proj) => `
- ${proj.name}: ${proj.description}
  Technologies: ${proj.technologies.join(", ")}
  Link: ${proj.link}
`
  )
  .join("\n")}

TESTIMONIALS:
${testimonialDetails
  .map(
    (test) => `
- "${test.quote}"
  - ${test.author}
`
  )
  .join("\n")}

GRID ITEMS/HIGHLIGHTS:
${gridItems
  .filter((item) => item.title)
  .map((item) => `- ${item.title}`)
  .join("\n")}

SOCIAL MEDIA:
${socialMedia
  .map((social) => `- Platform ID ${social.id}: ${social.link}`)
  .join("\n")}
`;
}

// Create AI prompt for portfolio assistant
function createPortfolioPrompt(userQuestion: string): string {
  const context = buildPortfolioContext();

  return `You are Nishant Kumar Singh's AI assistant, designed to help visitors learn about his professional background, skills, and experience. You have access to comprehensive information about Nishant's career, projects, and achievements.

INSTRUCTIONS:
1. Answer questions based ONLY on the provided portfolio context
2. Be conversational, friendly, and professional
3. Provide specific details, metrics, and examples when available
4. If asked about something not in the context, politely redirect to available information or suggest contacting Nishant directly
5. Use emojis sparingly and appropriately
6. Keep responses concise but informative (2-4 paragraphs max)
7. Always maintain enthusiasm about Nishant's work and achievements
8. If asked about contact information, provide the email and suggest using the contact form

PORTFOLIO CONTEXT:
${context}

USER QUESTION: ${userQuestion}

Please provide a helpful and informative response based on the portfolio context above.`;
}

// AI-powered response generation
export async function generateAIResponse(
  userQuestion: string
): Promise<string> {
  try {
    // Rate limiting check
    const now = Date.now();
    if (now - lastApiCall < API_RATE_LIMIT_MS) {
      console.log("Rate limit applied, using fallback response");
      return getFallbackResponse(userQuestion);
    }

    const prompt = createPortfolioPrompt(userQuestion);

    // Generate content using the new API - Using FREE Gemini model
    lastApiCall = now; // Update last call timestamp
    const response = await ai.models.generateContent({
      model: getModel(),
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 300, // Reduced for cost optimization
      },
    });

    const text = response.text;

    if (!text || text.trim() === "") {
      throw new Error("Empty response from Gemini");
    }

    return text;
  } catch (error) {
    console.error("Gemini AI Response Error:", error);

    // Fallback to keyword-based response for common queries
    return getFallbackResponse(userQuestion);
  }
}

// Fallback response system
function getFallbackResponse(question: string): string {
  const lowerQuestion = question.toLowerCase();

  if (
    lowerQuestion.includes("experience") ||
    lowerQuestion.includes("work") ||
    lowerQuestion.includes("job")
  ) {
    return `I'm currently working as a Software Engineer 1 at Damco Solutions, where I'm modernizing legacy enterprise applications with React and NestJS. I've previously worked at Outlier AI on RLHF model training and spent time at Upraised building assessment platforms. My experience spans full-stack development, performance optimization, and team leadership.`;
  }

  if (
    lowerQuestion.includes("skills") ||
    lowerQuestion.includes("technologies") ||
    lowerQuestion.includes("tech")
  ) {
    return `I work with a comprehensive tech stack including React.js, Next.js, TypeScript, Node.js, NestJS, MongoDB, GraphQL, AWS, and many other modern technologies. I specialize in full-stack development with a focus on performance optimization and scalable architecture.`;
  }

  if (
    lowerQuestion.includes("projects") ||
    lowerQuestion.includes("portfolio")
  ) {
    return `I've built several impressive projects including Kommuniti (a social platform), V-Guide (virtual mentorship platform), RTMP Server Generator (media streaming), and Coadapt (AI chatbot). Each project demonstrates different aspects of my full-stack development skills.`;
  }

  if (
    lowerQuestion.includes("contact") ||
    lowerQuestion.includes("hire") ||
    lowerQuestion.includes("reach")
  ) {
    return `You can reach me at nishant220902@gmail.com or through the contact form on this website. I'm also available on LinkedIn and GitHub. I'm always open to discussing new opportunities and collaborations!`;
  }

  return `I'm here to help you learn about Nishant's professional background! I can answer questions about his experience, skills, projects, achievements, and how to get in touch. What would you like to know?`;
}

// Test AI connection - now just checks if API key exists
export async function testAIConnection(): Promise<boolean> {
  try {
    // Just check if API key is available without making actual API call
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const hasApiKey =
      apiKey && apiKey.trim() !== "" && !apiKey.includes("your_");

    if (!hasApiKey) {
      console.warn("Gemini API key not configured properly");
      return false;
    }

    // Return true if API key exists - actual connection will be tested when user sends first message
    return true;
  } catch (error) {
    console.error("Gemini AI Connection Test Failed:", error);
    return false;
  }
}
