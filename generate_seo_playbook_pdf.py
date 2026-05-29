#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Generate PDF: Complete SEO Playbook (20 Phases)
Generic, reusable playbook for ranking any business website.
"""

from fpdf import FPDF

PRIMARY = (0, 82, 220)      # blue
DARK = (11, 28, 48)          # navy
GRAY = (100, 100, 100)
LIGHT_GRAY = (240, 240, 240)
WARNING = (180, 30, 30)


def safe(text: str) -> str:
    """Replace Unicode characters fpdf core fonts can't render."""
    return (
        text.replace("→", "->")
            .replace("←", "<-")
            .replace("↑", "^")
            .replace("↓", "v")
            .replace("—", "-")
            .replace("–", "-")
            .replace("…", "...")
            .replace("•", "*")
            .replace("✓", "[x]")
            .replace("✗", "[ ]")
            .replace("★", "*")
            .replace("'", "'")
            .replace("'", "'")
            .replace(""", '"')
            .replace(""", '"')
            .replace("₹", "Rs.")
            .replace("°", " deg")
            .replace("×", "x")
            .replace("≥", ">=")
            .replace("≤", "<=")
    )


class PlaybookPDF(FPDF):
    def header(self):
        if self.page_no() > 1:
            self.set_y(8)
            self.set_font("Helvetica", "", 8)
            self.set_text_color(*GRAY)
            self.cell(0, 5, safe("The Complete SEO Playbook  -  2026 Edition"), align="C", new_x="LMARGIN", new_y="NEXT")
            self.ln(2)
            self.set_draw_color(*PRIMARY)
            self.set_line_width(0.3)
            y = self.get_y()
            self.line(15, y, 195, y)
            self.set_y(20)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(*GRAY)
        self.cell(0, 10, f"Page {self.page_no()}/{{nb}}", align="C")

    def cover(self):
        self.add_page()
        self.set_fill_color(*DARK)
        self.rect(0, 0, 210, 297, "F")
        self.set_text_color(255, 255, 255)
        self.set_font("Helvetica", "B", 36)
        self.set_y(80)
        self.cell(0, 20, safe("THE COMPLETE"), align="C", new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 20, safe("SEO PLAYBOOK"), align="C", new_x="LMARGIN", new_y="NEXT")
        self.ln(20)

        self.set_font("Helvetica", "", 14)
        self.set_text_color(180, 200, 255)
        self.cell(0, 8, safe("20 phases to rank any business website"), align="C", new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 8, safe("From technical SEO to AI/LLM optimization"), align="C", new_x="LMARGIN", new_y="NEXT")
        self.ln(40)

        self.set_font("Helvetica", "", 10)
        self.set_text_color(200, 200, 200)
        self.cell(0, 6, safe("A reusable checklist for any business website"), align="C", new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 6, safe("Traditional SEO + Local SEO + AI/LLM SEO"), align="C", new_x="LMARGIN", new_y="NEXT")
        self.ln(30)

        self.set_font("Helvetica", "B", 12)
        self.set_text_color(255, 255, 255)
        self.cell(0, 8, safe("2026 EDITION"), align="C", new_x="LMARGIN", new_y="NEXT")

    def phase_title(self, num, title):
        self.add_page()
        self.set_fill_color(*PRIMARY)
        self.rect(0, self.get_y(), 210, 14, "F")
        self.set_text_color(255, 255, 255)
        self.set_font("Helvetica", "B", 16)
        self.set_xy(10, self.get_y() + 2)
        self.cell(0, 10, safe(f"PHASE {num}  -  {title}"), new_x="LMARGIN", new_y="NEXT")
        self.set_text_color(*DARK)
        self.ln(8)

    def section_header(self, text):
        self.set_font("Helvetica", "B", 12)
        self.set_text_color(*PRIMARY)
        self.cell(0, 8, safe(text), new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

    def bullet(self, text):
        self.set_font("Helvetica", "", 10)
        self.set_text_color(*DARK)
        self.cell(6, 5, safe("*"), align="L")
        self.multi_cell(0, 5, safe(text))
        self.ln(1)

    def para(self, text):
        self.set_font("Helvetica", "", 10)
        self.set_text_color(*DARK)
        self.multi_cell(0, 5, safe(text))
        self.ln(2)

    def callout(self, title, body, color=(255, 240, 200)):
        self.ln(2)
        self.set_fill_color(*color)
        y = self.get_y()
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(*DARK)
        self.cell(0, 7, safe(title), new_x="LMARGIN", new_y="NEXT", fill=True)
        self.set_font("Helvetica", "", 9.5)
        self.multi_cell(0, 5, safe(body), fill=True)
        self.ln(4)

    def toc(self, entries):
        self.add_page()
        self.set_font("Helvetica", "B", 22)
        self.set_text_color(*DARK)
        self.cell(0, 12, safe("Contents"), new_x="LMARGIN", new_y="NEXT")
        self.ln(4)
        self.set_draw_color(*PRIMARY)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(6)

        for num, title in entries:
            self.set_font("Helvetica", "B", 10)
            self.set_text_color(*PRIMARY)
            self.cell(18, 7, safe(f"Phase {num}"), align="L")
            self.set_font("Helvetica", "", 10)
            self.set_text_color(*DARK)
            self.cell(0, 7, safe(title), new_x="LMARGIN", new_y="NEXT")


def build():
    pdf = PlaybookPDF(orientation="P", unit="mm", format="A4")
    pdf.alias_nb_pages()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.set_margins(left=15, top=20, right=15)

    # Cover
    pdf.cover()

    # TOC
    phases = [
        (1, "Initial Audit"),
        (2, "Canonical NAP & Identity Setup"),
        (3, "Technical SEO Foundation"),
        (4, "Meta Title & Description Rewrites"),
        (5, "On-Page H1/Body Match"),
        (6, "State/Region-Level Landing Page"),
        (7, "Per-City Pages"),
        (8, "Service & Visa (Sub-Page) Pages"),
        (9, "Internal Linking Architecture"),
        (10, "Duplicate Content Detection & Fix"),
        (11, "Trust & E-E-A-T Signals"),
        (12, "Cornerstone Content (Long-form Guides)"),
        (13, "AI / LLM SEO (Answer Engine Optimization)"),
        (14, "Google Business Profile (Local SEO)"),
        (15, "Backlinks Strategy"),
        (16, "Sitemap Submission & Re-Indexing"),
        (17, "Tracking & Iteration"),
        (18, "Content Cadence (Ongoing)"),
        (19, "Modern Customer Journey Coverage"),
        (20, "Pre-Launch Checklist (Final)"),
    ]
    extras = [
        ("X", "What NOT to do"),
        ("Y", "Deliverable files reference"),
    ]
    pdf.toc(phases + extras)

    # ============== PHASES ==============

    pdf.phase_title(1, "Initial Audit")
    pdf.para("Day-0 work: understand the competitive landscape before writing a single line of code.")
    pdf.section_header("Checklist")
    for b in [
        "Identify top 1-3 competitors ranking for target keywords",
        "Compare competitors' meta titles/descriptions side-by-side with yours",
        "Note claim density (adjectives like 'best', 'trusted', 'leading')",
        "Check competitor's domain age, GBP review count, backlinks via Ahrefs free checker",
        "Document the gap: brand-led title vs claim-led title",
        "Check Google Search Console for existing penalties, spam issues, deindexing",
        "Verify canonical domain (.in vs .com vs .co.in) - pick one, redirect rest",
    ]:
        pdf.bullet(b)

    pdf.phase_title(2, "Canonical NAP & Identity Setup")
    pdf.para("NAP = Name, Address, Phone. Inconsistency across the web actively hurts rankings.")
    pdf.section_header("Lock these values in a single master CSV/Notion")
    for b in [
        "Business Name (exact text used everywhere)",
        "Address (street, city, state, postal, country)",
        "Phone (one primary, optional WhatsApp/secondary)",
        "Email (one company-owned, never personal)",
        "Domain (decide .in vs .com once)",
        "Business Hours",
        "Geo Coordinates",
        "Government License Number (if regulated industry)",
        "Audit codebase for any old/wrong NAP variations and fix all",
    ]:
        pdf.bullet(b)

    pdf.phase_title(3, "Technical SEO Foundation")
    pdf.section_header("Sitemap & robots")
    for b in [
        "Verify sitemap.xml exists and lists every important page",
        "Set priority (homepage = 1.0, hub pages = 0.9, leaf pages = 0.7)",
        "Set changeFrequency realistically (homepage weekly, leaf pages monthly)",
        "Verify robots.txt doesn't accidentally block crawlers",
    ]:
        pdf.bullet(b)
    pdf.section_header("Per-page setup")
    for b in [
        "Set metadataBase in root layout",
        "Set canonical URL on every page (alternates: { canonical: '/path' })",
        "Use title: { absolute: '...' } to bypass template appending where needed",
    ]:
        pdf.bullet(b)
    pdf.section_header("Schema.org JSON-LD on layout")
    for b in [
        "LocalBusiness + Organization + WebSite types",
        "aggregateRating (if you have real reviews)",
        "OpeningHoursSpecification (if local business)",
        "geo with lat/long",
        "areaServed listing all cities/countries served",
        "priceRange field",
        "sameAs array with social profile URLs",
    ]:
        pdf.bullet(b)

    pdf.phase_title(4, "Meta Title & Description Rewrites")
    pdf.section_header("Title rules")
    for b in [
        "Lead with claim word, not brand: 'Best X in [Location]' not 'BrandName | services'",
        "Keep under 60 characters (truncation point)",
        "Use title: { absolute: '...' } when you don't want template appending",
    ]:
        pdf.bullet(b)
    pdf.section_header("Description rules")
    for b in [
        "Keep under 158 characters",
        "Front-load keywords in first 80 chars",
        "Stack 3 service categories (e.g., 'travel agent, immigration office, recruitment')",
        "Include proof points (license number, years, rating)",
        "Test how Google renders: search site:yourdomain.com after deploy",
    ]:
        pdf.bullet(b)

    pdf.phase_title(5, "On-Page H1/Body Match")
    pdf.para("If meta description doesn't match H1/intro, Google rewrites your snippet. Fix the on-page so the snippet sticks.")
    pdf.section_header("Checklist")
    for b in [
        "H1 must echo the title's claim word ('Best ...' or '#1 ...')",
        "Add sub-headline below H1 absorbing additional keywords",
        "First paragraph repeats key claims (license, years, geography)",
        "Use semantic HTML (h1 once, h2 for sections, h3 for sub-sections)",
        "Bold key claim phrases in body copy",
    ]:
        pdf.bullet(b)

    pdf.phase_title(6, "State/Region-Level Landing Page")
    pdf.section_header("Checklist")
    for b in [
        "Build a state-level page (e.g., /punjab) not just city pages",
        "Target state-level queries ('best X in [State]')",
        "Include 'Cities We Serve' section linking to each city page",
        "LocalBusiness JSON-LD with areaServed listing all cities",
        "State-level testimonials covering multiple cities",
        "State-level FAQs different from city FAQs",
        "Set sitemap priority HIGHER than individual city pages (0.95 vs 0.9)",
    ]:
        pdf.bullet(b)

    pdf.phase_title(7, "Per-City Pages")
    pdf.callout(
        "Most common SEO mistake",
        "Copy-pasting city pages with just the city name swapped. Google flags this as duplicate content and only ranks one. Each city page must have UNIQUE content blocks.",
        color=(255, 230, 200),
    )
    pdf.section_header("Each city page needs")
    for b in [
        "3 unique testimonials (different names, neighborhoods, jobs)",
        "6 trust reasons with LOCAL specifics (distance, bus fare, landmarks)",
        "3+ city-specific FAQs ('How do I reach you from [City]?')",
        "Local industry/worker profile mention",
        "LocalBusiness JSON-LD per city with that city's geo data",
    ]:
        pdf.bullet(b)

    pdf.phase_title(8, "Service & Visa (Sub-Page) Pages")
    pdf.section_header("Each must have UNIQUE country/service-specific content")
    for b in [
        "Country-specific terminology ('Voivode office' Poland, 'Iqama' Saudi)",
        "Country-specific salary ranges, timelines, permit types",
        "Country-specific FAQs",
        "Add Service schema with provider reference",
    ]:
        pdf.bullet(b)

    pdf.phase_title(9, "Internal Linking Architecture")
    pdf.section_header("Audit + fix")
    for b in [
        "Identify orphaned pages (0 inbound links) and fix",
        "Footer: every important page must be in footer at least once",
        "Navbar: 7-9 top links covering main user journeys",
        "Don't over-link to /contactus - rebalance equity",
        "Link to state-level page from every city page",
    ]:
        pdf.bullet(b)
    pdf.section_header("Build shared cluster components for reuse")
    for b in [
        "CityCluster - sibling cities cross-link from each city",
        "RelatedVisas - visa pages cross-link within Europe/Gulf groups",
        "RelatedServices - services cross-link to relevant visas",
        "Each cluster component takes currentSlug prop to exclude self",
    ]:
        pdf.bullet(b)

    pdf.phase_title(10, "Duplicate Content Detection & Fix")
    pdf.section_header("Detection")
    for b in [
        "Manually diff similar pages side-by-side - count % shared text",
        "Google's duplicate threshold ~ 50%+ shared content flags issue",
        "Check GSC -> Pages -> 'Duplicate, Google chose different canonical' report",
    ]:
        pdf.bullet(b)
    pdf.section_header("Fix")
    for b in [
        "Rewrite testimonials per city - different names, neighborhoods, stories",
        "Rewrite trust reasons per city with local specifics",
        "Rewrite FAQs per city with locality-specific questions",
        "Shared visual components (testimonials marquee, Google reviews) - Google treats as chrome, OK to duplicate",
    ]:
        pdf.bullet(b)

    pdf.phase_title(11, "Trust & E-E-A-T Signals")
    pdf.para("E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness. Critical post-2024 Google update.")
    pdf.section_header("Schema additions")
    for b in [
        "Add Person schema for founder/owner",
        "Include founder's description, knowsAbout, jobTitle",
        "Add EducationalOccupationalCredential for licenses/certifications",
        "Add affiliation for industry memberships",
    ]:
        pdf.bullet(b)
    pdf.section_header("Visible on site")
    for b in [
        "Display license numbers visibly",
        "Display founding year and years-in-business",
        "Real aggregateRating tied to verifiable source",
        "Team photos, office photos, certificates",
        "Author byline on blog posts and guides",
    ]:
        pdf.bullet(b)

    pdf.phase_title(12, "Cornerstone Content (Long-form Guides)")
    pdf.section_header("Build 3-5 deep guide pages (1500+ words each)")
    for b in [
        "Topics: 'How to choose X', country comparisons, process step-by-step",
        "Each guide gets Article schema with author + publisher",
        "Process guides also get HowTo schema (with step, totalTime, supply)",
        "All guides get embedded FAQPage schema (8-10 Q&As each)",
        "Include real numbers (salary ranges, timelines, costs)",
        "Include tables (Google likes structured data)",
        "Link to authoritative sources (.gov sites, official portals)",
        "Link from guides to your service/visa pages",
        "Build a /guides hub page with CollectionPage schema",
    ]:
        pdf.bullet(b)

    pdf.phase_title(13, "AI / LLM SEO (Answer Engine Optimization)")
    pdf.callout(
        "New in 2025-2026",
        "Modern users research via ChatGPT, Perplexity, Claude, Gemini. If your brand isn't cited there, you're invisible at the research stage. AEO is the new SEO.",
        color=(220, 240, 220),
    )
    pdf.section_header("Foundational")
    for b in [
        "Create public/llms.txt - table of contents + authoritative facts for AI crawlers",
        "Include: business identity, services, factual answers to common Qs, key landing pages",
        "Structure content as Q&A format (LLMs prefer this for extraction)",
        "Use concrete numbers, not vague ranges",
        "Cite authoritative sources visibly (links to .gov)",
        "Heavy use of FAQPage schema across pages",
    ]:
        pdf.bullet(b)
    pdf.section_header("External signals (LLMs scrape these)")
    for b in [
        "Get mentioned on Reddit with detailed answers",
        "Get mentioned on Quora with deep responses",
        "Get mentioned in regional press / industry blogs (LLM training data)",
        "Test by asking ChatGPT/Perplexity - does your brand surface?",
    ]:
        pdf.bullet(b)

    pdf.phase_title(14, "Google Business Profile (Local SEO)")
    pdf.callout(
        "Higher ROI than website SEO for local businesses",
        "GBP optimization moves the map pack faster than any other SEO work. Treat as 1-week sprint, not afterthought.",
        color=(220, 240, 220),
    )
    pdf.section_header("Setup")
    for b in [
        "Claim/verify GBP at business.google.com",
        "Set primary + 4 additional categories",
        "Match address exactly to website schema",
        "Upload 20+ photos: exterior, interior, team, certificates, success stories",
        "Geo-tag photos before uploading",
        "Set service area (cities + radius)",
        "Write 750-char description with keywords (claim-led)",
        "Add all services with descriptions",
        "Enable Messaging with auto-reply",
        "Seed 5-10 Q&As yourself (allowed)",
    ]:
        pdf.bullet(b)
    pdf.section_header("Reviews & engagement")
    for b in [
        "Generate review-request short link",
        "WhatsApp last 50 customers (varied messages, spread over 2 weeks)",
        "Target 4.5+ rating with 50+ reviews minimum",
        "Reply to every review within 24 hours",
        "Post 1-2 GBP updates per week (job openings, success stories, news)",
        "Mark special hours (holidays, festivals)",
    ]:
        pdf.bullet(b)

    pdf.phase_title(15, "Backlinks Strategy")
    pdf.section_header("Tier 1 - Free directories")
    for b in [
        "JustDial, Sulekha, IndiaMart, TradeIndia, AskLaila, Cylex, HotFrog, Yellow Pages India",
        "Submit exact NAP from master data - don't vary",
    ]:
        pdf.bullet(b)
    pdf.section_header("Tier 1 - Government (highest authority)")
    for b in [
        "Verify business listed on industry regulator's public site (.gov.in)",
        "MSME / Udyam registration (India)",
        "Industry portal listings (NCS, GeM if applicable)",
    ]:
        pdf.bullet(b)
    pdf.section_header("Tier 2 - Social profile backlinks")
    for b in [
        "YouTube channel description -> site URL",
        "Each YouTube video description -> site URL",
        "Instagram bio -> site URL",
        "Facebook About -> website field",
        "LinkedIn Company Page -> website",
    ]:
        pdf.bullet(b)
    pdf.section_header("Tier 2 - Press releases (5-15 backlinks per release)")
    for b in [
        "Write one 350-500 word press release with milestone angle",
        "Submit to: PRLog, IndianPRWire, BusinessWire, NewKerala, DailyHunt, OpenPR",
        "Some free, some Rs.500-5000 paid",
    ]:
        pdf.bullet(b)
    pdf.section_header("Tier 2 - Local press pitches")
    for b in [
        "One pitch per week to regional outlets",
        "Tribune, Hindustan Times regional, Punjab Kesari, regional language papers",
        "Angle: milestones, success stories, industry trends",
    ]:
        pdf.bullet(b)
    pdf.section_header("Tier 3 - Content compounding")
    for b in [
        "Quora: 2 answers per week to relevant questions",
        "Reddit: 1 helpful comment per week (build karma first, link sparingly)",
        "YouTube: 1 short video per week, link to site in description",
        "Customer-side: ask placed customers to LinkedIn-post and tag your business",
    ]:
        pdf.bullet(b)
    pdf.callout(
        "AVOID (toxic backlinks)",
        "Fiverr backlink packages, Private Blog Networks (PBNs), forum signature spam, comment spam, paid guest posts on unrelated blogs, article spinning sites. These trigger Google penalties.",
        color=(255, 220, 220),
    )

    pdf.phase_title(16, "Sitemap Submission & Re-Indexing")
    pdf.section_header("Checklist")
    for b in [
        "Submit sitemap.xml in GSC -> Sitemaps",
        "For any new page or major content change, use GSC -> URL Inspection -> 'Request Indexing'",
        "Rate limit: ~10/day, spread over multiple days for big batches",
        "Prioritize: homepage > new pages > pages with new sections > pages with meta changes",
        "Monitor GSC Pages report 7-14 days later for indexing status",
    ]:
        pdf.bullet(b)

    pdf.phase_title(17, "Tracking & Iteration")
    pdf.section_header("Tools to set up (all free)")
    for b in [
        "Google Search Console - backlinks + indexing",
        "Google Analytics (or PostHog)",
        "Ahrefs Backlink Checker (free) - monthly",
        "Moz Link Explorer (free) - monthly",
        "Whitespark Local Rank Tracker - bi-weekly local map ranking",
        "Ubersuggest - keyword trends",
    ]:
        pdf.bullet(b)
    pdf.section_header("Track weekly")
    for b in [
        "New backlinks (GSC Links report)",
        "New GBP reviews",
        "New impressions for target keywords (GSC Performance)",
        "Click-through rate (CTR) on snippets - low CTR = bad title/description",
    ]:
        pdf.bullet(b)
    pdf.section_header("Track monthly")
    for b in [
        "Domain Rating / Authority change",
        "Total indexed pages",
        "Top 10 ranking keywords",
        "Direct vs organic traffic split",
        "GBP profile views, direction requests, calls",
    ]:
        pdf.bullet(b)

    pdf.phase_title(18, "Content Cadence (Ongoing)")
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(*DARK)
    pdf.cell(70, 7, safe("Task"), border=1, fill=True)
    pdf.cell(0, 7, safe("Frequency"), border=1, new_x="LMARGIN", new_y="NEXT", fill=True)
    pdf.set_font("Helvetica", "", 10)
    cadence = [
        ("GBP post", "2x per week"),
        ("New Quora answer", "2x per week"),
        ("Reddit helpful comment", "1x per week"),
        ("New YouTube video", "1x per week"),
        ("Reply to all reviews", "Daily check"),
        ("New blog post / guide", "1x per month"),
        ("Press release", "1x per quarter"),
        ("Local press pitch", "1x per week"),
        ("Update GBP photos", "3-5 new per week"),
        ("New backlink building", "5+ per week"),
    ]
    for task, freq in cadence:
        pdf.cell(70, 7, safe(task), border=1)
        pdf.cell(0, 7, safe(freq), border=1, new_x="LMARGIN", new_y="NEXT")

    pdf.phase_title(19, "Modern Customer Journey Coverage")
    pdf.para("Most businesses optimize only Decision-stage. Aim for all 5 stages.")
    pdf.set_font("Helvetica", "B", 10)
    pdf.cell(35, 7, safe("Stage"), border=1, fill=True)
    pdf.cell(65, 7, safe("Channels"), border=1, fill=True)
    pdf.cell(0, 7, safe("What to build"), border=1, new_x="LMARGIN", new_y="NEXT", fill=True)
    pdf.set_font("Helvetica", "", 9)
    stages = [
        ("Discovery", "Instagram, TikTok, YouTube Shorts", "Short-form video, social posting cadence"),
        ("Research", "ChatGPT, Perplexity, Reddit, Quora", "Long-form guides, FAQ pages, llms.txt, Quora/Reddit presence"),
        ("Decision", "Google search", "Traditional SEO (meta, content, internal links)"),
        ("Validation", "YouTube reviews, Trustpilot, Google Reviews", "Multi-platform reviews, video testimonials"),
        ("Purchase", "WhatsApp, contact form, walk-in", "Smooth conversion path, multiple contact options"),
    ]
    for s, c, b in stages:
        y_start = pdf.get_y()
        pdf.multi_cell(35, 6, safe(s), border=1)
        y_after = pdf.get_y()
        pdf.set_xy(50, y_start)
        pdf.multi_cell(65, 6, safe(c), border=1)
        pdf.set_xy(115, y_start)
        pdf.multi_cell(0, 6, safe(b), border=1)
        # Reset
        max_y = max(y_after, pdf.get_y())
        pdf.set_y(max_y)

    pdf.phase_title(20, "Pre-Launch Checklist (Final)")
    pdf.section_header("Verify before going live")
    for b in [
        "All pages have title + description + canonical",
        "All pages have unique H1",
        "All schemas validate at validator.schema.org or Google Rich Results Test",
        "No duplicate content >50% between similar pages",
        "Sitemap auto-generates with all current pages",
        "robots.txt allows Googlebot",
        "llms.txt published at root",
        "404 page exists and looks intentional",
        "HTTPS enforced site-wide",
        "Mobile responsive (Google mobile-first indexing)",
        "Page load < 3 seconds (Core Web Vitals)",
        "All images have alt text",
        "All <a> links have descriptive text (not 'click here')",
        "All external links to authoritative sources, not spammy",
        "GSC + Analytics installed and reporting",
        "GBP claimed and complete",
        "At least 25 inbound backlinks before launch",
        "At least 20 Google reviews before launch",
    ]:
        pdf.bullet(b)

    # Phase X — DON'T DO
    pdf.phase_title("X", "What NOT to do (common mistakes)")
    pdf.set_text_color(*WARNING)
    pdf.set_font("Helvetica", "B", 11)
    pdf.cell(0, 7, safe("Avoid all of these:"), new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)
    pdf.set_text_color(*DARK)
    for b in [
        "Don't stuff keywords unnaturally in body copy",
        "Don't buy backlinks",
        "Don't copy-paste content between city/service pages",
        "Don't use brand-led titles ('BrandName | Services')",
        "Don't ignore mobile",
        "Don't ignore page speed",
        "Don't ignore E-E-A-T (author, credentials, license)",
        "Don't use the same H1 on multiple pages",
        "Don't leave alt text empty on important images",
        "Don't forget canonical tags (causes self-cannibalization)",
        "Don't have orphan pages (0 inbound links)",
        "Don't ignore GBP - it drives more local traffic than SEO",
        "Don't optimize only for Google - modern users also search ChatGPT, Reddit, YouTube",
        "Don't ignore Trustpilot, Glassdoor, AmbitionBox if relevant",
        "Don't skip llms.txt - it's 2026 table stakes",
        "Don't write press releases as ads (won't get published)",
        "Don't ignore review responses - Google scores response rate",
        "Don't use shortened/redirected URLs in backlinks (loses equity)",
        "Don't change URL structure post-launch without 301 redirects",
        "Don't have inconsistent NAP across the web",
    ]:
        pdf.bullet(b)

    # Phase Y — Deliverables reference
    pdf.phase_title("Y", "Deliverable files (reference)")
    pdf.para("Recommended artefacts to produce for any complete SEO project. Use as a templates checklist.")
    files = [
        ("citation-tracker.csv", "Master NAP data + GBP checklist + 50+ directory listings"),
        ("backlinks-action-plan.csv", "Press, content, customer-side strategies, weekly schedule"),
        ("seo-tracker.xlsx", "Merged multi-tab workbook for Google Sheets"),
        ("public/llms.txt", "AI crawler authority file (business facts, FAQs, key pages)"),
        ("sitemap.xml / sitemap.ts", "Dynamic sitemap with priority + changeFrequency"),
        ("Root layout schema", "Site-wide LocalBusiness + Organization + WebSite JSON-LD"),
        ("State/region landing page", "Region-level page above city pages"),
        ("Per-city pages", "Unique content per city (testimonials, trust, FAQs)"),
        ("Cornerstone guides hub", "3-5 long-form guides with Article + HowTo + FAQ schema"),
        ("Cluster components", "Shared internal-linking blocks (CityCluster, RelatedVisas, etc.)"),
    ]
    pdf.set_font("Helvetica", "B", 10)
    pdf.cell(75, 7, safe("File"), border=1, fill=True)
    pdf.cell(0, 7, safe("Purpose"), border=1, new_x="LMARGIN", new_y="NEXT", fill=True)
    pdf.set_font("Helvetica", "", 9)
    for f, p in files:
        y_start = pdf.get_y()
        pdf.multi_cell(75, 6, safe(f), border=1)
        y_after = pdf.get_y()
        pdf.set_xy(90, y_start)
        pdf.multi_cell(0, 6, safe(p), border=1)
        max_y = max(y_after, pdf.get_y())
        pdf.set_y(max_y)

    # Closing
    pdf.ln(10)
    pdf.set_font("Helvetica", "I", 10)
    pdf.set_text_color(*GRAY)
    pdf.multi_cell(0, 5, safe(
        "Work through phases 1-20 in order. Skip nothing - every phase compounds with the others. "
        "Reusable across any business website, in any industry, in any geography."
    ))

    out = "SEO_Playbook_2026.pdf"
    pdf.output(out)
    print(f"Wrote: {out}")


if __name__ == "__main__":
    build()
