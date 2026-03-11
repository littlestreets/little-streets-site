import SectionTitle from '../components/SectionTitle'

export default function AboutPage() {
  return (
    <section className="section page-top section-soft">
      <div className="container split-section about-grid">
        <div>
          <SectionTitle
            eyebrow="About Us"
            title="A local family-focused role play village in the heart of Crossgates"
            text="Little Streets at Crossgates was created to give local families a beautiful, imaginative place to spend quality time together."
          />
          <p>
            Our aim is to create a warm, safe and exciting environment where children can explore mini worlds,
            build confidence, play creatively and make happy memories.
          </p>
          <p>
            Located inside Crossgates Shopping Centre in Leeds, Little Streets is designed to be a go-to spot for regular play,
            special occasions and easy family days out.
          </p>
        </div>
        <div className="about-panel">
          <h3>At a glance</h3>
          <ul>
            <li>7–9 themed play zones</li>
            <li>25 children per session</li>
            <li>5 sessions per day</li>
            <li>Open 9am–6pm daily</li>
            <li>Café, parties and private hire</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
