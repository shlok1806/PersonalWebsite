import { useState, useEffect } from "react";
import "./App.css";
import "./shared.css";
import "./IDEWindow.css";
import DotGrid from "./DotGrid/DotGrid";
import ClickSpark from "./ClickSpark/ClickSpark";
import IDEWindow from "./IDEWindow";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

// Easter egg: Hidden ASCII art in comments
/*
  _____ _ _            _    _       _ _         
 / ____| | |          | |  | |     | | |        
| (___ | | | ___  _ __| |__| | __ _| | | __ _   
 \___ \| | |/ _ \| '__|  __  |/ _` | | |/ _` |  
 ____) | | | (_) | |  | |  | | (_| | | | (_| |  
|_____/|_|_|\___/|_|  |_|  |_|\__,_|_|_|\__,_app|  
                                                 
 Developer Portfolio - Built with React + TypeScript
 Easter eggs hidden throughout... 🐰
*/

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollState, setScrollState] = useState<
    "transparent" | "scrolled" | "scrolled-more"
  >("transparent");

  const navItems = [
    "home",
    "about",
    "experience",
    "skills",
    "contact",
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Handle scroll events and smooth color transitions
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update navbar state - gradual blur effect
      if (scrollTop > 100) {
        setScrollState("scrolled-more");
      } else if (scrollTop > 10) {
        setScrollState("scrolled");
      } else {
        setScrollState("transparent");
      }

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const currentSection = sections.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }

      // Trigger section animations
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible =
            rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

          if (isVisible) {
            element.classList.add("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="App">
      <Analytics />
      
      {/* Progress Bar */}
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrollState}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <ClickSpark sparkColor="#007AFF" sparkCount={8} sparkRadius={15}>
              <span onClick={() => scrollToSection("home")}>ST</span>
            </ClickSpark>
          </div>
          <div className="nav-menu">
            {navItems.map((item) => (
              <ClickSpark
                key={item}
                sparkColor="var(--primary-color)"
                sparkCount={5}
                sparkRadius={12}
              >
                <button
                  className={`nav-link ${activeSection === item ? "active" : ""}`}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </ClickSpark>
            ))}
          </div>
          <div className="nav-social">
            <a
              href="https://www.linkedin.com/in/shlok-thakkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-link linkedin-link"
              aria-label="LinkedIn"
            >
              <svg className="nav-social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a
              href="https://github.com/shlok1806"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-link github-link"
              aria-label="GitHub"
            >
              <svg className="nav-social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="social-tooltip">GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="section">
          <Hero scrollToSection={scrollToSection} />
        </section>

        {/* About Section in IDE Window */}
        <section id="about" className="section">
          <div className="container">
            <IDEWindow fileName="about.py">
              <About />
            </IDEWindow>
          </div>
        </section>

        {/* Experience Section in IDE Window */}
        <section id="experience" className="section">
          <div className="container">
            <IDEWindow fileName="experience.java">
              <Experience />
            </IDEWindow>
          </div>
        </section>

        {/* Projects Section in IDE Window */}
        <section id="projects" className="section">
          <div className="container">
            <IDEWindow fileName="projects.cpp">
              <Projects />
            </IDEWindow>
          </div>
        </section>

        {/* Skills Section in IDE Window */}
        <section id="skills" className="section">
          <div className="container">
            <IDEWindow fileName="skills.py">
              <Skills />
            </IDEWindow>
          </div>
        </section>

        {/* Contact Section in IDE Window */}
        <section id="contact" className="section">
          <div className="container">
            <IDEWindow fileName="contact.java">
              <Contact />
            </IDEWindow>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Background Grid */}
      <div className="dot-grid-background">
        <DotGrid 
          baseColor="#1C1C1E" 
          activeColor="#007AFF" 
          proximity={120}
          dotSize={12}
          gap={40}
        />
      </div>
    </div>
  );
}

export default App;
