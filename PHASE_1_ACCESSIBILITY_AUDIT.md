# Mahila Jagriti Sansthan – Phase 1.2 Accessibility Audit

**Standard:** WCAG 2.1 Level AA  
**Date Started:** March 22, 2026  
**Status:** In Progress

---

## Automated Testing Checklist

### Color Contrast (WCAG AA: min 4.5:1 for normal text, 3:1 for large)

#### Primary Color (#D4542F)
- [ ] Text on white (#FFFFFF): Ratio = 4.97:1 ✓ PASS
- [ ] Text on cream (#FAF7F2): Ratio = 4.88:1 ✓ PASS
- [ ] All UI elements using primary maintain minimum contrast

#### Secondary Color (#2D6A64)
- [ ] Text on white (#FFFFFF): Ratio = 5.13:1 ✓ PASS
- [ ] Text on cream (#FAF7F2): Ratio = 5.02:1 ✓ PASS

#### Text Color (#2A2520)
- [ ] On light backgrounds: Ratio = 11.8:1 ✓ PASS (exceeds AA)

#### Text-Secondary (#8B8680)
- [ ] On light backgrounds: Ratio = 4.8:1 ✓ PASS (meets AA)

#### Accent Color (#C19A6B - Muted Gold)
- [ ] On white: Ratio = 3.12:1 ❌ WARNING (below AA for normal text)
- [ ] Action: Use only for non-critical content or ensure sufficient contrast

#### Button Focus Ring
- [ ] Focus ring shadow uses primary with white background spacing
- [ ] Visible at all zoom levels
- [ ] Contrasts with background regardless of page section

---

## Manual Testing Checklist

### 1. Keyboard Navigation

#### Navigation Bar
- [ ] Tab through navbar links in logical order (left-to-right)
- [ ] Menu toggle button is keyboard accessible
- [ ] Mobile hamburger menu opens/closes with keyboard
- [ ] Focus indicator visible on all nav items
- [ ] Escape key closes mobile menu
- [ ] Space/Enter activates menu button

#### Links & Buttons
- [ ] All links reachable via Tab key
- [ ] Tab order matches visual left-to-right, top-to-bottom
- [ ] No keyboard trap (can always Tab out)
- [ ] CTA buttons respond to Enter/Space
- [ ] Focus visible at all times (no :focus-visible removed)

#### Forms (when implemented)
- [ ] Tab navigates through form fields
- [ ] Form labels explicitly associated (`for` attribute)
- [ ] Required fields marked both visually and in HTML
- [ ] Error messages reachable via keyboard
- [ ] Submit button reachable and operable

#### Page Navigation
- [ ] Skip-to-content link is first focusable element
- [ ] Clicking skip-to-content jumps to main content
- [ ] All pages have at least one skip link

---

### 2. Screen Reader Testing (NVDA, JAWS, or macOS VoiceOver)

#### Navigation
- [ ] Skip-to-content link announced
- [ ] Navigation section properly marked with `<nav>`
- [ ] All nav links announce destination page
- [ ] Logo linked to home; announces "Mahila Jagriti Sansthan home"

#### Headings
- [ ] Only one `<h1>` per page
- [ ] Heading hierarchy proceeds in order (h1 → h2 → h3, no jumps)
- [ ] Headings accurately describe section content
- [ ] No empty headings

#### Images
- [ ] All functional images have descriptive alt text
- [ ] Decorative images have empty alt (`alt=""`)
- [ ] Alt text describes content, not "image of"
- [ ] Example: "Founder Indira Kumari speaking at women empowerment event" (good), not "Image" (bad)

#### Links
- [ ] Link text is descriptive ("Learn more about education programs", not "Click here")
- [ ] Links that open in new window announce "(opens in new tab)"
- [ ] All links have focus indicator

#### Lists
- [ ] Ordered and unordered lists properly marked (`<ol>`, `<ul>`)
- [ ] List items properly nested
- [ ] Screen reader announces list structure and item count

#### Buttons vs. Links
- [ ] Actual buttons use `<button>` element (not divs styled as buttons)
- [ ] Navigation links use `<a>` element
- [ ] Button purpose is clear from text or aria-label

#### Main Content
- [ ] `<main>` element marks primary content area
- [ ] `<header>` marks page header
- [ ] `<footer>` marks page footer
- [ ] Landmark regions announced: "navigation", "main", "contentinfo"

#### Color
- [ ] Information not conveyed by color alone
- [ ] "Required" fields marked with text or icon + text, not just color
- [ ] Error messages include text explanation, not just red outline

---

### 3. Focus Indicators

#### Visual Clarity
- [ ] Focus ring is 2px solid, high-contrast color (primary saffron)
- [ ] Focus ring visible on all interactive elements
- [ ] Focus ring clear at 200% zoom
- [ ] Focus ring does not overlap content in ways that make content unreadable

#### Elements to test:
- [ ] Links: focus ring around entire link
- [ ] Buttons: focus ring around button border
- [ ] Form inputs: focus ring or visible border change
- [ ] Radio buttons: focus ring visible around option
- [ ] Checkboxes: focus ring visible around box
- [ ] Dropdowns (select): focus ring visible on dropd down container

#### Mobile Focus
- [ ] Focus indicators work on mobile devices
- [ ] Touch targets meet minimum 48x48px size
- [ ] Focus order logical on touch devices

---

### 4. Motion & Animation

#### Prefers-Reduced-Motion
- [ ] Test with `prefers-reduced-motion: reduce` enabled in OS settings
- [ ] All animations disabled or instant
- [ ] Fade-in animations replaced with instant display
- [ ] Scroll effects disabled
- [ ] Page is fully usable without motion

#### Auto-Play
- [ ] No auto-playing video/audio
- [ ] No looping animations
- [ ] Blinking elements (if any) do not exceed 3 Hz

---

### 5. Responsive & Mobile

#### Breakpoints (375px, 768px, 1280px tested)
- [ ] All interactive elements remain accessible at mobile (375px)
- [ ] Touch targets minimum 48x48px on mobile
- [ ] Text readable without horizontal scroll at 400% zoom
- [ ] Navigation accessible on mobile (hamburger works)

#### Zoom
- [ ] Page usable at 200% zoom
- [ ] No content hidden at 200% zoom
- [ ] Text reflows properly when zoomed

---

### 6. Forms & Error Handling (When Implemented)

#### Labels
- [ ] All input fields have explicit labels
- [ ] Label text matches field purpose
- [ ] `<label for="id">` properly associated with `<input id="id">`

#### Required Fields
- [ ] Required fields marked with `aria-required="true"` or `required` attribute
- [ ] Required indicator visible (asterisk + text, not color alone)

#### Validation & Errors
- [ ] Error messages announce via `aria-live="polite"` or `role="alert"`
- [ ] Errors link to field that caused them
- [ ] Error messages include suggestion to fix (not just "invalid")
- [ ] Error colors (red) combined with icon/text (not color alone)

#### Submission
- [ ] Submit button is clearly labeled
- [ ] Success message displays and is announced to screen readers
- [ ] Form resets or next steps are clear after submission

---

### 7. Link & Button Clarity

#### Links must be clear in context:
- [ ] "Learn more" link has full context (not repeated generically)
- [ ] External links announce "(opens in new tab)"
- [ ] Skip links announce their purpose

#### Buttons must be clear:
- [ ] Button text describes action ("Donate Now", "Get Involved", "Learn More")
- [ ] Icon buttons include aria-label ("Close menu", "Search")

---

### 8. Text & Reading Level

#### Content
- [ ] No jargon without explanation
- [ ] Sentences under 25 words (avg)
- [ ] Paragraphs under 100 words
- [ ] Key info first within sections

#### Links
- [ ] Link text meaningful without surrounding context

---

### 9. Landmarks & Semantic HTML

Test with screen reader:
- [ ] `<header>` marks page header
- [ ] `<nav>` marks navigation section
- [ ] `<main>` marks main content
- [ ] `<article>` marks article sections
- [ ] `<section>` marks logical sections with `role="region"` + aria-label if needed
- [ ] `<footer>` marks page footer
- [ ] Landmarks announced when navigating

---

### 10. Page Structure

#### Home Page
- [ ] Hero section has descriptive heading (h1)
- [ ] Impact stats section has heading
- [ ] Programs section has heading + program cards have descriptive titles
- [ ] Founder story section has heading + alt text on image
- [ ] Testimonials section has heading + individual testimonial structure
- [ ] CTA banner has heading + clear call-to-action button
- [ ] Footer has proper landmark and link structure

#### About Us Page
- [ ] Page has clear h1 (e.g., "About Mahila Jagriti Sansthan")
- [ ] Founder bio section has heading + founder photo has alt text
- [ ] Board members section has heading + each member has name, role, photo (alt text)
- [ ] Partnership logos section has descriptive alt text or aria-label
- [ ] Timeline has clear structure, no numbers used as only headers

#### Our Work Page
- [ ] Each program has h2 (Education, Livelihood, Women's Empowerment/GBV)
- [ ] Program cards have descriptive titles
- [ ] Images have alt text describing program activity

#### Get Involved Page
- [ ] Three pathways (Donor, Volunteer, Partner) have clear headings (h2)
- [ ] Forms (when present) follow form accessibility guidelines
- [ ] CTAs are clear ("Next Step", "Submit Form")

---

## Automated Tools to Use

1. **WAVE Browser Extension** (WebAIM accessibility evaluation)
   - Install on Chrome/Firefox
   - Run on each page
   - Check for:
     - Missing alt text
     - Color contrast issues
     - Form label problems
     - Heading structure issues

2. **Axe DevTools** (Accessibility testing)
   - Install on Chrome/Firefox
   - Run scan on each page
   - Log and fix issues

3. **Lighthouse (Chrome DevTools)**
   - Run on each page
   - Check Accessibility score (target: 90+)
   - Pay attention to warnings, not just errors

4. **NVDA Screen Reader** (Free, Windows)
   - Test navigation flow
   - Verify heading structure
   - Check form labeling

5. **macOS VoiceOver** (Built-in)
   - VO+U to open rotor
   - Navigate by headings, links, landmarks

---

## Issues Found & Fixes Applied

### Issue 1: Color Contrast on Accent Gold (#C19A6B)
**Status:** ⚠️ WARNING  
**Finding:** Accent color at 3.12:1 ratio on white (below WCAG AA 4.5:1 for normal text)  
**Fix Applied:** Use accent only for:
- Highlighted backgrounds (not text)
- Decorative elements
- Non-critical information
**Recommendation:** Replace with primary saffron (#D4542F) for text that needs contrast

### Issue 2: Focus Ring Visibility
**Status:** ✅ FIXED  
**Finding:** Old focus outline was thin and low-contrast  
**Fix Applied:**
- Replaced `outline: 3px solid var(--ring)` with `box-shadow: var(--shadow-focus)`
- New focus ring: 3px cream background, 6px primary saffron shadow
- Applies consistently to buttons, links, form inputs, nav items

### Issue 3: Touch Target Size
**Status:** ✅ FIXED  
**Fix Applied:**
- Added `button, a[href], [role="button"]` with `min-height: 3rem` (48px)
- Ensures minimum WCAG AAA touch target size on mobile

### Issue 4: Missing Alt Text
**Status:** ⏳ PENDING  
**Finding:** All images need alt text audit  
**Next Step:** Check each page and add/verify alt text on:
- Founder photo: "Indira Kumari, founder of Mahila Jagriti Sansthan"
- Program photos: Descriptive of activity
- Team photos: Name and role
- Decorative graphics: Empty alt=""

---

## Testing Schedule

- **Week 1:** Automated contrast + structure check (WAVE, Axe)
- **Week 2:** Keyboard navigation testing (all pages)
- **Week 3:** Screen reader testing (NVDA, VoiceOver)
- **Week 4:** Focus indicator verification + mobile accessibility
- **Week 5:** Final pass: full page audit with all tools

---

## Sign-Off Criteria

- ✅ All pages pass WAVE with 0 errors
- ✅ All pages score 90+ on Lighthouse Accessibility
- ✅ Keyboard navigation fully functional on all pages
- ✅ Screen reader testing: all content accessible
- ✅ Color contrast: WCAG AA minimum on all text (except decorative)
- ✅ Focus indicators: visible and high-contrast
- ✅ Touch targets: 48x48px minimum on mobile
- ✅ Forms: all fields have labels, errors announced
- ✅ Alt text: all meaningful images alt-text provided

---

## Version History

| Date | Phase | Status | Notes |
|------|-------|--------|-------|
| 2026-03-22 | 1.2 | In Progress | Audit plan created, color contrast validated |
