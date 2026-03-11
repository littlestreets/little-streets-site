import SectionTitle from '../components/SectionTitle'

const packages = [
  {
    name: 'Party Package',
    price: '£220',
    details: ['Up to 10 children', 'Exclusive party table with food', 'Additional children £12 each']
  },
  {
    name: 'Premium Party Package',
    price: '£280',
    details: ['Up to 10 children', 'Food included', 'Party bags and themed décor', 'Additional children £12 each']
  },
  {
    name: 'Private Venue Hire',
    price: 'From £450',
    details: ['1.5 hours private hire from £450', '3 hours private hire from £600', 'Up to 25 children', 'Host included for full venue hire']
  }
]

export default function PartiesPage() {
  return (
    <section className="section page-top">
      <div className="container">
        <SectionTitle
          eyebrow="Parties & Hire"
          title="Birthday parties, premium celebrations and private hire"
          text="A bright and premium party page designed to help parents compare packages quickly on desktop and mobile."
        />
        <div className="card-grid three-up pricing-cards">
          {packages.map((pkg) => (
            <article className="package-card" key={pkg.name}>
              <h3>{pkg.name}</h3>
              <div className="price-tag">{pkg.price}</div>
              <ul>
                {pkg.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
