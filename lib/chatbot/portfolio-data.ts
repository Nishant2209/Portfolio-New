import {
  gridItems,
  projects,
  workExperience,
  testimonials,
  socialMedia,
} from "@/data/index";

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    description: string;
    location: string;
    email: string;
    skills: string[];
    traits: string[];
  };
  experience: typeof workExperience;
  projects: typeof projects;
  testimonials: typeof testimonials;
  social: typeof socialMedia;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Nishant Kumar Singh",
    title: "Software Engineer | Full Stack Developer",
    description:
      "Tech enthusiast with a passion for web development. I prioritize client collaboration, fostering open communication. I'm very flexible with time zone communications.",
    location: "India",
    email: "nishant220902@gmail.com",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "GraphQL",
      "AWS",
      "SonarQube",
      "Docker",
      "Nginx",
      "Socket.IO",
      "Chart.js",
      "Tailwind CSS",
      "IBM i DB2",
      "AWS SQS",
      "Xterm",
      "REST API",
      "CI/CD",
      "RLHF",
      "Framer Motion",
      "Three.js",
      "Prisma",
      "PostgreSQL",
    ],
    traits: [
      "Client collaboration focused",
      "Flexible with time zones",
      "Tech enthusiast",
      "Passionate about web development",
      "Team leader and mentor",
      "Performance optimization expert",
      "AI/ML experience with RLHF",
      "Frontend architecture specialist",
    ],
  },
  experience: workExperience,
  projects: projects,
  testimonials: testimonials,
  social: socialMedia,
  contact: {
    email: "nishant220902@gmail.com",
    linkedin: "https://www.linkedin.com/in/nishant-kumar-singh-1252nks/",
    github: "https://github.com/Nishant2209",
    twitter: "#",
  },
};

export const knowledgeBase = {
  // Personal Information
  "name|who are you|about you": {
    response:
      "I'm Nishant Kumar Singh, a Software Engineer and Full Stack Developer. I'm passionate about web development and currently working at Damco Solutions Pvt. Ltd. as a Software Engineer 1.",
    confidence: 1.0,
  },

  "skills|technologies|tech stack|what technologies": {
    response: `I work with a diverse tech stack including:
    
Frontend: React.js, Next.js, TypeScript, JavaScript, Tailwind CSS
Backend: Node.js, Express.js, NestJS, GraphQL, REST APIs
Databases: MongoDB, IBM i DB2
Cloud & DevOps: AWS (SQS, S3), Docker, Nginx, CI/CD pipelines
Tools & Others: SonarQube, Socket.IO, Chart.js, Xterm

I'm constantly learning and adapting to new technologies to deliver the best solutions.`,
    confidence: 1.0,
  },

  "experience|work|job|career|current role": {
    response: `I'm currently working as a Software Engineer 1 at Damco Solutions Pvt. Ltd. (May 2025 - Present), where I'm modernizing legacy enterprise applications with React and NestJS.

My career highlights include:
• Current: Software Engineer 1 at Damco Solutions (May 2025 - Present)
• Freelance Frontend Developer at Outlier AI (April 2025 - May 2025)
• Junior Software Developer at Upraised (March 2024 - March 2025)
• Software Developer Intern at Upraised (March 2023 - September 2023)

I've achieved significant performance improvements and led teams throughout my journey.`,
    confidence: 1.0,
  },

  "projects|work samples|portfolio projects": {
    response: `I've built several impactful projects:

🌐 **Kommuniti** - A dynamic social platform inspired by Threads, built with Next.js, MongoDB, and Express.js
🎓 **V-Guide** - Virtual mentorship platform connecting students with mentors, featuring domain-specific resources
🎥 **RTMP Server Generator** - Backend server using Nginx for media streaming with OBS integration
🤖 **Coadapt** - AI chatbot website using Gemini API with real-time responses

Each project demonstrates my full-stack capabilities and problem-solving skills.`,
    confidence: 1.0,
  },

  "achievements|accomplishments|metrics|performance": {
    response: `I've delivered measurable results throughout my career:

📈 **Performance Improvements:**
• Reduced data retrieval latency by 30% (Damco Solutions)
• Improved AI model accuracy by 25% (Outlier AI)
• Enhanced system performance by 30% with GraphQL optimization
• Reduced processing time by 50% with AWS SQS implementation
• Decreased website latency by 75% through backend optimization

👥 **Leadership & Process:**
• Led and mentored teams of 5-6 interns
• Reduced delivery times by 22%
• Increased code maintainability by 20% with SonarQube integration`,
    confidence: 1.0,
  },

  "contact|hire|reach out|get in touch": {
    response: `I'd love to connect with you! You can reach me through:

📧 **Email**: nishant220902@gmail.com
📧 **Contact Form**: Use the contact section on this website for detailed inquiries
💼 **LinkedIn**: https://www.linkedin.com/in/nishant-kumar-singh-1252nks/
💻 **GitHub**: https://github.com/Nishant2209

I'm always open to discussing new opportunities, collaborations, or just having a tech chat!`,
    confidence: 1.0,
  },

  "damco|current job|current company|software engineer": {
    response: `I'm currently working as a Software Engineer 1 at Damco Solutions Pvt. Ltd. since May 2025. At Damco, I'm:

🔧 Modernizing legacy enterprise applications with React and NestJS
📊 Refactored 100+ frontend code samples to modern standards
⚡ Reduced data retrieval latency by 30% through optimized APIs
🗄️ Working with IBM i DB2 databases and backend integrations

Damco Solutions specializes in enterprise software solutions and I'm helping them modernize their technology stack.`,
    confidence: 1.0,
  },

  "outlier|ai|rlhf|machine learning|freelance": {
    response: `I worked as a Freelance Frontend Developer at Outlier AI (April 2025 - May 2025), contributing to:

🤖 **RLHF Training**: Reinforcement Learning from Human Feedback model training
📈 **Model Accuracy**: Improved AI model accuracy by 25%
💻 **Code Evaluation**: Evaluated AI-generated frontend code across AndromedaUI and Tuxedo_v3 projects
📚 **Dataset Enhancement**: Refactored 100+ code samples to enhance ML datasets

This experience gave me unique insights into AI/ML development and code quality standards.`,
    confidence: 1.0,
  },

  "upraised|junior developer|assessment platform": {
    response: `I had an amazing journey at Upraised, progressing from intern to Junior Software Developer:

**Junior Software Developer (March 2024 - March 2025):**
🔧 Integrated SonarQube reducing screening time by 15%
⚡ Optimized GraphQL improving performance by 30%
🛡️ Built secure proctored IDE with AWS S3 and Socket.IO
📊 Created Psychometric Assessment module improving hiring accuracy by 35%
👥 Led teams of 5-6 interns, reducing delivery times by 22%

**Software Developer Intern (March 2023 - September 2023):**
🚀 Reduced website latency by 75%
🔄 Migrated REST to GraphQL (35% faster data fetching)
📈 Built Recruiter Dashboard improving efficiency by 30%
🔒 Implemented proctoring system reducing cheating by 65%`,
    confidence: 1.0,
  },

  "testimonials|reviews|feedback|what others say": {
    response: `Here's what my colleagues and clients say about working with me:

${testimonials
  .map(
    (testimonial) =>
      `"${testimonial.quote}" - ${testimonial.name}, ${testimonial.title}`
  )
  .join("\n\n")}

I believe in building strong professional relationships and delivering quality work that speaks for itself.`,
    confidence: 1.0,
  },
};

export function searchPortfolioData(query: string): string {
  const lowerQuery = query.toLowerCase();

  // Find the best matching knowledge base entry
  let bestMatch = { response: "", confidence: 0 };

  Object.entries(knowledgeBase).forEach(([keywords, data]) => {
    const keywordList = keywords.split("|");
    const confidence = keywordList.reduce((acc, keyword) => {
      if (lowerQuery.includes(keyword.toLowerCase())) {
        return Math.max(acc, data.confidence);
      }
      return acc;
    }, 0);

    if (confidence > bestMatch.confidence) {
      bestMatch = { response: data.response, confidence };
    }
  });

  // If we found a good match, return it
  if (bestMatch.confidence > 0.3) {
    return bestMatch.response;
  }

  // Default response for unmatched queries
  return "I don't have specific information about that in my portfolio data. However, I'd be happy to answer any questions about my experience, skills, projects, or career journey! You can also reach out through the contact section for more detailed discussions.";
}
