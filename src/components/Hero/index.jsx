import { ArrowDown, ArrowRight, BriefcaseBusiness, MapPin, Sparkles } from 'lucide-react'
import profilePhoto from '../../assets/profile.png'
import './index.css'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/VISHNUsingamreddy',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/singamreddy-vishnu-66973b268/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M5.16 3.6a2.1 2.1 0 1 1-.02 4.2 2.1 2.1 0 0 1 .02-4.2ZM3.35 9.37h3.62v11.03H3.35V9.37Zm5.88 0h3.47v1.51h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.41 4.34 5.55v5.84h-3.62v-5.18c0-1.24-.02-2.84-1.73-2.84-1.74 0-2 1.35-2 2.75v5.27H9.23V9.37Z"
        />
      </svg>
    ),
  },
]

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid page-container">
        <div className="hero-copy">
          <p className="hero-kicker"><span className="availability-dot" /> Open to opportunities</p>
          <p className="hero-intro">Hello, I&apos;m</p>
          <h1>Vishnu<span>.</span><span className="hero-title-line">Portfolio</span></h1>
          <h2>Frontend Developer <span>|</span> React Developer</h2>
          <p className="hero-description">
            I&apos;m a Computer Science graduate passionate about building responsive,
            user-friendly web applications using React and JavaScript.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View my work <ArrowRight size={17} />
            </a>
            <a className="button button-secondary" href="/resume.pdf" download="Vishnu-Resume.pdf">
              Download resume <ArrowDown size={16} />
            </a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <span>Find me on</span>
            {socialLinks.map(({ name, href, icon }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={`Vishnu's ${name} profile`}>
                {icon}
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-art" aria-label="Profile photo of Vishnu">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-glow" />
          <div className="hero-art-label"><span /> Selected work · 2026</div>
          <div className="profile-visual">
            <div className="profile-visual-top">
              <span className="profile-window-dot" />
              <span className="profile-window-dot" />
              <span className="profile-window-dot" />
              <span className="profile-window-label">Vishnu · portrait</span>
            </div>
            <div className="profile-portrait">
              <img className="portrait-image" src={profilePhoto} alt="Vishnu wearing a navy blazer" />
            </div>
            <div className="profile-caption">
              <span className="caption-location"><MapPin size={14} /> Computer Science graduate</span>
              <span className="caption-ready"><span /> Ready to build</span>
            </div>
          </div>
          <div className="floating-tag floating-tag-code"><span>&lt;/&gt;</span> React Developer</div>
          <div className="floating-tag floating-tag-design"><Sparkles size={15} /> Thoughtful UI</div>
          <div className="hero-project-chip">
            <span className="hero-project-icon"><BriefcaseBusiness size={17} /></span>
            <span><small>Featured project</small><strong>Job Application Tracker</strong></span>
            <ArrowRight size={15} />
          </div>
        </div>
      </div>
      <a className="hero-scroll" href="#about"><span /> Scroll to explore</a>
    </section>
  )
}

export default Hero
