import SectionTitle from '../components/SectionTitle'

const faqs = [
  ['What age is Little Streets for?', 'Little Streets is designed mainly for children aged 1–10 years old.'],
  ['How long are sessions?', 'Each session lasts 1.5 hours.'],
  ['Do adults pay?', 'One adult attends free with each paying child. Additional adults are £2 each.'],
  ['Do I need to book in advance?', 'Booking ahead is strongly recommended, especially for weekends, school holidays and special events.'],
  ['Do you offer parties?', 'Yes. We offer standard party packages, premium party packages and private venue hire.'],
  ['Do you sell food and drinks?', 'Yes. Our café serves hot drinks, cold drinks, snacks and light food options for adults and children.'],
  ['Where are you based?', 'Unit 47-48 (62-63), Crossgates Shopping Centre, Leeds LS15.'],
  ['Are babies allowed?', 'Yes. Babies under 12 months are welcome at £3.50.']
]

export default function FaqPage() {
  return (
    <section className="section page-top section-soft">
      <div className="container faq-layout">
        <SectionTitle
          eyebrow="FAQ’s"
          title="Everything parents usually ask before visiting"
          text="You can edit these later to match your final policies, food offering and booking provider."
        />
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <article className="faq-item" key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
