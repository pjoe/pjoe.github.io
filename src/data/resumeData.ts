export interface Skill {
  name: string;
  level: number; // 1-5
  category: "technical" | "soft" | "language";
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  achievements?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  description?: string;
  skills?: string[];
  url?: string;
}

export interface Project {
  category: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
  availability: {
    status: string;
    looking: boolean;
  };
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
}

const resumeData: ResumeData = {
  name: "Pelle Johnsen",
  title: "Seasoned Software Engineer and Technical Leader",
  bio: "Passionate frontend developer with 8+ years of experience building responsive, accessible, and performant web applications. Specialized in React, TypeScript, and modern frontend architecture. Committed to creating exceptional user experiences through clean code and innovative solutions.",
  contact: {
    email: "pelle.johnsen@gmail.com",
    phone: "+45 *** *** ***",
    location: "Copenhagen, Denmark",
    linkedin: "https://linkedin.com/in/pellej",
    github: "https://github.com/pjoe",
    twitter: "https://twitter.com/johndoe",
    website: "https://pjoe.github.io",
  },
  availability: {
    status: "Full-time employed",
    looking: true,
  },
  skills: [
    { name: "React", level: 5, category: "technical" },
    { name: "TypeScript", level: 5, category: "technical" },
    { name: "JavaScript", level: 5, category: "technical" },
    { name: "HTML/CSS", level: 5, category: "technical" },
    { name: "Tailwind CSS", level: 4, category: "technical" },
    { name: "Redux/Zustand", level: 4, category: "technical" },
    { name: "Next.js", level: 4, category: "technical" },
    { name: "GraphQL", level: 3, category: "technical" },
    { name: "Node.js", level: 3, category: "technical" },
    { name: "Jest/Testing Library", level: 4, category: "technical" },
    { name: "Webpack/Vite", level: 4, category: "technical" },
    { name: "Git/GitHub", level: 4, category: "technical" },
    { name: "CI/CD", level: 3, category: "technical" },
    { name: "Agile/Scrum", level: 4, category: "soft" },
    { name: "Problem Solving", level: 5, category: "soft" },
    { name: "Communication", level: 4, category: "soft" },
    { name: "Team Leadership", level: 4, category: "soft" },
    { name: "English", level: 5, category: "language" },
    { name: "Danish", level: 5, category: "language" },
    { name: "Chinese", level: 1, category: "language" },
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "Jan 2020 - Present",
      description: [
        "Lead a team of 5 frontend developers in building and maintaining a complex SaaS platform with 100k+ monthly active users",
        "Architected and implemented a component library using React, TypeScript, and Tailwind CSS, reducing development time by 40%",
        "Optimized application performance, improving load times by 60% and achieving a 95+ Lighthouse score",
        "Implemented comprehensive testing strategy with Jest and Testing Library, achieving 90%+ code coverage",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Jest",
        "Webpack",
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions LLC",
      location: "Seattle, WA",
      period: "Mar 2017 - Dec 2019",
      description: [
        "Developed responsive web applications for clients across various industries",
        "Migrated legacy jQuery codebase to modern React architecture",
        "Collaborated with UX designers to implement pixel-perfect interfaces",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["React", "JavaScript", "SCSS", "Redux", "REST APIs"],
    },
    {
      title: "Junior Web Developer",
      company: "Digital Creations",
      location: "Portland, OR",
      period: "Jun 2015 - Feb 2017",
      description: [
        "Built and maintained websites for small to medium-sized businesses",
        "Implemented responsive designs using HTML, CSS, and JavaScript",
        "Collaborated with the design team to ensure consistent brand identity",
        "Optimized websites for SEO and performance",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress"],
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2013 - 2015",
      description:
        "Specialized in Human-Computer Interaction and Web Technologies",
      achievements: [
        "Graduated with honors (GPA: 3.9/4.0)",
        "Published research paper on UI optimization techniques",
        "Teaching Assistant for Web Development course",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Washington",
      location: "Seattle, WA",
      period: "2009 - 2013",
      description: "Minor in User Experience Design",
      achievements: [
        "Dean's List all semesters",
        "Led student web development club",
        "Completed capstone project with local tech company",
      ],
    },
  ],
  certifications: [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2022",
      description:
        "Expertise in developing, deploying, and debugging cloud-based applications using AWS",
      skills: ["AWS Lambda", "S3", "DynamoDB", "API Gateway"],
      url: "https://www.credly.com/badges/example",
    },
    {
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2021",
      description:
        "Certified in facilitating Scrum processes and supporting teams in Agile development",
      skills: ["Agile", "Scrum", "Sprint Planning", "Retrospectives"],
      url: "https://www.scrum.org/certificates/example",
    },
    {
      title: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "2020",
      description:
        "Mastery of advanced React patterns and performance optimization techniques",
      skills: ["React Hooks", "Context API", "Code Splitting", "Memoization"],
      url: "https://frontendmasters.com/certificates/example",
    },
  ],
  projects: [
    {
      category: "Web",
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://ecommerce-project.example.com",
      github: "https://github.com/johndoe/ecommerce-platform",
    },
    {
      category: "Tool",
      title: "Task Management App",
      description:
        "A Kanban-style task management application with drag-and-drop functionality, user collaboration, and real-time updates.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://task-app.example.com",
      github: "https://github.com/johndoe/task-management",
    },
    {
      category: "Web",
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current conditions and forecasts for multiple locations, with data visualization and alerts.",
      technologies: ["React", "JavaScript", "Chart.js", "Weather API"],
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://weather-dashboard.example.com",
      github: "https://github.com/johndoe/weather-dashboard",
    },
    {
      category: "Web",
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills, with a custom design and animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/johndoe/portfolio",
    },
  ],
};

export default resumeData;
