export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  live?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export const personalInfo = {
  name: "Muhammad Yasir Nizami",
  shortName: "Yasir Nizami",
  title: "Associate Software Engineer",
  tagline: "MERN Stack Developer | AI Enthusiast | CS Graduate",
  email: "ynizami72@gmail.com",
  phone: "+92 313-2747104",
  location: "Karachi, Pakistan",
  github: "https://github.com/yasir-nizame",
  linkedin: "https://www.linkedin.com/in/yasir-nizami-075939267",
  resumeUrl: "/resume.pdf",
  avatarUrl: "https://avatars.githubusercontent.com/u/130412330?v=4",
  summary: `I’m a Computer Science graduate from NED University with a passion for building scalable software and exploring technologies in AI and machine learning. I specialize in MERN stack, with experience in full-stack development, NLP, and computer vision. I am particularly interested in Agentic AI, Generative AI, DevOps, MLOps, and cloud technologies, focusing on scalable solutions, workflow automation, and deploying AI/ML models. I’m always eager to take on new challenges and grow as an engineer.`,
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    company: "KoderLabs",
    role: "Associate Software Engineer – React",
    period: "Apr 2025 – Present",
    location: "Pakistan",
    bullets: [
      "Building scalable, responsive web applications using React.js with focus on performance and UI/UX.",
      "Developing component-based architecture for maintainable and reusable frontend systems.",
      "Collaborating with cross-functional teams to deliver high-quality software products.",
    ],
  },
  {
    company: "Pakistan Council of Scientific and Industrial Research (PCSIR)",
    role: "Artificial Intelligence Intern",
    period: "Aug 2024 – Sep 2024",
    location: "Karachi, Pakistan",
    bullets: [
      "Created an OCR-based system for detecting and extracting multiple dates from reports using live webcam input.",
      "Automated the calculation of time intervals between identified dates to enhance data analysis efficiency.",
      "Efficiently processed large batches of reports, facilitating real-time detection and analysis.",
    ],
  },
  {
    company: "Neurocomputation Lab – NED",
    role: "Natural Language Processing Intern",
    period: "Mar 2024 – Apr 2024",
    location: "Karachi, Pakistan",
    bullets: [
      "Developed a sentiment analysis model to evaluate customer reviews for a restaurant.",
      "Utilized NLP techniques for preprocessing text data and feature extraction.",
      "Employed the Naive Bayes algorithm to classify sentiments as positive, negative, or neutral.",
      "Visualized results to provide insights for enhancing customer satisfaction.",
    ],
  },
  {
    company: "Desynev Organization",
    role: "Full-stack Developer",
    period: "Jul 2023 – Sep 2024",
    location: "Remote",
    bullets: [
      "Developed and maintained full-stack web applications using modern JavaScript frameworks.",
      "Collaborated with design teams to implement responsive, pixel-perfect UI components.",
      "Participated in code reviews and contributed to improving development workflows.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Confizio",
    description:
      "A full-stack conference management and paper review platform with IEEE formatting compliance checks, plagiarism detection, role-based access for authors/reviewers/organizers, and Supabase-based permanent file storage.",
    techStack: ["React.js", "Node.js", "MongoDB", "Supabase", "Tailwind CSS"],
    github: "https://github.com/yasir-nizame/Confizio-Frontend",
  },
  {
    title: "Finance Platform",
    description:
      "A comprehensive financial management platform for tracking and analyzing personal or business finances with interactive dashboards.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yasir-nizame/Finance-Platform",
  },
  {
    title: "Wildlife Monitor AI",
    description:
      "An autonomous wildlife monitoring system integrating object detection (Haar-Feature & YOLO) for animal identification, sound classification to determine animal mood (Angry/Normal), and graph-based movement tracking using BFS and DFS to map and traverse animal paths across a monitored area.",
    techStack: ["Python", "YOLO", "OpenCV", "Graph Theory", "Jupyter Notebook"],
    github: "https://github.com/yasir-nizame/Mood-analysis-and-path-tracking",
  },
  {
    title: "Khareedari",
    description:
      "An e-commerce web application providing a seamless shopping experience with product listings, cart management, and checkout flow.",
    techStack: ["JavaScript", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/yasir-nizame/Khareedari",
  },
  {
    title: "Easy Hiring",
    description:
      "A recruitment platform streamlining the hiring process with job postings, applicant tracking, and candidate management features.",
    techStack: ["JavaScript", "React.js", "Node.js", "MongoDB"],
    github: "https://github.com/yasir-nizame/Easy-Hiring",
  },
  {
    title: "Dates Extraction using OCR",
    description:
      "An OCR-based system for detecting and extracting multiple dates from reports using live webcam input with automated time interval calculations.",
    techStack: ["Python", "OpenCV", "Tesseract OCR", "Jupyter Notebook"],
    github: "https://github.com/yasir-nizame/Dates-extraction-using-OCR",
  },
];

export const educationList: Education[] = [
  {
    degree: "BS in Computer Science & Information Technology",
    institution: "NED University of Engineering and Technology",
    year: "2021 – 2025",
    grade: "CGPA 3.62",
  },
  {
    degree: "H.S.C (Pre-Engineering)",
    institution: "Adamjee Govt Science College",
    year: "2021",
    grade: "A-1 / 94.18%",
  },
  {
    degree: "S.S.C (Science)",
    institution: "Quaid-e-Azam Rangers School",
    year: "2019",
    grade: "A-1 / 90%",
  },
];

export const certifications: Certification[] = [
  {
    title: "Huawei Certified ICT Associate (HCIA) – Data Communication",
    issuer: "Huawei",
    year: "2024",
  },
  {
    title: "The Complete 2023 Web Development Bootcamp",
    issuer: "Dr. Angela Yu, Udemy",
    year: "2023",
  },
  {
    title: "Machine Learning Workshop",
    issuer: "NED University",
    year: "2023",
  },
];
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Ant Design",
      "Axios",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "API Development",
      "JWT Authentication",
      "MongoDB",
      "PostgreSQL",
      "Oracle",
      "Firebase",
      "Supabase",
      "VectorDB",
    ],
  },
  {
    category: "AI / Machine Learning",
    skills: [
      "TensorFlow",
      "Keras",
      "Transformers",
      "Natural Language Processing (NLP)",
      "OpenCV",
      "Tesseract OCR",
      "Naive Bayes",
      "Data Preprocessing",
      "Feature Engineering",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "LLM & Generative AI",
    skills: [
      "Large Language Models (LLM)",
      "RAG (Retrieval Augmented Generation)",
      "Fine Tuning",
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "Prompt Engineering",
      "LLM Integration",
      "GitHub Copilot",
      "Cursor AI",
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      "Power BI",
      "MS Excel",
      "Google Sheets",
      "Data Visualization",
      "Exploratory Data Analysis (EDA)",
    ],
  },
  // {
  //   category: "DevOps & Infrastructure",
  //   skills: ["Docker", "Kubernetes", "Terraform", "Nginx"],
  // },
  {
    category: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Postman",
      "Swagger",
      "VS Code",
      "Linux",
      "Jira",
      "Yarn",
      "npm",
      // "n8n",
      "MCP",
    ],
  },
];
