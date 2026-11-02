import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import './App.css'

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    revealElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="footer-topline">
          <a className="footer-brand" href="#home" aria-label="Vishnu, back to home">
            V<span>.</span>
          </a>
          <span className="footer-availability"><span /> Open to opportunities</span>
        </div>
        <div className="footer-main">
          <div>
            <p className="footer-kicker">Have something in mind?</p>
            <h2>Let&apos;s make<br /><span>it useful.</span></h2>
          </div>
          <a className="footer-contact-link" href="#contact">Get in touch <span>↗</span></a>
        </div>
        <div className="footer-bottom">
          <p>Designed and built with care by Vishnu.</p>
          <span className="footer-copyright">© 2026 Vishnu. All rights reserved.</span>
          <div className="footer-links">
            <a href="https://github.com/VISHNUsingamreddy" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/singamreddy-vishnu-66973b268/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="back-to-top" href="#home" aria-label="Back to top">Top ↑</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
