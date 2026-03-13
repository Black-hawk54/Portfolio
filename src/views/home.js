import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Spiffy Celebrated Beaver</title>
        <meta property="og:title" content="Spiffy Celebrated Beaver" />
        <link
          rel="canonical"
          href="https://spiffy-celebrated-beaver-lxhqjv.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://spiffy-celebrated-beaver-lxhqjv.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-intro">
        <div className="hero-intro__media">
          <video
            autoPlay="true"
            muted="true"
            loop="true"
            playsInline="true"
            poster="https://images.pexels.com/videos/3129671/pictures/preview-0.jpg"
            src="https://videos.pexels.com/video-files/3129671/3129671-hd_1280_720_30fps.mp4"
            className="hero-intro__video"
          ></video>
          <div className="hero-intro__overlay"></div>
          <div aria-hidden="true" className="home-thq-hero-particles-elm">
            <div className="home-thq-hero-particle-elm1 hero-particle"></div>
            <div className="home-thq-hero-particle-elm2 hero-particle"></div>
            <div className="home-thq-hero-particle-elm3 hero-particle"></div>
            <div className="home-thq-hero-particle-elm4 hero-particle"></div>
            <div className="home-thq-hero-particle-elm5 hero-particle"></div>
            <div className="home-thq-hero-particle-elm6 hero-particle"></div>
          </div>
        </div>
        <div className="hero-intro__container">
          <div className="hero-intro__content">
            <div className="hero-intro__badge">
              <span>Bytefolio 2026</span>
            </div>
            <h1 className="hero-title">Alex Rivera</h1>
            <p className="hero-subtitle">Computer Engineering Student</p>
            <p className="hero-intro__tagline">
              Architecting the intersection of high-performance hardware and
              intelligent software systems.
            </p>
            <div className="hero-intro__actions">
              <a href="#projects">
                <div className="btn btn-primary btn-lg">
                  <span>View Projects</span>
                </div>
              </a>
              <a href="#resume">
                <div className="btn btn-lg btn-outline">
                  <span>Download Resume</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-intro__visual">
            <div className="hero-intro__avatar-wrapper">
              <img
                src="https://images.pexels.com/photos/6963937/pexels-photo-6963937.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
                alt="Alex Rivera Profile"
                className="hero-intro__avatar"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="skills-snapshot">
        <div className="skills-snapshot__container">
          <div className="skills-snapshot__header">
            <h2 className="section-title">Core Competencies</h2>
            <p className="section-subtitle">
              Technical mastery across the stack
            </p>
          </div>
          <div className="skills-snapshot__grid">
            <div className="skills-snapshot__card">
              <div className="skills-snapshot__icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 12h4m-4 5h4M10 7h4m4 5h2m-2 6h2M18 6h2M4 12h2m-2 6h2M4 6h2"></path>
                  <rect width="12" height="20" x="6" y="2" rx="2"></rect>
                </svg>
              </div>
              <h3 className="skills-snapshot__name">Embedded Systems</h3>
              <div className="skills-snapshot__progress-container">
                <div className="home-thq-skills-snapshotprogress-bar-elm1 skills-snapshot__progress-bar"></div>
              </div>
              <div className="skills-snapshot__meta">
                <span className="skills-snapshot__label">Advanced</span>
                <span className="skills-snapshot__percentage">90%</span>
              </div>
            </div>
            <div className="skills-snapshot__card">
              <div className="skills-snapshot__icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 18l6-6l-6-6M8 6l-6 6l6 6"></path>
                </svg>
              </div>
              <h3 className="skills-snapshot__name">C / C++</h3>
              <div className="skills-snapshot__progress-container">
                <div className="home-thq-skills-snapshotprogress-bar-elm2 skills-snapshot__progress-bar"></div>
              </div>
              <div className="skills-snapshot__meta">
                <span className="skills-snapshot__label">Expert</span>
                <span className="skills-snapshot__percentage">95%</span>
              </div>
            </div>
            <div className="skills-snapshot__card">
              <div className="skills-snapshot__icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19h8M4 17l6-6l-6-6"></path>
                </svg>
              </div>
              <h3 className="skills-snapshot__name">Python</h3>
              <div className="skills-snapshot__progress-container">
                <div className="home-thq-skills-snapshotprogress-bar-elm3 skills-snapshot__progress-bar"></div>
              </div>
              <div className="skills-snapshot__meta">
                <span className="skills-snapshot__label">Advanced</span>
                <span className="skills-snapshot__percentage">85%</span>
              </div>
            </div>
            <div className="skills-snapshot__card">
              <div className="skills-snapshot__icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
                  <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                  <rect width="8" height="8" x="8" y="8" rx="1"></rect>
                </svg>
              </div>
              <h3 className="skills-snapshot__name">FPGA / VHDL</h3>
              <div className="skills-snapshot__progress-container">
                <div className="home-thq-skills-snapshotprogress-bar-elm4 skills-snapshot__progress-bar"></div>
              </div>
              <div className="skills-snapshot__meta">
                <span className="skills-snapshot__label">Proficient</span>
                <span className="skills-snapshot__percentage">80%</span>
              </div>
            </div>
            <div className="skills-snapshot__card">
              <div className="skills-snapshot__icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9m6 3v3"></path>
                </svg>
              </div>
              <h3 className="skills-snapshot__name">Git &amp; DevOps</h3>
              <div className="skills-snapshot__progress-container">
                <div className="home-thq-skills-snapshotprogress-bar-elm5 skills-snapshot__progress-bar"></div>
              </div>
              <div className="skills-snapshot__meta">
                <span className="skills-snapshot__label">Advanced</span>
                <span className="skills-snapshot__percentage">88%</span>
              </div>
            </div>
            <div className="skills-snapshot__card">
              <div className="skills-snapshot__icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="skills-snapshot__name">RTOS</h3>
              <div className="skills-snapshot__progress-container">
                <div className="home-thq-skills-snapshotprogress-bar-elm6 skills-snapshot__progress-bar"></div>
              </div>
              <div className="skills-snapshot__meta">
                <span className="skills-snapshot__label">Proficient</span>
                <span className="skills-snapshot__percentage">75%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="highlighted-projects">
        <div className="highlighted-projects__container">
          <div className="highlighted-projects__header">
            <h2 className="section-title">Selected Engineering Works</h2>
            <p className="section-subtitle">
              A collection of hardware and software integration
            </p>
          </div>
          <div className="highlighted-projects__grid">
            <article className="highlighted-projects__card">
              <div className="highlighted-projects__image-wrapper">
                <img
                  src="https://images.pexels.com/photos/6636476/pexels-photo-6636476.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Neural Core Project"
                  className="highlighted-projects__image"
                />
                <div className="highlighted-projects__scrim">
                  <a href="#">
                    <div className="btn btn-primary btn-sm">
                      <span>Explore Project</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="highlighted-projects__info">
                <h3 className="highlighted-projects__title">NeuralCore FPGA</h3>
                <p className="section-content">
                  Hardware-accelerated neural network inference engine
                  implemented on Xilinx Artix-7.
                </p>
                <div className="highlighted-projects__tags">
                  <span className="highlighted-projects__tag">VHDL</span>
                  <span className="highlighted-projects__tag">Vivado</span>
                  <span className="highlighted-projects__tag">AI</span>
                </div>
              </div>
            </article>
            <article className="highlighted-projects__card">
              <div className="highlighted-projects__image-wrapper">
                <img
                  src="https://images.pexels.com/photos/2582934/pexels-photo-2582934.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Autonomous Drone Project"
                  className="highlighted-projects__image"
                />
                <div className="highlighted-projects__scrim">
                  <a href="#">
                    <div className="btn btn-primary btn-sm">
                      <span>Explore Project</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="highlighted-projects__info">
                <h3 className="highlighted-projects__title">AeroLink RTOS</h3>
                <p className="section-content">
                  Real-time flight controller software with sub-millisecond
                  latency for quadcopter stabilization.
                </p>
                <div className="highlighted-projects__tags">
                  <span className="highlighted-projects__tag">C++</span>
                  <span className="highlighted-projects__tag">FreeRTOS</span>
                  <span className="highlighted-projects__tag">STM32</span>
                </div>
              </div>
            </article>
            <article className="highlighted-projects__card">
              <div className="highlighted-projects__image-wrapper">
                <img
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Smart Grid Monitor"
                  className="highlighted-projects__image"
                />
                <div className="highlighted-projects__scrim">
                  <a href="#">
                    <div className="btn btn-primary btn-sm">
                      <span>Explore Project</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="highlighted-projects__info">
                <h3 className="highlighted-projects__title">GridSense IoT</h3>
                <p className="section-content">
                  Distributed sensor network for real-time power grid monitoring
                  and anomaly detection.
                </p>
                <div className="highlighted-projects__tags">
                  <span className="highlighted-projects__tag">Python</span>
                  <span className="highlighted-projects__tag">MQTT</span>
                  <span className="highlighted-projects__tag">Linux</span>
                </div>
              </div>
            </article>
            <article className="highlighted-projects__card">
              <div className="highlighted-projects__image-wrapper">
                <img
                  src="https://images.pexels.com/photos/163170/board-printed-circuit-board-computer-electronics-163170.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Compiler Design"
                  className="highlighted-projects__image"
                />
                <div className="highlighted-projects__scrim">
                  <a href="#">
                    <div className="btn btn-primary btn-sm">
                      <span>Explore Project</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="highlighted-projects__info">
                <h3 className="highlighted-projects__title">Lumina Compiler</h3>
                <p className="section-content">
                  Experimental C-like language compiler targeting custom RISC-V
                  architecture extensions.
                </p>
                <div className="highlighted-projects__tags">
                  <span className="highlighted-projects__tag">LLVM</span>
                  <span className="highlighted-projects__tag">C++</span>
                  <span className="highlighted-projects__tag">RISC-V</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="about-summary">
        <div className="about-summary__container">
          <div className="about-summary__split">
            <div className="about-summary__text">
              <h2 className="section-title">Beyond the Bits</h2>
              <p className="section-content">
                I am a final-year Computer Engineering student dedicated to
                bridging the gap between hardware constraints and software
                elegance. My academic journey has been fueled by a fascination
                with how electrons transform into logic, and how that logic
                powers the modern world.
              </p>
              <p className="section-content">
                Currently, my focus lies in high-performance computing and
                low-level optimization. I strive to build systems that are not
                just functional, but efficient, secure, and scalable. When
                I&apos;m not debugging kernel drivers, I&apos;m likely exploring
                the latest in FPGA technology or contributing to open-source
                hardware projects.
              </p>
              <div className="about-summary__stats">
                <div className="about-summary__stat">
                  <span className="about-summary__number">3.9</span>
                  <span className="about-summary__label">GPA</span>
                </div>
                <div className="about-summary__stat">
                  <span className="about-summary__number">15+</span>
                  <span className="about-summary__label">Projects</span>
                </div>
                <div className="about-summary__stat">
                  <span className="about-summary__number">3</span>
                  <span className="about-summary__label">Internships</span>
                </div>
              </div>
            </div>
            <div className="about-summary__visual">
              <div className="about-summary__image-card">
                <img
                  src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=500"
                  alt="Workspace"
                  className="about-summary__image"
                />
                <div className="about-summary__decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="timeline-snapshot">
        <div className="timeline-snapshot__container">
          <div className="timeline-snapshot__header">
            <h2 className="section-title">Milestones</h2>
            <p className="section-subtitle">
              Education and Professional Growth
            </p>
          </div>
          <div className="timeline-snapshot__vertical">
            <div className="timeline-snapshot__item">
              <div className="timeline-snapshot__marker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <svg d="M2 17l10 5 10-5"></svg>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="timeline-snapshot__content">
                <span className="timeline-snapshot__date">2025 - Present</span>
                <h3 className="timeline-snapshot__title">
                  Embedded Software Intern
                </h3>
                <p className="timeline-snapshot__org">TechFlow Systems</p>
                <p className="section-content">
                  Developing firmware for next-generation automotive sensors
                  using C and Real-Time Linux.
                </p>
              </div>
            </div>
            <div className="timeline-snapshot__item">
              <div className="timeline-snapshot__marker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 1.66 4 3 9 3s9-1.34 9-3v-5"></path>
                </svg>
              </div>
              <div className="timeline-snapshot__content">
                <span className="timeline-snapshot__date">2022 - 2026</span>
                <h3 className="timeline-snapshot__title">
                  B.S. Computer Engineering
                </h3>
                <p className="timeline-snapshot__org">
                  State University of Technology
                </p>
                <p className="section-content">
                  Focusing on Digital Logic Design, Computer Architecture, and
                  Operating Systems.
                </p>
              </div>
            </div>
            <div className="timeline-snapshot__item">
              <div className="timeline-snapshot__marker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="timeline-snapshot__content">
                <span className="timeline-snapshot__date">Summer 2024</span>
                <h3 className="timeline-snapshot__title">
                  Hardware Engineering Intern
                </h3>
                <p className="timeline-snapshot__org">Silicon Path Labs</p>
                <p className="section-content">
                  Assisted in the verification of RISC-V processor cores and PCB
                  signal integrity testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quick-nav">
        <div className="quick-nav__container">
          <div className="quick-nav__header">
            <h2 className="section-title">Fast Access</h2>
            <p className="section-subtitle">Jump to specific sections</p>
          </div>
          <div className="quick-nav__grid">
            <a href="#projects">
              <div className="quick-nav__item">
                <div className="quick-nav__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16"></path>
                  </svg>
                </div>
                <div className="quick-nav__text">
                  <h3 className="quick-nav__title">Projects</h3>
                  <p className="section-content">
                    Hardware &amp; Software works
                  </p>
                </div>
              </div>
            </a>
            <a href="#skills">
              <div className="quick-nav__item">
                <div className="quick-nav__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                    <rect width="8" height="8" x="8" y="8" rx="1"></rect>
                    <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
                  </svg>
                </div>
                <div className="quick-nav__text">
                  <h3 className="quick-nav__title">Skills</h3>
                  <p className="section-content">Technical stack details</p>
                </div>
              </div>
            </a>
            <a href="#resume">
              <div className="quick-nav__item">
                <div className="quick-nav__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <div className="quick-nav__text">
                  <h3 className="quick-nav__title">Resume</h3>
                  <p className="section-content">Professional background</p>
                </div>
              </div>
            </a>
            <a href="#contact">
              <div className="quick-nav__item">
                <div className="quick-nav__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="quick-nav__text">
                  <h3 className="quick-nav__title">Contact</h3>
                  <p className="section-content">Get in touch for collabs</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<script defer data-name="bytefolio-animations">
(function(){
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealOnScroll.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".skills-snapshot__card, .highlighted-projects__card, .timeline-snapshot__item, .quick-nav__item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    revealOnScroll.observe(el)
  })

  const skillsCards = document.querySelectorAll(".skills-snapshot__card")
  skillsCards.forEach((card, index) => {
    card.style.transitionDelay = \`\${index * 100}ms\`
  })

  const heroVisual = document.querySelector(".hero-intro__visual")
  if (heroVisual) {
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const moveX = (clientX - centerX) / 50
      const moveY = (clientY - centerY) / 50

      heroVisual.style.transform = \`translate(\${moveX}px, \${moveY}px)\`
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <div>
        <div className="home-container14">
          <Script
            html={`<style>
@keyframes pulse-dot {
0%, 100% {
  opacity: 1;
  transform: scale(1);
}
50% {
  opacity: 0.6;
  transform: scale(0.9);
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container16">
          <Script
            html={`<style>
@keyframes float-particle {
0%, 100% {
  transform: translateY(0) translateX(0);
  opacity: 0.3;
}
25% {
  transform: translateY(-30px) translateX(10px);
  opacity: 0.6;
}
50% {
  transform: translateY(-15px) translateX(-15px);
  opacity: 0.4;
}
75% {
  transform: translateY(-40px) translateX(5px);
  opacity: 0.5;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container18">
          <Script
            html={`<style>
@keyframes cardFadeInUp {
from {
  opacity: 0;
  transform: translateY(30px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container20">
          <Script
            html={`<style>
@keyframes cardFadeIn {
from {
  opacity: 0;
  transform: translateY(20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
}

@keyframes shimmer {
0% {
  background-position: 200% 0;
}
100% {
  background-position: -200% 0;
}
}

@keyframes progressShine {
0% {
  transform: translateX(-100%);
}
100% {
  transform: translateX(100%);
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container22">
          <Script
            html={`<style>
@keyframes timeline-fade-in-up {
from {
  opacity: 0;
  transform: translateY(30px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
}

@keyframes pulse-ring {
0% {
  transform: scale(1);
  opacity: 0.3;
}
100% {
  transform: scale(1.4);
  opacity: 0;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container23">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon51"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text8">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
