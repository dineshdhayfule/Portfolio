export const personalInfo = {
  name: "Dinesh Dhayfule",
  title: "Software Developer — I build reliable web applications and ship production-ready software.",
  tagline: "I build reliable web applications and solve real problems with clean, production-ready code.",
  roles: ["reliable web applications", "backend systems", "full-stack products", "AI-assisted solutions"],
  about: [
    "I'm a Computer Science student from Solapur, India, who loves building software that solves real problems. My coding journey started with a Diploma in Information Technology, where I quickly moved beyond assignments and started shipping real projects.",
    "I've shipped everything from real-time Android chat apps to machine learning models that predict diseases with 80–85% accuracy. I focus on writing clean, maintainable code and building reliable applications.",
    "Currently pursuing my B.Tech in CSE, I'm focused on deepening my skills across the full stack — from backend architecture to machine learning. I believe great software starts with understanding the problem before writing a single line of code.",
    "I enjoy building real-world applications and continuously improving my skills.",
  ],
  email: "dineshdhayfule@gmail.com",
  github: "https://github.com/dineshdhayfule",
  linkedin: "https://www.linkedin.com/in/dinesh-dhayfule/",
  resume: "https://drive.google.com/file/d/1h_a40Ta3NLGMR1VjXglO9LXQFAAv3VqW/view",
  location: "Solapur, India",
  status: "Open to Work — actively looking for Software Developer roles",
}

export const expertise = [
  {
    title: "Web Development",
    description: "Building modern, responsive web applications from concept to deployment using React, Next.js, and industry-standard tooling.",
    highlights: ["React & Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend Engineering",
    description: "Designing scalable server-side architectures, RESTful APIs, and database systems that power production applications.",
    highlights: ["REST APIs", "Node.js & Express", "Database Design", "Authentication"],
  },
  {
    title: "AI/ML & Data",
    description: "Training and deploying machine learning models for real-world prediction tasks, with a focus on healthcare applications.",
    highlights: ["Classification Models", "Scikit-learn", "Data Preprocessing & Model Training", "Predictive Analytics"],
  },
]

export const projects = [
  {
    id: "disease-prediction",
    title: "Disease Prediction",
    subtitle: "ML classification for health risk",
    problem: "Early risk signals get missed without data-driven screening.",
    solution: "Trained Scikit-learn classification models on public health datasets with feature engineering and cross-validation to predict likelihood of diseases like diabetes and heart disease.",
    impact: "Reached roughly 80–85% accuracy across models and exposed a simple interface for quick risk checks.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/dineshdhayfule/Prediction-of-Disease",
    live: "",
    category: "ai",
    featured: true,
    stats: [{ label: "Models", value: "2–3" }, { label: "Accuracy", value: "~80–85%" }, { label: "Datasets", value: "Public" }],
    image: "/projects/disease-prediction.png",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: "wechat",
    title: "WeChat",
    subtitle: "Android real-time messaging",
    problem: "Users need reliable, low-latency chat on mobile with secure auth.",
    solution: "Built a native Android app using Firebase Realtime Database for instant sync and Firebase Auth for sign-in, with persistent conversations and presence indicators.",
    impact: "Delivered smooth real-time messaging with authenticated users and synced history.",
    tech: ["Android", "Java", "Firebase", "XML"],
    github: "https://github.com/dineshdhayfule/We-Chat",
    live: "",
    category: "mobile",
    featured: true,
    stats: [{ label: "Platform", value: "Android" }, { label: "Realtime", value: "Firebase" }, { label: "Auth", value: "Firebase" }],
    image: "/projects/wechat.png",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "quizkwik",
    title: "QuizKwik",
    subtitle: "MCQ practice web app",
    problem: "Learners need fast quiz drills to test concepts without setup overhead.",
    solution: "Built a lightweight quiz application with category-based MCQs, score tracking, and instant feedback to keep practice loops short.",
    impact: "Helps learners run quick self-assessments and review answers immediately.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/dineshdhayfule/QuizKwik",
    live: "",
    category: "web",
    featured: true,
    stats: [{ label: "Quizzes", value: "MCQ" }, { label: "Mode", value: "Practice" }, { label: "Focus", value: "Feedback" }],
    image: "/projects/quizkwik.png",
    color: "from-indigo-500/20 to-sky-500/20",
  },
  {
    id: "health-bytes",
    title: "Health Bites",
    subtitle: "AI health & nutrition",
    problem: "Generic diet advice ignores personal goals and food context.",
    solution: "Created an AI-backed nutrition app using Google Gemini for image-based food recognition, personalized meal suggestions, and nutrition tracking.",
    impact: "Deployed experience with AI-powered analysis and personalized meal planning to keep users engaged.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Google Gemini AI", "Auth0", "Tailwind CSS"],
    github: "https://github.com/dineshdhayfule/Health-Bytes",
    live: "https://health-bite.netlify.app/",
    category: "ai",
    featured: true,
    stats: [{ label: "Stack", value: "Full-stack" }, { label: "AI", value: "Gemini" }, { label: "Status", value: "Deployed" }],
    image: "/projects/health-bytes.png",
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: "healthcare-services",
    title: "Healthcare Services",
    subtitle: "Java MVC management system",
    problem: "Clinics struggle to keep patient records, appointments, and inventory in one place.",
    solution: "Built a desktop app with Swing UI, JDBC, and MVC to manage registrations, vaccination schedules, appointments, and medicine catalog with role-based access.",
    impact: "Provides a single tool for admins to track patients, appointments, and stock reliably.",
    tech: ["Java", "Swing", "JDBC", "MySQL", "MVC"],
    github: "https://github.com/dineshdhayfule/Health-Care-Services",
    live: "",
    category: "web",
    featured: true,
    stats: [{ label: "Architecture", value: "MVC" }, { label: "Database", value: "MySQL" }, { label: "Auth", value: "Role-based" }],
    image: "/projects/healthcare-services.png",
    color: "from-emerald-500/20 to-green-500/20",
  },
]

export const skills = [
  { category: "Languages", items: [{ name: "Java", level: 85 }, { name: "Python", level: 80 }, { name: "JavaScript", level: 78 }, { name: "C++", level: 65 }, { name: "PHP", level: 70 }] },
  { category: "Backend & APIs", items: [{ name: "Node.js", level: 80 }, { name: "Express.js", level: 78 }, { name: "REST APIs", level: 82 }, { name: "Firebase", level: 75 }, { name: "JDBC", level: 72 }] },
  { category: "AI/ML & Data", items: [{ name: "Scikit-learn", level: 78 }, { name: "Pandas", level: 80 }, { name: "NumPy", level: 78 }, { name: "Matplotlib", level: 72 }] },
  { category: "Frontend", items: [{ name: "React.js", level: 75 }, { name: "Next.js", level: 70 }, { name: "Tailwind CSS", level: 82 }, { name: "Bootstrap", level: 75 }, { name: "HTML/CSS", level: 88 }] },
  { category: "Databases", items: [{ name: "MongoDB", level: 72 }, { name: "MySQL", level: 78 }, { name: "Firebase DB", level: 75 }] },
  { category: "Tools & DevOps", items: [{ name: "Git & GitHub", level: 82 }, { name: "Android Studio", level: 72 }, { name: "Linux", level: 68 }, { name: "VS Code", level: 90 }, { name: "Postman", level: 75 }] },
]

export const experience = [
  {
    role: "Virtual Intern — Machine Learning",
    company: "TechSaksham (Microsoft & SAP)",
    period: "Jan – Feb 2025",
    duration: "2 months",
    description: "Built ML models for disease prediction using Python and Scikit-learn during a virtual internship program by TechSaksham (powered by Microsoft & SAP).",
    highlights: ["Built ML classification models for disease prediction", "Used Python, Scikit-learn, Pandas for model training", "Created a simple interface for real-time predictions", "Applied data preprocessing and feature engineering"],
    type: "internship" as const,
  },
  {
    role: "Java Developer Intern",
    company: "Vikrama Technology, Solapur",
    period: "Jul – Aug 2022",
    duration: "45 days",
    description: "Built Java web applications using Servlets, JSP, and JDBC. Worked on performance optimization and software development lifecycle practices.",
    highlights: ["Built Java web apps using Servlets, JSP, and JDBC", "Improved application performance through optimization", "Learned software development lifecycle practices", "Completed hands-on project assignments"],
    type: "internship" as const,
  },
]

export const education = [
  { degree: "B.Tech in Computer Science & Engineering", institution: "NK Orchid College of Engineering and Technology", period: "2023 – 2026", status: "Pursuing" as const, grade: "CGPA: 7.4" },
  { degree: "Diploma in Information Technology", institution: "Government Polytechnic Solapur", period: "2020 – 2023", status: "Completed" as const, grade: "87.69%" },
  { degree: "Secondary School Certificate (SSC)", institution: "SVCS High School, Solapur", period: "2019 – 2020", status: "Completed" as const, grade: "85.60%" },
]

export const achievements = [
  { title: "AWS for Developers", provider: "LinkedIn Learning", description: "Core AWS services and workflows for application development." },
  { title: "Cloud Computing", provider: "LinkedIn Learning", description: "Foundations of cloud models, infrastructure, and deployment patterns." },
  { title: "Master Backend Development", provider: "Udemy", description: "APIs, databases, and server architecture for production backends." },
  { title: "Next.js & React", provider: "Udemy", description: "Building modern frontends with React and Next.js." },
  { title: "DBMS (NPTEL)", provider: "IIT Kharagpur", description: "Database management systems fundamentals." },
]

export const stats = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "ML Models", value: 3, suffix: "" },
]

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export const chatbotResponses = [
  { keywords: ["skill", "tech", "technology", "stack", "know", "language", "framework"], answer: "I work with Java, Python, JavaScript on the backend, and React/Next.js on the frontend. For AI/ML, I use Scikit-learn, Pandas, NumPy, and Matplotlib. Databases: MongoDB, MySQL, Firebase. I'm also comfortable with Git, Android Studio, and REST API design." },
  { keywords: ["project", "build", "built", "made", "work", "portfolio"], answer: "I've built 4 key projects: Health Bytes (AI nutrition platform with Gemini AI — deployed live), Disease Prediction ML (ML models with ~80–85% accuracy), Healthcare Services (Java MVC management system), and WeChat (real-time Android messaging app). Check the Projects section for details!" },
  { keywords: ["experience", "intern", "job", "work history", "company"], answer: "I completed a virtual ML internship at TechSaksham (Microsoft & SAP program) where I built disease prediction models. Before that, I was a Java Developer Intern at Vikrama Technology, Solapur, building web apps with Servlets, JSP, and JDBC." },
  { keywords: ["contact", "email", "reach", "hire", "connect", "talk"], answer: "You can reach me at dineshdhayfule@gmail.com. I'm also on LinkedIn (linkedin.com/in/dinesh-dhayfule/) and GitHub (github.com/dineshdhayfule). I'm currently open to opportunities!" },
  { keywords: ["education", "study", "college", "degree", "university"], answer: "I'm pursuing my B.Tech in Computer Science & Engineering at NK Orchid College of Engineering and Technology (2023–2026, CGPA: 7.4). Before that, I completed a Diploma in IT from Government Polytechnic Solapur (2020–2023, 87.69%)." },
  { keywords: ["ai", "ml", "machine learning", "model", "predict", "data science"], answer: "I've built ML classification models for disease prediction achieving around 80–85% accuracy. I use Scikit-learn for model training, Pandas/NumPy for data processing. I also built Health Bytes, an AI-powered nutrition platform using Google Gemini AI." },
  { keywords: ["resume", "cv", "download"], answer: "You can view and download my resume from the Hero section or visit: https://drive.google.com/file/d/1h_a40Ta3NLGMR1VjXglO9LXQFAAv3VqW/view" },
  { keywords: ["certificate", "certification", "course"], answer: "I have certifications in AWS for Developers and Cloud Computing (LinkedIn Learning), Master Backend Development and Practical Next.js & React (Udemy), and DBMS from NPTEL (IIT Kharagpur)." },
  { keywords: ["hello", "hi", "hey", "what", "who"], answer: "Hey there! 👋 I'm Dinesh's portfolio assistant. Ask me about his skills, projects, experience, or anything else!" },
]
