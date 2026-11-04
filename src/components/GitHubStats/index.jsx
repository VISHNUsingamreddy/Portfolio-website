import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, GitBranch, GitFork, RefreshCw, Star, Users } from 'lucide-react'
import './index.css'

const username = 'VISHNUsingamreddy'
const githubProfileUrl = `https://github.com/${username}`

async function fetchJson(url, signal) {
  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new Error(`GitHub data request failed (${response.status}).`)
  }
  return response.json()
}

function getContributionData(payload) {
  if (
    !Array.isArray(payload?.contributions)
    || !payload.contributions.every((entry) => (
      entry
      && typeof entry.date === 'string'
      && /^\d{4}-\d{2}-\d{2}$/.test(entry.date)
      && Number.isInteger(entry.count)
      && entry.count >= 0
    ))
    || !Number.isInteger(payload.total?.lastYear)
  ) {
    throw new Error('The contributions service returned data in an unexpected format.')
  }
  return { contributions: payload.contributions, total: payload.total.lastYear }
}

function getProfileData(profile, repositories) {
  if (
    !Number.isInteger(profile?.public_repos)
    || !Number.isInteger(profile?.followers)
    || !Array.isArray(repositories)
    || !repositories.every((repository) => (
      repository
      && Number.isInteger(repository.stargazers_count)
      && Number.isInteger(repository.forks_count)
    ))
  ) {
    throw new Error('GitHub returned profile or repository data in an unexpected format.')
  }

  return {
    repositories: profile.public_repos,
    followers: profile.followers,
    stars: repositories.reduce((total, repository) => total + repository.stargazers_count, 0),
    forks: repositories.reduce((total, repository) => total + repository.forks_count, 0),
  }
}

async function fetchGitHubData(signal) {
  const [contributionsPayload, profile, repositories] = await Promise.all([
    fetchJson(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, signal),
    fetchJson(`https://api.github.com/users/${username}`, signal),
    fetchJson(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, signal),
  ])
  return {
    contributions: getContributionData(contributionsPayload),
    profile: getProfileData(profile, repositories),
  }
}

function buildWeeks(contributions) {
  if (contributions.length === 0) return []

  const countByDate = new Map(contributions.map(({ date, count }) => [date, count]))
  const firstDate = new Date(`${contributions[0].date}T00:00:00Z`)
  const lastDate = new Date(`${contributions.at(-1).date}T00:00:00Z`)
  firstDate.setUTCDate(firstDate.getUTCDate() - firstDate.getUTCDay())

  const weeks = []
  for (const weekStart = firstDate; weekStart <= lastDate; weekStart.setUTCDate(weekStart.getUTCDate() + 7)) {
    const week = []
    for (let day = 0; day < 7; day += 1) {
      const date = new Date(weekStart)
      date.setUTCDate(date.getUTCDate() + day)
      const dateKey = date.toISOString().slice(0, 10)
      const inRange = dateKey >= contributions[0].date && dateKey <= contributions.at(-1).date
      week.push(inRange ? { date, count: countByDate.get(dateKey) ?? 0 } : null)
    }
    weeks.push(week)
  }
  return weeks
}

function getMonthLabels(weeks) {
  const labels = []
  const labeledMonths = new Set()

  weeks.forEach((week, index) => {
    const firstOfMonth = week.find((day) => day?.date.getUTCDate() === 1)
    const firstDate = week.find(Boolean)
    const labelDate = firstOfMonth?.date ?? (index === 0 ? firstDate?.date : null)

    if (!labelDate) return
    const monthKey = `${labelDate.getUTCFullYear()}-${labelDate.getUTCMonth()}`
    if (labeledMonths.has(monthKey)) return

    labeledMonths.add(monthKey)
    labels.push({
      month: labelDate.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }),
      column: index + 1,
    })
  })

  return labels
}

function ContributionCalendar({ contributions, total }) {
  const weeks = buildWeeks(contributions)
  const monthLabels = getMonthLabels(weeks)
  const weekdayNames = ['Monday', '', 'Wednesday', '', 'Friday', '', '']

  return (
    <div className="github-calendar-card">
      <div className="github-calendar-heading">
        <div>
          <p className="github-calendar-total">{total} contributions</p>
          <p className="github-calendar-range">in the last year</p>
        </div>
        <a href={`${githubProfileUrl}?tab=overview`} target="_blank" rel="noreferrer">
          View GitHub profile <ArrowUpRight size={15} />
        </a>
      </div>
      <div
        className="github-calendar-scroll"
        role="img"
        aria-label={`Contribution calendar showing ${total} contributions in the last year`}
      >
        <div className="github-calendar">
          <div className="github-month-labels" aria-hidden="true">
            {monthLabels.map(({ month, column }) => (
              <span key={`${month}-${column}`} style={{ gridColumn: column }}>{month}</span>
            ))}
          </div>
          <div className="github-calendar-body">
            <div className="github-weekday-labels" aria-hidden="true">
              {weekdayNames.map((day, index) => <span key={index}>{day}</span>)}
            </div>
            <div className="github-contribution-weeks" aria-hidden="true">
              {weeks.map((week, weekIndex) => (
                <div className="github-contribution-week" key={weekIndex}>
                  {[...week.slice(1), week[0]].map((day, dayIndex) => {
                    if (!day) return <span className="github-contribution-day github-day-empty" key={dayIndex} />

                    const dateLabel = day.date.toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      timeZone: 'UTC',
                    })
                    return (
                      <span
                        className={`github-contribution-day github-level-${day.count === 0 ? 0 : day.count < 3 ? 1 : day.count < 6 ? 2 : day.count < 10 ? 3 : 4}`}
                        key={dayIndex}
                        title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${dateLabel}`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="github-calendar-legend" aria-hidden="true">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => <i className={`github-contribution-day github-level-${level}`} key={level} />)}
        <span>More</span>
      </div>
    </div>
  )
}

function GitHubStats() {
  const [contributionData, setContributionData] = useState(null)
  const [profileData, setProfileData] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)
  const controllerRef = useRef(null)

  useEffect(() => {
    const controller = new AbortController()
    controllerRef.current = controller
    fetchGitHubData(controller.signal)
      .then(({ contributions, profile }) => {
        if (controller.signal.aborted) return
        setContributionData(contributions)
        setProfileData(profile)
        setLastUpdated(new Date())
      })
      .catch((requestError) => {
        if (!controller.signal.aborted) {
          setError(requestError.message || 'Could not load GitHub data. Please try again.')
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false)
      })

    return () => controller.abort()
  }, [])

  function loadGitHubData() {
    controllerRef.current?.abort()
    const controller = new AbortController()
    controllerRef.current = controller
    setIsLoading(true)
    setError('')
    fetchGitHubData(controller.signal)
      .then(({ contributions, profile }) => {
        if (controller.signal.aborted) return
        setContributionData(contributions)
        setProfileData(profile)
        setLastUpdated(new Date())
      })
      .catch((requestError) => {
        if (!controller.signal.aborted) {
        setError(requestError.message || 'Could not load GitHub data. Please try again.')
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false)
      })
  }

  const stats = profileData
    ? [
      { label: 'Public repositories', value: profileData.repositories, icon: GitBranch },
      { label: 'Stars earned', value: profileData.stars, icon: Star },
      { label: 'Forks', value: profileData.forks, icon: GitFork },
      { label: 'Followers', value: profileData.followers, icon: Users },
    ]
    : []

  return (
    <section className="section github-stats-section reveal" id="github-stats">
      <div className="page-container">
        <div className="section-heading">
          <p className="eyebrow">From my GitHub profile</p>
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-intro">
            A live look at my public contributions and repositories. Data loads from GitHub when you visit.
          </p>
        </div>
        <div className="github-stats-toolbar">
          <span className="github-live-indicator"><i /> Live public data</span>
          <button className="github-refresh-button" type="button" onClick={loadGitHubData} disabled={isLoading}>
            <RefreshCw size={15} className={isLoading ? 'github-refresh-spinning' : undefined} />
            {isLoading ? 'Updating…' : 'Refresh'}
          </button>
        </div>
        {error && <p className="github-error" role="alert">{error}</p>}
        {isLoading && !contributionData && <p className="github-loading" role="status">Loading GitHub activity…</p>}
        {contributionData && (
          <ContributionCalendar contributions={contributionData.contributions} total={contributionData.total} />
        )}
        {profileData && (
          <div className="github-stat-grid">
            {stats.map(({ label, value, icon: Icon }) => (
              <article className="github-stat-card" key={label}>
                <span className="github-stat-icon"><Icon size={18} /></span>
                <span className="github-stat-value">{value.toLocaleString()}</span>
                <span className="github-stat-label">{label}</span>
              </article>
            ))}
          </div>
        )}
        <div className="github-stats-footer">
          <p>
            Contributions are reported by a public contribution-data service; GitHub may take time to reflect recent activity.
            {lastUpdated && ` Refreshed ${lastUpdated.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}.`}
          </p>
          <a href={githubProfileUrl} target="_blank" rel="noreferrer">
            Visit my GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default GitHubStats
