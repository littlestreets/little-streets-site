import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

const zones = [
  'Mini supermarket',
  'Construction zone',
  'Salon & pamper station',
  'Veterinary or doctors area',
  'Emergency services corner',
  'Café role play area'
]

const highlights = [
  {
    title: 'Beautiful pastel design',
    text: 'A warm, playful look inspired by premium children’s brands with a soft pastel palette and clean family-friendly layout.'
  },
  {
    title: 'Sessions made for little imaginations',
    text: '1.5 hour role play sessions designed for children aged 1–10 with space for parents to relax, watch and enjoy the café.'
  },
  {
    title: 'Perfect for weekdays and weekends',
    text: 'Ideal for toddler mornings, after school fun, birthday parties and private hire in Crossgates Shopping Centre.'
  }
]

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">Role play village in Crossgates, Leeds</span>
            <h1>Big imaginations start on <span>Little Streets</span>.</h1>
            <p>
              A bright, playful and premium indoor role play experience for children aged 1–10,
              with themed zones, family-friendly sessions and a café for grown-ups.
            </p>
            <div className="hero-actions">
              <Link to="/book-now" className="cta-book">BOOK NOW</Link>
              <Link to="/explore" className="cta-secondary">Explore the village</Link>
            </div>
            <div className="pill-row">
              <span>Open daily 9am–6pm</span>
              <span>1.5 hour sessions</span>
              <span>Parties available</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card-main">
              <img src="/images/logo-round.jpg" alt="Little Streets round logo" />
            </div>
            <div className="hero-card hero-card-reference">
              <img src="/images/style-reference.jpg" alt="Pastel style reference" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Why families will love it"
            title="A colourful, calm and exciting space for little ones to learn through play"
            text="The site is built to feel cheerful and premium on both desktop and mobile, with a standout booking journey and clear family-focused messaging."
          />
          <div className="card-grid three-up">
            {highlights.map((item) => (
              <article className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <SectionTitle
              eyebrow="Inside Little Streets"
              title="Designed around playful mini worlds"
              text="Use this section to show your final role play zones once the fit-out is complete."
            />
            <div className="chips">
              {zones.map((zone) => <span key={zone}>{zone}</span>)}
            </div>
            <Link to="/explore" className="text-link">See all explore areas →</Link>
          </div>
          <div className="pricing-panel">
            <h3>Quick pricing</h3>
            <ul>
              <li><strong>Child 1–10:</strong> £8.50</li>
              <li><strong>Sibling:</strong> £7.00</li>
              <li><strong>Under 12 months:</strong> £3.50</li>
              <li><strong>Additional adult:</strong> £2.00</li>
            </ul>
            <Link to="/book-now" className="cta-book full-width">Reserve a session</Link>
          </div>
        </div>
      </section>

      <section className="section section-accent">
        <div className="container promo-banner">
          <div>
            <span className="eyebrow">Parties & private hire</span>
            <h2>Celebrate birthdays on Little Streets</h2>
            <p>Choose standard parties, premium parties or private venue hire with food, themed extras and memorable role play fun.</p>
          </div>
          <Link to="/parties-and-hire" className="cta-secondary white">View party packages</Link>
        </div>
      </section>
    </>
  )
}
