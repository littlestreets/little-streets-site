import SectionTitle from '../components/SectionTitle'

export default function BookNowPage() {
  return (
    <section className="section page-top">
      <div className="container booking-layout">
        <div>
          <SectionTitle
            eyebrow="Book Now"
            title="Ready to visit Little Streets?"
            text="Swap the placeholder button below for your live booking provider link when it’s ready."
          />
          <div className="booking-box">
            <h3>Session pricing</h3>
            <p>Child 1–10: £8.50</p>
            <p>Sibling ticket: £7.00</p>
            <p>Baby under 12 months: £3.50</p>
            <p>Additional adult: £2.00</p>
            <a className="cta-book full-width" href="https://example-booking-link.co.uk" target="_blank" rel="noreferrer">
              Go to live booking system
            </a>
          </div>
        </div>

        <aside className="booking-panel">
          <h3>Memberships</h3>
          <ul>
            <li>1 child monthly pass — £35</li>
            <li>2 children monthly pass — £55</li>
            <li>6 visit bundle — £42.50</li>
            <li>10 visit bundle — £64</li>
          </ul>
          <p className="booking-note">Replace the sample booking link with your booking platform URL in <code>src/pages/BookNowPage.jsx</code>.</p>
        </aside>
      </div>
    </section>
  )
}
