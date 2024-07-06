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
      "Currently building an Assessment Platform with secured proctor environment at Upraised",
    description: "Junior Software Developer at Upraised",
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
    position: "Junior Software Developer",
    company: "Upraised",
    description: [
      "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    ],
    className: "md:col-span-2",
    image: "/logo.png",
    current: true,
    website: "https://upraised.in",
    startDate: "2024-02-12",
    endDate: "",
  },
  {
    _id: 2,
    position: "Software Developer Engineering Intern",
    company: "Upraised",
    description: [
      "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    ],
    className: "md:col-span-2", // change to md:col-span-2
    image: "/logo.png",
    current: false,
    website: "https://upraised.in",
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
