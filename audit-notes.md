# Live Site Audit Notes - easyfindprops.com

## Observations from Live Site Review

### General
- Site loads and renders correctly on easyfindprops.com (GoDaddy domain pointing to Render)
- All sections present: Hero, Track Record, Services, How It Works, Why Choose Us, Reviews, Lead Form, Contact, Footer

### Critical Issue: ContactForm vs LeadForm
- TWO forms exist on the page:
  1. **ContactForm component** (in hero area) - has fields: Name, Phone, Requirement, Location, Budget, Details, Form Type. Submits to Google Forms via POST with no-cors. This is the ACTUAL wired form.
  2. **LeadForm inline** (separate section below reviews) - has Name, Phone Number, Requirement Type (dropdown), Location, Budget, Additional Details. This form has NO actual submission logic - it just shows "Thank You" message.
- The AGENT_README.md says "lead forms are not yet connected to an email service or CRM" - this is PARTIALLY incorrect. The ContactForm IS wired to Google Forms. The inline LeadForm is NOT wired.

### OG Tags
- og:image points to `https://easyfindprops.onrender.com/og-image.jpg` - references Render URL, not custom domain
- twitter:image points to `/og-image.jpg` - correct relative path
- canonical href is `https://easyfindprops.com` - correct

### SEO / Metadata
- __root.tsx has its own meta tags that may conflict with index.html meta tags
- OG image URL in __root.tsx uses relative path `/easyfind-logo.jpg` while index.html uses absolute Render URL
- This inconsistency could cause social preview issues

### Performance
- og-image.jpg is 4.4MB - very large for an OG image
- favicon is 20KB - reasonable
- Logo has both .jpg (49KB) and .webp (110KB) versions - webp is larger than jpg, unusual

### Design Quality
- Professional navy (#1A3A5C) and gold (#C9A84C) color scheme
- Playfair Display font for headings, Inter for body
- Responsive with mobile hamburger menu
- Smooth scroll navigation

### Stats
- "500+ Happy Clients", "1000+ Deals Closed" - flagged as pending in README
- "4.9★ Google Rating" - verified from Google Reviews

### Lead Form Wiring Status
- ContactForm.tsx: Wired to Google Forms (entry IDs present, POST to Google Forms URL)
- index.tsx LeadForm: NOT wired (just shows thank you message)
- formType field exists in ContactForm but is never set/populated

### Google Maps Error
- Live site shows: "Google Maps Platform rejected your request. Invalid request. Invalid 'pb' parameter."
- The Google Maps embed iframe is broken - the embed URL is likely outdated or invalid
- This is a BUG that needs fixing

### ContactForm in Hero
- The ContactForm component is rendered in the hero section (right side)
- It has a "Form Type" input field that is never populated with a value
- This is a UX issue - the field is confusing to users

### OG Image Size
- og-image.jpg is 4.4MB - extremely large for an OG image (should be under 1MB ideally)
