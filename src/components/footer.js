import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-background">
          <img
            src="https://images.pexels.com/photos/8108728/pexels-photo-8108728.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
            alt="Futuristic circuit board background"
            className="footer-bg-image"
          />
          <div className="footer-overlay"></div>
        </div>
        <div className="footer-container">
          <div className="footer-main-grid">
            <div className="footer-brand-column">
              <div className="footer-logo-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="footer-brand-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="m7 11l2-2l-2-2m4 6h4"></path>
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="3"
                      rx="2"
                      ry="2"
                    ></rect>
                  </g>
                </svg>
                <span className="footer-brand-name">Alex Chen</span>
              </div>
              <p className="footer-brand-tagline">
                Computer Engineering student passionate about building efficient
                systems and elegant solutions. Focused on embedded systems,
                computer architecture, and full-stack development.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div aria-label="GitHub" className="footer-social-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="LinkedIn" className="footer-social-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2"></circle>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Contact" className="footer-social-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-nav-column">
              <h3 className="footer-column-title">Explore</h3>
              <nav aria-label="Footer navigation" className="footer-nav-list">
                <Link to="/">
                  <div className="footer-thq-footer-nav-link-elm1 footer-nav-link">
                    <span>Home</span>
                  </div>
                </Link>
                <a href="#projects">
                  <div className="footer-thq-footer-nav-link-elm2 footer-nav-link">
                    <span>Projects</span>
                  </div>
                </a>
                <a href="#skills">
                  <div className="footer-thq-footer-nav-link-elm3 footer-nav-link">
                    <span>Skills</span>
                  </div>
                </a>
                <a href="#about">
                  <div className="footer-thq-footer-nav-link-elm4 footer-nav-link">
                    <span>About</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-contact-column">
              <h3 className="footer-column-title">Stay Connected</h3>
              <p className="footer-update-text">
                Get technical deep dives, project updates, and engineering
                insights delivered to your inbox.
              </p>
              <form
                action="/subscribe"
                method="POST"
                aria-label="Newsletter subscription"
                data-form-id="87520474-d6bc-457b-8645-77b6d255c8e9"
                className="footer-subscribe-form"
              >
                <div className="footer-input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required="true"
                    id="thq_email_lmQ0"
                    aria-label="Email address for newsletter"
                    data-form-field-id="thq_email_lmQ0"
                    className="footer-email-input"
                  />
                  <button
                    type="submit"
                    id="thq_button_3jK2"
                    name="button"
                    aria-label="Subscribe to newsletter"
                    data-form-field-id="thq_button_3jK2"
                    className="footer-submit-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 12 14 0"></path>
                      <path d="m13 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-bottom-bar">
            <div className="footer-legal-info">
              <span className="footer-copyright">
                © 2026 Alex Chen. Crafted with code and coffee.
              </span>
            </div>
            <div className="footer-status-indicator">
              <div className="footer-status-dot"></div>
              <span className="footer-status-text">
                Available for new opportunities
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-interactivity">
(function(){
  const footerForm = document.querySelector(".footer-subscribe-form")

  if (footerForm) {
    footerForm.addEventListener("submit", function (e) {
      const emailInput = this.querySelector(".footer-email-input")

      if (emailInput.checkValidity()) {
        const submitBtn = this.querySelector(".footer-submit-btn")
        const originalContent = submitBtn.innerHTML

        submitBtn.disabled = true
        submitBtn.style.backgroundColor = "var(--color-accent)"
        submitBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'

        setTimeout(() => {
          this.reset()
          submitBtn.disabled = false
          submitBtn.style.backgroundColor = "var(--color-primary)"
          submitBtn.innerHTML = originalContent
        }, 2000)
      }
    })
  }

  const statusDot = document.querySelector(".footer-status-dot")
  if (statusDot) {
    let opacity = 1
    let increasing = false

    setInterval(() => {
      if (increasing) {
        opacity += 0.05
        if (opacity >= 1) increasing = false
      } else {
        opacity -= 0.05
        if (opacity <= 0.4) increasing = true
      }
      statusDot.style.opacity = opacity
    }, 50)
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
