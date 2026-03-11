import { HashRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import Section from "./components/Section";
import founderImage from "../DOCS/Founder_IMG.jpeg";
import logoImage from "../DOCS/MJS LOGO-3.png";
import {
  boardFaces,
  mediaItems,
  navItems,
  operationAreas,
  partnershipItems,
  paymentDetails,
  programCards,
  stats,
  timeline
} from "./content";

function yearNow() {
  return new Date().getFullYear();
}

function HomePage() {
  return (
    <>
      <header className="hero" id="home">
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <p className="eyebrow">Since 1993</p>
          <h1>Empowering Women. Protecting Childhood. Transforming Communities.</h1>
          <p>
            Mahila Jagriti Sansthan advances women empowerment, child rights, and community
            development through grassroots action and long-term partnerships.
          </p>
          <div className="hero-actions">
            <NavLink to="/get-involved" className="cta-link">
              Get Involved
            </NavLink>
            <NavLink to="/our-work" className="cta-link ghost">
              Explore Our Work
            </NavLink>
          </div>
        </div>
      </header>

      <Section
        id="impact"
        eyebrow="Impact"
        title="Three Decades of Measurable Change"
        subtitle="Built through persistent fieldwork, partnerships, and community trust."
      >
        <div className="stat-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Section
        id="about-us"
        eyebrow="About Us"
        title="Grassroots Action Built Over Three Decades"
        subtitle="For over 30 years, the organization has worked on child rights, women empowerment, and community-led development."
      >
        <div className="about-grid">
          <article className="feature-card">
            <h3>Our Story</h3>
            <p>
              Founded in 1993, Mahila Jagriti Sansthan has worked tirelessly against child labour,
              trafficking, and social inequity while enabling women and families to access education,
              dignity, and sustainable opportunities.
            </p>
          </article>
          <article className="feature-card">
            <h3>Area of Operation</h3>
            <ul className="clean-list">
              {operationAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </article>
          <article className="feature-card">
            <h3>Network Partnership</h3>
            <ul className="clean-list">
              {partnershipItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="feature-card">
            <h3>Finance / Accountability</h3>
            <p>
              We maintain transparent operations and evidence-driven implementation, with regular
              program monitoring, documentation, and donor communication.
            </p>
          </article>
        </div>
      </Section>

      <Section
        id="founder-story"
        eyebrow="Founder Story"
        title="Leadership Rooted in Service"
        subtitle="Mrs. Indira Kumari has devoted over three decades to social service, women empowerment, and child rights protection."
      >
        <div className="founder-wrap">
          <img src={founderImage} alt="Founder Indira Kumari" className="founder-image" />
          <div className="founder-content">
            <p>
              Born and raised in Bihar, she began social work in 1990 and founded Mahila Jagriti
              Sansthan in 1993 with a clear vision: empower women, educate children, and strengthen
              marginalized communities.
            </p>
            <div className="timeline">
              {timeline.map((item) => (
                <article key={item.year} className="timeline-item">
                  <h3>{item.year}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="faces"
        eyebrow="Faces"
        title="People Behind The Mission"
        subtitle="Leadership and board members guiding community-focused change."
      >
        <div className="faces-grid">
          {boardFaces.map((face) => (
            <article key={`${face.role}-${face.name}`} className="face-card">
              <h3>{face.name}</h3>
              <p>{face.role}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function WorkPage() {
  return (
    <Section
      id="our-work"
      eyebrow="Our Work"
      title="Program Areas"
      subtitle="Focused interventions that strengthen families and unlock opportunity."
    >
      <div className="program-grid">
        {programCards.map((card) => (
          <article key={card.title} className="program-card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function GetInvolvedPage() {
  return (
    <Section
      id="get-involved"
      eyebrow="Get Involved"
      title="Contribute Skills, Time, Or Resources"
      subtitle="Volunteer, partner, or support local programs for women and children."
    >
      <div className="involved-grid">
        <article className="feature-card">
          <h3>Volunteer</h3>
          <p>Support awareness drives, education outreach, and community field activities.</p>
        </article>
        <article className="feature-card">
          <h3>Partner</h3>
          <p>Collaborate on child rights, women livelihood, and development initiatives.</p>
        </article>
        <article className="feature-card">
          <h3>Donate</h3>
          <p>Strengthen impact through direct financial support and program sponsorship.</p>
        </article>
      </div>
    </Section>
  );
}

function MediaPage() {
  return (
    <Section
      id="media-centre"
      eyebrow="Media Centre"
      title="Print And Online Highlights"
      subtitle="Recent updates, stories, and visibility from community impact work."
    >
      <div className="media-grid">
        {mediaItems.map((item) => (
          <article key={item.title} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <a href={item.url} target="_blank" rel="noreferrer" className="text-link">
              Open source
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ContactPage() {
  return (
    <Section
      id="contact-us"
      eyebrow="Contact Us"
      title="Get In Touch"
      subtitle="Reach us for collaborations, volunteering, media queries, or support."
    >
      <div className="contact-grid">
        <article className="feature-card">
          <h3>Email</h3>
          <a className="text-link" href="mailto:support@mahilajagritisansthan.org">
            support@mahilajagritisansthan.org
          </a>
        </article>
        <article className="feature-card">
          <h3>Website</h3>
          <a className="text-link" href="https://www.mahilajagritisansthan.org" target="_blank" rel="noreferrer">
            www.mahilajagritisansthan.org
          </a>
        </article>
        <article className="feature-card">
          <h3>Mission Promise</h3>
          <p>
            Every contribution helps build a world where every woman is empowered and every child is
            educated.
          </p>
        </article>
      </div>
    </Section>
  );
}

function PaymentPage() {
  const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    paymentDetails.upiUri
  )}`;

  return (
    <Section
      id="payment-qr"
      eyebrow="Payment QR"
      title="Support The Mission Digitally"
      subtitle="Scan the QR code or use UPI details to contribute to ongoing programs."
    >
      <div className="payment-wrap">
        <img src={qrImage} alt="Donation QR code" className="qr-image" loading="lazy" />
        <article className="feature-card payment-details">
          <h3>UPI Details</h3>
          <p>
            <strong>UPI ID:</strong> {paymentDetails.upiId}
          </p>
          <p>
            <strong>Beneficiary:</strong> {paymentDetails.beneficiary}
          </p>
          <p>
            <strong>Purpose:</strong> {paymentDetails.purpose}
          </p>
          <a className="cta-link" href={paymentDetails.upiUri}>
            Open UPI App
          </a>
        </article>
      </div>
    </Section>
  );
}

function Header() {
  return (
    <header className="site-header">
      <nav className="shell nav">
        <NavLink className="brand" to="/" aria-label="Mahila Jagriti Sansthan home">
          <img src={logoImage} alt="Mahila Jagriti Sansthan logo" />
          <span>Mahila Jagriti Sansthan</span>
        </NavLink>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink to={item.href} className={({ isActive }) => (isActive ? "nav-active" : undefined)}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p>© {yearNow()} Mahila Jagriti Sansthan. All rights reserved.</p>
        <NavLink to="/" className="text-link">
          Home
        </NavLink>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main className="route-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/our-work" element={<WorkPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/media-centre" element={<MediaPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/payment-qr" element={<PaymentPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
