/**
 * =========================================================================
 * Aahir Pavan Yadav — Personal Portfolio Configuration
 * Domain: pavandev.in
 * =========================================================================
 * 
 * This file is the single source of truth for all content displayed on your portfolio.
 * You can customize your name, roles, bio, skills, projects, experience, and contact
 * links directly in this file without modifying the HTML structure.
 */

const PORTFOLIO_CONFIG = {
  // -----------------------------------------------------------------------
  // 1. Personal & Professional Identity
  // -----------------------------------------------------------------------
  personal: {
    name: "Aahir Pavan Yadav",
    shortName: "Pavan",
    title: "Software Developer | Tech Lead | Builder",
    headline: "Building digital products. Engineering real solutions.",
    location: "Hyderabad, Telangana, India",
    domain: "pavandev.in",
    canonicalUrl: "https://pavandev.in",
    
    // Set to true if you are open to opportunities, internships, or freelance builds
    availability: {
      isAvailable: true,
      statusText: "Open for select opportunities & technical collaborations",
      badgeText: "Available for Work"
    },

    // Education (Verified details)
    education: {
      degree: "B.Tech in Computer Science & Engineering (AI/CSA)",
      institution: "Methodist College of Engineering and Technology (MCET)",
      location: "Hyderabad, India",
      status: "Currently Pursuing"
    },

    // Short summary shown in Hero
    heroIntro: "Passionate software developer and undergraduate engineer building robust web systems, resilient backends, and practical digital products with a strong focus on pragmatic execution and technical leadership."
  },

  // -----------------------------------------------------------------------
  // 2. About Me Section
  // -----------------------------------------------------------------------
  about: {
    badge: "01 // ABOUT ME",
    title: "Pragmatic engineering driven by curiosity and real-world execution.",
    paragraphs: [
      "I am an undergraduate Computer Science & Engineering student specializing in AI/CSA at Methodist College of Engineering and Technology in Hyderabad. My work sits at the intersection of full-stack web engineering, scalable backend architecture, and community tech leadership.",
      "Rather than focusing purely on abstract theory or superficial trends, I believe in learning through direct, hands-on implementation. Building real-world applications that solve genuine workflows is what drives my day-to-day coding.",
      "As a Tech Lead for HackWithIndia × MCET and DevOps Team Member for GDG on Campus MCET, I actively collaborate with cross-functional student teams, foster engineering discipline, and explore how cloud infrastructure and automation empower modern software."
    ],
    principles: [
      {
        number: "01",
        title: "Hands-on Implementation",
        description: "Deep technical understanding is forged by writing code, debugging failure states, and deploying functional systems to production."
      },
      {
        number: "02",
        title: "Scalable Fundamentals",
        description: "Prioritizing maintainable architectures, clean API design, and modular codebases that grow gracefully over time."
      },
      {
        number: "03",
        title: "Community & Leadership",
        description: "Empowering fellow developers through shared knowledge, hackathon coordination, and open collaboration."
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 3. Technical Skills
  // Note: Organized into clear categories without arbitrary percentage bars.
  // -----------------------------------------------------------------------
  skills: [
    {
      category: "Languages",
      icon: "code",
      description: "Core languages used for systems programming, logic, and web development.",
      items: [
        { name: "C", note: "Procedural & low-level fundamentals" },
        { name: "C++", note: "Object-oriented programming & algorithms" },
        { name: "JavaScript", note: "ES6+, modern async workflows" },
        { name: "Python", note: "General-purpose scripting & data structures" }
      ]
    },
    {
      category: "Frontend",
      icon: "layout",
      description: "User interfaces, responsive layouts, and component-driven architecture.",
      items: [
        { name: "HTML5", note: "Semantic structure & accessibility" },
        { name: "CSS3", note: "Flexbox, CSS Grid & responsive design" },
        { name: "JavaScript", note: "DOM manipulation & event-driven UI" },
        { name: "React", note: "Modern component state & hooks" }
      ]
    },
    {
      category: "Backend",
      icon: "server",
      description: "Server architecture, RESTful interfaces, and database management.",
      items: [
        { name: "Python", note: "Backend services & automation" },
        { name: "Django / FastAPI", note: "Actively studying & building APIs" },
        { name: "REST APIs", note: "Contract design & endpoint routing" },
        { name: "Database Design", note: "Relational schema modeling" }
      ]
    },
    {
      category: "Tools & Workflow",
      icon: "terminal",
      description: "Development environment, source control, and Unix toolchain.",
      items: [
        { name: "Git", note: "Branching, rebasing & version control" },
        { name: "GitHub", note: "Collaboration, code review & issues" },
        { name: "Linux", note: "Command line, bash scripting & environment" },
        { name: "VS Code", note: "Modern developer workflow & debugging" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "cloud",
      description: "Cloud computing fundamentals, automation pipelines, and deployments.",
      items: [
        { name: "Google Cloud", note: "Core cloud concepts & hosting" },
        { name: "CI/CD Concepts", note: "Automated testing & release pipelines" },
        { name: "Deployment", note: "Static hosting, servers & DNS configuration" },
        { name: "DevOps Practices", note: "Environment parity & monitoring concepts" }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // 4. Projects Showcase
  // Edit links, descriptions, tags, and status as your projects evolve.
  // -----------------------------------------------------------------------
  projects: [
    {
      id: "gymgo",
      title: "GymGo",
      tagline: "Fitness tracking web application for structured workout logging.",
      category: "Full-Stack",
      status: "In Development",
      description: "A focused fitness tracking web application engineered to help individuals plan routines, log daily workout sessions, monitor personal records, and stay consistent with their physical training goals.",
      highlights: [
        "Interactive exercise logging interface with set and repetition tracking",
        "Clean progress dashboard emphasizing workout frequency and volume",
        "Minimalist, distraction-free UI designed for rapid mobile interaction in the gym",
        "Configured for persistent data storage and quick retrieval"
      ],
      stack: ["JavaScript", "HTML5", "CSS3", "Python Backend", "Responsive UI"],
      githubUrl: "https://github.com/pavandev/gymgo", // Placeholder link
      demoUrl: "https://gymgo.pavandev.in",           // Placeholder link
      hasLiveDemo: false, // Set to true when live demo is deployed
      isFeatured: true
    },
    {
      id: "attendsync",
      title: "AttendSync",
      tagline: "Attendance management platform streamlining institutional records.",
      category: "Web Application",
      status: "In Development",
      description: "An attendance management system engineered to automate classroom and institutional attendance capture, eliminating paper registers and reducing manual calculation errors.",
      highlights: [
        "Structured attendance marking workflow for faculty and session leads",
        "Student percentage calculation and automated threshold alerts",
        "Clean tabular views with export-friendly reporting capabilities",
        "Role-based view separation between administrators and attendees"
      ],
      stack: ["React", "JavaScript", "REST APIs", "CSS Grid", "Git"],
      githubUrl: "https://github.com/pavandev/attendsync", // Placeholder link
      demoUrl: "https://attendsync.pavandev.in",           // Placeholder link
      hasLiveDemo: false,
      isFeatured: true
    },
    {
      id: "demovault",
      title: "DemoVault",
      tagline: "Personal staging and demo management suite for developer prototypes.",
      category: "Developer Tools",
      status: "Prototype",
      description: "A centralized dashboard and management repository for hosting, indexing, and previewing interactive web prototypes, UI experiments, and micro-applications in one unified interface.",
      highlights: [
        "Unified catalog for indexing micro-apps and exploratory frontend experiments",
        "Tagging and metadata filtering by framework and release stage",
        "Embeddable iframe previewer with device resolution toggles",
        "Lightweight architecture optimized for instant static deployment"
      ],
      stack: ["HTML5", "CSS3", "JavaScript", "DevOps Concepts", "Cloud Hosting"],
      githubUrl: "https://github.com/pavandev/demovault", // Placeholder link
      demoUrl: "https://demovault.pavandev.in",           // Placeholder link
      hasLiveDemo: false,
      isFeatured: true
    }
  ],

  // -----------------------------------------------------------------------
  // 5. Experience & Leadership
  // Professional timeline honoring verified roles and achievements.
  // -----------------------------------------------------------------------
  experience: [
    {
      role: "Tech Lead",
      organization: "HackWithIndia × MCET",
      type: "Leadership & Community",
      period: "Present",
      location: "Hyderabad, India",
      description: "Driving engineering initiatives and organizing technical challenges in collaboration with HackWithIndia and Methodist College of Engineering and Technology.",
      responsibilities: [
        "Leading the technical organization of campus hackathons, coding contests, and developer challenges.",
        "Mentoring student participants through project scoping, tech stack selection, and debugging sessions.",
        "Collaborating with student leadership to promote modern developer practices and open-source contributions."
      ],
      tags: ["Leadership", "Hackathon Management", "Mentorship", "Community Building"]
    },
    {
      role: "DevOps Team Member",
      organization: "GDG on Campus MCET (Google Developer Groups)",
      type: "Technical Community",
      period: "Present",
      location: "Hyderabad, India",
      description: "Active member of the DevOps division at Google Developer Groups on Campus MCET, supporting technical workshops and cloud infrastructure discussions.",
      responsibilities: [
        "Contributing to developer workshops centered on cloud technologies, Git workflows, and deployment fundamentals.",
        "Collaborating with the chapter's technical leads to coordinate speaker sessions and hands-on labs.",
        "Exploring Google Cloud tools, CI/CD automation, and modern infrastructure practices."
      ],
      tags: ["Google Cloud", "CI/CD", "Linux", "Team Collaboration"]
    }
  ],

  // -----------------------------------------------------------------------
  // 6. Technical Interests
  // Core technical domains of deep focus and continuous learning.
  // -----------------------------------------------------------------------
  technicalInterests: [
    {
      title: "Backend Engineering",
      subtitle: "Robust Services & Data Pipelines",
      description: "Designing RESTful APIs, database schemas, and background job processors with an emphasis on data integrity, predictable error handling, and reliability.",
      focusKeywords: ["RESTful APIs", "Relational DBs", "API Contracts", "Python Ecosystem"]
    },
    {
      title: "System Architecture",
      subtitle: "Scalable & Modular Foundations",
      description: "Studying how systems decouple concerns, manage high concurrency, and evolve from monolithic prototypes into well-structured, maintainable services.",
      focusKeywords: ["Modular Design", "Data Flow", "Caching", "Fault Tolerance"]
    },
    {
      title: "AI-Powered Applications",
      subtitle: "Practical Machine Intelligence",
      description: "Integrating intelligent reasoning, retrieval-augmented workflows, and automated text/image analysis into production-oriented software products.",
      focusKeywords: ["LLM Integration", "Applied AI", "Prompt Pipelines", "Workflow Automation"]
    },
    {
      title: "Cloud Infrastructure",
      subtitle: "DevOps & Reliable Deployment",
      description: "Exploring cloud platforms, containerization concepts, DNS configuration, and automated build pipelines to deliver reproducible software deployments.",
      focusKeywords: ["Google Cloud", "Deployment Pipelines", "Linux Systems", "DNS & Edge"]
    },
    {
      title: "Developer Tools",
      subtitle: "Engineering Ergonomics & DX",
      description: "Building command-line utilities, staging suites, and scaffolding scripts that remove friction from everyday developer workflows.",
      focusKeywords: ["CLI Tools", "Automation Scripts", "Dev Environments", "Documentation"]
    }
  ],

  // -----------------------------------------------------------------------
  // 7. Contact & Social Connections
  // Keep these verified and easily updatable.
  // -----------------------------------------------------------------------
  contact: {
    email: "contact@pavandev.in", // Configurable email address
    displayEmail: "contact@pavandev.in",
    location: "Hyderabad, Telangana, India",
    note: "Feel free to reach out regarding technical discussions, project collaborations, or developer initiatives.",
    
    // Social Profiles
    socials: [
      {
        name: "GitHub",
        handle: "aahirpavanyadav",
        url: "https://github.com/aahirpavanyadav", // Update with your exact GitHub handle
        icon: "github",
        primary: true
      },
      {
        name: "LinkedIn",
        handle: "aahirpavanyadav",
        url: "https://www.linkedin.com/in/aahirpavanyadav/", // Verified profile link
        icon: "linkedin",
        primary: true
      },
      {
        name: "Twitter / X",
        handle: "@pavandev_in",
        url: "https://x.com/pavandev_in", // Update with your handle
        icon: "twitter",
        primary: false
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 8. Visual & Theme Configuration
  // Minimalist, dark-themed developer palette with one signature accent color.
  // -----------------------------------------------------------------------
  theme: {
    accentColor: "#f59e0b",       // Signature refined amber/gold accent
    accentColorRgb: "245, 158, 11",
    accentLight: "#fbbf24",
    bgBase: "#09090b",            // Near-black dark canvas
    bgSubtle: "#121217",          // Slightly elevated surface
    bgCard: "#16171e",            // Cards and containers
    borderColor: "rgba(255, 255, 255, 0.08)"
  }
};

// Export for module support if using modern loaders, or attach to window for static HTML
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_CONFIG;
}
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
