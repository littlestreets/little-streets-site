import React, {useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import { ShoppingCart, PawPrint, Siren, Scissors, HardHat, Hand, MapPin, Heart, ShieldCheck, Users, PartyPopper, Coffee, Baby, CalendarDays, Sparkles, Menu as MenuIcon, X, Instagram, Facebook, ArrowRight, Clock, Star } from 'lucide-react';
import './styles.css';

const FB='https://www.facebook.com/share/1GQJqrzmAL/?mibextid=wwXIfr';
const IG='https://www.instagram.com/littlestreets_crossgates?igsh=MTR2OGcxY3Y4bTZmYg==';
const BOOK='#book-now';

function App(){
  const [open,setOpen]=React.useState(false);
  useEffect(()=>{
    const obs=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  },[]);
  const nav=[['Home','#home'],['Explore','#explore'],['Parties & Hire','#parties'],['Menu','#menu'],['FAQs','#faqs'],['About Us','#about']];
  return <>
    <div className="topbar"><span><MapPin size={17}/> Crossgates Shopping Centre, Leeds LS15</span><span className="top-social"><a href={FB}>Facebook</a><a href={IG}>Instagram</a></span></div>
    <header className="nav">
      <a href="#home" className="logo"><img src="/images/logo.jpeg" alt="Little Streets logo" /></a>
      <button className="mobile-toggle" onClick={()=>setOpen(!open)}>{open?<X/>:<MenuIcon/>}</button>
      <nav className={open?'open':''}>{nav.map(([t,h])=><a onClick={()=>setOpen(false)} href={h} key={t}>{t}</a>)}<a onClick={()=>setOpen(false)} className="nav-book" href={BOOK}>Book Now</a></nav>
    </header>
    <main>
      <Hero />
      <Features />
      <Explore />
      <Parties />
      <CafeMenu />
      <BookNow />
      <Faqs />
      <About />
    </main>
    <Footer />
    <FloatingShapes />
  </>
}

function Hero(){return <section id="home" className="hero">
  <div className="hero-copy reveal">
    <div className="eyebrow"><Sparkles size={18}/> Leeds’ new role play village</div>
    <h1>A little world of <span>big imaginations</span></h1>
    <h2>Role play. Learn. Explore. Grow.</h2>
    <p>An interactive children’s role play village where little ones can explore real-world play spaces, use their imagination and enjoy a safe, friendly environment.</p>
    <div className="hero-actions"><a href={BOOK} className="btn primary pulse">BOOK YOUR ADVENTURE <ArrowRight size={20}/></a><a href="#explore" className="btn secondary">Explore Rooms <PawPrint size={20}/></a></div>
  </div>
  <div className="hero-art reveal"><div className="blob"><div className="hero-photo"></div></div><div className="mini-badge bounce"><Heart/> Made for little explorers</div></div>
  <div className="wave"></div>
</section>}

function Features(){const f=[['Imaginative Play','Encouraging creativity and confidence',Heart],['Learn & Grow','Developing skills through fun',Sparkles],['Safe & Friendly','A secure space for little explorers',ShieldCheck],['For Little Ones','Perfect for children and families',Users]];return <section className="features reveal">{f.map(([a,b,I])=><div className="feature" key={a}><I/><div><h3>{a}</h3><p>{b}</p></div></div>)}</section>}

const rooms=[
 ['Supermarket & Café','Shop, serve, scan and pretend to run a busy little café.',ShoppingCart,'shop'],
 ['Vets','Care for animals, check pets in and play little veterinary heroes.',PawPrint,'vets'],
 ['Emergency Services','Respond to pretend emergencies with teamwork and imagination.',Siren,'emergency'],
 ['Beauty Boutique','Style, pamper and play in a bright boutique space.',Scissors,'beauty'],
 ['Construction Zone','Build, fix, dig and create using role play tools.',HardHat,'construction'],
 ['Sensory Play','A calmer space for exploring textures, lights and gentle play.',Hand,'sensory']
];
function Explore(){return <section id="explore" className="section explore"><div className="section-head reveal"><h2>Explore Our Role Play Rooms</h2><p>Discover exciting little places where imaginations can run wild.</p></div><div className="room-grid">{rooms.map(([t,d,I,c],i)=><article className={`room-card ${c} reveal`} style={{transitionDelay:`${i*70}ms`}} key={t}><div className="blur-bg"></div><div className="soon">Coming<br/>Soon</div><div className="room-label"><I/><div><h3>{t}</h3><p>{d}</p></div></div></article>)}</div></section>}

const parties=[
 ['Self catered non-exclusive party','Up to 10 children. Extra places up to 14 max.', '£140'],
 ['Catered non-exclusive party','Food included for up to 10 children.', '£190'],
 ['Self catered exclusive party','Exclusive use party option for your group.', '£225'],
 ['Catered exclusive party','Exclusive party with catering included.', '£275']
];
function Parties(){return <section id="parties" className="section parties"><div className="party-banner reveal"><div><PartyPopper/><h2>Parties & Private Hire</h2><p>From birthday parties to exclusive celebrations, we’ve got you covered.</p></div><a className="btn primary" href={BOOK}>Enquire / Book <ArrowRight/></a></div><div className="party-grid">{parties.map(([t,d,p])=><div className="price-card reveal" key={t}><h3>{t}</h3><p>{d}</p><strong>{p}</strong></div>)}</div><div className="notes reveal"><span>£45 deposit required</span><span>Minimum 72 hours cancellation policy</span><span>Extra children charged at £12 each</span></div></section>}

const menuGroups=[
 ['Hot Drinks', [['Americano','£2.80'],['Latte','£3.20'],['Cappuccino','£3.20'],['Flat White','£3.20'],['Tea','£2.20'],['Hot Chocolate','£3.50'],['Premium Hot Chocolate','£4.00'],['Babyccino','£1.20']]],
 ['Iced Drinks', [['Iced Latte','£3.80'],['Iced Mocha','£4.40'],['Iced Americano','£3.20'],['Iced Cappuccino','£3.20']]],
 ['Extras', [['Syrup Shot','£0.50'],['Oat/Soy Milk upgrade','£0.50'],['Whipped Cream','£0.50'],['Extra Espresso Shot','£0.50']]],
 ['Matcha Drinks', [['Mango Matcha','£4.00'],['Strawberry Matcha','£4.00'],['Blueberry Matcha','£4.00'],['Vanilla Matcha','£4.00']]],
 ['Cold Drinks', [['Fruit Shoot','£1.50'],['Kids Milk','£1.50'],['Bottled Water','£1.50'],['Cans','£2.00'],['Apple Juice','£1.80'],['Orange Juice','£1.80'],['Kids Milkshake','£2.00']]],
 ['Food & Snacks', [['Raisins','£1.00'],['Fruit Snacks','£1.00'],['Yoghurt','£1.50'],['Fruit Pot','£2.00'],['Toast with Butter','£1.20'],['Haribos','£0.50'],['Crisps','£1.20'],['Chocolate Bars','£1.20']]],
 ['Cakes and Treats', [['Tray Bakes','£2.50'],['Flapjacks','£2.50'],['Cake Slice','£3.20'],['Cookies','£1.90'],['Muffins','£2.80']]]
];
function CafeMenu(){return <section id="menu" className="section menu-section"><div className="section-head reveal"><Coffee/><h2>Café Menu</h2><p>Hot drinks, cold drinks, treats and little snacks for little adventurers.</p></div><div className="menu-grid">{menuGroups.map(([g,items])=><div className="menu-card reveal" key={g}><h3>{g}</h3>{items.map(([item,price])=><div className="menu-row" key={item}><span>{item}</span><b>{price}</b></div>)}</div>)}</div></section>}
function BookNow(){return <section id="book-now" className="section book"><div className="book-box reveal"><CalendarDays/><h2>Book Now</h2><p>Online bookings will be available through Regiondo. Your Regiondo booking widget can be embedded here once onboarding is complete.</p><div className="regiondo-placeholder"><strong>Regiondo booking widget area</strong><span>Paste your Regiondo embed code here when ready.</span></div></div></section>}
function Faqs(){const qs=[['What age is Little Streets suitable for?','Little Streets is designed for young children who love imaginative role play, with different spaces to explore.'],['Do adults pay?','Adults are free with a paying child unless otherwise stated for specific events.'],['Can I book a party?','Yes. We offer non-exclusive and exclusive party packages with self catered and catered options.'],['Where are you based?','Unit 47-48, Crossgates Shopping Centre, Leeds LS15.'],['Can I bring food?','Please check individual session and party rules. Our café menu has drinks, snacks and treats available.']];return <section id="faqs" className="section faqs"><div className="section-head reveal"><h2>FAQs</h2><p>Helpful answers before you visit.</p></div><div className="faq-list">{qs.map(([q,a])=><details className="reveal" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>}
function About(){return <section id="about" className="section about"><div className="about-card reveal"><img src="/images/logo.jpeg" alt="Little Streets logo"/><div><h2>About Little Streets</h2><p>Little Streets at Crossgates is a family-friendly role play village created to give children a bright, playful and safe place to explore everyday adventures. From the supermarket to the vets, children can learn through play while grown-ups relax nearby.</p><p>We’re proud to be opening in Crossgates Shopping Centre and can’t wait to welcome local families.</p></div></div></section>}
function Footer(){return <footer><div><img src="/images/logo.jpeg" alt="Little Streets"/><p>Little Streets at Crossgates LTD<br/>Unit 47-48, Crossgates Shopping Centre, Leeds LS15</p></div><div><h3>Quick links</h3><a href="#explore">Explore</a><a href="#parties">Parties & Hire</a><a href="#book-now">Book Now</a><a href="#faqs">FAQs</a></div><div><h3>Follow us</h3><a href={FB}><Facebook/> Facebook</a><a href={IG}><Instagram/> Instagram</a></div></footer>}
function FloatingShapes(){return <div className="floating" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>}

createRoot(document.getElementById('root')).render(<App/>);
