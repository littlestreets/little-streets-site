import { NavLink, Outlet, Link } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/explore', 'Explore'],
  ['/faqs', 'FAQ’s'],
  ['/parties-and-hire', 'Parties & Hire'],
  ['/about-us', 'About Us'],
  ['/book-now', 'Book Now']
]

export default function Layout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <Link to="/" className="brand">
            <img src="/images/logo-round.jpg" alt="Little Streets at Crossgates logo" />
            <div>
              <strong>Little Streets</strong>
              <span>At Crossgates</span>
            </div>
          </Link>

          <nav className="nav-grid" aria-label="Primary">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img src="/images/logo-tall.png" alt="Little Streets at Crossgates" className="footer-logo" />
            <p className="footer-copy">
              Immersive children’s role play sessions in the heart of Crossgates Shopping Centre.
            </p>
          </div>
          <div>
            <h4>Visit us</h4>
            <p>Unit 47-48 (62-63)<br />Crossgates Shopping Centre<br />Leeds LS15</p>
          </div>
          <div>
            <h4>Opening hours</h4>
            <p>Open daily<br />9:00am – 6:00pm</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <p><Link to="/book-now">Book now</Link><br /><Link to="/parties-and-hire">Parties & hire</Link><br /><Link to="/faqs">FAQ’s</Link></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
