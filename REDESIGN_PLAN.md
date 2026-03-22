# Mahila Jagriti Sansthan Website Redesign Plan

## Project Foundation

**Organization:** Mahila Jagriti Sansthan (MJS)  
**Mission:** Women empowerment, child rights, community development  
**Founded:** 1993 by Mrs. Indira Kumari  
**Impact Metrics (Non-negotiable):**
- 3,500+ children rescued and rehabilitated
- 15,000+ women empowered
- 30+ years of service
- 1,000+ self-help groups
- 100+ volunteers

---

## Current State Assessment

### What Exists
✅ **Technical foundation:** React + Vite with React Router v6  
✅ **Content structure:** 7 pages defined (Home, About Us, Our Work, Projects, Impact, Partners, Gallery, Contact)  
✅ **Visual system:** Warm NGO palette (terracotta primary, teal secondary, earthy backgrounds)  
✅ **Typography:** Merriweather (headings), Nunito (body)  
✅ **Assets:** Logo, founder photo, 3 program images, milestone data

### Critical Gaps
❌ **Trust signals:** No accountability, transparency, or partnership indicators visible  
❌ **Donor journey:** No clear funnel or donation friction reduction  
❌ **Adaptive components:** Hero lacks impact framing; stats underutilized; testimonials missing  
❌ **Accessibility:** No documented WCAG AA compliance checks  
❌ **Mobile-first:** Layout system not responsive-design-first  
❌ **Behavioral clarity:** No form validation UX, unclear CTAs, missing empty states  
❌ **Mission voice:** Generic NGO tone instead of specific Indira Kumari leadership  
❌ **Micro-interactions:** No meaningful motion or progressive disclosure patterns

---

## Design Philosophy (Per SKILL Mandate)

### Behavior-First Questions This Redesign Solves
1. **"Is this a real organisation?"** → Add transparency, team bios, board info, partner logos, financials
2. **"Will my donation actually help?"** → Impact stories, specific program outcomes, founder accountability
3. **"How do I get involved?"** → Single clear pathway per user type (donor, volunteer, partner)
4. **"What does this look like on the ground?"** → Authentic photography, testimonials, lived experience
5. **"Can I trust this person?"** → Founder story prominence, community endorsement, regulatory proof

### Core Redesign Principles
- **Hierarchy First:** One primary action per screen. Everything recedes that doesn't support it.
- **Trust Before Beauty:** Accountability signals (registration, partners, board) before visual polish.
- **Indian Humanitarian:** Warm, information-rich, human language. No sterile corporate tone.
- **Accessibility as Foundation:** WCAG AA minimum on day one. Keyboard navigation. Respect prefers-reduced-motion.
- **Mobile-First Responsive:** Design for 375px first. 768px and 1280px as expansions, not redesigns.

### Visual Direction (Earthy Editorial)
**Rationale:** Reflects Indira Kumari's 30-year grounded mission, matches rural community context, feels trustworthy and accountable.

**Tokens:**
- **Primary:** Deep saffron (#D4542F) — warmth, advocacy energy
- **Secondary:** Forest green (#2D6A64) — wisdom, sustainability, growth
- **Accent:** Cream/off-white (#FAF7F2) — approachability, clarity
- **Neutrals:** Charcoal (#2A2520) for text; gray (#8B8680) for secondary info
- **Typography:** 
  - Headings: Playfair Display (serif; authoritative, editorial)
  - Body: Source Sans 3 (accessible, open sans-serif)
  - Accent labels: Tracked uppercase (trust markers)

**No looping animation. Section transitions: max 300ms fade/slide. Respect prefers-reduced-motion.**

---

## Phase-by-Phase Redesign Plan

### Phase 1: Foundation & Trust Architecture (Week 1)
**Goal:** Establish credibility and accessibility foundation. Make users feel safe before asking for commitment.

#### 1.1 – Design System & CSS Tokens
- [ ] Define color tokens as CSS custom properties (saffron, forest, cream, charcoal)
- [ ] Set WCAG AA color contracts: text/background min 4.5:1
- [ ] Typography scale using fluid `clamp()` (mobile: 16px body → desktop: 18px body)
- [ ] Spacing system (8px grid): margin/padding scale 8, 16, 24, 32, 48, 64, 96
- [ ] Shadow and radius tokens for consistency
- [ ] CSS custom properties file with prefers-reduced-motion defaults

**Deliverables:** `/src/tokens.css`, updated `/src/styles.css`

#### 1.2 – Accessibility Audit & Compliance
- [ ] Verify all meaningful images have descriptive alt text
- [ ] Check color contrast ratios (use WebAIM)
- [ ] Test keyboard navigation: Tab, Shift+Tab, Enter, Escape, Arrow keys
- [ ] Add skip-to-content link in navbar
- [ ] Implement focus-visible styles on interactive elements
- [ ] Add ARIA landmarks: `<main>`, `<nav>`, `<footer>`, `<section role="region">`
- [ ] Test with screen reader (NVDA or JAWS)
- [ ] Document WCAG AA checklist completion

**Deliverables:** Accessibility report (pass/fail per WCAG 2.1 Level AA standard)

#### 1.3 – Trust Component Library (Component Stubs)
Define but don't fully style yet:
- [ ] `<TrustBanner>` – board member cards with title/bio/photo
- [ ] `<PartnerLogo>` – partner carousel (Bachpan Bachao Andolan, Kailash Satyarthi Foundation, etc.)
- [ ] `<AccountabilityStrip>` – registration number, annual report link, financial transparency
- [ ] `<TestimonialCard>` – quote, attribution, program name, optional photo
- [ ] `<ImpactMetric>` – icon, number (with counter animation on scroll), label, context

**Deliverables:** Component scaffolds in `/src/components/` with placeholder props

#### 1.4 – Navigation & Header Overhaul
- [ ] Sticky navbar with logo, navigation items, donate button (always visible, primary color)
- [ ] Mobile hamburger menu with focus trap
- [ ] Skip-to-content link
- [ ] Breadcrumb or page title in header for sub-pages
- [ ] Hover states and focus states for all links (underline + color change)

**Deliverables:** `<NavBar>` component, `/src/components/NavBar.jsx`

---

### Phase 2: Homepage Redesign (Week 2)
**Goal:** Communicate mission, founder leadership, and impact in 90 seconds. Create emotional connection + trust.

#### 2.1 – Hero Section (Redesigned)
**User Job:** "Who is this and what do they do?"

**UX Strategy:**
- Headline: One clear sentence, mission voice
- Subheading: Specific impact (numbers, lived example)
- Below-fold strip: 3–4 key stats with icons (years, women, children, volunteers)
- CTA: Dual actions — "Discover Our Work" (learn more) + "Donate Now" (convert)
- Background: Authentic founder photo (right side) + illustrative gradient overlay

**Layout:**
- Mobile (375px): Stacked; photo below headline
- Tablet (768px): Headline + subhead on left 50%, stats strip below full width
- Desktop (1280px): Headline on left 45%, stats inline to right; photo on right 55%

**Interaction:**
- Fade-in on page load (300ms, prefers-reduced-motion: none)
- Stats counter increments on scroll-into-view
- CTA buttons have hover lift (subtle translate-y)

**Deliverables:** Updated `<HomePage>` hero section with new layout

#### 2.2 – Impact Surface (Redesigned Stats)
**User Job:** "Give me numbers I can believe in."

**Strategy:**
Replace current stats block with:
- 5 metrics: Years Active (30+), Women Empowered (15,000+), Children Rescued (3,500+), SHGs (1,000+), Volunteers (100+)
- Each stat: icon + number + label
- Context under each: e.g., "3,500+ children rescued and rehabilitated from labour, trafficking, exploitation"
- Color-coded icons (primary for first/last, secondary for middle)
- On scroll: number counter animates from 0 → final (once, ~1200ms)

**Deliverables:** `<ImpactStats>` component with animation hook

#### 2.3 – Program Overview (Card Grid)
**User Job:** "What does MJS actually do?"

**Strategy:**
Show 3 core program cards (education, livelihood, women empowerment/GBV) with:
- Program image (from existing assets or placeholder)
- Program title
- 2–3 bullet points (specific outcomes, not buzzwords)
- "Learn More" link → routes to /our-work

**Layout:**
- Mobile: 1 column, stacked
- Tablet: 2 columns
- Desktop: 3 columns, equal height

**Deliverables:** `<ProgramCard>` component, deployed on home

#### 2.4 – Founder Story Section (Scroll-Reveal)
**User Job:** "Who is leading this and why should I trust them?"

**Strategy:**
- Headline: "Driven by Indira Kumari, Three Decades of Action"
- Photo (left, sticky on scroll): Indira Kumari
- Text (right, appears on scroll-into-view): 2–3 paragraph bio highlighting:
  - Educational background
  - Moment she saw the need (witnessed child labour, gender inequality)
  - Founding vision (1993)
  - Key achievements (JJB member, CWC member, partnerships with Bachpan Bachao Andolan)
  - Current commitment (mission continues)

**Interaction:**
- Photo sticky on scroll (desktop only; mobile: normal scroll)
- Text fades in as user scrolls down

**Deliverables:** `<FounderStory>` component with layout

#### 2.5 – Testimonials Section (Carousel Alternative)
**User Job:** "Does this actually help real people?"

**Strategy:**
Instead of auto-playing carousel (accessibility risk), use:
- Stacked testimonial cards (mobile)
- Tab-based selector (3–4 tabs; each shows one testimonial)
- Each testimonial: quote, name, program/role, optional icon
- Example: "I learned tailoring at MJS and now earn ₹8,000/month" — Woman, Skill Development Program

**Interaction:**
- Tab focus visible
- Arrow keys navigate between tabs
- Quote highlight color = primary (saffron)

**Deliverables:** `<TestimonialBlock>` component with tab keyboard support

#### 2.6 – CTA Banner (Above Footer)
**User Job:** "One last reason to act."

**Strategy:**
- High-contrast banner (inverse: cream bg, forest text)
- Headline: "Your support transforms lives" (or similar)
- Subhead: Call-specific stat (e.g., "For ₹1,000, one woman receives skill training")
- Primary CTA: "Donate Now" (primary saffron button)
- Secondary CTA: "Learn More About Our Work" (link)

**Deliverables:** `<CTABanner>` component

---

### Phase 3: About Us Page (Week 2–3)
**Goal:** Build institutional trust; showcase accountability and governance.

#### 3.1 – About Hero
- Headline: "Three Decades of Community-Led Change"
- Subhead: Core mission statement (from requirements)
- Visual: 3 images side-by-side (or stacked on mobile): founder, team, community work

#### 3.2 – Organization Overview
- **Who We Are:** Org intro + founding story (from requirements, first 2–3 paragraphs)
- **Our Theory of Change:** How we work (Listen → Build Skills → Sustain)
- **Governance:** Board of Directors table (name, role, photo, 1-line bio)
  - Indira Kumari (Founder/Secretary)
  - Ajit Kumar Mishra (President)
  - Devendar Chaudhary (Treasurer)
  - Azzmatun Nisha, Divyanshu Bhushan, Vishav Raj (Board Members)

#### 3.3 – Partnership & Credibility
- **Legal Registration:** "Registered under Societies Registration Act, 1860"
- **Partnerships:** Logo carousel (Bachpan Bachao Andolan, Kailash Satyarthi Foundation, govt agencies)
- **Recognition:** Awards, certifications, media mentions
- **Accountability:** Link to Annual Report (placeholder for now)

#### 3.4 – Timeline / Milestones
Redesign `<TimelineCard>` component:
- Vertical timeline (left: year, right: content)
- Collapsible detail sections (already in code, but style with animations)
- Color gradient: early years (light cream) → recent (primary saffron)

**Deliverables:** Complete `/about-us` page with all sections

---

### Phase 4: Our Work / Programs (Week 3–4)
**Goal:** Show specific, lived impact. Build confidence that donations help.

#### 4.1 – Program Structure (3 Core Focus Areas)
1. **Education & Child Rights**
   - Child labour rescue
   - School enrollment & support
   - Baal Panchayat (child leadership)
2. **Livelihood & Economic Empowerment**
   - Skill training (handicrafts, tailoring, etc.)
   - Self-Help Group formation
   - Financial inclusion
3. **Women's Rights & Gender-Based Violence (GBV)**
   - Awareness campaigns
   - Legal support
   - Community mobilization

#### 4.2 – Program Detail Cards
Each program gets a card with:
- Hero image (from DOCS/content/images)
- Program name + headline
- "The Challenge": What problem it addresses
- "Our Approach": How we work (2–3 bullet points)
- "Impact": Specific outcome (e.g., "200 women trained in tailoring in FY2024")
- "Get Involved": Two CTAs (Donate / Learn More)

#### 4.3 – Project Stories (New Component)
Showcase 3–4 short case studies:
- Title: Project name (e.g., "Pakhi Pads for Dignity")
- Image + caption
- Challenge (1 paragraph)
- Solution (1 paragraph)
- Outcome (metric + quote)
- CTA: "Support Similar Programs"

**Deliverables:** Complete `/our-work` page, `/projects` page

---

### Phase 5: Donation & Engagement Flow (Week 4)
**Goal:** Reduce anxiety. Make giving easy and transparent.

#### 5.1 – Get Involved Page
Redesign as three-path funnel:

**Path 1: Become a Donor**
- Process: One-time → Monthly
- Security signals: "Secure payment", "No spam", "Transparent reporting"
- Amounts pre-filled: ₹500, ₹1,000, ₹5,000, ₹10,000, Custom
- CTA: "Proceed to Donation" → Payment gateway

**Path 2: Volunteer**
- Who we need: Field facilitators, teachers, coordinators, support staff
- Form: Name, Email, Phone, Location, Interests (checkboxes)
- Validation: Clear, calm errors
- Success message: "We'll be in touch within 48 hours"

**Path 3: Become a Partner**
- Types: CSR/corporate, institutional, individual partner
- Form: Organization name, contact, scope
- CTA: "Schedule a Discussion"

#### 5.2 – Payment/QR Page
- Hero: "Support MJS Through Multiple Channels"
- Options: Credit card, UPI, Bank transfer, QR code
- For each: Step-by-step instructions, support contact
- Trust signals: "256-bit encryption", "Certified payment partner"

#### 5.3 – Form Components
**Donate Form:**
- Amount selector (buttons, not dropdown)
- Recurrence toggle (one-time / monthly)
- Name, Email, Phone, Address (if recurrence)
- Checkbox: "Send me updates" (opt-in, default unchecked)
- Submit button (primary)
- Validation: Real-time, calm tone (no red X icons; use right checkmarks)

**Deliverables:** Donation flow, form components, validation UX

---

### Phase 6: Media Centre & Gallery (Week 4–5)
**Goal:** Humanize the mission. Show community, not stock photos.

#### 6.1 – Media Centre
- **Press Section:** Media mentions (headline, publication, date, link)
- **Gallery Section:** Program photos organized by theme
- **Blog/News** (future expansion): Recent updates

#### 6.2 – Photo Gallery
- Lazy-loaded grid (3 columns on desktop, 1–2 on mobile)
- Image dimensions: aspect ratio 4:3 or 16:9 (consistent)
- Lightbox preview (click image → modal with image + caption)
- Alt text on all: "Women learning tailoring at Darbhanga center, 2024"

**Deliverables:** `/media` page, `/gallery` page, lightbox component

---

### Phase 7: Contact & Accessibility Final Pass (Week 5)
**Goal:** Make contact seamless. Ensure WCAG AA across entire site.

#### 7.1 – Contact Page
- **Header:** "Get in Touch"
- **Three Sections:**
  1. Contact form (no spam, calm validation)
  2. Address block + embedded map (or iframe address)
  3. Email/phone (clickable: `<a href="mailto:...">`)

**Form:**
- Name, Email, Phone, Subject (dropdown), Message
- CAPTCHA (friendly, not threatening)
- Validation: Real-time, inline
- Success: "We'll respond within 24 hours"

#### 7.2 – Footer Redesign
Include:
- Logo + mission tagline (50 words max)
- Quick links (3 columns: About, Work, Get Involved)
- Follow us (social icons + links)
- Contact (phone, email)
- Legal: Privacy Policy, Terms of Use
- Copyright: © 1993–2026 Mahila Jagriti Sansthan

#### 7.3 – Full Accessibility Pass
Test entire site:
- [ ] Keyboard-only navigation (no mouse)
- [ ] Screen reader (NVDA, JAWS)
- [ ] Color contrast (WebAIM)
- [ ] Focus indicators visible on all interactive elements
- [ ] Form labels explicit and associated
- [ ] Error messages use `aria-live="polite"` or `role="alert"`
- [ ] Images have meaningful alt text or empty alt if decorative
- [ ] Link text is descriptive ("Learn more about education programs" not "Click here")
- [ ] Video/audio have captions
- [ ] Prefers-reduced-motion respected (no auto-play, limited animation)

**Deliverables:** Full accessibility audit report; corrections applied

---

### Phase 8: Performance & Polish (Week 5–6)
**Goal:** Load fast. Feel smooth. Earn trust through responsiveness.

#### 8.1 – Image Optimization
- Compress all images (TinyPNG, ImageOptim)
- Lazy-load images below fold
- Use responsive images (`<picture>`, `srcset` for retina)
- WebP format where supported

#### 8.2 – Performance
- Measure Core Web Vitals (Lighthouse)
- Bundle analysis: Remove unused CSS/JS
- Preconnect to external resources (fonts, CDN)
- Minify CSS and JavaScript

#### 8.3 – Responsive Testing
Test all pages at breakpoints:
- **375px** (iPhone SE): Single column, large touch targets (min 48x48px)
- **768px** (iPad): 2 columns where appropriate
- **1280px** (Desktop): Full layout, 3+ columns

#### 8.4 – Cross-Browser Testing
- Chrome, Firefox, Safari, Edge
- iOS Safari, Chrome Mobile
- Test forms, buttons, hamburger menu

**Deliverables:** Lighthouse score 90+, Core Web Vitals green

---

## Implementation Timeline

| Phase | Focus | Duration | Key Deliverables |
|-------|-------|----------|------------------|
| 1 | Foundation & Trust | Week 1 | Design system, accessibility audit, component stubs, navbar |
| 2 | Homepage | Week 2 | Hero redesign, impact stats, programs, founder story, testimonials, CTA |
| 3 | About Us | Week 2–3 | Governance, partnerships, timeline, accountability |
| 4 | Our Work / Programs | Week 3–4 | 3 program cards, project stories, detailed pages |
| 5 | Donation Flow | Week 4 | Get Involved, Payment/QR, form components, validation UX |
| 6 | Media & Gallery | Week 4–5 | Media Centre, photo gallery, lightbox |
| 7 | Contact & A11y | Week 5 | Contact form, footer, full accessibility pass |
| 8 | Performance | Week 5–6 | Image optimization, Lighthouse score, responsive test |

**Total: 6 weeks (end-to-end redesign)**

---

## Visual Design Direction: Earthy Editorial

### Rationale
- **Trust:** Grounded, serious, not trendy or novelty-driven
- **Context:** Matches rural community setting (Bihar focus)
- **Leadership:** Reflects Indira Kumari's solid, decade-spanning commitment
- **Warmth:** Deep saffron feels advocacy-driven, not corporate

### Palette
```css
:root {
  --primary: #D4542F;        /* Deep saffron, warm, authoritative */
  --primary-light: #F4B5A0;  /* Lighter saffron for backgrounds */
  --secondary: #2D6A64;      /* Forest green, wisdom & growth */
  --secondary-light: #E8F5F3; /* Teal wash for accents */
  --accent: #C19A6B;         /* Muted gold for highlights */
  --text: #2A2520;           /* Deep charcoal */
  --text-secondary: #8B8680; /* Warm gray */
  --bg-light: #FAF7F2;       /* Cream, off-white */
  --border: #E8E5E0;         /* Subtle border */
}
```

### Typography
- **Headings (h1, h2, h3):** Playfair Display, serif (authoritative, editorial)
- **Body:** Source Sans 3, sans-serif (accessible, open, 18px desktop / 16px mobile)
- **Accent labels:** Tracked uppercase (trust markers, nav, CTAs)
- **Line height:** 1.6 for body (readable), 1.2 for headings

### Motion
- Section entrance: Fade + subtle translate-up (300ms, easing: ease-out)
- Button hover: Color shift + lift (2px translate-y)
- Stats counter: On scroll-into-view (1200ms)
- Respect `prefers-reduced-motion: reduce` (remove all animation, instant display)

### Spacing
- 8px grid system
- Margins/padding: 8, 16, 24, 32, 48, 64, 96px
- Container max-width: 1280px
- Gutters: 16px mobile, 24px tablet, 32px desktop

---

## Accessibility Standards (WCAG 2.1 Level AA)

### Color Contrast
- Text on background: 4.5:1 min (normal text)
- Large text (18pt+): 3:1 min
- Interactive elements: 3:1 min
- Test with WebAIM Contrast Checker

### Keyboard Navigation
- Tab order logical (left→right, top→bottom)
- Focus indicators visible (2px outline, primary color)
- Skip-to-content link focusable before logo
- No keyboard traps

### Screen Reader
- Landmarks: `<nav>`, `<main>`, `<footer>`, `<article>`, `<section role="region">`
- Heading hierarchy: `<h1>` once per page, then `<h2>`, `<h3>` in order
- Images: descriptive alt text or empty alt if decorative
- Form labels: explicit, associated via `for` attribute
- Buttons vs. links: semantic HTML (`<button>` vs. `<a>`)

### Motion
- Respect `prefers-reduced-motion: reduce`
- No auto-playing video/audio
- No flashing (>3 Hz)
- Animations < 5 seconds unless pausable

---

## Trust Architecture Signals

### Before Users Donate/Act
✅ **Founder story** (Indira Kumari photo, 30-year commitment)  
✅ **Board governance** (names, roles visible)  
✅ **Partnership logos** (Bachpan Bachao Andolan, Kailash Satyarthi Foundation)  
✅ **Registration proof** (legal status, Societies Act 1860)  
✅ **Impact numbers** (contextual: "3,500 children rescued" not "large impact")  
✅ **Testimonials** (real names, program, outcomes)  
✅ **Transparency** (link to annual report / financials)  
✅ **Contact accessibility** (phone, email, address, map)  

### During Donation
✅ **Security signals** ("256-bit encryption", "Secure payment partner")  
✅ **Clear amounts** (no guessing; preset buttons)  
✅ **Real-time validation** (not alarming errors; helpful suggestions)  
✅ **Confirmation email** (proof of transaction)  

### After Donation
✅ **Prompt response** (within 24 hours for inquiries)  
✅ **Impact update** (e.g., "Your ₹1,000 supported skill training for 2 women")  
✅ **Tax receipt** (if applicable)  
✅ **Voluntary opt-in** (newsletter, but not mandatory)  

---

## Content Voice & Tone

### Principles
- **Specific, not generic:** "We rescued 47 children from agricultural labour in 2024" (not "We help vulnerable children")
- **Warm, not corporate:** "Mrs. Indira Kumari founded MJS in 1993 because she witnessed..." (not "Our organisation leverages...")
- **Human, not buzzword-heavy:** Avoid jargon (NGO-speak, "stakeholders", "impact metrics"). Use "women", "children", "families", "communities".
- **Action-oriented:** "Donate now", "Learn how you can help", "Get involved"
- **Accountable:** "We measure success by..." (be specific about outcomes)

---

## Success Metrics (Post-Redesign)

Track these to measure impact:

1. **Trust Signal Visibility**
   - [ ] Founder story visible above fold on home (engagement: 70%+ scroll-through)
   - [ ] Partnership logos present and recognizable
   - [ ] Board info accessible (< 3 clicks from home)

2. **Conversion (Donation/Volunteer)**
   - [ ] Donation page load time < 3 seconds
   - [ ] Form completion rate > 40% (measure against form abandonment)
   - [ ] Monthly donors increase (year-over-year)

3. **User Behavior**
   - [ ] Avg session > 2 minutes
   - [ ] Pages per session > 3
   - [ ] Click-through to "Learn More" > 30%
   - [ ] Return visitors > 25%

4. **Technical**
   - [ ] Lighthouse score ≥ 90 (Performance, Accessibility, Best Practices, SEO)
   - [ ] Core Web Vitals: Green (LCP < 2.5s, FID < 100ms, CLS < 0.1)
   - [ ] Mobile accessibility: Fully keyboard navigable, all touch targets ≥ 48x48px

5. **Accessibility Compliance**
   - [ ] WCAG 2.1 Level AA: 100% pass (automated + manual testing)
   - [ ] Screen reader testing: All pages readable, no missing alt text
   - [ ] Keyboard navigation: All interactive elements reachable, no traps

---

## Risk & Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Redesign scope creep (too many features) | Delays, incomplete | Stick to 7-phase checklist; cut scope before adding |
| Image assets unavailable | Can't showcase real programs | Use high-quality placeholders initially; request assets early |
| Accessibility rework mid-project | Late-stage delays | Test a11y every 2 weeks; embed in sprint |
| Donation gateway integration complexity | Payment flow blocked | API integration parallel to UI design; test dummy payments |
| Mobile layout breakage | Poor mobile UX | Test at 375px from day 1; use responsive design from start |
| Content not ready | Pages feel empty | Front-load content writing (Weeks 1–2); use DOCS as source |

---

## Next Steps

1. **Week 1 Kick-off:** Review this plan with team; assign Phase 1 tasks
2. **Design System:** Create `/src/tokens.css` and update `/src/styles.css` with new palette
3. **Accessibility Audit:** Test existing site; document gaps (checklist in Phase 1.2)
4. **Component Library:** Stub out components in Phase 1.3
5. **Content Gathering:** Extract text from DOCS and requirements; prepare images

---

## References

- **SKILL Mandate:** Mahila Jagriti Creative Designer Executionist  
- **Requirements Source:** DOCS/requirements.md  
- **Current Codebase:** React + Vite, React Router v6  
- **Accessibility Standard:** WCAG 2.1 Level AA  
- **Visual Inspiration:** Earthy editorial (Playfair + Source Sans 3, saffron + forest)  
- **Team Leadership:** Indira Kumari (founder), board governance focus  
- **Impact Numbers:** 3,500+ children rescued, 15,000+ women empowered, 30+ years

---

**Redesign Champion:** GitHub Copilot (Claude Haiku 4.5)  
**Phase Plan Created:** March 22, 2026  
**Execution Start:** Ready for Week 1 kickoff
