import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapPin, CalendarHeart, Cake, Coffee, Sparkles, Users, Baby, Star, Menu, X, ArrowRight, Clock, ShieldCheck, Gift } from 'lucide-react';
import './styles.css';

const socials = {
  facebook: 'https://www.facebook.com/share/1GQJqrzmAL/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/littlestreets_crossgates?igsh=MTR2OGcxY3Y4bTZmYg=='
};

function App(){
  const [page,setPage]=React.useState(location.hash.replace('#','') || 'home');
  const [open,setOpen]=React.useState(false);
  React.useEffect(()=>{ const on=()=>setPage(location.hash.replace('#','')||'home'); addEventListener('hashchange',on); return()=>removeEventListener('hashchange',on)},[]);
  const go=(p)=>{ location.hash=p; setOpen(false); window.scrollTo(0,0); };
  const pages={home:<Home go={go}/>,explore:<Explore/>,faqs:<Faqs/>,parties:<Parties go={go}/>,about:<About/>,book:<BookNow/>};
  return <>
    <TopBar/>
    <nav className="nav">
      <button className="brand" onClick={()=>go('home')}><img src="/images/logo.jpeg"/> <span>Little Streets</span></button>
      <button className="hamb" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      <div className={open?'links open':'links'}>
        {[
          ['home','Home'],['explore','Explore'],['faqs','FAQ’s'],['parties','Parties & Hire'],['about','About Us']
        ].map(([k,v])=><button className={page===k?'active':''} onClick={()=>go(k)} key={k}>{v}</button>)}
        <button className="bookNav" onClick={()=>go('book')}>BOOK NOW</button>
      </div>
    </nav>
    <main>{pages[page]||pages.home}</main>
    <Footer go={go}/>
  </>
}

function TopBar(){return <div className="topbar"><span><MapPin size={16}/> Crossgates Shopping Centre, Leeds LS15</span><span><Clock size={16}/> Opening soon • 9am–6pm daily</span></div>}
function HeroCard({title,sub}){return <section className="pageHero"><h1>{title}</h1><p>{sub}</p></section>}
function Home({go}){return <>
  <section className="hero">
    <div className="heroText">
      <div className="pill"><Sparkles size={16}/> Coming soon to Crossgates</div>
      <h1>A magical little world for big imaginations.</h1>
      <p>Little Streets at Crossgates is an immersive children’s role play village with 7–9 themed play zones, cosy café seating and parties designed to make childhood memories.</p>
      <div className="heroActions"><button className="megaBook" onClick={()=>go('book')}>BOOK NOW <ArrowRight size={22}/></button><button className="softBtn" onClick={()=>go('explore')}>Explore the village</button></div>
    </div>
    <div className="heroVisual"><img src="/images/logo.jpeg"/><div className="bubble b1">Role Play</div><div className="bubble b2">Parties</div><div className="bubble b3">Coffee</div></div>
  </section>
  <section className="categoryGrid">
    <Card icon={<Baby/>} title="Play Sessions" text="1.5 hour sessions with space for little ones to explore safely."/>
    <Card icon={<Cake/>} title="Birthday Parties" text="Party table packages, premium themes and private hire options."/>
    <Card icon={<Coffee/>} title="Family Café" text="Hot drinks, kids boxes, toasties, cakes and little treats."/>
    <Card icon={<CalendarHeart/>} title="Special Events" text="Seasonal events and launch updates coming soon."/>
  </section>
  <section className="banner"><div><h2>Follow our launch journey</h2><p>Sneak peeks, opening announcements and booking release dates will be posted on our socials first.</p></div><div><a className="social fb" href={socials.facebook}>Facebook</a><a className="social ig" href={socials.instagram}>Instagram</a></div></section>
</>}
function Card({icon,title,text}){return <div className="card"><div className="cardIcon">{icon}</div><h3>{title}</h3><p>{text}</p></div>}
function Explore(){return <><HeroCard title="Explore Little Streets" sub="A child-sized village built for imagination, confidence and creative play."/><section className="tiles">{['Mini Café','Construction Corner','Little Shop','Beauty Room','Sensory Space','Town Road','Home Corner','Emergency Services','Creative Zone'].map((t,i)=><div className={'tile t'+(i%5)} key={t}><h3>{t}</h3><p>Designed for role play, social skills and hands-on fun.</p></div>)}</section></>}
function Faqs(){const q=[['Where are you based?','Unit 47–48, Crossgates Shopping Centre, Leeds LS15.'],['What age is it for?','Mainly children aged 1–10, with baby pricing for under 12 months.'],['How long is a session?','Sessions are planned to be 1.5 hours long.'],['Do adults pay?','Adults are free with a paying child. Additional adults are £2.'],['Will you have food and drinks?','Yes, we will have a family café serving hot drinks, snacks, kids boxes, toasties and treats.'],['When can we book?','Bookings will open closer to launch. Follow us on Facebook or Instagram for updates.']];return <><HeroCard title="FAQ’s" sub="Everything parents usually ask before visiting."/><section className="faq">{q.map(([a,b])=><details key={a}><summary>{a}</summary><p>{b}</p></details>)}</section></>}
function Parties({go}){return <><HeroCard title="Parties & Private Hire" sub="Birthday magic, party food and exclusive hire options."/><section className="pricing"><Price title="Party Package" price="£220" points={['10 children included','Exclusive party table','Food included','Extra children £12 each']}/><Price title="Premium Party" price="£280" points={['Everything in standard','Party bags','Themed décor','Great for bigger celebrations']}/><Price title="Private Hire" price="From £450" points={['1.5h hire £450','3h hire £600','Max 25 children','Host included for full hire']}/></section><div className="center"><button onClick={()=>go('book')} className="megaBook">Enquire / Book a Party</button></div></>}
function Price({title,price,points}){return <div className="price"><h3>{title}</h3><div className="amount">{price}</div>{points.map(p=><p key={p}><Star size={15}/>{p}</p>)}</div>}
function About(){return <><HeroCard title="About Us" sub="A family-friendly role play village created for children and grown-ups to enjoy together."/><section className="about"><img src="/images/logo.jpeg"/><div><h2>Welcome to Little Streets at Crossgates</h2><p>We’re creating a bright, safe and exciting role play space where children can explore everyday life through imagination. Parents can relax in our café while little ones play, learn and make memories.</p><p>Our venue will be open daily from 9am–6pm, with sessions, parties, private hire and special events throughout the year.</p></div></section></>}
function BookNow(){return <><HeroCard title="Book Now" sub="Bookings are opening soon. Follow us for the release date."/><section className="bookPanel"><h2>Booking system coming soon</h2><p>We’ll be using online bookings for play sessions, parties and private hire. Follow us on Facebook and Instagram to be first to know when spaces go live.</p><div><a className="social fb" href={socials.facebook}>Facebook Updates</a><a className="social ig" href={socials.instagram}>Instagram Updates</a></div></section></>}
function Footer({go}){return <footer><div><h3>Little Streets at Crossgates</h3><p>Unit 47–48, Crossgates Shopping Centre, Leeds LS15</p></div><div className="footlinks"><button onClick={()=>go('home')}>Home</button><button onClick={()=>go('book')}>Book Now</button><a href={socials.facebook}>Facebook</a><a href={socials.instagram}>Instagram</a></div></footer>}

createRoot(document.getElementById('root')).render(<App/>);
