import { useState, useEffect } from "react";
import { HashRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import Section from "./components/Section";
import { useScrollReveal } from "./hooks/useScrollReveal";
import founderImage from "../DOCS/Founder_IMG.jpeg";
import logoImage from "../DOCS/MJS LOGO-3.png";
import teamAwarenessImage from "../DOCS/content/images/team-awareness-program.png";
import grassrootsImage from "../DOCS/content/images/grassroots-raw-team-and-villagers.png";
import pakhiPadsImage from "../DOCS/content/images/pakhi-pads-for-dignity.png";
import {
  aboutJourney,
  aboutOrgIntro,
  contactDetails,
  founderMessage,
  gallerySections,
  getInvolvedItems,
  homeIntro,
  impactHighlights,
  mediaItems,
  milestones,
  missionText,
  navItems,
  paymentDetails,
  presenceDistricts,
  projectPrograms,
  stats,
  supportingPartners,
  teamSections,
  visionText,
  workAreas,
} from "./content";

function yearNow() {
  return new Date().getFullYear();
}

function TimelineCard({ item }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="timeline-item">
      <h3>{item.year}</h3>
      <p className="timeline-heading">{item.title}</p>
      <ul className="clean-list timeline-points">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {expanded ? <p className="timeline-detail">{item.detail}</p> : null}
      <button
        type="button"
        className="text-link timeline-toggle"
        onClick={() => setExpanded((state) => !state)}
        aria-expanded={expanded}
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </article>
  );
}

function HomePage() {
  const [statsRef, statsVisible] = useScrollReveal();
  const [ribbonRef, ribbonVisible] = useScrollReveal();
  const [priorityRef, priorityVisible] = useScrollReveal();
  const [approachRef, approachVisible] = useScrollReveal();

  const homeApproach = [
    {
      title: "Listen First",
      text: "We begin with community dialogue to understand local priorities and barriers affecting women and children.",
    },
    {
      title: "Build Skills And Access",
      text: "Field teams connect families with education support, legal awareness, and livelihood opportunities.",
    },
    {
      title: "Sustain Through Partnerships",
      text: "We work with institutions and local groups so outcomes continue beyond individual programs.",
    },
  ];

  return (
    <>
      <header className="hero" id="home">
        <div className="hero-blob-1" aria-hidden="true" />
        <div className="hero-blob-2" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <p className="eyebrow">By Women, For Women</p>
          <h1>
            Empowering Women. Protecting Children. Building Inclusive
            Communities.
          </h1>
          <p>{homeIntro}</p>
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

      <section
        ref={ribbonRef}
        className={`shell home-ribbon reveal${ribbonVisible ? " in-view" : ""}`}
        aria-label="Institutional collaborations"
      >
        <p className="home-ribbon-label">Trusted collaborations</p>
        <div className="home-ribbon-list" role="list">
          {supportingPartners.slice(0, 6).map((partner) => (
            <p key={partner} role="listitem" className="home-ribbon-chip">
              {partner}
            </p>
          ))}
        </div>
      </section>

      <Section
        id="impact"
        eyebrow="Impact"
        title="Decades of Grassroots Impact"
        subtitle="Built through persistent fieldwork, partnerships, and community trust across Bihar."
      >
        <div
          ref={statsRef}
          className={`stat-grid${statsVisible ? " stagger" : ""}`}
        >
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="home-priorities"
        eyebrow="What We Prioritize"
        title="Work Areas Rooted In Community Needs"
        subtitle="From child rights and education to livelihood resilience, each program is designed for local realities."
      >
        <div
          ref={priorityRef}
          className={`program-grid home-priority-grid${priorityVisible ? " stagger" : ""}`}
        >
          {workAreas.slice(0, 3).map((area) => (
            <article key={area.title} className="program-card home-priority-card">
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <ul className="clean-list">
                {area.initiatives.slice(0, 2).map((initiative) => (
                  <li key={initiative}>{initiative}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="home-approach"
        eyebrow="How We Work"
        title="A Practical Path From Awareness To Action"
        subtitle="Our field model combines listening, capacity building, and long-term collaboration."
      >
        <div
          ref={approachRef}
          className={`about-grid home-approach-grid${approachVisible ? " stagger" : ""}`}
        >
          {homeApproach.map((step, index) => (
            <article key={step.title} className="feature-card home-approach-card">
              <p className="home-step-number">0{index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function AboutPage() {
  const [vmRef, vmVisible] = useScrollReveal();
  const [storyRef, storyVisible] = useScrollReveal();
  const [teamRef, teamVisible] = useScrollReveal();

  return (
    <>
      {/* Page identity banner */}
      <div className="page-banner">
        <div className="shell page-banner-inner">
          <p className="eyebrow">Since 1993 · Darbhanga, Bihar</p>
          <h1 className="page-banner-title">
            For Women, Children,
            <br />
            and Inclusive Communities
          </h1>
          <p className="page-banner-sub">{aboutOrgIntro}</p>
        </div>
      </div>

      {/* Quick stats strip */}
      <div className="about-stats-strip shell">
        {stats.map((s) => (
          <div key={s.label} className="about-stat-item">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Vision & Mission */}
      <Section
        id="about-vision"
        eyebrow="What Drives Us"
        title="Vision and Mission"
        subtitle="Rooted in justice, grounded in community — guiding principles sustained over three decades."
      >
        <div
          ref={vmRef}
          className={`vm-grid${vmVisible ? " stagger" : ""}`}
        >
          <article className="vm-card vm-vision">
            <p className="vm-label">Our Vision</p>
            <p>{visionText}</p>
          </article>
          <article className="vm-card vm-mission">
            <p className="vm-label">Our Mission</p>
            <p>{missionText}</p>
          </article>
        </div>
      </Section>

      {/* Story narrative + presence */}
      <Section
        id="about-story"
        eyebrow="Our Story"
        title="Three Decades of Field Work"
        subtitle="Starting in Darbhanga, expanding across Bihar — a journey built on trust, persistence, and community partnerships."
      >
        <div
          ref={storyRef}
          className={`story-grid reveal${storyVisible ? " in-view" : ""}`}
        >
          <div className="story-narrative">
            {aboutJourney.map((para, i) => (
              <p
                key={para}
                className={`story-para${i === 0 ? " story-lead" : ""}`}
              >
                {para}
              </p>
            ))}
          </div>
          <aside className="story-presence">
            <p className="presence-title">Districts Covered</p>
            <div className="district-tags">
              {presenceDistricts.map((d) => (
                <span key={d} className="district-tag">
                  {d}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </Section>

      {/* Founder section */}
      <Section
        id="founder-story"
        eyebrow="Founder"
        title="Leadership Rooted in Service"
        subtitle="Mrs. Indira Kumari founded MJS with a vision to create lasting change for women and children in Bihar."
      >
        <div className="founder-profile">
          <div className="founder-image-frame">
            <img
              src={founderImage}
              alt="Founder Mrs. Indira Kumari"
              className="founder-image"
            />
          </div>
          <div className="founder-quotes">
            {founderMessage.map((paragraph) => (
              <blockquote key={paragraph} className="founder-quote">
                <p>{paragraph}</p>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="timeline timeline-section">
          {milestones.map((item) => (
            <TimelineCard key={item.year} item={item} />
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section
        id="faces"
        eyebrow="Our Team"
        title="Governing and Legal Team"
        subtitle="Structured leadership ensuring accountability, transparency, and mission alignment."
      >
        <div
          ref={teamRef}
          className={`faces-grid${teamVisible ? " stagger" : ""}`}
        >
          {teamSections.map((group) => (
            <article key={group.title} className="face-card">
              <h3>{group.title}</h3>
              <ul className="clean-list">
                {group.members.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function WorkPage() {
  const [areasRef, areasVisible] = useScrollReveal();
  const [projRef, projVisible] = useScrollReveal();

  const areaThemes = [
    { icon: "\u2640", accent: "warm" },
    { icon: "\u271A", accent: "teal" },
    { icon: "\u270E", accent: "blue" },
    { icon: "\u2696", accent: "purple" },
    { icon: "\u2702", accent: "green" },
    { icon: "\u267B", accent: "olive" },
    { icon: "\u2665", accent: "amber" },
  ];

  return (
    <>
      <div className="page-banner">
        <div className="shell page-banner-inner">
          <p className="eyebrow">Our Work</p>
          <h1 className="page-banner-title">
            Seven Pillars of
            <br />
            Community Change
          </h1>
          <p className="page-banner-sub">
            From child rights to women empowerment — thirty years of field work
            across the full spectrum of community resilience.
          </p>
        </div>
      </div>

      <Section
        id="our-work"
        eyebrow="Focus Areas"
        title="What We Do"
        subtitle="Interconnected pillars addressing root causes of inequality and vulnerability."
      >
        <div
          ref={areasRef}
          className={`work-areas-grid${areasVisible ? " stagger" : ""}`}
        >
          {workAreas.map((area, i) => (
            <article
              key={area.title}
              className={`work-area-card wac--${areaThemes[i].accent}`}
            >
              <span className="wac-icon" aria-hidden="true">
                {areaThemes[i].icon}
              </span>
              <div className="wac-body">
                <h3 className="wac-title">{area.title}</h3>
                <p className="wac-text">{area.text}</p>
                <div className="wac-chips">
                  {area.initiatives.map((init) => (
                    <span key={init} className="wac-chip">
                      {init}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="work-projects"
        eyebrow="Programs"
        title="Key Programs & Projects"
        subtitle="Select initiatives that have shaped our impact across Bihar."
      >
        <div
          ref={projRef}
          className={`proj-grid${projVisible ? " stagger" : ""}`}
        >
          {projectPrograms.map((prog, i) => {
            const accents = ["warm", "teal", "purple", "blue", "amber", "green"];
            return (
              <article
                key={prog.title}
                className={`proj-card proj-card--${accents[i % 6]}`}
              >
                <span className="proj-num">0{i + 1}</span>
                <h3 className="proj-title">{prog.title}</h3>
                <p className="proj-summary">{prog.summary}</p>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}

function ProjectsPage() {
  const [projRef, projVisible] = useScrollReveal();
  const [timeRef, timeVisible] = useScrollReveal();

  // Per-project metadata that enriches the content.js data
  const projectMeta = [
    { category: "Livelihood",   partner: "Govt. of Bihar",             year: "1996–98", accent: "green",  icon: "\u2702" },
    { category: "Child Rights", partner: "Bachpan Bachao Andolan",     year: "2002",    accent: "teal",   icon: "\u2605" },
    { category: "Education",    partner: "Kailash Satyarthi Children's Foundation", year: "2019", accent: "blue",   icon: "\u270e" },
    { category: "Skill Dev.",   partner: "Centum Skill India",          year: "2015+",   accent: "purple", icon: "\u25c6" },
    { category: "Relief",       partner: "Nehru Yuva Kendra",           year: "2020",    accent: "amber",  icon: "\u2665" },
    { category: "Livelihood",   partner: "NABARD",                      year: "2023",    accent: "olive",  icon: "\u267b" },
  ];

  return (
    <>
      <div className="page-banner">
        <div className="shell page-banner-inner">
          <p className="eyebrow">Programs &amp; Projects</p>
          <h1 className="page-banner-title">
            Initiatives That
            <br />
            Shaped Our Impact
          </h1>
          <p className="page-banner-sub">
            From child rights to eco-livelihoods — partnerships and programs
            built across three decades of field work in Bihar.
          </p>
        </div>
      </div>

      {/* Featured project cards */}
      <Section
        id="projects"
        eyebrow="Key Projects"
        title="Programs in Focus"
        subtitle="Six defining initiatives across education, child rights, livelihood, and emergency response."
      >
        <div
          ref={projRef}
          className={`pfeat-grid${projVisible ? " stagger" : ""}`}
        >
          {projectPrograms.map((prog, i) => {
            const meta = projectMeta[i] || { category: "Program", partner: "", year: "", accent: "teal", icon: "\u25cf" };
            return (
              <article
                key={prog.title}
                className={`pfeat-card pfeat--${meta.accent}`}
              >
                <div className="pfeat-top">
                  <span className="pfeat-category">{meta.category}</span>
                  <span className="pfeat-year">{meta.year}</span>
                </div>
                <p className="pfeat-icon" aria-hidden="true">{meta.icon}</p>
                <h3 className="pfeat-title">{prog.title}</h3>
                <p className="pfeat-summary">{prog.summary}</p>
                <p className="pfeat-partner">
                  <span className="pfeat-partner-label">With</span> {meta.partner}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Full journey timeline */}
      <Section
        id="projects-timeline"
        eyebrow="Journey"
        title="Thirty Years, Milestone by Milestone"
        subtitle="A chronological record of every major initiative and turning point since 1993."
      >
        <div
          ref={timeRef}
          className={`timeline${timeVisible ? " timeline--visible" : ""}`}
        >
          {milestones.map((item) => (
            <TimelineCard key={item.year} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
}

function ImpactPage() {
  const [statsRef, statsVisible] = useScrollReveal();
  const [highRef, highVisible] = useScrollReveal();

  const highlightMeta = [
    { icon: "\u23F3", accent: "warm",   statValue: "30+",      statUnit: "Years" },
    { icon: "\u2640", accent: "teal",   statValue: "15,000+", statUnit: "Women" },
    { icon: "\u2708", accent: "blue",   statValue: "3,500+",  statUnit: "Children" },
    { icon: "\u270E", accent: "purple", statValue: "5",        statUnit: "Districts" },
    { icon: "\u25C6", accent: "green",  statValue: "1,000+",  statUnit: "SHGs" },
    { icon: "\u2665", accent: "amber",  statValue: "2+",       statUnit: "Crisis\ Responses" },
  ];

  return (
    <>
      <div className="page-banner">
        <div className="shell page-banner-inner">
          <p className="eyebrow">Impact &amp; Achievements</p>
          <h1 className="page-banner-title">
            Thirty Years of
            <br />
            Demonstrated Change
          </h1>
          <p className="page-banner-sub">
            Numbers tell part of the story. Behind each figure is a family,
            a woman with a skill, a child back in school, a community that
            chose a different future.
          </p>
        </div>
      </div>

      {/* Big stat counter strip */}
      <div className="impact-stat-band">
        <div
          ref={statsRef}
          className={`impact-stat-grid shell${statsVisible ? " stagger" : ""}`}
        >
          {stats.map((s) => (
            <div key={s.label} className="impact-stat-block">
              <strong className="isb-value">{s.value}</strong>
              <span className="isb-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement spotlight cards */}
      <Section
        id="impact-page"
        eyebrow="What We\u2019ve Built"
        title="Impact, Area by Area"
        subtitle="Sustained outcomes built with communities across Bihar since 1993."
      >
        <div
          ref={highRef}
          className={`impact-hi-grid${highVisible ? " stagger" : ""}`}
        >
          {impactHighlights.map((item, i) => {
            const meta = highlightMeta[i] || { icon: "\u25CF", accent: "teal", statValue: "", statUnit: "" };
            return (
              <article
                key={item.title}
                className={`impact-hi-card ihc--${meta.accent}`}
              >
                <p className="ihc-icon" aria-hidden="true">{meta.icon}</p>
                <div className="ihc-stat">
                  <span className="ihc-val">{meta.statValue}</span>
                  <span className="ihc-unit">{meta.statUnit}</span>
                </div>
                <h3 className="ihc-title">{item.title}</h3>
                <p className="ihc-text">{item.text}</p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="section shell">
        <div className="impact-cta">
          <div className="impact-cta-copy">
            <p className="eyebrow">Join Us</p>
            <h2>Help Us Write the Next Chapter</h2>
            <p>
              Whether through volunteering, donating, or partnering — your
              support directly reaches women and children in Bihar.
            </p>
          </div>
          <NavLink to="/get-involved" className="cta-link">Get Involved</NavLink>
        </div>
      </section>
    </>
  );
}

function PartnersPage() {
  const [partRef, partVisible] = useScrollReveal();

  const partnerMeta = [
    {
      name: "Bachpan Bachao Andolan",
      sector: "Child Rights",
      icon: "\u2605",
      accent: "teal",
      relation:
        "Co-created Baal Panchayat and Baal Sansad programs in villages, strengthening child participation and rights awareness across Darbhanga.",
    },
    {
      name: "Kailash Satyarthi Children\u2019s Foundation",
      sector: "Education",
      icon: "\u270e",
      accent: "blue",
      relation:
        "Collaborated on the Girls March to School campaign, encouraging school enrollment and continuity for girls in underserved communities.",
    },
    {
      name: "NABARD",
      sector: "Livelihood",
      icon: "\u267b",
      accent: "green",
      relation:
        "Supported jute bag making training for SHG women — an eco-friendly livelihood initiative bridging sustainable enterprise and income generation.",
    },
    {
      name: "Nehru Yuva Kendra",
      sector: "Youth & Skills",
      icon: "\u25c6",
      accent: "purple",
      relation:
        "Facilitated cutting and stitching skill programs during COVID-19, keeping women connected to livelihood opportunities during the lockdown period.",
    },
    {
      name: "Government of Bihar",
      sector: "Governance",
      icon: "\u2696",
      accent: "warm",
      relation:
        "Long-standing field partnership spanning TRYSEM, DWCRA, Bihar Education Project, and environmental awareness campaigns under the Ministry of Environment.",
    },
    {
      name: "CEED",
      sector: "Capacity Building",
      icon: "\u2640",
      accent: "olive",
      relation:
        "Supported organizational capacity and community development initiatives aligned with women empowerment and inclusive grassroots programming.",
    },
    {
      name: "Adore India",
      sector: "Community Dev.",
      icon: "\u2665",
      accent: "amber",
      relation:
        "Partner in community outreach and social development programs, expanding reach to marginalized families across Bihar.",
    },
  ];

  return (
    <>
      <div className="page-banner">
        <div className="shell page-banner-inner">
          <p className="eyebrow">Partners &amp; Collaborations</p>
          <h1 className="page-banner-title">
            Change Is Built
            <br />
            Through Partnership
          </h1>
          <p className="page-banner-sub">
            For over thirty years, MJS has worked alongside institutions,
            foundations, and government bodies whose values align with our
            commitment to grassroots justice.
          </p>
        </div>
      </div>

      <Section
        id="partners"
        eyebrow="Our Partners"
        title="Institutions That Stand With Us"
        subtitle="Seven collaborations spanning child rights, education, livelihoods, and community development."
      >
        <div
          ref={partRef}
          className={`ptnr-grid${partVisible ? " stagger" : ""}`}
        >
          {partnerMeta.map((p) => (
            <article key={p.name} className={`ptnr-card ptnr--${p.accent}`}>
              <div className="ptnr-top">
                <span className="ptnr-icon" aria-hidden="true">{p.icon}</span>
                <span className="ptnr-sector">{p.sector}</span>
              </div>
              <h3 className="ptnr-name">{p.name}</h3>
              <p className="ptnr-relation">{p.relation}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="section shell">
        <div className="ptnr-cta">
          <div className="ptnr-cta-copy">
            <p className="eyebrow">Collaborate</p>
            <h2>Become a Partner</h2>
            <p>
              If your organisation shares our vision of equitable, dignified
              community development — we would love to connect and explore
              how we can work together.
            </p>
          </div>
          <NavLink to="/contact" className="cta-link">Get in Touch</NavLink>
        </div>
      </section>
    </>
  );
}

function GalleryPage() {
  const [photosRef, photosVisible] = useScrollReveal();
  const [catRef, catVisible] = useScrollReveal();
  const galleryPhotoStories = [
    {
      src: teamAwarenessImage,
      alt: "Girls march campaign with community volunteers in an urban street",
      title: "Girls March To School",
      text: "Community-led street mobilization encouraging education for girls.",
      tone: "teal",
    },
    {
      src: grassrootsImage,
      alt: "Village awareness session with women, children, and field facilitator",
      title: "Grassroots Awareness Session",
      text: "Doorstep outreach in rural communities through dialogue and participation.",
      tone: "warm",
    },
    {
      src: pakhiPadsImage,
      alt: "School girls holding notebooks for the Pakhi Pads for Dignity initiative",
      title: "Sakhi Pads For Dignity",
      text: "Health dignity initiative focused on adolescent girls and awareness support.",
      tone: "purple",
    },
  ];

  return (
    <>
      <div className="page-banner">
        <div className="shell page-banner-inner">
          <p className="eyebrow">Gallery</p>
          <h1 className="page-banner-title">
            Moments From
            <br />
            The Field
          </h1>
          <p className="page-banner-sub">
            Real snapshots from campaigns, trainings, and awareness sessions
            that reflect the people-centered work of Mahila Jagriti Sansthan.
          </p>
        </div>
      </div>

      <Section
        id="gallery"
        eyebrow="Photo Stories"
        title="Ground-Level Visual Journal"
        subtitle="Three featured photo stories from education campaigns, village outreach, and girls' dignity initiatives."
      >
        <div
          ref={photosRef}
          className={`gallery-mosaic${photosVisible ? " stagger" : ""}`}
        >
          {galleryPhotoStories.map((item) => (
            <article key={item.title} className={`gallery-shot gshot--${item.tone}`}>
              <div className="gallery-shot-media">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <div className="gallery-shot-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="gallery-categories"
        eyebrow="Collections"
        title="Browse By Theme"
        subtitle="Organized visual collections from our programs and events."
      >
        <div
          ref={catRef}
          className={`gallery-topic-grid${catVisible ? " stagger" : ""}`}
        >
          {gallerySections.map((category, i) => {
            const topicIcons = ["📸", "🎓", "🤝", "📢", "🏅"];
            return (
              <article key={category} className="gallery-topic-card">
                <span className="gallery-topic-icon" aria-hidden="true">
                  {topicIcons[i % topicIcons.length]}
                </span>
                <h3>{category}</h3>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}

function GetInvolvedPage() {
  return (
    <Section
      id="get-involved"
      eyebrow="Get Involved"
      title="Contribute Skills, Time, or Resources"
      subtitle="Support local programs for women and children through collaboration and action."
    >
      <div className="involved-grid">
        {getInvolvedItems.map((item) => (
          <article key={item} className="feature-card">
            <h3>{item}</h3>
          </article>
        ))}
      </div>
      <div className="cta-band">
        <p>Digital contribution option is available for immediate support.</p>
        <NavLink to="/payment-qr" className="cta-link">
          Open Payment QR
        </NavLink>
      </div>
    </Section>
  );
}

function MediaPage() {
  return (
    <Section
      id="media"
      eyebrow="Media"
      title="Media and Publications"
      subtitle="News, events, reports, and campaign documentation."
    >
      <div className="media-grid">
        {mediaItems.map((item) => (
          <article key={item.title} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ContactPage() {
  const [infoRef, infoVisible] = useScrollReveal();
  const [actionRef, actionVisible] = useScrollReveal();
  const quickActions = [
    {
      title: "Call The Team",
      detail: contactDetails.phones.join(" / "),
      href: `tel:${contactDetails.phones[0]}`,
      cta: "Call Now",
      icon: "\u260E",
    },
    {
      title: "Email Us",
      detail: contactDetails.email,
      href: `mailto:${contactDetails.email}`,
      cta: "Send Email",
      icon: "\u2709",
    },
    {
      title: "Visit Office",
      detail: "Darbhanga, Bihar",
      href: contactDetails.mapUrl,
      cta: "Open Map",
      icon: "\u25CF",
    },
    {
      title: "Support Digitally",
      detail: "UPI and QR contribution",
      href: "#/payment-qr",
      cta: "Open Payment",
      icon: "\u2665",
    },
  ];

  return (
    <>
      <div className="page-banner">
        <div className="shell page-banner-inner">
          <p className="eyebrow">Contact</p>
          <h1 className="page-banner-title">
            Let Us Connect
            <br />
            And Collaborate
          </h1>
          <p className="page-banner-sub">
            Reach Mahila Jagriti Sansthan for partnerships, field support,
            volunteering, or contribution-related queries.
          </p>
        </div>
      </div>

      <Section
        id="contact"
        eyebrow="Reach The Team"
        title="Contact Information"
        subtitle="Use the channel that works best for you. We usually respond quickly during working hours."
      >
        <div
          ref={infoRef}
          className={`contact-layout${infoVisible ? " reveal in-view" : " reveal"}`}
        >
          <article className="contact-main-card">
            <p className="contact-card-eyebrow">Office Address</p>
            <h3>{contactDetails.address}</h3>

            <div className="contact-lines">
              <p>
                <strong>Phone:</strong>{" "}
                {contactDetails.phones.map((phone, i) => (
                  <span key={phone}>
                    <a className="text-link" href={`tel:${phone}`}>
                      {phone}
                    </a>
                    {i < contactDetails.phones.length - 1 ? " / " : ""}
                  </span>
                ))}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a className="text-link" href={`mailto:${contactDetails.email}`}>
                  {contactDetails.email}
                </a>
              </p>
            </div>

            <div className="contact-main-actions">
              <a
                className="cta-link"
                href={contactDetails.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                {contactDetails.mapLabel}
              </a>
              <NavLink className="cta-link ghost" to="/payment-qr">
                Support via UPI QR
              </NavLink>
            </div>
          </article>

          <aside className="contact-side-card">
            <p className="contact-card-eyebrow">When You Reach Out</p>
            <ul className="clean-list">
              <li>Collaboration and institutional partnership discussions</li>
              <li>Volunteering and field engagement opportunities</li>
              <li>Program information and community support inquiries</li>
            </ul>
          </aside>
        </div>
      </Section>

      <Section
        id="contact-actions"
        eyebrow="Quick Connect"
        title="Choose A Fast Channel"
        subtitle="Direct action cards for immediate communication and support."
      >
        <div
          ref={actionRef}
          className={`contact-action-grid${actionVisible ? " stagger" : ""}`}
        >
          {quickActions.map((item) => (
            <article key={item.title} className="contact-action-card">
              <span className="contact-action-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <a className="text-link" href={item.href}>
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function PaymentPage() {
  const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    paymentDetails.upiUri,
  )}`;

  return (
    <Section
      id="payment-qr"
      eyebrow="Payment QR"
      title="Support The Mission Digitally"
      subtitle="Scan the QR code or use UPI details to contribute to ongoing programs."
    >
      <div className="payment-wrap">
        <img
          src={qrImage}
          alt="Donation QR code"
          className="qr-image"
          loading="lazy"
        />
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <div className="shell nav">
        <NavLink
          className="brand"
          to="/"
          aria-label="Mahila Jagriti Sansthan home"
          onClick={closeMenu}
        >
          <img src={logoImage} alt="Mahila Jagriti Sansthan logo" />
          <span>Mahila Jagriti Sansthan</span>
        </NavLink>

        <nav className="nav-desktop" aria-label="Primary navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "nav-active" : undefined
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? " is-open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="burger-line" aria-hidden="true" />
          <span className="burger-line" aria-hidden="true" />
          <span className="burger-line" aria-hidden="true" />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          <ul className="mobile-nav-list shell">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "nav-active" : undefined
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
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
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/media-centre"
            element={<Navigate to="/media" replace />}
          />
          <Route
            path="/contact-us"
            element={<Navigate to="/contact" replace />}
          />
          <Route path="/payment-qr" element={<PaymentPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
