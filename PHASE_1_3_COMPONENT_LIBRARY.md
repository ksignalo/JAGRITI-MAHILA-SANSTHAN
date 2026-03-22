# Phase 1.3: Trust Component Library

**Status:** ✅ Component Stubs Created
**Date:** March 22, 2026

---

## Components Created

### 1. TrustBanner.jsx
**Purpose:** Display board members and leadership team
**Location:** `/src/components/TrustBanner.jsx`

**Key Features:**
- Displays leadership team with photos, names, roles, and bios
- Grid-responsive layout (1 col mobile → 3+ cols desktop)
- Creates immediate institutional trust through visible governance

**Props:**
```jsx
<TrustBanner
  members={[
    {
      name: "Indira Kumari",
      role: "Founder / Secretary",
      photo: "/assets/founder-indira-kumari.jpg",
      bio: "Founder with 30+ years of social service experience"
    }
  ]}
  title="Board of Directors"
  subtitle="Leading our mission with vision and accountability"
/>
```

**CSS Classes:**
- `.trust-banner` – section wrapper
- `.trust-members-grid` – responsive grid
- `.trust-member-card` – individual member
- `.trust-member-photo` – photo container
- `.trust-member-role` – role label (styled as uppercase, small)
- `.trust-member-bio` – bio text (softer color)

---

### 2. PartnerLogo.jsx
**Purpose:** Display partner organizations
**Location:** `/src/components/PartnerLogo.jsx`

**Key Features:**
- Displays partner logos as clickable links
- Shows partner name and description on hover
- Communicates collaboration with trusted organizations

**Props:**
```jsx
<PartnerLogo
  partners={[
    {
      name: "Bachpan Bachao Andolan",
      logo: "/assets/partners/bachpan-bachao-andolan.png",
      url: "https://www.bba.org.in",
      description: "Child rescue and rehabilitation partner"
    }
  ]}
  title="Our Partners"
  subtitle="Collaborating with leading organizations"
/>
```

**CSS Classes:**
- `.partner-logo-section` – section wrapper
- `.partner-logo-grid` – responsive grid layout
- `.partner-logo-link` – individual partner link
- `.partner-name` – partner name label

---

### 3. AccountabilityStrip.jsx
**Purpose:** Display legal registration, tax status, and audit information
**Location:** `/src/components/AccountabilityStrip.jsx`

**Key Features:**
- Shows registration number and act
- Displays tax exemption status
- Links to annual reports
- Creates immediate credibility through transparency

**Props:**
```jsx
<AccountabilityStrip
  registrationNumber="12345678"
  registrationAct="Societies Registration Act, 1860"
  registrationDate="1993"
  annualReportUrl="/assets/annual-report-2024.pdf"
  taxExemptStatus="80G exemption: acknowledged"
  lastAuditYear={2024}
/>
```

**CSS Classes:**
- `.accountability-strip` – section wrapper
- `.accountability-items` – flex container for items
- `.accountability-item` – individual info block
- `.accountability-label` – header eyebrow
- `.accountability-footer` – footer text with contact link

---

### 4. TestimonialCard.jsx
**Purpose:** Display beneficiary testimonials
**Location:** `/src/components/TestimonialCard.jsx`

**Key Features:**
- Shows authenticated quotes from program beneficiaries
- Includes attribution, program name, and optional photo
- Creates trust through real voices

**Props:**
```jsx
<TestimonialCard
  quote="I learned tailoring at MJS and now earn ₹8,000/month, supporting my family"
  attribution="Priya Singh"
  program="Skill Development Program"
  role="Woman Entrepreneur"
  photo="/assets/testimonials/priya.jpg"
/>
```

**CSS Classes:**
- `.testimonial-card` – card wrapper
- `.testimonial-quote` – blockquote styling
- `.testimonial-attribution` – flex container for photo + info
- `.testimonial-photo` – beneficiary photo
- `.testimonial-name` – name (bold)
- `.testimonial-role` – role label (softer color)
- `.testimonial-program` – program name (context)

---

### 5. ImpactMetric.jsx
**Purpose:** Display impact statistics with animation
**Location:** `/src/components/ImpactMetric.jsx`

**Key Features:**
- Shows statistics (numbers + labels + context)
- Animates on scroll into view using `useScrollReveal` hook
- Supports color theming (primary/secondary/accent)
- Includes optional context information

**Props:**
```jsx
<ImpactMetric
  icon="👩"
  value="15,000+"
  label="Women Empowered"
  context="Through skill training and livelihood programs"
  color="primary"
  animated={true}
/>
```

**CSS Classes:**
- `.impact-metric` – card wrapper
- `.impact-metric--primary`, `.--secondary`, `.--accent` – color variants
- `.impact-metric-icon` – icon container
- `.impact-metric-value` – large number (animated)
- `.impact-metric-label` – label text
- `.impact-metric-context` – additional context

---

## Component Integration Plan

### Phase 2 (Homepage Redesign)
- **Hero:** Use `ImpactMetric` in stats strip
- **Below hero:** Use `ImpactMetric` for 5 key stats
- **Founder story:** Add `TrustBanner` for leadership section
- **Testimonials:** Use `TestimonialCard` for 3–4 quotes

### Phase 3 (About Us Page)
- **Board section:** Use `TrustBanner` with full team
- **Partners section:** Use `PartnerLogo` for partner logos
- **Accountability:** Use `AccountabilityStrip` at top of page

### Phase 4 (Our Work Page)
- **Program cards:** Use `ImpactMetric` for program stats
- **Testimonials:** Use `TestimonialCard` for program stories

### Phase 5 (Donation Flow)
- **Impact breakdown:** Use `ImpactMetric` for "your donation supports..."
- **Trust signals:** Use `AccountabilityStrip` in donation form

---

## CSS Styling Requirements

All components use the design tokens from `/src/tokens.css`:

```css
/* Colors (semantic) */
--color-primary: #D4542F;
--color-secondary: #2D6A64;
--color-text: #2A2520;
--color-text-secondary: #8B8680;
--color-bg-light: #FAF7F2;
--color-surface: #FFFFFF;

/* Typography */
--font-display: "Playfair Display", serif;
--font-body: "Source Sans 3", sans-serif;

/* Spacing */
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;

/* Shadows */
--shadow-md: 0 4px 12px rgba(42, 37, 32, 0.12);
--shadow-lg: 0 8px 24px rgba(42, 37, 32, 0.16);

/* Radius */
--radius-md: 1rem;
```

### Styling Notes
- All components are **mobile-first responsive**
- Headings use `--font-display` (Playfair Display)
- Body text uses `--font-body` (Source Sans 3)
- Spacing uses 8px grid system
- Shadows provide depth; cards use `--shadow-md` or `--shadow-lg`
- Focus states use `var(--shadow-focus)` for accessibility
- Hover states: `transform: translateY(-3px)` + increased shadow

---

## Next Steps: Phase 1.4

Implement updated **Navigation & Header Overhaul**:
- [ ] Create sticky navbar component
- [ ] Add skip-to-content link
- [ ] Mobile hamburger menu with focus trap
- [ ] Donate button (always visible, primary color)
- [ ] Breadcrumb navigation for sub-pages
- [ ] Hover + focus states on all nav links

**Target:** Navbar component ready for deployment on all pages by end of Phase 1

---

## Component Testing Checklist

Before deploying to production, each component should:

- [ ] **Accessibility**
  - Keyboard navigable (Tab, Shift+Tab, Enter, Escape)
  - Focus states visible
  - Screen reader text accurate
  - WCAG AA color contrast met

- [ ] **Responsiveness**
  - Layout correct at 375px (mobile)
  - Layout correct at 768px (tablet)
  - Layout correct at 1280px (desktop)
  - Touch targets ≥ 48x48px on mobile

- [ ] **Performance**
  - Images lazy-loaded
  - No unused CSS
  - Component re-renders only when props change

- [ ] **Visual**
  - Tokens applied consistently
  - Spacing follows 8px grid
  - Typography uses design fonts
  - Colors contrast with backgrounds

---

**Components Ready for Integration:** March 22, 2026
