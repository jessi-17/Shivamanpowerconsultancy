#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Generate PDF: From Invisible to Top 3 - The Shiva Travel & Manpower Story
A storytelling case study of rebuilding a barely-loading WordPress site
into a full-stack, SEO-ready, lead-generating engine.

Authored by TheCult Studio - founded by Jaspreet.
"""

from fpdf import FPDF
from datetime import date

BRAND = (0, 102, 153)        # deep blue
BRAND_DARK = (0, 64, 102)
ACCENT = (212, 144, 0)       # warm amber
INK = (40, 44, 52)
MUTED = (110, 116, 128)
PAPER = (250, 248, 244)
RULE = (220, 220, 220)


class StoryPDF(FPDF):
    def header(self):
        if self.page_no() > 1:
            self.set_font("Helvetica", "I", 8)
            self.set_text_color(*MUTED)
            self.cell(
                0,
                8,
                "From Invisible to Top 3  |  The Shiva Travel & Manpower Story",
                align="C",
            )
            self.ln(4)
            self.set_draw_color(*BRAND)
            self.set_line_width(0.3)
            self.line(15, self.get_y(), 195, self.get_y())
            self.ln(6)

    def footer(self):
        # Skip footer on the cover page so it does not break the hero color block
        if self.page_no() == 1:
            return
        # Thin rule above the footer text, with proper padding
        self.set_y(-18)
        self.set_draw_color(*RULE)
        self.set_line_width(0.2)
        self.line(15, self.get_y(), 195, self.get_y())
        # Footer text, pushed down for breathing room
        self.set_y(-13)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(*MUTED)
        # Left: brand
        self.set_x(15)
        self.cell(90, 6, "TheCult Studio  -  Jaspreet, Founder", align="L")
        # Right: page number
        self.set_x(105)
        self.cell(90, 6, f"Page {self.page_no()} of {{nb}}", align="R")

    # --- building blocks --------------------------------------------------

    def chapter_opener(self, number, title, subtitle):
        """Full-bleed style chapter opener page."""
        self.add_page()
        # color band on top
        self.set_fill_color(*BRAND)
        self.rect(0, 0, 210, 70, "F")
        # chapter number
        self.set_xy(15, 22)
        self.set_font("Helvetica", "B", 14)
        self.set_text_color(255, 255, 255)
        self.cell(0, 6, f"CHAPTER {number}", new_x="LMARGIN", new_y="NEXT")
        # title
        self.set_xy(15, 32)
        self.set_font("Helvetica", "B", 26)
        self.set_text_color(255, 255, 255)
        self.multi_cell(180, 11, title)
        # subtitle
        self.set_xy(15, 80)
        self.set_font("Helvetica", "I", 12)
        self.set_text_color(*MUTED)
        self.multi_cell(180, 6, subtitle)
        self.ln(8)

    def section(self, text):
        self.ln(2)
        self.set_font("Helvetica", "B", 12)
        self.set_text_color(*BRAND_DARK)
        self.cell(0, 7, text, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(*BRAND)
        self.set_line_width(0.4)
        y = self.get_y()
        self.line(15, y, 40, y)
        self.ln(4)

    def body(self, text):
        self.set_font("Helvetica", "", 10.5)
        self.set_text_color(*INK)
        self.multi_cell(0, 5.6, text)
        self.ln(2)

    def pullquote(self, text):
        self.ln(2)
        self.set_fill_color(*PAPER)
        x = self.get_x()
        y = self.get_y()
        # left accent bar
        self.set_fill_color(*ACCENT)
        self.rect(15, y, 1.5, 18, "F")
        # quote text
        self.set_xy(20, y + 1)
        self.set_font("Helvetica", "I", 11)
        self.set_text_color(*BRAND_DARK)
        self.multi_cell(170, 5.8, text)
        self.ln(3)

    def bullet(self, items):
        self.set_font("Helvetica", "", 10.5)
        self.set_text_color(*INK)
        for it in items:
            self.set_x(18)
            self.cell(4, 5.6, "-")
            self.multi_cell(0, 5.6, it)
        self.ln(2)

    def stat_row(self, items):
        """3 stat tiles across a row: [(big, label), ...]"""
        col_w = 60
        gap = 2
        x_start = 15
        y = self.get_y()
        for i, (big, label) in enumerate(items):
            x = x_start + i * (col_w + gap)
            self.set_fill_color(*BRAND)
            self.rect(x, y, col_w, 22, "F")
            self.set_xy(x, y + 3)
            self.set_font("Helvetica", "B", 16)
            self.set_text_color(255, 255, 255)
            self.cell(col_w, 8, big, align="C", new_x="LMARGIN", new_y="NEXT")
            self.set_x(x)
            self.set_font("Helvetica", "", 8.5)
            self.set_text_color(255, 255, 255)
            self.cell(col_w, 6, label, align="C")
        self.ln(28)

    def chapter_takeaway(self, items):
        """End-of-chapter 'Steal this' box with concrete actions."""
        self.ln(4)
        y_start = self.get_y()
        # background tint
        self.set_fill_color(*PAPER)
        # Estimate box height: header + each item
        box_h = 12 + (len(items) * 6) + 4
        self.rect(15, y_start, 180, box_h, "F")
        # left accent bar
        self.set_fill_color(*ACCENT)
        self.rect(15, y_start, 2, box_h, "F")
        # heading
        self.set_xy(20, y_start + 3)
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(*ACCENT)
        self.cell(170, 5, "STEAL THIS  -  APPLY IT THIS WEEK", new_x="LMARGIN", new_y="NEXT")
        # items
        self.set_font("Helvetica", "", 9.5)
        self.set_text_color(*INK)
        for it in items:
            self.set_x(20)
            self.cell(4, 5.5, "->")
            self.multi_cell(168, 5.5, it)
        self.ln(4)

    def audit_row(self, gap, signal):
        """One row of the self-audit checklist: checkbox + gap label + signal."""
        self.set_font("Helvetica", "", 10)
        self.set_text_color(*INK)
        x = 15
        y = self.get_y()
        # checkbox
        self.set_draw_color(*BRAND)
        self.set_line_width(0.3)
        self.rect(x, y + 1, 4, 4)
        # gap label (bold)
        self.set_xy(x + 7, y)
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(*BRAND_DARK)
        self.cell(60, 6, gap)
        # signal description
        self.set_xy(x + 67, y)
        self.set_font("Helvetica", "", 9.5)
        self.set_text_color(*INK)
        self.multi_cell(123, 5.5, signal)
        self.ln(1)


# ---------------------------------------------------------------------------
# build
# ---------------------------------------------------------------------------

pdf = StoryPDF()
pdf.set_auto_page_break(auto=True, margin=28)
pdf.alias_nb_pages()
pdf.set_margins(15, 18, 15)


# ---------- COVER ----------
pdf.add_page()
pdf.set_fill_color(*BRAND)
pdf.rect(0, 0, 210, 297, "F")

# accent block
pdf.set_fill_color(*ACCENT)
pdf.rect(0, 120, 210, 4, "F")

# eyebrow
pdf.set_xy(15, 40)
pdf.set_font("Helvetica", "B", 11)
pdf.set_text_color(*ACCENT)
pdf.cell(0, 6, "A THECULT STUDIO CASE STUDY", new_x="LMARGIN", new_y="NEXT")

# title
pdf.set_xy(15, 55)
pdf.set_font("Helvetica", "B", 38)
pdf.set_text_color(255, 255, 255)
pdf.multi_cell(180, 14, "From Invisible to Top 3")

# subtitle
pdf.set_xy(15, 135)
pdf.set_font("Helvetica", "", 14)
pdf.set_text_color(255, 255, 255)
pdf.multi_cell(
    180,
    7,
    "The 9-step playbook we used to take a real client from invisible\n"
    "to top 3 on Google. Steal it for your own business, adapt it for\n"
    "your clients - or let TheCult Studio run it for you.",
)

# byline block
pdf.set_xy(15, 226)
pdf.set_font("Helvetica", "B", 11)
pdf.set_text_color(*ACCENT)
pdf.cell(0, 6, "AUTHORED BY", new_x="LMARGIN", new_y="NEXT")
pdf.set_x(15)
pdf.set_font("Helvetica", "B", 18)
pdf.set_text_color(255, 255, 255)
pdf.cell(0, 9, "TheCult Studio", new_x="LMARGIN", new_y="NEXT")
pdf.set_x(15)
pdf.set_font("Helvetica", "", 10.5)
pdf.set_text_color(255, 255, 255)
pdf.cell(0, 6, "Founded by Jaspreet", new_x="LMARGIN", new_y="NEXT")
pdf.set_x(15)
pdf.cell(0, 6, "info@TheCultStudio.agency", new_x="LMARGIN", new_y="NEXT")
pdf.set_x(15)
pdf.cell(0, 6, f"Published {date.today().strftime('%B %Y')}", new_x="LMARGIN", new_y="NEXT")


# ---------- WHAT YOU'LL WALK AWAY WITH ----------
pdf.add_page()
pdf.set_font("Helvetica", "B", 24)
pdf.set_text_color(*BRAND_DARK)
pdf.cell(0, 12, "What You'll Walk Away With", new_x="LMARGIN", new_y="NEXT")
pdf.set_draw_color(*ACCENT)
pdf.set_line_width(1.2)
pdf.line(15, pdf.get_y(), 55, pdf.get_y())
pdf.ln(6)

pdf.set_font("Helvetica", "I", 11)
pdf.set_text_color(*MUTED)
pdf.multi_cell(
    0,
    5.6,
    "A 10-second read before you commit to the rest. If any of these gain "
    "points hit, the next 9 chapters are worth your evening.",
)
pdf.ln(4)

pdf.section("If you're a founder reading this")
pdf.bullet([
    "The exact 9-step sequence we use to take a client from invisible to top 3 on Google - in the order it actually works.",
    "A 15-minute self-audit scorecard you can run on your own site this week - included at the back of this PDF. If you score badly on 4 of 7 gaps, you've got more leaks than you can patch alone.",
    "The 5 boring fixes that move the needle more than any redesign - canonical URLs, schema, 410-Gone for dead pages, NAP consistency, and internal linking.",
    "The CRM + WhatsApp + reporting stack we wire in so the site generates revenue, not just traffic - including the parallel-write pattern that means a form submission never gets lost.",
    "The mistakes we paid for so you don't have to - the moodboard gate, the design freeze rule, the audit-before-opinion discipline.",
])

pdf.section("If you run an agency or freelance")
pdf.bullet([
    "Steal the entire process. Same order, same deliverables, same gates. It works on any service business - manpower, law, clinics, real estate, education.",
    "Use the chapter takeaways as your own client-onboarding checklist. Every chapter ends with an 'Apply this' box - copy them into your project template.",
    "The handover model that ends the dependency trap - so your clients can run the site without you, and your retainer is for strategy, not for password resets.",
])

pdf.pullquote(
    "This document was free to write because it works. If your site has "
    "the same gaps Shiva's did, the same playbook applies - whether you "
    "run it yourself or hand it to me."
)

pdf.section("The shape of the playbook")
pdf.bullet([
    "Ch 1 - Inheriting a ghost site (the audit)",
    "Ch 2 - Listening before building (3 lenses of research)",
    "Ch 3 - The gap map (7 gaps, ranked)",
    "Ch 4 - Words before pixels (copy + sitemap + journeys)",
    "Ch 5 - Finding the look (moodboard gate)",
    "Ch 6 - The blueprint (hi-fi + sign-off)",
    "Ch 7 - Building it right (5 SEO non-negotiables)",
    "Ch 8 - Handing over the keys (CMS + CRM + WhatsApp + reports)",
    "Ch 9 - Zero to Top 3 (the result)",
    "Self-Audit Scorecard + Free Visibility Audit (final pages)",
])


# ---------- CHAPTER 1 ----------
pdf.chapter_opener(
    1,
    "Inheriting a Ghost Site",
    "Before you can fix a website, you have to be honest about what you are "
    "looking at. We started with an audit, not an opinion.",
)

pdf.section("What we found on day one")
pdf.body(
    "The old site was a WordPress installation that had been left to drift. "
    "The home page took close to ten seconds to paint on a 4G connection. "
    "Images were uncompressed JPEGs straight from a phone camera. The "
    "navigation linked to pages that did not exist. There was no clear call "
    "to action - the user had to scroll, guess, and eventually give up."
)
pdf.body(
    "On the SEO side, the diagnosis was worse. A Google Search Console audit "
    "showed almost twenty thousand indexed URLs that had no business being "
    "there - junk query-string variations, hacked spam pages, and ghost "
    "archives from a long-removed plugin. Google was crawling the site, but "
    "what Google was seeing was not the business. It was the noise."
)

pdf.pullquote(
    "We did not see a website. We saw the silhouette of one - "
    "with the lights off and the door slightly open."
)

pdf.section("Honest numbers")
pdf.stat_row([
    ("19,700+", "spam URLs in Google index"),
    ("9.2s", "average mobile load time"),
    ("Zero", "leads from web in 90 days"),
])

pdf.section("The lesson")
pdf.body(
    "You cannot fix what you have not measured. Before any design, before any "
    "rewrite, we ran the audit and we wrote it down. Speed scores. Indexed "
    "URLs. Backlink profile. NAP consistency across the web. Google Business "
    "Profile status. Every assumption became a number."
)

pdf.chapter_takeaway([
    "Pull your site's mobile load time with PageSpeed Insights. Under 2.5s on 4G is the target.",
    "Check Google Search Console for total indexed URLs. If the number is wildly more than your real page count, you have a spam-URL problem hiding in plain sight.",
    "Count leads from the website in the last 90 days. If the answer is zero or close to it, your site is decorative - not functional.",
])


# ---------- CHAPTER 2 ----------
pdf.chapter_opener(
    2,
    "Listening Before Building",
    "Research is the part most agencies skip - and the part that decides "
    "whether the final site is a billboard or a business.",
)

pdf.section("Three lenses of research")
pdf.body(
    "We looked at the project through three lenses, in this order: the "
    "competitors, the market, and the local signal. Each lens answered a "
    "different question, and we did not move on until each had a written "
    "answer."
)

pdf.section("Lens 1 - Competitors")
pdf.body(
    "We pulled the top ten ranking manpower consultancies in Punjab and the "
    "top ten ranking for Gulf-deployment keywords. We catalogued their page "
    "structures, the language they used in their hero sections, the trust "
    "signals they leaned on (licenses, testimonials, employer logos), and the "
    "lead-capture mechanics they used. Patterns emerged quickly. The winners "
    "all did three things: they named the destination countries on the home "
    "page, they showed real licenses, and they made the WhatsApp button "
    "impossible to miss."
)

pdf.section("Lens 2 - The market")
pdf.body(
    "Manpower consulting is not one market - it is several. A nurse heading "
    "to Germany has a different worry stack than a welder heading to Qatar. "
    "We mapped the two main lanes - Gulf-bound trades and Europe-bound "
    "healthcare - and we wrote the questions each audience actually types "
    "into Google. \"How long does it take to get a Saudi work visa?\" is a "
    "different page than \"Is Germany still recruiting Indian nurses in "
    "2026?\""
)

pdf.section("Lens 3 - Local signal")
pdf.body(
    "We audited the Google Business Profile and the citation web. The "
    "business name was spelled four different ways across the internet. "
    "The phone number had two variants. The website link pointed to the .com "
    "domain in some places and the .in domain in others. To Google's eyes, "
    "this looked like four businesses, not one - and that is exactly why "
    "the local pack rankings were soft."
)

pdf.pullquote(
    "If Google cannot decide whether you are one business or four, "
    "it will not put you on page one. Consistency is not cosmetic - "
    "it is the foundation."
)

pdf.chapter_takeaway([
    "Search your business name on Google. Count the spellings, the phone numbers, the websites. Anything more than one of each is leaking authority.",
    "List your top 3 competitors by Google rank, not reputation. Write down what each one does on their home page that you don't.",
    "Pick your 2 most distinct audience segments and write 5 questions each one actually types into Google. That's your next 10 blog posts.",
])


# ---------- CHAPTER 3 ----------
pdf.chapter_opener(
    3,
    "The Gap Map",
    "Once the research was on paper, the work to do drew itself. "
    "We turned every gap into a line item with an owner and a deadline.",
)

pdf.section("The seven gaps")
pdf.body(
    "From the audit and the research, seven gaps came back again and again. "
    "We listed them, we ranked them by impact, and we made each one a track "
    "of work with a deliverable at the end."
)
pdf.bullet([
    "Content - thin, generic copy that did not name the destination "
    "countries, the trades, or the actual licenses held.",
    "SEO - no structured data, no canonical URLs, no XML sitemap, no "
    "internal linking strategy.",
    "Images - large unoptimized files, no alt text, no consistent visual "
    "language across the site.",
    "Layout - confusing navigation, no clear visual hierarchy, no obvious "
    "next action on any page.",
    "Loading speed - too many plugins, no image compression, no CDN, "
    "no caching strategy.",
    "Landing pages and CTAs - one generic contact form, no segmented "
    "intake by destination country or candidate vs employer.",
    "Lead handling - form submissions went to a generic inbox, nobody "
    "owned follow-up, no CRM behind it.",
])

pdf.section("How we ranked the work")
pdf.body(
    "We did not start with the most visible gap. We started with the gap "
    "that unlocked the rest. In this case, that was the NAP consistency "
    "and the spam-URL cleanup - both were silently capping every other "
    "improvement we could make. Fix the foundation, then build the floors."
)

pdf.pullquote(
    "Most agencies start with the new homepage because it is the most "
    "photogenic deliverable. We start with the boring fix that makes the "
    "homepage matter."
)

pdf.chapter_takeaway([
    "Don't start with the homepage redesign. Start with whatever is silently capping every other improvement - usually NAP cleanup, schema, or dead-URL retirement.",
    "Score your own site against these 7 gaps. The full self-audit scorecard is at the back of this PDF - fill it in honestly.",
    "For each gap you can't fix in-house within 30 days, decide now: hire, outsource, or accept the loss. Indecision is the most expensive option.",
])


# ---------- CHAPTER 4 ----------
pdf.chapter_opener(
    4,
    "Words Before Pixels",
    "Designers love to open Figma first. We do not. The words have to be "
    "right before the layout means anything.",
)

pdf.section("Copywriting that earns clicks")
pdf.body(
    "We wrote the copy as if we were writing to one person at a time. The "
    "Gulf-bound welder. The Europe-bound nurse. The HR manager in Dubai "
    "looking for a vetted recruitment partner. Each audience got language "
    "that matched what they were actually worried about - timelines, fees, "
    "visa documentation, trust."
)
pdf.body(
    "Every page got an explicit SEO brief: the primary keyword, two "
    "secondary keywords, the search intent, the question the page had to "
    "answer in the first paragraph. We did not stuff keywords - we matched "
    "the page's job to the search query."
)

pdf.section("The sitemap")
pdf.body(
    "We mapped every page the site needed and every link between them. "
    "Home, About, Services-by-country, Services-by-trade, For-employers, "
    "Blog, Contact, plus dedicated landing pages for the highest-intent "
    "search terms. Internal linking was planned at this stage, not "
    "retrofitted later - every page knew which two or three other pages it "
    "should link to and why."
)

pdf.section("User journeys")
pdf.body(
    "We drew two journeys end to end. The candidate journey: discover via "
    "Google or WhatsApp share, land on a country-specific page, scan trust "
    "signals, submit an enquiry, receive an automated WhatsApp confirmation, "
    "get a callback within the working day. The employer journey: discover "
    "via LinkedIn or referral, land on the For-employers page, scan the "
    "credentials, request a proposal, get routed to a senior account contact."
)

pdf.section("Low-fidelity wireframes")
pdf.body(
    "Before any pixel of design, we sketched every page as boxes and "
    "labels. This is the cheapest moment to change your mind. We took the "
    "wireframes to the client, walked through every page, every CTA, every "
    "transition - and we made all the structural changes here, on paper, "
    "for free."
)

pdf.pullquote(
    "If a wireframe survives the client meeting, the design will too. "
    "If you skip the wireframe, the design meeting becomes a rewrite meeting."
)

pdf.chapter_takeaway([
    "Write the copy before opening Figma. If you cannot write the headline for a page, you do not yet know what the page is for.",
    "Draw the sitemap on paper. Mark which 2-3 pages every page should internally link to - this is the free part of SEO almost nobody plans.",
    "Wireframe in boxes and labels first. Walk the client through it, capture every objection, fix it on paper. Then design.",
])


# ---------- CHAPTER 5 ----------
pdf.chapter_opener(
    5,
    "Finding the Look",
    "The right look for a recruitment firm is not the right look for a "
    "fashion brand. Inspiration first, then mood, then direction.",
)

pdf.section("The inspiration scan")
pdf.body(
    "We pulled fifty reference sites - some from manpower and recruitment, "
    "some from adjacent industries (immigration law, education abroad, "
    "logistics) where trust and credentials matter as much as they do here. "
    "We tagged each one with what was working: a hero pattern, a typography "
    "choice, a way of presenting testimonials, a use of color."
)

pdf.section("The mood")
pdf.body(
    "With the client we narrowed in on the feeling: professional but warm. "
    "Corporate-credible without being cold. The audience is split between "
    "blue-collar candidates and senior HR buyers - the design had to read "
    "as serious to both without alienating either. We chose a deep blue as "
    "the trust anchor, a warm amber as the accent for energy and movement, "
    "and a clean sans-serif paired with a slightly humanist heading face."
)

pdf.section("The moodboard")
pdf.body(
    "We assembled a one-page moodboard - hero patterns, typography samples, "
    "color swatches, photography style, button and form treatments. The "
    "client approved the moodboard before a single screen was designed. "
    "This is non-negotiable. Without an approved mood, every design review "
    "becomes a debate about taste instead of execution."
)

pdf.pullquote(
    "Design is not what we like. Design is what does the job for the "
    "audience the client serves. The moodboard makes that conversation honest."
)

pdf.chapter_takeaway([
    "Build a 50-site reference scan before any moodboarding - pull from your industry AND adjacent ones where trust matters.",
    "Lock the moodboard with a written client approval before any screen gets designed. Verbal approval is how rework happens.",
    "Pick one primary color that does the trust work, one accent for energy. That is the entire palette decision - don't overthink it.",
])


# ---------- CHAPTER 6 ----------
pdf.chapter_opener(
    6,
    "The Blueprint",
    "High-fidelity screens, every state designed, every breakpoint "
    "considered - and signed off before a single line of code was written.",
)

pdf.section("From wireframe to high-fidelity")
pdf.body(
    "With the moodboard locked, the high-fidelity wireframes came together "
    "fast. We designed every page in both desktop and mobile. We designed "
    "every form in three states - empty, filled, error. We designed the "
    "blog template, the country landing page template, the employer page, "
    "and the thank-you screens. Anything the developer would have to build "
    "had a design to build against."
)

pdf.section("Client sign-off, in writing")
pdf.body(
    "We walked the client through every screen in a single review session. "
    "We collected all change requests, applied them in one batch, and sent "
    "a single sign-off PDF. Once that signature came in, the design was "
    "frozen. Mid-build redesigns are how projects die - this is the gate "
    "that prevents that."
)

pdf.chapter_takeaway([
    "Design every page in mobile AND desktop. No 'we'll figure out mobile in build'.",
    "Design every form in three states - empty, filled, error. Skip this and the developer invents UX you didn't approve.",
    "Get the sign-off in writing before code starts. Verbal approval is how mid-build redesigns kill projects.",
])


# ---------- CHAPTER 7 ----------
pdf.chapter_opener(
    7,
    "Building It Right",
    "Code is where most agencies cut corners. We do not. Every decision "
    "in the build was made in service of speed, SEO, and lead conversion.",
)

pdf.section("The stack")
pdf.body(
    "We replaced WordPress with a modern Next.js application running on the "
    "edge, with a PostgreSQL database for content and lead capture. Pages "
    "are server-rendered where SEO matters, statically generated where "
    "performance matters, and hydrated on the client only when interactivity "
    "demands it. The result is a site that paints under two seconds on 4G - "
    "more than four times faster than the old build."
)

pdf.section("SEO baked into the build")
pdf.body(
    "Every page ships with a hand-written title and meta description, "
    "Open Graph and Twitter card tags, JSON-LD structured data (Organization, "
    "LocalBusiness, BreadcrumbList, FAQPage where appropriate), and a "
    "canonical URL pointing at the .in domain - which we locked in as the "
    "single source of truth, not the .com. The XML sitemap is generated "
    "automatically and pinged to Search Console on every deploy."
)

pdf.section("NAP consistency, everywhere")
pdf.body(
    "Business name, address, and phone number appear in identical form in "
    "the header, footer, schema markup, Google Business Profile, and every "
    "citation site we touched. Across the project we updated more than "
    "thirty external citations to match. To Google, this is one business "
    "now - not four."
)

pdf.section("The spam-URL cleanup")
pdf.body(
    "The 19,700+ junk URLs sitting in Google's index were the silent killer "
    "of every SEO improvement we could make. We served them a 410 Gone "
    "response - not a 404, not a redirect - which is the strongest signal "
    "to Google that a URL is permanently retired. Combined with an updated "
    "robots.txt and a clean sitemap, the index started shrinking back to "
    "real pages within weeks."
)

pdf.section("Internal linking and blog content")
pdf.body(
    "Twelve in-depth blog posts launched with the site, each targeting a "
    "real candidate or employer question. Every post links to two or three "
    "service pages and to two or three other relevant posts. This is how "
    "small sites earn outsized rankings - the internal link graph is the "
    "free part of SEO that almost nobody actually does."
)

pdf.pullquote(
    "Speed, schema, canonical URLs, internal links, and clean retirement "
    "of dead pages. None of it is exotic. All of it has to be done."
)

pdf.chapter_takeaway([
    "Ship under 2.5s mobile LCP. If you cannot hit it, you have a CMS or hosting problem - not a code problem.",
    "Add JSON-LD schema: Organization, LocalBusiness, FAQPage where relevant. Most sites skip this. It is free authority.",
    "Pick ONE canonical domain (Shiva's is the .in, not the .com) and make every internal link, citation, and schema reference point there.",
    "Retire dead URLs with HTTP 410, not 404 or 301. 410 tells Google 'permanently gone, drop it from the index'. Nothing else is as fast.",
    "Plan internal linking before launch - every blog post should link to 2-3 service pages and 2-3 other posts. Free SEO most agencies ignore.",
])


# ---------- CHAPTER 8 ----------
pdf.chapter_opener(
    8,
    "Handing Over the Keys",
    "A site is only finished when the client can run it without us. "
    "We built the operating layer with the same care as the public site.",
)

pdf.section("A real CMS, not a Word document")
pdf.body(
    "We built a custom admin area where the client's team can publish blog "
    "posts, swap hero images, update service descriptions, and edit "
    "country pages without touching code. Multi-image upload, version "
    "history on every piece of content, and a four-layer safety net so an "
    "accidental delete is never permanent. The team trained on it in a "
    "single afternoon."
)

pdf.section("Every lead, in a CRM")
pdf.body(
    "Every form on the site - candidate enquiry, employer request, "
    "newsletter signup, country-specific landing page - posts to two "
    "destinations in parallel. The first is our own database, so we never "
    "lose a record. The second is the client's Sangam CRM, where it lands "
    "as a Lead with the source page and campaign tagged. The sales team "
    "works the leads where they already work - we do not ask them to "
    "change their habit."
)

pdf.section("WhatsApp nurture, segmented")
pdf.body(
    "We connected Gallabox to the CRM and built two separate nurture "
    "tracks - one for Europe-bound enquiries, one for Gulf-bound "
    "enquiries. The moment a candidate submits a form, the right drip "
    "starts: a welcome, a documents checklist, a process timeline, and a "
    "soft nudge for the next step. WhatsApp is where this audience lives. "
    "Email-only follow-up was leaving money on the table."
)

pdf.section("Daily call reports at 17:30 IST")
pdf.body(
    "Sales managers need to see the day end with their eyes closed. We "
    "automated nine Sangam reports that fire at 17:30 IST every weekday - "
    "the boss receives the consolidated team view, and each employee "
    "receives their own report only. No more end-of-day reporting "
    "meetings. The numbers arrive on their own."
)

pdf.pullquote(
    "If the client cannot operate the site without you, you have not "
    "finished the project - you have just started a dependency."
)

pdf.chapter_takeaway([
    "Build the CMS your client can actually operate - multi-image upload, version history, and recoverable deletes. Train them in one afternoon.",
    "Write every form submission to your own DB AND the CRM in parallel. If the CRM is down, you still have the lead.",
    "Wire WhatsApp drip campaigns from day one - email-only follow-up loses Indian and Gulf audiences fast.",
    "Automate daily reports for the sales team. End-of-day standup meetings are a tax you can eliminate with one webhook.",
])


# ---------- CHAPTER 9 ----------
pdf.chapter_opener(
    9,
    "Zero to Top 3",
    "What changes when you do all of this in order. The numbers, the "
    "lessons, and what comes next.",
)

pdf.section("What changed")
pdf.stat_row([
    ("< 2s", "mobile load time"),
    ("Top 3", "for primary local terms"),
    ("Auto", "lead -> CRM -> WhatsApp"),
])

pdf.body(
    "The mobile load time dropped from over nine seconds to under two. The "
    "spam URLs are being retired from Google's index every week. The "
    "business now ranks in the top three of the local pack for the queries "
    "the audience actually types. Every enquiry from the site lands in the "
    "CRM, kicks off a WhatsApp nurture in the right language, and is "
    "visible on the boss's daily report by 17:30."
)

pdf.section("The lessons, in five lines")
pdf.bullet([
    "Audit before opinion. The numbers tell you what to fix.",
    "Foundation before facade. NAP, schema, and dead-URL cleanup come first.",
    "Words before pixels. Copy and sitemap decide whether design works.",
    "Mood before screens. Approved moodboards prevent rewrite meetings.",
    "Operations before launch. The CMS, CRM, and reports are part of the build.",
])

pdf.section("What this looks like for your business")
pdf.body(
    "If you are reading this and the story sounded familiar - the quiet "
    "phone, the dated site, the leads that go nowhere - the playbook is "
    "the same regardless of industry. The order matters more than the "
    "tools. The discipline matters more than the budget. And the right "
    "partner is the one who treats your website as a system to operate, "
    "not a brochure to ship."
)

pdf.pullquote(
    "Zero to Top 3 is not magic. It is nine chapters of unglamorous "
    "work, done in the right order, with no chapter skipped."
)


# ---------- SELF-AUDIT SCORECARD ----------
pdf.add_page()
pdf.set_font("Helvetica", "B", 24)
pdf.set_text_color(*BRAND_DARK)
pdf.cell(0, 12, "Your 15-Minute Self-Audit", new_x="LMARGIN", new_y="NEXT")
pdf.set_draw_color(*ACCENT)
pdf.set_line_width(1.2)
pdf.line(15, pdf.get_y(), 55, pdf.get_y())
pdf.ln(6)

pdf.set_font("Helvetica", "I", 11)
pdf.set_text_color(*MUTED)
pdf.multi_cell(
    0,
    5.6,
    "Open your site in one tab, Google Search Console in another, and a "
    "PageSpeed Insights report in a third. For each row, tick the box if "
    "your site PASSES the check. The number of empty boxes is your gap count.",
)
pdf.ln(6)

pdf.audit_row("NAP consistency",
    "Business name, phone, and address are identical across the website, GBP, and every citation site.")
pdf.audit_row("Canonical domain",
    "One domain (e.g. .in OR .com, not both) is set as canonical in every page's head tag.")
pdf.audit_row("Mobile load speed",
    "Under 2.5s LCP on mobile, measured on PageSpeed Insights. If it's above 4s, you're losing leads to bounce.")
pdf.audit_row("Indexed URL hygiene",
    "Total indexed URLs in GSC is within 50% of your actual page count. Anything more means spam URLs or stale archives.")
pdf.audit_row("Structured data",
    "JSON-LD schema present: at minimum Organization and LocalBusiness, with FAQPage on relevant pages.")
pdf.audit_row("Internal linking",
    "Every blog post and service page links to 2-3 other relevant pages. Not a single page is an orphan.")
pdf.audit_row("Lead capture + CRM",
    "Every form posts to a CRM (not just an inbox), every submission triggers an immediate auto-reply, and you can name where last month's leads went.")

pdf.ln(6)
pdf.set_fill_color(*PAPER)
y = pdf.get_y()
pdf.rect(15, y, 180, 36, "F")
pdf.set_fill_color(*ACCENT)
pdf.rect(15, y, 2, 36, "F")
pdf.set_xy(20, y + 4)
pdf.set_font("Helvetica", "B", 11)
pdf.set_text_color(*BRAND_DARK)
pdf.cell(170, 6, "READING YOUR SCORE", new_x="LMARGIN", new_y="NEXT")
pdf.set_x(20)
pdf.set_font("Helvetica", "", 10)
pdf.set_text_color(*INK)
pdf.multi_cell(170, 5.5,
    "7 of 7 passed - you're in great shape, share this PDF with someone who needs it.\n"
    "5-6 passed - you have a couple of leaks; patch them in the next month.\n"
    "4 or fewer - you have more gaps than you can comfortably fix alone. The next page is for you.")


# ---------- FREE VISIBILITY AUDIT CTA ----------
pdf.add_page()
# top color band
pdf.set_fill_color(*BRAND)
pdf.rect(0, 0, 210, 60, "F")
pdf.set_xy(15, 18)
pdf.set_font("Helvetica", "B", 11)
pdf.set_text_color(*ACCENT)
pdf.cell(0, 6, "LIMITED TO 5 BOOKINGS / MONTH", new_x="LMARGIN", new_y="NEXT")
pdf.set_xy(15, 28)
pdf.set_font("Helvetica", "B", 26)
pdf.set_text_color(255, 255, 255)
pdf.cell(0, 11, "Free 30-Minute Visibility Audit", new_x="LMARGIN", new_y="NEXT")

pdf.set_xy(15, 70)
pdf.set_font("Helvetica", "I", 11)
pdf.set_text_color(*MUTED)
pdf.multi_cell(0, 5.6,
    "If your score on the previous page made you uncomfortable - this is "
    "the next step. I run five of these per month, personally. No sales "
    "team, no junior. You and me, on a call, looking at your site together.")
pdf.ln(4)

pdf.section("What you'll walk away with")
pdf.bullet([
    "A live walkthrough of the 3 biggest visibility leaks on your site - the ones costing you leads right now.",
    "A prioritised 30-day fix list, written down. Whether you hire us or not, you keep the list.",
    "Your real number: where you currently rank for your most valuable keyword, and what it would realistically take to move into the top 3.",
    "A no-pressure conversation. If we're not the right fit, I'll tell you who is.",
])

pdf.section("Who this is for")
pdf.bullet([
    "Service businesses - manpower, legal, healthcare, education, real estate, professional services.",
    "Anyone running a site that loads slowly, ranks poorly, or generates zero leads despite having 'a website'.",
    "Founders who have read this PDF, taken the audit honestly, and scored 4 or below.",
])

pdf.section("How to book")
pdf.body(
    "Email Jaspreet directly at info@TheCultStudio.agency with the subject "
    "line 'Visibility Audit'. Include your website URL and the country your "
    "business operates in. I'll reply within one working day with two "
    "time slots."
)

pdf.ln(2)
pdf.set_fill_color(*BRAND)
y = pdf.get_y()
pdf.rect(15, y, 180, 38, "F")
pdf.set_xy(15, y + 5)
pdf.set_font("Helvetica", "B", 14)
pdf.set_text_color(255, 255, 255)
pdf.cell(180, 7, "info@TheCultStudio.agency", align="C", new_x="LMARGIN", new_y="NEXT")
pdf.set_x(15)
pdf.set_font("Helvetica", "", 10)
pdf.set_text_color(255, 255, 255)
pdf.cell(180, 6, "Subject: Visibility Audit", align="C", new_x="LMARGIN", new_y="NEXT")
pdf.set_x(15)
pdf.set_font("Helvetica", "I", 9)
pdf.cell(180, 6, "Founded and run by Jaspreet  -  TheCult Studio", align="C")


# ---------- OUTPUT ----------
output_path = "Shiva_Manpower_Journey_Story.pdf"
pdf.output(output_path)
print(f"Generated: {output_path}")
