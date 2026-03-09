import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaCogs,
  FaLaptopCode,
} from "react-icons/fa";

import profileImg from "../assets/profileImage.jpeg";
import myntra_image from "../assets/myntra_image.webp";
import blood_bank from "../assets/Blood_Bank.webp";
import Quiz_image from "../assets/Quiz_img.webp";
import projectImg4 from "../assets/project4.avif";
export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I enjoy solving complex problems by building efficient and modern web solutions . I focus on writing scalable code delivers real value to users.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "I believe great design enhances user experience. I create clean,intuitive and responsive interfaces that are both visually appealing and user-friendly.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write structured maintainable , and resuable code following industry best practices to ensure long-term scalability and performance.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaLaptopCode,
    description:
      "Focused on building responsive , interactive and user-friendly web applications using modern frontend technologies. Strong Understanding of component-based architecture and clean UI development principles",
    tags: ["HTML5", "CSS3", "JavaScript", "React JS", "Tailwind", "Bootstrap"],
  },

  {
    title: "Tools & Workflow ",
    icon: FaTools,
    description:
      "Experienced in using modern development tools to write dtructured maintainable, and scalable code.",
    tags: ["Git", "GitHub", "VS Code ", "Linux"],
  },
  {
    title: "Core Strengths",
    icon: FaCogs,
    description: "",
    tags: [
      "Component-Based Development",
      "Responsive Design",
      " API Integration",
      "Performance Optimization",
      "Debugging",
      " Clean Code",
    ],
  },
];

export const projects = [
  {
    title: "Myntra-Clone",
    description:
      "A responsive Myntra-inspired e-commerce clone featuring product listing, filtering, and cart management with reusable React components.",
    image: myntra_image,
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind", "Local Storage"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Blood Bank Management System",
    description:
      "Developed a responsive web interface for managing donor records and blood availability with clean dashboard layout and form validation features.",
    image: blood_bank,
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind", "Bootstrap"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Quiz Automation Platform",
    description:
      "Built an interactive quiz platform with dynamic question rendering, timer-based UI, and real-time score calculation using reusable components.",
    image: Quiz_image,
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind", "Bootstrap"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a fully responsive personal portfolio website showcasing projects, skills, and contact details with modern UI and clean component-based structure.",
    image: projectImg4,
    tech: ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
];

export const workData = [
  {
    role: "Frontend Developer",
    company: "Skill-Craft Technology",
    duration: "june 2024- August 2024",
    description:
      "Developed responsive web interfaces using Reactjs,HTML,CSS, and JavaScript. Built and Optimized project such as an E-Commerce Website and an Online Management System. Collaborated with clients and team member for project success.",
    color: "purple",
  },
  {
    role: "Fontend Developer",
    company: "OctaNet Services Pvt Ltd.",
    duration: "jan 2024- march 2024 ",
    description:
      "Designed and developed responsive landing pages using HTML,CSS, and Javascript . Improved UI consistency by fixing layout issues and enhancing cross-browser compatibility. Worked on form validations and basic DOM manipulation for better user interaction . ",
    color: "pink",
  },
];
