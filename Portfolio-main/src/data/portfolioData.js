// ============================================================
// portfolioData.js — Centralized configuration for Ammar Tanveer's Portfolio
// ============================================================

export const personalInfo = {
  name: "Ammar Tanveer",
  firstName: "Ammar",
  brandName: "Ammar Tanveer",
  title: "Software Engineering Student | AI/ML Enthusiast",
  location: "Lahore, Pakistan",
  phone: "+92 323 9897910",
  emails: {
    primary: "ammartanveer020@gmail.com",
    secondary: "",
  },
  summary:
    "Software Engineering student with a strong interest in Artificial Intelligence, Machine Learning, Data Science, and Software Development. Experienced in building AI-powered applications, conducting data analysis, and developing web-based solutions through academic and internship projects. Possesses strong communication, presentation, and teamwork skills with a passion for learning, innovation, and solving real-world problems.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Ammar-1050881",
  linkedin: "https://www.linkedin.com/in/ammar-tanveer-se/",
  instagram: "https://www.instagram.com/ammarmalik1050?igsh=MTJ4aWg3bzZ0bHQ2cg==",
};

export const heroContent = {
  greeting: "Hi, I'm Ammar Tanveer",
  titleHighlight: "AI/ML Enthusiast & Software Engineer",
  subtitle:
    "I build AI-powered applications, conduct data analysis, and develop web-based solutions using Python, BERT, and modern ML frameworks.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:ammartanveer020@gmail.com?subject=Hiring Inquiry – Portfolio",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Ammar Tanveer</span>, a Software Engineering student at the University of Lahore with a passion for Artificial Intelligence, Machine Learning, Data Science, and Software Development. I enjoy building AI-powered applications and solving real-world problems through technology.`,
  techStack: [
    "Python",
    "C++",
    "JavaScript",
    "BERT",
    "Scikit-learn",
    "LangChain",
    "Streamlit",
  ],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured and innovative approach to build robust AI/ML and software solutions, from research and design to development and deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding the problem, gathering requirements, and exploring relevant datasets and technologies.",
    },
    {
      number: "02",
      title: "Design",
      text: "I architect solutions with clean code, modular design, and user-centric interfaces for seamless experiences.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I implement AI/ML models, web applications, and automation using Python, BERT, and modern frameworks.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "I test, optimize, and deploy solutions, ensuring reliability and scalability for real-world use.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "JavaScript (Basic)", level: 60 },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 80 },
        { name: "JavaScript", level: 60 },
        { name: "Bootstrap", level: 75 },
        { name: "Responsive Web Design", level: 80 },
      ],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "Matplotlib", level: 75 },
        { name: "Transformers", level: 70 },
        { name: "BERT", level: 75 },
        { name: "LangChain", level: 70 },
        { name: "Streamlit", level: 70 },
      ],
    },
    {
      title: "Core Competencies",
      skills: [
        { name: "Artificial Intelligence", level: 85 },
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 75 },
        { name: "GenAI", level: 70 },
        { name: "LLMs", level: 70 },
        { name: "NLP", level: 80 },
        { name: "Data Analysis", level: 80 },
        { name: "Software Development", level: 80 },
        { name: "OOP", level: 75 },
        { name: "SDLC", level: 70 },
        { name: "Database Design", level: 70 },
        { name: "Front-End Development", level: 70 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 80 },
        { name: "VS Code", level: 85 },
      ],
    },
  ],
};

export const projects = [
  {
    id: "news-classifier-bert",
    number: "01",
    badge: "NLP & Deep Learning",
    title: "News Classifier using BERT",
    description:
      "Developed a news classification system using BERT (Bidirectional Encoder Representations from Transformers) to categorize news articles based on textual content.",
    techTags: ["Python", "BERT", "Transformers", "NLP", "Deep Learning"],
    links: {
      github: "https://github.com/Ammar-1050881/News-Classifier-BERT.git",
      demo: "",
    },
    isFlagship: true,
  },
  {
    id: "heart-disease-prediction",
    number: "02",
    badge: "Machine Learning",
    title: "Heart Disease Prediction Model",
    description:
      "Developed a predictive machine learning model using Python and Scikit-learn on a healthcare dataset to classify heart disease risk factors.",
    techTags: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis"],
    links: {
      github: "https://github.com/Ammar-1050881/Task3_Heart_Disease_Prediction.git",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "rag-chatbot",
    number: "03",
    badge: "Generative AI & NLP",
    title: "Context-Aware RAG Chatbot",
    description:
      "Built a conversational chatbot using LangChain and Retrieval-Augmented Generation (RAG) with context memory and vector-based document retrieval. Deployed using Streamlit.",
    techTags: ["Python", "LangChain", "RAG", "Streamlit", "NLP", "Generative AI"],
    links: {
      github: "https://github.com/Ammar-1050881/Task4-RAG-Chatbot.git",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "health-query-chatbot",
    number: "04",
    badge: "Generative AI & NLP",
    title: "General Health Query Chatbot",
    description:
      "Engineered an AI-based conversational agent utilizing prompt engineering techniques to accurately process and answer general health related queries.",
    techTags: ["Python", "Prompt Engineering", "NLP", "AI", "Generative AI"],
    links: {
      github: "https://github.com/Ammar-1050881/Health-Chatbot-AI.git",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "yali-property-management",
    number: "05",
    badge: "Software Design & Architecture",
    title: "Yali.com – Online Property Services Management System",
    description:
      "Implemented features for property listings, user interactions, and efficient data management while ensuring a responsive user experience across devices.",
    techTags: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Web Development"],
    links: {
      github: "https://github.com/Ammar-1050881/Yali.com.git",
      demo: "",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "AI/ML Engineering Internship Certificate",
      issuer: "DevelopersHub Corporation",
      icon: "🎓",
    },
    {
      name: "Introduction to LLMs & Generative AI",
      issuer: "SoloLearn",
      icon: "🤖",
    },
    {
      name: "Distinction in Kangaroo International Test",
      issuer: "Kangaroo",
      icon: "🏅",
    },
  ],
  viewAllUrl: "",
};

export const education = {
  degree: "BS Software Engineering",
  institution: "University of Lahore",
  cgpa: "3.58",
  graduation: "Jan 2028",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "AI/ML · Data Science · Software Engineering",
    "Python · BERT · NLP · Web Development",
    "Solving Real-World Problems with Code",
  ],
  credential: "BS Software Engineering · CGPA 3.58",
  copyright: `© ${new Date().getFullYear()} Ammar Tanveer | Built with React`,
};

export const internshipsList = [
  {
    organization: "Developer’s Hub Corporation",
    role: "AI/ML Engineering Intern (Remote)",
    duration: "Apr 2026 – Jun 2026",
    skills: [
      "Machine Learning",
      "NLP",
      "Generative AI",
      "Data Analysis",
      "Software Development",
    ],
    tech: [
      "Python",
      "BERT",
      "LangChain",
      "Scikit-learn",
      "Streamlit",
      "Git",
      "GitHub",
    ],
  },
];

export const leadershipList = [
  {
    title: "University Debates & Stage Hosting",
    description:
      "Active presenter and participant in university debates, hosting, and stage performances.",
    role: "Presenter & Host",
    badge: "Leadership",
  },
];

export const softSkillsList = [
  {
    name: "Communication Skills",
    icon: "💬",
    desc: "Strong written and verbal communication for technical and non-technical audiences.",
  },
  {
    name: "Presentation Skills",
    icon: "🎤",
    desc: "Confident presenter in academic and professional settings.",
  },
  {
    name: "Teamwork & Collaboration",
    icon: "🤝",
    desc: "Works effectively in teams to achieve project goals.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Analytical thinker with a passion for solving real-world problems.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Efficiently balances multiple projects and deadlines.",
  },
  {
    name: "Leadership",
    icon: "👑",
    desc: "Experience leading presentations and group activities.",
  },
];

// Asset mappings for profile and hero video
export const profileImage = "/src/assets/about/Hero Image.png";
export const heroVideo = "/src/assets/hero video/ammar-talking.mp4";


// Final Content Creation export matched to ContentCreator.jsx
export const contentCreation = {
  badge: "Content Creator",
  heading: "Content & Publications",
  description: "Check out my latest technical blogs, AI discussions, and project walkthroughs.",
  categories: [
    {
      title: "Tech Blogs",
      description: "Articles and tutorials on AI, Machine Learning, and Software Engineering.",
      icon: "📝",
      stats: "Articles"
    },
    {
      title: "Project Demos",
      description: "Video demonstrations and deep-dives into my latest AI applications.",
      icon: "🎥",
      stats: "Videos"
    }
  ]
};



// Missing EmailJS configuration for Contact.jsx
export const emailjsConfig = {
  serviceId: "service_dummy_id", 
  templateId: "template_dummy_id",
  publicKey: "dummy_public_key", 
};


