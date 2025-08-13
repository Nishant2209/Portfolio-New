export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Experience", link: "/experience" },
  { name: "Testimonials", link: "/testimonials" },
  { name: "Contact", link: "/contact-us" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/setup.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-5",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 4,
    title: "Tech enthusiast with a passion for web development.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title:
      "Currently modernizing legacy enterprise applications at Damco Solutions",
    description: "Software Engineer at Damco Solutions",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "Kommuniti",
    des: "Kommuniti is not just another social platform; it's a digital haven for dynamic conversations, vibrant community engagement, and seamless connections. Drawing inspiration from Thread's simplicity, users can effortlessly post threads, engage in discussions, and share their thoughts.",
    img: "/kommuniti.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/mongodb.svg",
      "/expressjs.svg",
      "/nodejs.svg",
    ],
    link: "https://kommuniti.vercel.app",
  },
  {
    id: 2,
    title: "V - Guide",
    des: "It is a virtual guidance platform that serves as a bridge between students and mentors. A unique feature of this project allows students to connect with mentors based on their specific interests. It is possible for them to search for mentors or to become mentor. In the case that a mentor isn't available, V-Guide will provide some specific resources related to the domain.",
    img: "/v-guide.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/mongodb.svg",
      "/expressjs.svg",
      "/nodejs.svg",
    ],
    link: "https://v-guide.netlify.app",
  },
  {
    id: 3,
    title: "RTMP Server Generator",
    des: "A simple backend server made using Nginx that creates an RTMP Server to stream the media using any streaming applications like OBS.",
    img: "/rtmp.png",
    iconLists: ["/docker.svg", "/nginx.svg"],
    link: "https://github.com/Nishant2209/RTMP-Server-Generator",
  },
  {
    id: 4,
    title: "Coadapt",
    des: "Coadapt is a dynamic AI chatbot website using Gemini API, ReactJS, and TailwindCSS, enabling seamless user interactions with real-time AI-generated responses.",
    img: "/coadapt.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com/Nishant2209/Coadapt",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Nishant was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nishant's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nishant is the ideal partner.",
    name: "Arnab Maity",
    title: "Tech Lead at Upraised",
  },
  {
    quote:
      "Collaborating with Nishant was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nishant's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nishant is the ideal partner.",
    name: "Sujai Kumar Gupta",
    title: "Python Intern at Upraised",
  },
  {
    quote:
      "Collaborating with Nishant was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nishant's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nishant is the ideal partner.",
    name: "Pranshu Sati",
    title: "SDE Intern at Upaised",
  },
  {
    quote:
      "Collaborating with Nishant was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nishant's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nishant is the ideal partner.",
    name: "Mohd. Huzaifa",
    title: "SDE Intern at Upraised",
  },
];

export const workExperience = [
  {
    _id: 1,
    position: "Software Engineer 1",
    company: "Damco Solutions Pvt. Ltd.",
    description: [
      "Modernizing legacy enterprise applications by building responsive, visually engaging frontends with React and optimized backend services using NestJS",
      "Refactored and rewrote 100+ frontend code samples according to modern coding standards and contemporary UI architecture principles",
      "Developed and integrated backend APIs to efficiently fetch and process data from IBM i DB2 databases, reducing data retrieval latency by 30%",
    ],
    className: "md:col-span-2",
    image: "/damco.webp",
    current: true,
    website: "https://www.damcogroup.com/",
    startDate: "2025-05-01",
    endDate: "",
  },
  {
    _id: 2,
    position: "Frontend Developer (Freelance)",
    company: "Outlier AI",
    description: [
      "Contributed to RLHF (Reinforcement Learning from Human Feedback) model training by evaluating and optimizing AI-generated frontend code across AndromedaUI and Tuxedo_v3 projects, improving model accuracy by 25%",
      "Refactored and rewrote 100+ frontend code samples to modern standards, providing high-quality examples and detailed feedback that enhanced machine learning datasets",
    ],
    className: "md:col-span-2",
    image: "/outlier.webp",
    current: false,
    website: "https://outlier.ai",
    startDate: "2025-04-01",
    endDate: "2025-05-01",
  },
  {
    _id: 3,
    position: "Junior Software Developer",
    company: "Upraised",
    description: [
      "Integrated SonarQube into the development assessment platform, empowering recruiters with actionable insights from comprehensive code quality metrics, decreasing time spent on initial candidate screening by 15%",
      "Optimized GraphQL queries and mutations resulting in 30% improvement in system performance and API response times",
      "Deployed SonarQube with CI/CD pipeline integration and configured quality gates, ensuring all code merged into the main branch met defined quality standards; increased code maintainability by 20%",
      "Engineered asynchronous assessment evaluation system using AWS SQS message queues, reducing processing time by 50% and improving platform reliability",
      "Designed secure proctored IDE environment with real-time code synchronization to AWS S3 via Socket.IO, featuring Xterm terminal integration and comprehensive file management capabilities, increasing assessment security by 40%",
      "Spearheaded implementation of comprehensive Psychometric Assessment module with data visualization components (Chart.js) for competency analysis across multiple dimensions, improving hiring decision accuracy by 35%",
      "Led and mentored cross-functional team of 5-6 interns, establishing development workflows and conducting code reviews to ensure project quality and timely delivery, reducing delivery times by 22%",
    ],
    className: "md:col-span-2",
    image: "/logo.png",
    current: false,
    website: "https://www.linkedin.com/company/upraisedd/",
    startDate: "2024-03-01",
    endDate: "2025-03-01",
  },
  {
    _id: 4,
    position: "Software Developer Intern",
    company: "Upraised",
    description: [
      "Reduced website latency by 75% through systematic backend optimization initiatives and implementation of caching strategies",
      "Transformed data retrieval processes by migrating from REST API to GraphQL architecture, resulting in a 35% decrease in data fetching time and a 20% reduction in lines of code",
      "Designed and developed intuitive Recruiter Dashboard featuring real-time analytics, assessment tracking, and candidate performance visualization, improving recruiter efficiency by 30%",
      "Implemented secure proctoring system with audio, video, and screen monitoring capabilities to ensure assessment integrity and provide valuable candidate insights, reducing cheating incidents by 65%",
    ],
    className: "md:col-span-2",
    image: "/logo.png",
    current: false,
    website: "https://www.linkedin.com/company/upraisedd/",
    startDate: "2023-03-01",
    endDate: "2023-09-01",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Nishant2209",
  },
  {
    id: 2,
    img: "/instagram.svg",
    link: "https://www.instagram.com/nishant__ks/",
  },
  {
    id: 3,
    img: "/x.svg",
    link: "https://x.com/Nishant__1252",
  },
  {
    id: 4,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nishant-kumar-singh-1252nks/",
  },
];

export const transition = (
  direction: "up" | "down" | "left" | "right",
  delay: number
) => ({
  hidden: {
    y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
    opacity: 0,
    x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    transition: {
      type: "tween",
      duration: 1.5,
      delay: delay,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.4,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});
