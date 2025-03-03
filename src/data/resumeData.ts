export interface Skill {
  name: string;
  level: number; // 1-5
  category: "technical" | "soft" | "tools" | "language";
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
  profileImage: string;
  summary: string;
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
  title: "Seasoned Software Developer and Architect",
  profileImage: "",
  summary: "Seasoned Software Engineer, 3D Artist and technology focused Leader",
  bio: "Software Developer and Architect with over 27 years of experience, specializing in systems ranging from resource-constrained embedded devices to scalable cloud-based distributed servers. Proficient in 3D Graphics with 17 years of experience, including lighting, VFX, and character rigging. Passionate about delivering efficient, reliable, and innovative technological solutions.",
  contact: {
    email: "pelle.johnsen@gmail.com",
    phone: "+45 27141525",
    location: "Copenhagen, Denmark",
    linkedin: "https://linkedin.com/in/pellej",
    github: "https://github.com/pjoe",
  },
  availability: {
    status: "CTO at Skybox.gg",
    looking: false,
  },
  skills: [
    // tech
    { name: "TypeScript", level: 5, category: "technical" },
    { name: "Rust", level: 4, category: "technical" },
    { name: "Python", level: 4, category: "technical" },
    { name: "C++", level: 5, category: "technical" },
    { name: "C#", level: 4, category: "technical" },
    { name: "React", level: 5, category: "technical" },
    { name: "AWS Services", level: 5, category: "technical" },
    { name: "Pulumi IaC", level: 5, category: "technical" },
    { name: "CI/CD", level: 5, category: "technical" },
    { name: "Docker", level: 5, category: "technical" },
    { name: "Kubernetes", level: 3, category: "technical" },
    { name: "3D Graphics", level: 5, category: "technical" },
    { name: "OpenGL", level: 4, category: "technical" },
    { name: "WebGL", level: 5, category: "technical" },
    { name: "glTF", level: 5, category: "technical" },
    { name: "Babylon.js", level: 5, category: "technical" },
    { name: "Unreal Engine 5", level: 4, category: "technical" },
    // soft
    { name: "Team Leadership", level: 5, category: "soft" },
    { name: "Hiring and Recruitment", level: 4, category: "soft" },
    { name: "Mentoring and Knowledge Sharing", level: 4, category: "soft" },
    { name: "Architecture", level: 5, category: "soft" },
    { name: "Problem Solving", level: 5, category: "soft" },
    // tools
    { name: "git, GitHub", level: 5, category: "tools" },
    { name: "VSCode", level: 5, category: "tools" },
    { name: "Blender 3D", level: 4, category: "tools" },
    { name: "Maya", level: 3, category: "tools" },
    { name: "Krita", level: 4, category: "tools" },
    { name: "ComfyUI", level: 4, category: "tools" },
    // language
    { name: "Danish", level: 5, category: "language" },
    { name: "English", level: 5, category: "language" },
    { name: "German", level: 2, category: "language" },
    { name: "Chinese", level: 1, category: "language" },
  ],
  experience: [
    {
      title: "CTO",
      company: "Skybox.gg",
      location: "Denmark",
      period: "January 2023 - Present",
      description: [
        "Migrated the main eSports analytics infrastructure to AWS with a multi-account setup and implemented DevOps practices using Pulumi",
        "Developed a CS:GO 3D replay tool for broadcasting using Unreal Engine 5 with Lumen and real-time ray tracing",
        "Built a fan engagement multiplayer casual game prototype using Babylon.js and PWA for mobile",
        "Enhanced recruitment, employee evaluation, and career development processes",
        "Managed development team leads and individual developers"
      ],
      technologies: [
        "AWS",
        "Pulumi",
        "Unreal Engine 5",
        "Babylon.js",
        "DevOps",
        "PWA"
      ],
    },
    {
      title: "Senior Solution Architect",
      company: "Amazon Web Services",
      location: "Denmark",
      period: "March 2021 - December 2022",
      description: [
        "Advised startup clients on cloud architecture, focusing on security, reliability, cost optimization, and performance",
        "Demonstrated solutions to address customer challenges using AWS services like CDK (IaC), ECS, EKS, CloudFront, API Gateway, RDS, Aurora, and SageMaker",
        "Specialized in serverless technologies, containerization, databases, analytics, and AI/ML"
      ],
      technologies: [
        "AWS",
        "CDK",
        "ECS",
        "EKS",
        "CloudFront",
        "API Gateway",
        "RDS",
        "Aurora",
        "SageMaker",
        "Serverless",
        "Containerization"
      ],
    },
    {
      title: "Chief Software Architect",
      company: "TIMEmSYSTEM",
      location: "Denmark",
      period: "February 2020 - March 2021",
      description: [
        "Improved product quality and development efficiency by introducing GitHub-based workflows and code reviews",
        "Implemented CI/CD pipelines using GitHub Actions and automated deployment processes",
        "Designed new architecture leveraging Kubernetes on Azure with infrastructure as code via Pulumi",
        "Mentored the team in new technologies and streamlined release planning",
        "Led development and operations teams"
      ],
      technologies: [
        "GitHub",
        "CI/CD",
        "GitHub Actions",
        "Kubernetes",
        "Azure",
        "Pulumi"
      ],
    },
    {
      title: "CTO",
      company: "BRAND3D",
      location: "Denmark",
      period: "January 2018 - January 2020",
      description: [
        "Led technical development for real-time 3D browser experiences",
        "Oversaw front-end and back-end development, cloud server infrastructure, and CI/CD processes",
        "Architected new applications and managed DevOps engineering",
        "Acted as the technical liaison for customer relations"
      ],
      technologies: [
        "3D",
        "WebGL",
        "Cloud Infrastructure",
        "CI/CD",
        "DevOps"
      ],
    },
    {
      title: "VP of 3D Technology",
      company: "GlobalScanning",
      location: "Denmark",
      period: "July 2016 - January 2018",
      description: [
        "Advanced 3D scanning technologies and cloud services",
        "Continued development of p3d.in, enhancing core components and server infrastructure",
        "Established server tooling, workflows, and CI/CD pipelines",
        "Initiated a new 2D imaging cloud project using Kubernetes, Django, and Ember.js",
        "Recruited developers and DevOps engineers"
      ],
      technologies: [
        "3D Scanning",
        "Cloud Services",
        "CI/CD",
        "Kubernetes",
        "Django",
        "Ember.js"
      ],
    },
    {
      title: "Software Lead",
      company: "BLUETOWN",
      location: "Denmark",
      period: "July 2015 - July 2016",
      description: [
        "Developed scalable backend and frontend solutions for millions of end-users",
        "Designed customer signup and billing systems for WiFi and VoIP services",
        "Configured networking setups including routers, captive portals, RADIUS, and VLANs",
        "Explored backbone connectivity over VSAT technology"
      ],
      technologies: [
        "Backend Development",
        "Frontend Development",
        "Networking",
        "RADIUS",
        "VLANs",
        "VSAT"
      ],
    },
    {
      title: "Core Developer and Architect",
      company: "p3d.in",
      location: "Denmark",
      period: "September 2011 - January 2020",
      description: [
        "Developed both frontend and backend for p3d.in, enhancing the online 3D model sharing platform",
        "Transitioned backend infrastructure to Docker and Kubernetes",
        "Migrated frontend technologies from jQuery to Ember.js"
      ],
      technologies: [
        "3D",
        "WebGL",
        "Docker",
        "Kubernetes",
        "jQuery",
        "Ember.js"
      ],
    },
    {
      title: "Consultant",
      company: "Laerdal Medical",
      location: "Denmark",
      period: "2011 - 2015",
      description: [
        "Developed software for embedded Linux platforms using Qt/QML",
        "Optimized UI performance",
        "Implemented automated testing"
      ],
      technologies: [
        "Embedded Linux",
        "Qt/QML",
        "UI Optimization",
        "Automated Testing"
      ],
    },
    {
      title: "Co-Founder & CTO",
      company: "SoftMobile",
      location: "Denmark",
      period: "2008 - 2011",
      description: [
        "Developed vertical applications with mobile clients for location-based services using J2ME, Python, and Django"
      ],
      technologies: [
        "J2ME",
        "Python",
        "Django",
        "Location-based Services",
        "Mobile Development"
      ],
    },
    {
      title: "Software Developer",
      company: "Mozilla Corporation",
      location: "Remote",
      period: "March 2008 - September 2008",
      description: [
        "Developed new C++ APIs for embedding Firefox in other applications, with support for Qt on Windows, Linux, and Maemo"
      ],
      technologies: [
        "C++",
        "Firefox",
        "Qt",
        "Windows",
        "Linux",
        "Maemo"
      ],
    }
  ],
  education: [
    {
      degree: "B.Sc.E.E in Electronics/Computer Science",
      institution: "Engineering Academy of Denmark",
      location: "Denmark",
      period: "1992 - 1995",
      description: "Thesis: Object-Oriented Programming using C for Mobile Phones"
    },
    {
      degree: "Digital Artist Program",
      institution: "Truemax Academy",
      location: "Denmark",
      period: "2005 - 2006",
      description: "Focus on 3D Graphics using 3D Studio Max, Maya, ZBrush, and Photoshop; skills in modeling, texturing, rigging, animation, lighting, and rendering"
    }
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect – Professional",
      issuer: "AWS",
      date: "2021",
      description: "Advanced technical skills and experience in designing distributed applications and systems on the AWS platform"
    },
    {
      title: "NVIDIA Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      description: "Core concepts and applications of deep learning technologies"
    },
    {
      title: "W3C WebGPU Community Working Group",
      issuer: "W3C",
      date: "2020 - 2021",
      description: "Contributed to the development of WebGPU, a cross-platform standard for GPU power in browsers and native apps"
    },
    {
      title: "Object-Oriented Analysis and Design for Embedded Systems",
      issuer: "Professional Training",
      description: "Advanced techniques for designing embedded systems using object-oriented principles"
    },
    {
      title: "Project Planning and Management",
      issuer: "Professional Training",
      description: "Methodologies and best practices for effective project management"
    },
  ],
  projects: [
    {
      category: "Open Source",
      title: "Loadem",
      description: "A command-line tool for load testing web applications written in Rust",
      technologies: ["Rust", "CLI", "Web Testing"],
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/pjoe/loadem"
    },
    {
      category: "Open Source",
      title: "Naga Contributor",
      description: "Universal shader translator in Rust - contributed to this open source project",
      technologies: ["Rust", "Shaders", "Graphics Programming"],
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      category: "3D",
      title: "CS:GO 3D Replay Tool",
      description: "A 3D replay tool for broadcasting CS:GO matches using Unreal Engine 5 with Lumen and real-time ray tracing",
      technologies: ["Unreal Engine 5", "Lumen", "Ray Tracing", "3D Graphics", "eSports"],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      category: "Web",
      title: "Fan Engagement Game",
      description: "A multiplayer casual game prototype for fan engagement using Babylon.js and PWA for mobile",
      technologies: ["Babylon.js", "PWA", "Multiplayer", "WebGL", "JavaScript"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ],
};

export default resumeData;
