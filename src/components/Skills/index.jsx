import { Atom, Braces, Code2, Database, GitBranch, PanelsTopLeft } from 'lucide-react'
import './index.css'

const skillGroups = [
  {
    title: 'Programming',
    description: 'Languages and query tools',
    skills: [
      { name: 'JavaScript', icon: Braces, detail: 'Modern JavaScript' },
      { name: 'Python', icon: Code2, detail: 'Programming language' },
      { name: 'SQL', icon: Database, detail: 'Relational queries' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Responsive web interfaces',
    skills: [
      { name: 'React.js', icon: Atom, detail: 'Reusable components' },
      { name: 'HTML5', icon: Code2, detail: 'Semantic markup' },
      { name: 'CSS3', icon: PanelsTopLeft, detail: 'Responsive styling' },
    ],
  },
  {
    title: 'Tools & Version Control',
    description: 'Development workflow',
    skills: [
      { name: 'Git', icon: GitBranch, detail: 'Version control' },
      { name: 'GitHub', icon: GitBranch, detail: 'Code collaboration' },
    ],
  },
]

function Skills() {
  return (
    <section className="section section-soft skills-section reveal" id="skills">
      <div className="page-container">
        <div className="section-heading">
          <p className="eyebrow">What I work with</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-intro">Programming, frontend, database, and development tools from my project work.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-group-heading">
                <div><h3>{group.title}</h3><p>{group.description}</p></div>
                <span>{String(group.skills.length).padStart(2, '0')} skills</span>
              </div>
              <div className="skills-grid">
                {group.skills.map(({ name, icon: Icon, detail }) => (
                  <article className="skill-card" key={name}>
                    <span className={`skill-icon skill-icon-${name.toLowerCase().replace(/[^a-z]/g, '')}`}>
                      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="skill-card-text"><strong>{name}</strong><small>{detail}</small></span>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
