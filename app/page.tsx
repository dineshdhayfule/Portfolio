"use client"

import type React from "react"
import { useState, createContext, useContext, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Award,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Code,
  Palette,
  Settings,
  Database,
  GitBranch,
  Sun,
  Moon,
} from "lucide-react"

// Theme Context
interface ThemeContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Custom hook to use theme
const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

// Theme Provider Component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
    }
  }, [])

  useEffect(() => {
    // Save theme to localStorage and update document class
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Theme Toggle Button Component
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle p-2 rounded-lg bg-surface hover:bg-surface-hover border border-border"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon size={20} className="text-text-primary" />
      ) : (
        <Sun size={20} className="text-text-primary" />
      )}
    </button>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "Python", "C++", "C", "JavaScript", "TypeScript", "PHP"],
    },
    {
      title: "Frontend",
      icon: Palette,
      skills: ["HTML5", "CSS", "Tailwind CSS", "Bootstrap", "React.js", "Next.js"],
    },
    {
      title: "Backend",
      icon: Settings,
      skills: ["Node.js", "Express", "REST APIs"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "Firebase", "MySQL", "Oracle"],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Linux"],
    },
  ]

  const projects = [
    {
      title: "WeChat",
      description:
        "Android-based chat application built with Firebase for real-time messaging, user authentication, and cloud storage.",
      tech: ["Android", "Firebase", "Java"],
    },
    {
      title: "QuizKwik",
      description:
        "Interactive online quiz system featuring timer functionality, automatic scoring, and user progress tracking.",
      tech: ["JavaScript", "PHP", "MySQL"],
    },
    {
      title: "E-Medico",
      description:
        "Comprehensive health and medicine information web application providing medical resources and health tips.",
      tech: ["HTML5", "CSS", "JavaScript", "PHP"],
    },
    {
      title: "ML-Based Legal Document Analysis",
      description:
        "AI-powered system for legal document classification and information extraction using machine learning algorithms.",
      tech: ["Python", "Machine Learning", "NLP"],
    },
    {
      title: "Health Bites",
      description:
        "AI-based health and nutrition platform with personalized recommendations. Backend development in progress.",
      tech: ["Node.js", "Python", "AI/ML"],
    },
  ]

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "NK Orchid College of Engineering and Technology",
      period: "2023 – 2026",
      status: "Pursuing",
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Government Polytechnic Solapur",
      period: "2020 – 2023",
      status: "Completed",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "SVCS High School, Solapur",
      period: "2019 – 2020",
      status: "Completed",
    },
  ]

  const certifications = [
    {
      title: "Java Training",
      provider: "Vikrama Technology, Solapur",
      description: "45-day industry training program",
    },
    {
      title: "Web Development Internship",
      provider: "BraveSoft Advisory",
      description: "E-commerce project development",
    },
    {
      title: "Data Science in Healthcare",
      provider: "Academic Project",
      description: "ML & analytics implementation",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-['Roboto',sans-serif]">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-surface/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-text-primary"
              >
                Dinesh<span className="text-accent-blue">.</span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-text-secondary hover:text-accent-blue transition-all duration-300 ease-in-out font-medium"
                  >
                    {item}
                  </button>
                ))}
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <ThemeToggle />
                <button className="text-text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:hidden py-4 border-t border-border"
              >
                {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 text-text-secondary hover:text-accent-blue transition-all duration-300 ease-in-out"
                  >
                    {item}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6">
                Hi, I'm <span className="text-accent-blue">Dinesh Dhayfule</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-accent-green mb-8 font-medium">Aspiring Software Engineer</h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Passionate about backend development, machine learning, and building scalable digital solutions.
                Currently pursuing B.Tech in CSE and constantly learning new technologies to create impactful
                applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-accent-blue hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16"
            >
              <ChevronDown className="mx-auto text-accent-blue animate-bounce" size={32} />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-accent-blue mb-6">Skills</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                A comprehensive toolkit of programming languages, frameworks, and technologies I work with
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  <div className="flex items-center mb-4">
                    <category.icon className="text-accent-blue mr-3" size={24} />
                    <h3 className="text-xl font-bold text-text-primary">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-surface hover:bg-surface-hover text-text-primary px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out cursor-default shadow-sm border border-border"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-background-secondary">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-accent-blue mb-6">Featured Projects</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                A showcase of my development work spanning mobile apps, web applications, and AI/ML projects
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-surface rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                    <ExternalLink className="text-accent-blue" size={20} />
                  </div>
                  <p className="text-text-secondary mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-lg text-sm font-medium border border-accent-blue/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-accent-blue mb-6">Education</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                My academic journey in computer science and technology
              </p>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-surface rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-text-primary">{edu.degree}</h3>
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        edu.status === "Pursuing"
                          ? "bg-accent-green/10 text-accent-green border border-accent-green/20"
                          : "bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-accent-blue font-medium mb-1">{edu.institution}</p>
                  <p className="text-text-secondary">{edu.period}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <h3 className="text-3xl font-bold text-accent-blue mb-8 text-center">Courses & Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 ease-in-out"
                  >
                    <div className="flex items-center mb-3">
                      <Award className="text-accent-yellow mr-2" size={20} />
                      <h4 className="text-lg font-bold text-text-primary">{cert.title}</h4>
                    </div>
                    <p className="text-accent-blue font-medium mb-2">{cert.provider}</p>
                    <p className="text-text-secondary text-sm">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-background-secondary">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-accent-blue mb-6">Get In Touch</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none transition-all duration-300 ease-in-out shadow-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none transition-all duration-300 ease-in-out shadow-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none transition-all duration-300 ease-in-out resize-none shadow-sm"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent-blue hover:opacity-90 text-white py-3 rounded-xl font-medium transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-6">Let's Connect</h3>
                  <p className="text-text-secondary leading-relaxed">
                    I'm currently looking for new opportunities and interesting projects. Whether you have a question or
                    just want to say hi, I'll try my best to get back to you!
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-text-secondary hover:text-accent-blue transition-all duration-300 ease-in-out"
                  >
                    <Github size={24} />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-text-secondary hover:text-accent-blue transition-all duration-300 ease-in-out"
                  >
                    <Linkedin size={24} />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href="mailto:dinesh@example.com"
                    className="flex items-center space-x-3 text-text-secondary hover:text-accent-blue transition-all duration-300 ease-in-out"
                  >
                    <Mail size={24} />
                    <span>dinesh@example.com</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-text-secondary">© 2024 Dinesh Dhayfule. Built with React & Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
