import SectionTitle from '../components/SectionTitle'

const areas = [
  ['Mini Town', 'A colourful high-street style layout where children can move between play zones freely and safely.'],
  ['Hands-on role play', 'Encourage confidence, communication and imagination through real-world inspired activities.'],
  ['Parent-friendly layout', 'Easy sightlines and a calm pastel finish so adults can supervise comfortably.'],
  ['After school sessions', 'A perfect local option for family time after nursery or school.'],
  ['Special events', 'Seasonal experiences such as Christmas, Halloween and themed role play days.'],
  ['Café corner', 'Hot drinks, kids snacks and light bites to keep visits simple and enjoyable.']
]

export default function ExplorePage() {
  return (
    <section className="section page-top">
      <div className="container">
        <SectionTitle
          eyebrow="Explore"
          title="Discover what makes Little Streets special"
          text="This page is ideal for showing final photos of your completed zones later. For now it introduces the experience and key features."
        />
        <div className="card-grid three-up">
          {areas.map(([title, text]) => (
            <article className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
