import { Award, CalendarDays, GraduationCap, MapPin } from 'lucide-react'
import './index.css'

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    institution: 'Kalasalingam University',
    years: 'September 2022 – May 2026',
    scoreLabel: 'CGPA',
    score: '7.55',
  },
  {
    degree: 'Intermediate',
    field: 'State Board of Intermediate Education',
    institution: 'Narayana Junior College',
    years: 'June 2020 – April 2022',
    scoreLabel: 'CGPA',
    score: '8.12',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    field: 'State Board of Secondary Education',
    institution: '',
    years: 'June 2019 – April 2020',
    scoreLabel: 'CGPA',
    score: '9.9',
  },
]

function Education() {
  return (
    <section className="section section-soft education-section reveal" id="education">
      <div className="page-container">
        <div className="section-heading">
          <p className="eyebrow">The learning behind the work</p>
          <h2 className="section-title">Education</h2>
          <p className="section-intro">A foundation in computer science, with plenty more learning ahead.</p>
        </div>
        <div className="education-timeline">
          <span className="timeline-line" aria-hidden="true" />
          {education.map((item) => (
            <article className="education-card" key={item.degree}>
              <span className="timeline-marker"><GraduationCap size={21} /></span>
              <div className="education-card-top">
                <span className="education-degree-icon"><GraduationCap size={24} /></span>
                <span className="education-year"><CalendarDays size={15} /> {item.years}</span>
              </div>
              <div className="education-card-content">
                <p className="education-overline">{item.degree}</p>
                <h3>{item.field}</h3>
                {item.institution && <p className="education-university"><MapPin size={16} /> {item.institution}</p>}
                <div className="education-card-bottom">
                  <span className="education-focus">{item.institution || 'Secondary Education'}</span>
                  <span className="education-cgpa"><Award size={16} /> {item.scoreLabel} <strong>{item.score}</strong></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
