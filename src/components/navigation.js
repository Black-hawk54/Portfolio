import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-root">
        <div className="navigation-container">
          <Link to="/">
            <div aria-label="Bytefolio Home" className="navigation-brand">
              <div className="navigation-logo-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                  ></path>
                </svg>
              </div>
              <span className="navigation-brand-name section-title">
                Bytefolio
              </span>
            </div>
          </Link>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links">
              <li>
                <a href="#projects">
                  <div className="navigation-link">
                    <span>Projects</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#skills">
                  <div className="navigation-link">
                    <span>Skills</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#about">
                  <div className="navigation-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <div className="navigation-link">
                    <span>Contact</span>
                  </div>
                </a>
              </li>
            </ul>
            <a href="#contact">
              <div className="btn btn-primary btn-sm">
                <span>Hire Me</span>
              </div>
            </a>
          </div>
          <button
            id="navToggle"
            aria-label="Toggle Menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="icon-menu"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 5h16M4 12h16M4 19h16"
              ></path>
            </svg>
          </button>
        </div>
        <div id="mobileOverlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <Link to="/">
              <div aria-label="Bytefolio Home" className="navigation-brand">
                <div className="navigation-logo-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                    ></path>
                  </svg>
                </div>
                <span className="navigation-brand-name section-title">
                  Bytefolio
                </span>
              </div>
            </Link>
            <button
              id="navClose"
              aria-label="Close Menu"
              className="navigation-close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 16l3-3l3 3"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <ul className="navigation-mobile-links">
              <li>
                <a href="#projects">
                  <div className="navigation-mobile-link">
                    <span>Projects</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#skills">
                  <div className="navigation-mobile-link">
                    <span>Skills</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#about">
                  <div className="navigation-mobile-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <div className="navigation-mobile-link">
                    <span>Contact</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-mobile-footer">
              <a href="#contact">
                <div className="btn btn-primary btn-lg">
                  <span>Start a Project</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-link, .navigation-link::after, .navigation-root {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navClose = document.getElementById("navClose")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

  function openMenu() {
    mobileOverlay.classList.add("is-active")
    navToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  function closeMenu() {
    mobileOverlay.classList.remove("is-active")
    navToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navToggle.addEventListener("click", openMenu)
  navClose.addEventListener("click", closeMenu)

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navigation-root")
    if (window.scrollY > 50) {
      nav.style.background = "var(--color-surface)"
      nav.style.boxShadow = "0 4px 20px color-mix(in oklab, var(--color-on-surface) 5%, transparent)"
    } else {
      if (window.innerWidth > 767) {
        nav.style.background = "transparent"
      }
      nav.style.boxShadow = "none"
    }
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
