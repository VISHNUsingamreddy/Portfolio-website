import { ArrowUpRight, BriefcaseBusiness, Check, Circle, Database, ExternalLink, GitBranch, Search } from 'lucide-react'
import './index.css'

const projects = [
  {
    name: 'Job Application Tracker',
    description: 'A web application that helps users organize, manage, and track their job applications in one place.',
    technologies: ['React.js', 'JavaScript', 'CSS', 'Firebase Authentication', 'Firebase Realtime Database'],
    features: [
      'User registration and login',
      'Protected routes',
      'Add, edit, and delete applications',
      'Search and filter application lists',
      'Track application status',
      'Dashboard statistics',
    ],
    repository: 'https://github.com/VISHNUsingamreddy/job-application-tracker-using-react',
    demo: 'https://vishnusingamreddy.github.io/job-application-tracker-using-react/login',
    preview: 'tracker',
  },
  {
    name: 'Attendance Monitoring System',
    description: 'A database-focused application project for organizing and managing attendance information.',
    technologies: ['SQL', 'Relational Database Concepts'],
    features: [
      'Designed relational tables for attendance data',
      'Implemented create, read, update, and delete operations',
      'Connected application logic to database operations',
      'Tested functionality and resolved development issues',
    ],
    preview: 'attendance',
  },
]

function ProjectPreview({ type }) {
  if (type === 'attendance') {
    return (
      <div className="attendance-preview" aria-label="Illustrative relational database project preview">
        <div className="attendance-preview-heading">
          <span className="attendance-preview-icon"><Database size={18} /></span>
          <span><small>RELATIONAL DATABASE</small><strong>Attendance records</strong></span>
        </div>
        <div className="attendance-tables">
          <div className="attendance-table">
            <div className="attendance-table-title"><Database size={14} /> STUDENTS</div>
            <div className="attendance-table-row attendance-table-header"><span>student_id</span><span>student_info</span></div>
            <div className="attendance-table-row"><span>Primary key</span><span>Student details</span></div>
          </div>
          <span className="attendance-relation" aria-hidden="true"><span /></span>
          <div className="attendance-table">
            <div className="attendance-table-title"><Database size={14} /> ATTENDANCE</div>
            <div className="attendance-table-row attendance-table-header"><span>record_id</span><span>attendance_data</span></div>
            <div className="attendance-table-row"><span>Record key</span><span>Attendance details</span></div>
          </div>
        </div>
        <div className="attendance-operations">
          {['CREATE', 'READ', 'UPDATE', 'DELETE'].map((operation) => <span key={operation}>{operation}</span>)}
        </div>
      </div>
    )
  }

  return (
    <div className="project-preview" aria-label="Illustrative project dashboard preview">
      <div className="preview-window-bar">
        <div className="preview-dots"><i /><i /><i /></div>
        <span>Application dashboard</span>
        <span className="preview-avatar">V</span>
      </div>
      <div className="preview-dashboard">
        <aside className="preview-sidebar">
          <span className="preview-side-logo"><BriefcaseBusiness size={15} /></span>
          <span className="preview-side-active" />
          <span />
          <span />
          <span />
        </aside>
        <div className="preview-content">
          <div className="preview-title-row"><div><small>OVERVIEW</small><strong>Your applications</strong></div><span className="preview-add">+ Add new</span></div>
          <div className="preview-stats">
            <div><small>Total applications</small><strong>12</strong><span>↗ This month</span></div>
            <div><small>Interviews</small><strong>03</strong><span>In progress</span></div>
            <div><small>Offers</small><strong>01</strong><span>Great work!</span></div>
          </div>
          <div className="preview-table">
            <div className="preview-table-head"><span>COMPANY & ROLE</span><span>STATUS</span></div>
            <div><span className="preview-company"><b>AC</b><span>Acme Co.<small>Frontend Developer</small></span></span><em className="status-interview"><Circle size={7} /> Interview</em></div>
            <div><span className="preview-company"><b>NS</b><span>Northstar<small>React Developer</small></span></span><em className="status-applied"><Circle size={7} /> Applied</em></div>
            <div><span className="preview-company"><b>BL</b><span>Bright Labs<small>Web Developer</small></span></span><em className="status-offer"><Check size={9} /> Offer</em></div>
          </div>
        </div>
      </div>
      <div className="preview-search"><Search size={14} /> Search applications <span>⌘ K</span></div>
    </div>
  )
}

function Projects() {
  return (
    <section className="section projects-section reveal" id="projects">
      <div className="page-container">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-intro">A selection of practical web and database projects built through hands-on work.</p>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-visual"><ProjectPreview type={project.preview} /><span className="project-visual-label">Project preview · illustrative</span></div>
              <div className="project-details">
                <p className="project-overline"><span /> Featured project</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}
                </ul>
                <div className="project-tech" aria-label="Technologies used">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                {(project.repository || project.demo) && (
                  <div className="project-actions">
                    {project.repository && (
                      <a className="project-button project-button-primary" href={project.repository} target="_blank" rel="noreferrer">
                        <GitBranch size={16} /> GitHub repository <ArrowUpRight size={15} />
                      </a>
                    )}
                    {project.demo && (
                      <a className="project-button project-button-secondary" href={project.demo} target="_blank" rel="noreferrer">
                        Live demo <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                )}
                {!project.repository && <p className="project-placeholder-note">Repository link not provided.</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
