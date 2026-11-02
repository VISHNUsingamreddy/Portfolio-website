import { useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, GitBranch, Mail, MapPin, Send } from 'lucide-react'
import './index.css'

function Contact() {
  const [formStatus, setFormStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setFormStatus(
      'Your details are valid. This portfolio does not have a message service configured, so nothing was sent. Connect an email service or backend to enable delivery.',
    )
    event.currentTarget.reset()
  }

  return (
    <section className="section contact-section reveal" id="contact">
      <div className="page-container">
        <div className="section-heading">
          <p className="eyebrow">Have a role or project in mind?</p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-intro">
            I&apos;m open to opportunities in frontend and full-stack development. Feel free to reach out.
          </p>
        </div>
        <div className="contact-layout">
          <aside className="contact-aside">
            <p className="contact-aside-title">Let&apos;s start a conversation.</p>
            <p className="contact-aside-copy">
              Have an opportunity, a project idea, or just want to connect? I&apos;d be glad to hear from you.
            </p>
            <a className="contact-email-card" href="mailto:your.email@example.com">
              <span className="contact-method-icon"><Mail size={19} /></span>
              <span><small>Email me</small><strong>your.email@example.com</strong></span>
              <ArrowUpRight size={17} />
            </a>
            <div className="contact-social-block">
              <span>Connect with me</span>
              <div>
                <a href="https://github.com/VISHNUsingamreddy" target="_blank" rel="noreferrer" aria-label="Vishnu's GitHub profile"><GitBranch size={19} /></a>
                <a href="https://www.linkedin.com/in/singamreddy-vishnu-66973b268/" target="_blank" rel="noreferrer" aria-label="Vishnu's LinkedIn profile"><BriefcaseBusiness size={19} /></a>
              </div>
            </div>
            <p className="contact-location"><MapPin size={15} /> Available for opportunities</p>
          </aside>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label className="form-field">
                <span>Your name</span>
                <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" required minLength={2} />
              </label>
              <label className="form-field">
                <span>Email address</span>
                <input name="email" type="email" autoComplete="email" placeholder="jane@example.com" required />
              </label>
            </div>
            <label className="form-field">
              <span>Subject</span>
              <input name="subject" type="text" placeholder="What would you like to discuss?" required minLength={3} />
            </label>
            <label className="form-field">
              <span>Message</span>
              <textarea name="message" rows="5" placeholder="A little about your opportunity or idea..." required minLength={10} />
            </label>
            <button className="button button-primary contact-submit" type="submit">
              Validate message <Send size={16} />
            </button>
            <p className="form-note">Your message is validated in your browser only; sending requires an email service or backend.</p>
            <p className="form-status" role="status" aria-live="polite">{formStatus}</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
