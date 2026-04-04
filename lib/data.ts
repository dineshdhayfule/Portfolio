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
  { keywords: ["about", "story", "who", "background"], answer: "Dinesh is a CS student from Solapur, India. Starting from an IT Diploma, he quickly moved to shipping real projects like real-time Android apps and ML models. He focuses on clean, production-ready code!" },
  { keywords: ["skill", "tech", "technology", "stack", "know", "language", "framework", "abilities"], answer: "I'm proficient in Java, Python, and JavaScript for backend, and React/Next.js for frontend. Deep dive features I build deal with Scikit-learn, MongoDB, Firebase, and integrating AI via APIs like Gemini." },
  { keywords: ["project", "build", "built", "made", "work", "portfolio", "projects"], answer: "I've built robust systems like Health Bytes (AI nutrition via Gemini API), an ML Disease Prediction app (using KNN, Decision Trees, Logistic Regression), Healthcare Services in Java MVC, Quizkwik, and a real-time Android messaging app (WeChat). Ask for more info on any!" },
  { keywords: ["experience", "intern", "job", "history", "company", "internship", "role", "work"], answer: "I'm looking for roles as a Software Developer. Previously, I interned at TechSaksham building ML models for disease prediction, and at Vikrama Technology optimizing Java web apps (Servlets/JSP/JDBC) which reduced response times by 25%." },
  { keywords: ["training", "academy", "oop", "aptitude"], answer: "I completed Technical Training in Java Backend (OOP, data structures, exception handling) at Giri's Academy, and Aptitude training at AptTech Technologies in Mar-Apr 2025." },
  { keywords: ["disease", "prediction", "ml", "models"], answer: "For the Disease Prediction app, I built classification models (KNN, Decision Tree, Logistic Regression) with Scikit-learn, deployed with Streamlit, achieving 80–85% overall accuracy on public health datasets." },
  { keywords: ["health", "bytes", "nutrition", "diet"], answer: "Health Bytes is my AI nutrition platform. It uses a React UI with a Node endpoint invoking Google's free Gemini API to analyze diet items and provide customized feedback, along with MongoDB and Auth0." },
  { keywords: ["wechat", "chat", "android", "messaging"], answer: "I developed a real-time Android messaging app called WeChat using Java and Firebase. It supported Android 11.2 with secure instant sync and presence indicators." },
  { keywords: ["healthcare", "services", "java", "mvc"], answer: "I built a Desktop Healthcare Management system using Java Swing, JDBC, MySQL, and the MVC architectural pattern to track appointments and schedules and reduce administration overhead." },
  { keywords: ["contact", "email", "reach", "hire", "connect", "talk", "github", "linkedin"], answer: "You can reach me at dineshdhayfule@gmail.com! Connect with me on LinkedIn (linkedin.com/in/dinesh-dhayfule/) or check my GitHub (github.com/dineshdhayfule)." },
  { keywords: ["education", "study", "college", "degree", "university", "btech", "diploma"], answer: "I'm currently pursuing a B.Tech in CSE at NK Orchid College of Engineering (2023-26, CGPA: 7.4). Previously, I completed my Diploma in IT from Gov. Polytechnic Solapur (87.69%)." },
  { keywords: ["ai", "machine", "learning", "data", "science"], answer: "My AI/ML stack revolves around Python, Pandas, Scikit-Learn, and integrating powerful models like Google Gemini. I love feature engineering and building interfaces that showcase real-time prediction." },
  { keywords: ["resume", "cv", "download", "pdf"], answer: "You have two ways to get my resume: either download it directly from the top Hero section, or grab it from my Drive link: https://drive.google.com/file/d/1h_a40Ta3NLGMR1VjXglO9LXQFAAv3VqW/view" },
  { keywords: ["certificate", "certification", "course", "courses"], answer: "I hold certifications from Udemy (Master Backend, Next.js & React), LinkedIn Learning (AWS for Developers, Cloud Computing), and NPTEL (DBMS by IIT Kharagpur)." },
  { keywords: ["hello", "hi", "hey", "what", "greetings", "start"], answer: "Hey there! 👋 I'm Dinesh's portfolio assistant. I know all about his resume, projects, skills, education, and internship experience. Ask me anything!" },
]
