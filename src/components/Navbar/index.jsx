import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, MoreHorizontal, X } from 'lucide-react'
import './index.css'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'GitHub', id: 'github-stats' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="nav-logo" href="#home" onClick={closeMenu} aria-label="Vishnu, home">
          Vishnu<span>.</span>
        </a>
        <span className="nav-mark" aria-hidden="true"><MoreHorizontal size={20} /></span>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          className={`nav-content${menuOpen ? ' nav-content-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <ul className="nav-links">
            {links.map(({ label, id }) => (
              <li key={id}>
                <a
                  className={activeSection === id ? 'nav-link nav-link-active' : 'nav-link'}
                  href={`#${id}`}
                  aria-current={activeSection === id ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} strokeWidth={2} />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
