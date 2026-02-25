<script>
  import { onMount } from "svelte";

  // Dynamic skill sets
  const skills = [
    {
      category: "Frontend",
      tools: ["React", "Svelte", "Vue", "TailwindCSS"],
      icon: "ph-browsers",
    },
    {
      category: "IoT & Robotics",
      tools: ["Arduino", "ESP32", "Javascript", "Python"],
      icon: "ph-robot",
    },
  ];

  // Dummy projects
  const projects = [
    {
      title: "Next Gen Agriculture",
      desc: "plant monitoring based on leaf color and pests.",
      tags: ["Python", "Arduino", "MQTT"],
    },
    {
      title: "Smart Home IoT",
      desc: "Centralized IoT hub for smart home automation devices.",
      tags: ["Node.js", "Arduino", "Vue", "Javascript", "MQTT"],
    },
    {
      title: "optimization of temperature quality inspection accuracy",
      desc: "notify the system when there is an anomaly in unstable temperatures.",
      tags: ["Arduino", "Javascript", "TailwindCSS", "MQTT"],
    },
    {
      title: "air conditioner display with remote control and HMI ",
      desc: "control the air conditioner using the HMI.",
      tags: ["Arduino", "Nextion"],
    },
    {
      title: "IoT-based automatic door",
      desc: "remote door control using the internet.",
      tags: ["Arduino", "MQQT", "Javascript"],
    },
    {
      title: "electrical technician on an excavator",
      desc: "cable installation on excavators.",
    },
  ];

  // Typewriter effect variables
  let typedText = "";
  const toType = "IoT & Robotics";
  let typingIndex = 0;

  // Scroll visibility
  let visibleSections = {};

  onMount(() => {
    // Typewriter effect
    const typeInterval = setInterval(() => {
      if (typingIndex < toType.length) {
        typedText += toType.charAt(typingIndex);
        typingIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      clearInterval(typeInterval);
      observer.disconnect();
    };
  });
</script>

<main>
  <!-- Navbar -->
  <nav class="navbar">
    <div class="container nav-content">
      <div class="logo">Portfolio<span class="text-gradient">.</span></div>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a
          href="#contact"
          class="btn btn-primary"
          style="padding: 0.4rem 1.2rem;">Contact</a
        >
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="hero" class="hero flex-center">
    <div class="hero-bg"></div>
    <div class="container text-center fade-in">
      <h1 class="hero-title">
        Hello! I'm Gumilar Maulana Shidiq <br />
        Building <span class="text-gradient typed-text">{typedText}</span><span
          class="cursor">|</span
        >
      </h1>
      <p class="hero-subtitle">
        Bridging the gap between software and hardware to create scalable,
        impactful, and intelligent solutions.
      </p>
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">
          <i class="ph ph-rocket-launch"></i> View Work
        </a>
        <a href="#contact" class="btn btn-secondary">
          <i class="ph ph-envelope-simple"></i> Reach Out
        </a>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about">
    <div class="container fade-in">
      <h2>About <span class="text-gradient">Me</span></h2>
      <div class="about-grid">
        <div class="about-text">
          <p>
            I am a versatile multidisciplinary engineer who loves solving
            complex problems. designing PCB layouts for IoT devices, or
            programming autonomous robots.
          </p>
          <p>
            My unique blend of skills allows me to develop full-stack
            applications that seamlessly interact with the physical world,
            bringing concepts from imagination to reality.
          </p>
        </div>
        <div class="about-stats grid-cards">
          <div class="card stat-card">
            <h3 class="text-gradient">2+</h3>
            <p>Years Experience</p>
          </div>
          <div class="card stat-card">
            <h3 class="text-gradient">15+</h3>
            <p>Projects Delivered</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="skills">
    <div class="container fade-in">
      <h2>Technical <span class="text-gradient">Arsenal</span></h2>
      <div class="grid-cards">
        {#each skills as skill}
          <div class="card skill-card">
            <div class="skill-icon">
              <i class={skill.icon}></i>
            </div>
            <h3>{skill.category}</h3>
            <div class="skill-tags">
              {#each skill.tools as tool}
                <span class="tag">{tool}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="projects">
    <div class="container fade-in">
      <h2>Featured <span class="text-gradient">Projects</span></h2>
      <div class="grid-cards">
        {#each projects as project}
          <div class="card project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="tag tag-outline">{tag}</span>
              {/each}
            </div>
            <a href={project.link} class="project-link">
              View Project <i class="ph ph-arrow-right"></i>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact text-center">
    <div class="container fade-in">
      <h2>Let's build something <span class="text-gradient">awesome</span></h2>
      <p>Interested in collaborating or have a project in mind? Let's talk!</p>
      <a href="mailto:contact@example.com" class="btn btn-primary contact-btn">
        <i class="ph ph-paper-plane-tilt"></i> Say Hello
      </a>
      <div class="social-links mt-4">
        <a href="https://github.com" aria-label="Github"
          ><i class="ph ph-github-logo"></i></a
        >
        <a href="https://linkedin.com" aria-label="LinkedIn"
          ><i class="ph ph-linkedin-logo"></i></a
        >
        <a href="https://twitter.com" aria-label="Twitter"
          ><i class="ph ph-twitter-logo"></i></a
        >
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container text-center">
      <p>&copy; {new Date().getFullYear()} Portfolio. Crafted with passion.</p>
    </div>
  </footer>
</main>

<style>
  /* Base styles already in app.css, defining specific components here */

  /* Navbar */
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 0;
    backdrop-filter: blur(20px);
    background: rgba(10, 10, 15, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    z-index: 1000;
  }

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: var(--font-heading);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: color var(--transition-fast);
  }

  .nav-links a:hover {
    color: var(--accent-primary);
  }

  /* Hero */
  .hero {
    min-height: 100vh;
    padding-top: 80px; /* navbar height */
  }

  .hero-bg {
    position: absolute;
    top: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(79, 172, 254, 0.15) 0%,
      rgba(10, 10, 15, 0) 70%
    );
    z-index: -1;
    pointer-events: none;
  }

  .hero-title {
    margin-bottom: 1.5rem;
  }

  .typed-text {
    min-height: 1.2em; /* Prevent layout shift */
    display: inline-block;
  }

  .cursor {
    animation: blink 1s step-end infinite;
    color: var(--accent-primary);
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .hero-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto 2.5rem;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  /* About */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .about-text p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .stat-card {
    text-align: center;
  }

  .stat-card h3 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  /* Skills */
  .skill-icon {
    font-size: 2.5rem;
    color: var(--accent-primary);
    margin-bottom: 1rem;
  }

  .skill-tags,
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .tag {
    background: rgba(255, 255, 255, 0.05);
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    font-size: 0.85rem;
    color: var(--text-primary);
  }

  .tag-outline {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--accent-secondary);
  }

  /* Projects */
  .project-card h3 {
    margin-bottom: 0.5rem;
  }

  .project-card p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    color: var(--accent-primary);
    text-decoration: none;
    font-weight: 600;
    transition: gap var(--transition-fast);
  }

  .project-link:hover {
    gap: 0.8rem;
  }

  /* Contact */
  .contact p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .contact-btn {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
  }

  .social-links {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  .social-links a {
    color: var(--text-secondary);
    font-size: 1.8rem;
    transition:
      color var(--transition-fast),
      transform var(--transition-fast);
  }

  .social-links a:hover {
    color: var(--accent-primary);
    transform: translateY(-5px);
  }

  /* Footer */
  footer {
    padding: 2rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  footer p {
    color: var(--text-muted);
    font-size: 0.9rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .nav-links {
      display: none; /* In a real app we'd add a hamburger menu */
    }
    .hero-title {
      font-size: 2.5rem;
    }
  }
</style>
