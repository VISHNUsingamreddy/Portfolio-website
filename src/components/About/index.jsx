import { ArrowUpRight, BadgeCheck, Braces, PanelsTopLeft } from 'lucide-react'
import './index.css'

function About() {
  return (
    <section className="section about-section reveal" id="about">
      <div className="page-container">
        <div className="section-heading">
          <p className="eyebrow">A little about me</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-intro">Curious by nature, focused on building useful things for the web.</p>
        </div>
        <div className="about-layout">
          <div className="about-copy">
            <p className="about-lead">
              I&apos;m a Computer Science graduate from Kalasalingam University, passionate about
              frontend development and building practical web applications.
            </p>
            <p>
              My project experience includes React.js, JavaScript, HTML, CSS, and Firebase. I enjoy
              building responsive interfaces, reusable components, authentication workflows, and
              application data-management features.
            </p>
            <p>
              I have also worked with Python and SQL, and value clear communication, collaboration,
              and solving problems by building and testing practical solutions.
            </p>
            <a className="about-link" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a>
          </div>
          <div className="about-card">
            <div className="about-card-heading">
              <span className="about-card-icon"><BadgeCheck size={21} /></span>
              <div>
                <p className="about-card-overline">My approach</p>
                <h3>Thoughtful, practical development</h3>
              </div>
            </div>
            <div className="about-values">
              <div className="about-value">
                <span className="about-value-icon"><PanelsTopLeft size={19} /></span>
                <div><h4>User-first interfaces</h4><p>Responsive layouts that feel clear and intuitive.</p></div>
              </div>
              <div className="about-value">
                <span className="about-value-icon"><Braces size={19} /></span>
                <div><h4>Curious problem solving</h4><p>Learning by building and iterating with purpose.</p></div>
              </div>
              <div className="about-value">
                <span className="about-value-icon"><BadgeCheck size={19} /></span>
                <div><h4>Team collaboration</h4><p>Contributed to technical hackathons and coordinated a college coding competition.</p></div>
              </div>
            </div>
            <div className="about-card-footer">
              <span className="about-footer-mark">V</span>
              <span>Focused on growing, one project at a time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
