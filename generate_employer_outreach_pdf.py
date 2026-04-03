#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Generate PDF: 50 Gulf Employer Outreach Templates
for Shiva Travel & Manpower Consultancy
"""

from fpdf import FPDF

class OutreachPDF(FPDF):
    def header(self):
        if self.page_no() > 1:
            self.set_font("Helvetica", "I", 8)
            self.set_text_color(100, 100, 100)
            self.cell(0, 8, "Shiva Travel & Manpower Consultancy | Employer Outreach Portfolio 2026", align="C")
            self.ln(4)
            self.set_draw_color(0, 102, 153)
            self.set_line_width(0.3)
            self.line(10, self.get_y(), 200, self.get_y())
            self.ln(4)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(128, 128, 128)
        self.cell(0, 10, f"Page {self.page_no()}/{{nb}}", align="C")

    def chapter_title(self, title, color=(0, 102, 153)):
        self.set_font("Helvetica", "B", 14)
        self.set_text_color(*color)
        self.cell(0, 10, title, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(*color)
        self.set_line_width(0.5)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(4)

    def section_header(self, text):
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(51, 51, 51)
        self.cell(0, 7, text, new_x="LMARGIN", new_y="NEXT")
        self.ln(1)

    def body_text(self, text):
        self.set_font("Helvetica", "", 9.5)
        self.set_text_color(51, 51, 51)
        self.multi_cell(0, 5, text)
        self.ln(2)

    def bold_text(self, text):
        self.set_font("Helvetica", "B", 9.5)
        self.set_text_color(51, 51, 51)
        self.multi_cell(0, 5, text)

    def email_block(self, subject, body):
        # Subject line
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(0, 102, 153)
        self.cell(0, 6, f"Subject: {subject}", new_x="LMARGIN", new_y="NEXT")
        self.ln(2)
        # Body
        self.set_font("Helvetica", "", 9)
        self.set_text_color(51, 51, 51)
        self.multi_cell(0, 4.5, body)
        self.ln(3)


def build_pdf():
    pdf = OutreachPDF()
    pdf.alias_nb_pages()
    pdf.set_auto_page_break(auto=True, margin=20)

    # ===== COVER PAGE =====
    pdf.add_page()
    pdf.ln(30)
    pdf.set_font("Helvetica", "B", 28)
    pdf.set_text_color(0, 102, 153)
    pdf.cell(0, 15, "Employer Outreach Portfolio", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)
    pdf.set_font("Helvetica", "", 16)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(0, 10, "50 Gulf Employers | Personalized Email Templates", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(8)
    pdf.set_draw_color(0, 102, 153)
    pdf.set_line_width(1)
    pdf.line(60, pdf.get_y(), 150, pdf.get_y())
    pdf.ln(10)
    pdf.set_font("Helvetica", "B", 14)
    pdf.set_text_color(51, 51, 51)
    pdf.cell(0, 8, "Prepared by", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "B", 18)
    pdf.set_text_color(0, 102, 153)
    pdf.cell(0, 12, "Shiva Travel & Manpower Consultancy", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(4)
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(0, 7, "Licensed Recruiting Agent | RA B-1794/PUN/2022", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.cell(0, 7, "Ministry of External Affairs, Govt. of India", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.cell(0, 7, "ALMRA Member Since 2008 | Est. 1998", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)
    pdf.cell(0, 7, "Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab 144040", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.cell(0, 7, "Phone: +91 98148-20432 | WhatsApp: +91 98153-58832", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.cell(0, 7, "Email: info@shivamanpower.com", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(15)
    pdf.set_font("Helvetica", "I", 10)
    pdf.set_text_color(120, 120, 120)
    pdf.cell(0, 7, "UAE | Saudi Arabia | Qatar", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.cell(0, 7, "April 2026", align="C", new_x="LMARGIN", new_y="NEXT")

    # ===== TABLE OF CONTENTS =====
    pdf.add_page()
    pdf.chapter_title("Table of Contents")
    pdf.ln(2)

    toc_sections = [
        ("1.", "Company Overview & Value Proposition", 3),
        ("2.", "UAE Employers (20 Companies)", 4),
        ("3.", "Saudi Arabia Employers (18 Companies)", 0),
        ("4.", "Qatar Employers (12 Companies)", 0),
        ("5.", "Email Usage Guide & Best Practices", 0),
    ]
    for num, title, _ in toc_sections:
        pdf.set_font("Helvetica", "B", 11)
        pdf.set_text_color(0, 102, 153)
        pdf.cell(10, 8, num)
        pdf.set_font("Helvetica", "", 11)
        pdf.set_text_color(51, 51, 51)
        pdf.cell(0, 8, title, new_x="LMARGIN", new_y="NEXT")

    # ===== SECTION 1: COMPANY OVERVIEW =====
    pdf.add_page()
    pdf.chapter_title("1. Shiva Travel & Manpower Consultancy - Overview")
    pdf.ln(2)

    pdf.section_header("Who We Are")
    pdf.body_text(
        "Shiva Travel & Manpower Consultancy is a Government of India licensed overseas recruitment agency "
        "(License No. RA B-1794/PUN/2022) headquartered in Nakodar, Punjab. Established in 1998 by Mr. Tarsem Lal, "
        "we have over 25 years of proven expertise in sourcing, screening, and deploying skilled, semi-skilled, and "
        "unskilled manpower for employers across the Gulf region and Europe."
    )

    pdf.section_header("Our Unique Value Proposition for Employers")
    points = [
        "500+ Direct Employer Partnerships across 20+ countries",
        "5,000+ Workers Successfully Placed with zero fraud complaints in 25+ years",
        "Full E-Migrate & MEA Compliance for every candidate deployed",
        "Zero Cost to Candidates - employer-funded model ensures motivated, committed workers",
        "Pre-Departure Orientation covering contracts, labor laws, cultural norms, and worker rights",
        "Trade Testing Coordination for welding, electrical, plumbing, carpentry, heavy equipment",
        "30-60 Day Deployment for Gulf placements (interview selection to departure)",
        "Post-Deployment Support ensuring worker retention and satisfaction",
        "Dedicated Walk-in Offices in Nakodar and Jalandhar for face-to-face candidate screening",
        "ALMRA Member since 2008 with full government license verification on E-Migrate portal",
    ]
    for p in points:
        pdf.set_font("Helvetica", "", 9.5)
        pdf.set_text_color(51, 51, 51)
        pdf.cell(5, 5, "-")
        pdf.multi_cell(0, 5, p)
        pdf.ln(1)

    pdf.ln(2)
    pdf.section_header("Sectors We Serve")
    sectors = [
        "Construction & Infrastructure: Masons, carpenters, steel fixers, painters, tile workers, scaffolders",
        "Oil, Gas & Energy: Riggers, pipe fitters, welders, safety officers, heavy equipment operators",
        "Hospitality & Hotels: Chefs, housekeeping staff, front desk, waitstaff, kitchen helpers",
        "Manufacturing & Industrial: Machine operators, assembly line workers, warehouse staff",
        "Healthcare: Nurses, lab technicians, hospital support staff, paramedics",
        "Logistics & Transport: Drivers (light/heavy), forklift operators, logistics coordinators",
        "Facility Management: Cleaners, security guards, maintenance technicians, HVAC technicians",
    ]
    for s in sectors:
        pdf.set_font("Helvetica", "", 9.5)
        pdf.cell(5, 5, "-")
        pdf.multi_cell(0, 5, s)
        pdf.ln(1)

    # ===== EMPLOYER DATA =====
    employers = get_all_employers()

    # ===== SECTION 2: UAE =====
    pdf.add_page()
    pdf.chapter_title("2. UAE Employers (20 Companies)", (0, 102, 153))
    pdf.ln(2)

    uae = [e for e in employers if e["country"] == "UAE"]
    for i, emp in enumerate(uae, 1):
        render_employer(pdf, emp, i)

    # ===== SECTION 3: SAUDI ARABIA =====
    pdf.add_page()
    pdf.chapter_title("3. Saudi Arabia Employers (18 Companies)", (0, 128, 0))
    pdf.ln(2)

    ksa = [e for e in employers if e["country"] == "Saudi Arabia"]
    for i, emp in enumerate(ksa, 21):
        render_employer(pdf, emp, i)

    # ===== SECTION 4: QATAR =====
    pdf.add_page()
    pdf.chapter_title("4. Qatar Employers (12 Companies)", (153, 0, 51))
    pdf.ln(2)

    qatar = [e for e in employers if e["country"] == "Qatar"]
    for i, emp in enumerate(qatar, 39):
        render_employer(pdf, emp, i)

    # ===== SECTION 5: BEST PRACTICES =====
    pdf.add_page()
    pdf.chapter_title("5. Email Usage Guide & Best Practices")
    pdf.ln(2)

    pdf.section_header("How to Use These Templates")
    tips = [
        "Personalize the [Recipient Name] and [Your Name] fields before sending.",
        "Research each company's current projects and reference them in the opening line.",
        "Attach your company profile, license copy (RA B-1794), and candidate database summary.",
        "Send emails on Tuesday-Thursday mornings (Gulf time) for best open rates.",
        "Follow up within 5-7 business days if no response is received.",
        "Connect with HR managers on LinkedIn before or after sending the email.",
        "Maintain a tracking spreadsheet to log all outreach, responses, and follow-ups.",
        "Offer a free trial placement or sample CV shortlist to build initial trust.",
    ]
    for t in tips:
        pdf.set_font("Helvetica", "", 9.5)
        pdf.cell(5, 5, "-")
        pdf.multi_cell(0, 5, t)
        pdf.ln(1)

    pdf.ln(4)
    pdf.section_header("Recommended Follow-Up Schedule")
    schedule = [
        "Day 1: Send personalized outreach email with attachments",
        "Day 3: Connect on LinkedIn with a brief message referencing your email",
        "Day 7: Send follow-up email if no response",
        "Day 14: Phone call to HR/procurement department",
        "Day 21: Final follow-up email with updated candidate availability",
        "Day 30: Add to quarterly newsletter list for ongoing engagement",
    ]
    for s in schedule:
        pdf.set_font("Helvetica", "", 9.5)
        pdf.cell(5, 5, "-")
        pdf.multi_cell(0, 5, s)
        pdf.ln(1)

    pdf.ln(4)
    pdf.section_header("Key Documents to Attach")
    docs = [
        "Company Profile / Capability Brochure (PDF)",
        "Government License Copy (RA B-1794/PUN/2022)",
        "ALMRA Membership Certificate",
        "Sample Candidate CVs (anonymized) relevant to their sector",
        "Trade Test Pass Certificates (samples)",
        "Client Testimonials / Reference Letters from existing employer partners",
    ]
    for d in docs:
        pdf.set_font("Helvetica", "", 9.5)
        pdf.cell(5, 5, "-")
        pdf.multi_cell(0, 5, d)
        pdf.ln(1)

    # Save
    output_path = "c:/Users/jaspr/Shivamanpowerconsultancy/Gulf_Employer_Outreach_Portfolio_2026.pdf"
    pdf.output(output_path)
    print(f"PDF generated successfully: {output_path}")
    return output_path


def render_employer(pdf, emp, num):
    """Render a single employer entry with company info and email template."""
    # Check if we need a new page (need at least 100mm for an entry)
    if pdf.get_y() > 180:
        pdf.add_page()

    # Company header
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(0, 70, 120)
    pdf.cell(0, 7, f"{num}. {emp['name']}", new_x="LMARGIN", new_y="NEXT")

    # Company details
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(80, 80, 80)
    details = f"Sector: {emp['sector']} | Location: {emp['location']} | {emp['description']}"
    pdf.multi_cell(0, 4.5, details)
    pdf.ln(2)

    # Email template
    pdf.set_fill_color(245, 248, 252)
    y_start = pdf.get_y()
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(0, 102, 153)
    pdf.cell(0, 5, f"Subject: {emp['email_subject']}", new_x="LMARGIN", new_y="NEXT", fill=True)
    pdf.ln(1)

    pdf.set_font("Helvetica", "", 8.5)
    pdf.set_text_color(51, 51, 51)
    pdf.multi_cell(0, 4.2, emp["email_body"], fill=False)
    pdf.ln(4)

    # Separator
    pdf.set_draw_color(200, 200, 200)
    pdf.set_line_width(0.2)
    pdf.line(10, pdf.get_y(), 200, pdf.get_y())
    pdf.ln(4)


def get_all_employers():
    """Return data for all 50 employers with personalized email templates."""

    company_sign = (
        "Warm regards,\n"
        "[Your Name]\n"
        "Shiva Travel & Manpower Consultancy\n"
        "Licensed Recruiting Agent | RA B-1794/PUN/2022\n"
        "Ministry of External Affairs, Govt. of India\n"
        "Phone: +91 98148-20432 | WhatsApp: +91 98153-58832\n"
        "Email: info@shivamanpower.com"
    )

    employers = [
        # ===== UAE (1-20) =====
        {
            "name": "ALEC Engineering & Contracting",
            "country": "UAE",
            "sector": "Construction & Engineering",
            "location": "Dubai, UAE",
            "description": "Leading UAE contractor with 600+ completed projects across UAE, Saudi Arabia, Oman & Ethiopia. Revenue: $15.3B.",
            "email_subject": "Skilled Construction Manpower Partnership - Government Licensed Indian Recruiter",
            "email_body": f"Dear Hiring Manager,\n\nI am writing on behalf of Shiva Travel & Manpower Consultancy, a Government of India licensed recruitment agency (RA B-1794) with 25+ years of experience supplying skilled construction workers to the Gulf region.\n\nWith ALEC's impressive portfolio of 600+ projects and expanding operations, we understand the critical need for reliable, pre-screened construction manpower. We specialize in sourcing:\n\n- Steel fixers, masons, carpenters, and scaffolders\n- Electricians, plumbers, and HVAC technicians\n- Heavy equipment operators and crane operators\n- Welders (certified 6G/6GR) and pipe fitters\n\nOur candidates undergo rigorous trade testing and pre-departure orientation covering UAE labor laws and safety protocols. We can deploy workers within 30-45 days of confirmed demand.\n\nWe have successfully placed 5,000+ workers across the Gulf with zero fraud complaints. I would welcome the opportunity to discuss how we can support ALEC's manpower requirements.\n\nMay I schedule a brief call to explore a potential partnership?\n\n{company_sign}"
        },
        {
            "name": "Al Habtoor Group",
            "country": "UAE",
            "sector": "Construction & Engineering",
            "location": "Dubai, UAE",
            "description": "Founded 1970. Major UAE corporation spanning hospitality, automotive, real estate, education & engineering. 13-member HR team.",
            "email_subject": "Reliable Manpower Supply for Al Habtoor's Multi-Sector Operations",
            "email_body": f"Dear HR Team,\n\nShiva Travel & Manpower Consultancy, licensed by the Ministry of External Affairs, India (RA B-1794), wishes to propose a recruitment partnership with Al Habtoor Group.\n\nGiven Al Habtoor's diversified operations across construction, hospitality, and real estate, we can provide a comprehensive manpower solution covering:\n\n- Construction: Masons, steel fixers, painters, tile workers, carpenters\n- Hospitality: Chefs, housekeeping staff, waiters, kitchen helpers\n- Facility Management: Cleaners, security personnel, maintenance staff\n- Drivers: Light and heavy vehicle operators with valid UAE-convertible licenses\n\nWith 25+ years in overseas recruitment and a database of 10,000+ pre-screened Indian workers, we offer rapid deployment (30-45 days) with full E-Migrate compliance and documentation.\n\nWe would be honored to serve a legacy group like Al Habtoor. Could we arrange a meeting to present our capabilities?\n\n{company_sign}"
        },
        {
            "name": "Al Naboodah Construction Group",
            "country": "UAE",
            "sector": "Construction & Infrastructure",
            "location": "Dubai, UAE",
            "description": "One of the UAE's oldest and most respected construction firms. Known for large-scale infrastructure and building projects.",
            "email_subject": "Experienced Indian Workforce for Al Naboodah's Infrastructure Projects",
            "email_body": f"Dear Recruitment Team,\n\nI am reaching out from Shiva Travel & Manpower Consultancy (License RA B-1794, MEA India) to explore a manpower supply partnership with Al Naboodah Construction Group.\n\nYour reputation for delivering complex infrastructure projects aligns perfectly with our strength in sourcing experienced construction professionals from India's Punjab and northern regions, where skilled tradesmen are abundant.\n\nWe can provide:\n- Experienced masons, carpenters, and steel fixers with Gulf experience\n- Certified welders (SMAW, GTAW, FCAW) and pipe fitters\n- Heavy equipment operators (excavators, loaders, cranes)\n- Scaffolders, painters, and general laborers\n\nAll candidates are trade-tested, medically screened, and provided pre-departure orientation on UAE labor laws and site safety standards. Our deployment timeline is 30-45 days from confirmed order.\n\nI would appreciate the opportunity to send you our company profile and sample candidate CVs.\n\n{company_sign}"
        },
        {
            "name": "ASGC Construction",
            "country": "UAE",
            "sector": "Construction",
            "location": "Dubai, UAE",
            "description": "Award-winning UAE contractor known for engineering excellence and diverse large-scale projects including commercial and residential towers.",
            "email_subject": "Quality Manpower Solutions for ASGC's Award-Winning Projects",
            "email_body": f"Dear HR / Procurement Department,\n\nShiva Travel & Manpower Consultancy (Govt. of India License RA B-1794) congratulates ASGC on its continued excellence in delivering landmark projects across the UAE.\n\nAs a licensed Indian recruitment agency with 25+ years of Gulf placement experience, we would like to offer our services as a reliable manpower supply partner. Our strengths include:\n\n- Large-volume deployment: We can mobilize 50-200 workers per batch within 30-45 days\n- Trade-tested candidates: All workers undergo skill assessments before deployment\n- Zero fraud record: 25+ years of transparent, government-compliant operations\n- Post-deployment support: We stay engaged to ensure worker retention\n\nCategories we supply: masons, steel fixers, shuttering carpenters, electricians, plumbers, HVAC technicians, painters, tile fixers, and general helpers.\n\nWould you be open to receiving our company profile and a sample shortlist of available candidates?\n\n{company_sign}"
        },
        {
            "name": "Emaar Properties",
            "country": "UAE",
            "sector": "Real Estate & Construction",
            "location": "Dubai, UAE",
            "description": "Developer of Burj Khalifa, Dubai Mall, and Dubai Marina. One of the world's largest real estate companies with massive ongoing projects.",
            "email_subject": "Skilled Manpower Partnership for Emaar's Iconic Developments",
            "email_body": f"Dear Talent Acquisition Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, Ministry of External Affairs, India) is honored to propose a manpower recruitment partnership with Emaar Properties.\n\nAs the developer behind some of the world's most iconic projects, Emaar's need for quality manpower is continuous. We have been supplying skilled Indian workers to Gulf employers for over 25 years and can support Emaar's projects with:\n\n- Construction trades: Masons, carpenters, steel fixers, plumbers, electricians\n- Finishing trades: Painters, tile workers, glass installers, gypsum workers\n- MEP specialists: HVAC technicians, fire alarm technicians, low-current technicians\n- Facility staff: Cleaners, security guards, maintenance technicians\n\nOur candidates are sourced from India's best trade training centers, undergo rigorous screening, and arrive deployment-ready with all E-Migrate documentation completed.\n\nI would be grateful for an opportunity to discuss collaboration.\n\n{company_sign}"
        },
        {
            "name": "Arabtec Holding",
            "country": "UAE",
            "sector": "Construction",
            "location": "Dubai, UAE",
            "description": "Major UAE construction company that built the Burj Khalifa. Extensive portfolio of commercial, residential, and infrastructure projects.",
            "email_subject": "Dependable Indian Workforce for Arabtec's Construction Projects",
            "email_body": f"Dear Recruitment Department,\n\nShiva Travel & Manpower Consultancy, operating under Govt. of India License RA B-1794, wishes to introduce our overseas recruitment services to Arabtec Holding.\n\nWith your extensive project portfolio and workforce demands, we believe our 25-year track record in Gulf manpower supply makes us an ideal recruitment partner. We offer:\n\n- Pre-screened construction workers with verified Gulf experience\n- Certified welders, pipe fitters, and fabricators\n- Skilled masons, carpenters, and steel fixers from Punjab, India\n- Rapid mobilization of large worker batches (50-300 workers per deployment)\n\nOur zero-fraud track record and full MEA/E-Migrate compliance ensure a smooth, legally compliant recruitment process. All workers receive pre-departure orientation on UAE labor regulations.\n\nI would welcome the chance to present our capabilities. May I send our detailed company profile?\n\n{company_sign}"
        },
        {
            "name": "Dutco Group (Balfour Beatty)",
            "country": "UAE",
            "sector": "Construction & Industrial",
            "location": "Dubai, UAE",
            "description": "Joint venture with Balfour Beatty. Major contractor for infrastructure, industrial, and commercial projects across the UAE.",
            "email_subject": "Comprehensive Manpower Solutions for Dutco's Infrastructure Projects",
            "email_body": f"Dear HR Manager,\n\nI am writing from Shiva Travel & Manpower Consultancy (License RA B-1794, MEA India) to propose a skilled manpower supply arrangement with Dutco Group.\n\nYour diverse infrastructure and industrial portfolio requires a steady pipeline of skilled workers. As a government-licensed Indian recruiter with 5,000+ successful placements, we specialize in:\n\n- Civil workers: Masons, carpenters, steel fixers, shuttering workers\n- Industrial trades: Welders, pipe fitters, riggers, millwrights\n- MEP tradesmen: Electricians, plumbers, HVAC installers\n- Heavy equipment operators: Crane, excavator, and loader operators\n\nWe handle the entire recruitment lifecycle from sourcing and screening to documentation, trade testing, medical clearance, and E-Migrate registration.\n\nCould we schedule a call to discuss how we can support Dutco's workforce needs?\n\n{company_sign}"
        },
        {
            "name": "Drake & Scull International",
            "country": "UAE",
            "sector": "MEP & Construction",
            "location": "Dubai, UAE",
            "description": "Leading MEP (Mechanical, Electrical, Plumbing) and civil contracting company with projects across the GCC region.",
            "email_subject": "MEP-Specialized Manpower from India for Drake & Scull Projects",
            "email_body": f"Dear Procurement / HR Team,\n\nShiva Travel & Manpower Consultancy (Govt. of India License RA B-1794) specializes in sourcing MEP and construction tradesmen - a perfect fit for Drake & Scull International's core operations.\n\nWe can supply:\n- Electricians (industrial & building) with Gulf experience\n- Plumbers and pipe fitters (copper, PPR, GI, HDPE)\n- HVAC technicians and duct fabricators\n- Fire fighting system installers and testers\n- Low-current and BMS technicians\n- General helpers and semi-skilled MEP assistants\n\nWith 25+ years of Gulf recruitment experience and a strong candidate pool in India's northern states, we can deploy MEP specialists within 30-45 days with full trade testing and documentation.\n\nI believe a partnership could be mutually beneficial. Shall I share sample candidate profiles?\n\n{company_sign}"
        },
        {
            "name": "ADNOC (Abu Dhabi National Oil Company)",
            "country": "UAE",
            "sector": "Oil, Gas & Energy",
            "location": "Abu Dhabi, UAE",
            "description": "UAE's largest oil company, wholly owned by Abu Dhabi government. Major employer with massive ongoing modernization and clean energy initiatives.",
            "email_subject": "Skilled Oil & Gas Manpower from India - Licensed Recruitment Partner",
            "email_body": f"Dear Recruitment / Vendor Management Team,\n\nShiva Travel & Manpower Consultancy (Govt. of India License RA B-1794) wishes to register as an approved manpower supplier for ADNOC's operations.\n\nWith ADNOC's ambitious expansion and modernization programs, we can support your workforce needs across:\n\n- Upstream: Riggers, roustabouts, derrick operators, drill floor workers\n- Midstream: Pipe fitters, welders (6G certified), scaffolders\n- Downstream: Refinery operators, process technicians, instrument technicians\n- Support: Safety officers, heavy equipment operators, general maintenance staff\n\nOur candidates from India's industrial training institutes are skilled, disciplined, and experienced in Gulf working conditions. We ensure full E-Migrate compliance and provide pre-departure safety and cultural orientation.\n\nWe would be grateful for the opportunity to submit our vendor registration. Could you share the vendor empanelment process?\n\n{company_sign}"
        },
        {
            "name": "ENOC (Emirates National Oil Company)",
            "country": "UAE",
            "sector": "Oil, Gas & Energy",
            "location": "Dubai, UAE",
            "description": "Dubai's integrated energy company covering the full spectrum of oil and gas operations, including refining, retail, and trading.",
            "email_subject": "Energy Sector Manpower Supply - Licensed Indian Recruitment Agency",
            "email_body": f"Dear HR Department,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) is a 25-year-old government-licensed recruitment agency specializing in energy sector manpower from India.\n\nWe can support ENOC's operations with:\n- Refinery and plant operators\n- Maintenance technicians (mechanical, electrical, instrumentation)\n- Welders and pipe fitters with oil & gas certifications\n- Safety officers and HSE coordinators\n- Drivers (tanker, heavy vehicle) and logistics staff\n\nAll our candidates hold relevant trade certifications and undergo thorough background checks. We provide complete documentation support including E-Migrate registration and medical clearances.\n\nWe would value the opportunity to be considered as an ENOC manpower supply partner.\n\n{company_sign}"
        },
        {
            "name": "Jumeirah Group",
            "country": "UAE",
            "sector": "Hospitality & Hotels",
            "location": "Dubai, UAE",
            "description": "Dubai's luxury hotel group operating 26 properties globally including the iconic Burj Al Arab. Part of Dubai Holding.",
            "email_subject": "Trained Indian Hospitality Staff for Jumeirah's Luxury Properties",
            "email_body": f"Dear Talent Acquisition Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) is pleased to offer our hospitality recruitment services to Jumeirah Group.\n\nIndia's hospitality training institutes produce some of the finest hotel professionals, and we specialize in sourcing trained staff for luxury properties:\n\n- Chefs: Indian, Continental, Arabic cuisine specialists\n- Housekeeping: Room attendants, public area cleaners, laundry operators\n- F&B Service: Waiters, bartenders, room service attendants\n- Kitchen: Commis chefs, kitchen stewards, bakery assistants\n- Front Office: Receptionists, concierge staff, bell boys\n\nOur candidates are groomed for luxury service standards and receive cultural orientation before deployment. We can supply staff within 30-45 days with full documentation.\n\nMay I share our hospitality candidate portfolio for your review?\n\n{company_sign}"
        },
        {
            "name": "Rotana Hotels",
            "country": "UAE",
            "sector": "Hospitality & Hotels",
            "location": "Abu Dhabi, UAE",
            "description": "Regional hotel giant with 36 hotels and 10,012 keys in the UAE alone. Rapidly expanding across the Middle East and Africa.",
            "email_subject": "Bulk Hospitality Staff Recruitment for Rotana's Expanding Portfolio",
            "email_body": f"Dear Human Resources Department,\n\nShiva Travel & Manpower Consultancy (Govt. of India License RA B-1794) understands that Rotana's rapid expansion across 36+ properties demands a reliable pipeline of trained hospitality professionals.\n\nWe have been supplying hotel staff to Gulf employers for over two decades and can support Rotana with:\n\n- Bulk housekeeping recruitment: 20-100 staff per batch\n- Kitchen staff: Tandoor chefs, Indian cuisine specialists, helpers\n- F&B teams: Waiters, stewards, baristas\n- Engineering: Hotel maintenance technicians, electricians, AC mechanics\n- Back office: Store keepers, drivers, general helpers\n\nOur candidates are pre-screened for attitude, experience, and health fitness. We manage the complete recruitment cycle at zero cost to candidates, ensuring motivated and committed staff.\n\nShall we arrange a call to discuss Rotana's upcoming manpower needs?\n\n{company_sign}"
        },
        {
            "name": "Hilton Hotels - UAE Operations",
            "country": "UAE",
            "sector": "Hospitality & Hotels",
            "location": "Multiple UAE locations",
            "description": "Operates Waldorf Astoria, Conrad, DoubleTree and Hilton branded properties across the UAE with continuous recruitment needs.",
            "email_subject": "Indian Hospitality Talent Pipeline for Hilton UAE Properties",
            "email_body": f"Dear Regional HR / Talent Acquisition,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) would like to offer our services as a recruitment partner for Hilton's UAE properties.\n\nWith Hilton's diverse brand portfolio from Waldorf Astoria to DoubleTree, you need staff across all skill levels. We can provide:\n\n- Trained housekeeping teams (room attendants, supervisors, laundry)\n- F&B staff (Indian specialty chefs, commis, waiters, stewards)\n- Kitchen helpers and dishwashers in bulk quantities\n- Engineering and maintenance staff\n- General assistants and back-of-house workers\n\nOur recruitment is fully compliant with Indian government regulations, and every candidate is registered on the E-Migrate portal. We pride ourselves on 25+ years of zero-fraud operations.\n\nI would appreciate the chance to present our capabilities to your regional procurement team.\n\n{company_sign}"
        },
        {
            "name": "Kerzner International (Atlantis Resorts)",
            "country": "UAE",
            "sector": "Hospitality & Luxury Resorts",
            "location": "Dubai, UAE",
            "description": "Operates Atlantis The Palm, Atlantis The Royal, and One&Only luxury resorts. 200+ current openings across their UAE properties.",
            "email_subject": "Premium Hospitality Staff for Atlantis & One&Only Resorts",
            "email_body": f"Dear Talent Acquisition Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) is delighted to offer our specialized hospitality recruitment services for Kerzner International's iconic properties.\n\nWith 200+ open positions across Atlantis and One&Only brands, we can support your urgent hiring needs with:\n\n- Luxury-trained housekeeping and room attendants\n- Specialty chefs (Indian, Asian, Continental cuisines)\n- F&B service professionals and banquet staff\n- Spa therapists and wellness professionals\n- Back-of-house staff: Kitchen helpers, stewards, laundry operators\n- Maintenance and engineering technicians\n\nIndian hospitality professionals are known globally for their warmth, dedication, and adaptability. Our pre-departure orientation ensures staff arrive ready to meet luxury service standards.\n\nCan we schedule a meeting to discuss your staffing requirements?\n\n{company_sign}"
        },
        {
            "name": "Transguard Group",
            "country": "UAE",
            "sector": "Facilities Management & Security",
            "location": "Dubai, UAE",
            "description": "UAE's largest outsourcing provider for security, manpower, facilities management, cash services, and logistics. Part of Emirates Group.",
            "email_subject": "Bulk Manpower Supply for Transguard's Multi-Sector Operations",
            "email_body": f"Dear Vendor / Recruitment Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) recognizes Transguard Group as the UAE's premier outsourcing provider and wishes to register as an approved manpower supply partner.\n\nGiven Transguard's large-scale staffing needs across multiple sectors, we can provide:\n\n- Security guards: Trained, disciplined, with SIRA-ready documentation\n- Facility management staff: Cleaners, janitors, landscaping workers\n- Logistics workers: Warehouse assistants, delivery drivers, handlers\n- Aviation support: Ground staff, baggage handlers, cabin cleaners\n- General manpower: Helpers, laborers, office assistants\n\nWe excel at bulk deployment - we can mobilize 50-500 workers per batch with 30-45 day turnaround, all fully documented and E-Migrate compliant.\n\nPlease share your vendor registration process so we may formally apply.\n\n{company_sign}"
        },
        {
            "name": "DEWA (Dubai Electricity & Water Authority)",
            "country": "UAE",
            "sector": "Utilities & Energy",
            "location": "Dubai, UAE",
            "description": "Government utility provider for electricity and water. Major employer with ongoing infrastructure and clean energy projects.",
            "email_subject": "Technical Manpower for DEWA's Infrastructure & Clean Energy Projects",
            "email_body": f"Dear HR / Manpower Planning Department,\n\nShiva Travel & Manpower Consultancy (Govt. of India License RA B-1794) would like to be considered as a manpower supplier for DEWA's operations and ongoing infrastructure projects.\n\nWe specialize in sourcing technical and skilled workers from India who can support:\n\n- Electrical technicians and cable jointers\n- Instrument technicians and meter readers\n- Civil maintenance workers and pipe layers\n- HVAC and mechanical maintenance staff\n- General laborers for infrastructure projects\n- Drivers and logistics support staff\n\nAll our candidates come from accredited Indian technical institutes and undergo trade testing before deployment. We maintain full E-Migrate compliance.\n\nWe would value the opportunity to participate in DEWA's vendor registration process.\n\n{company_sign}"
        },
        {
            "name": "EFS Facilities Services",
            "country": "UAE",
            "sector": "Facility Management",
            "location": "Dubai, UAE",
            "description": "Leading integrated facilities management company in the Middle East serving commercial, residential, and industrial clients.",
            "email_subject": "Facility Management Workforce from India - Licensed Recruitment Partner",
            "email_body": f"Dear Recruitment Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) proposes a manpower partnership with EFS Facilities Services.\n\nAs a leading FM provider, your need for reliable operational staff is constant. We can supply:\n\n- Cleaning and housekeeping staff (commercial and residential)\n- HVAC and AC maintenance technicians\n- Electrical and plumbing maintenance workers\n- Landscaping and outdoor maintenance crews\n- Pest control operators\n- Handymen and general maintenance workers\n\nWe offer competitive rates, rapid deployment (30-45 days), and a commitment to worker quality and retention. Our candidates receive pre-departure training on workplace standards and safety.\n\nShall I share our capabilities presentation and rate card?\n\n{company_sign}"
        },
        {
            "name": "Farnek Services",
            "country": "UAE",
            "sector": "Facility Management & Hospitality Services",
            "location": "Dubai, UAE",
            "description": "Award-winning UAE facility management and technology company serving hospitality, commercial, and industrial sectors.",
            "email_subject": "Trained FM & Hospitality Workers for Farnek's Growing Operations",
            "email_body": f"Dear HR / Operations Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) wishes to introduce our services as a recruitment partner for Farnek Services.\n\nWith Farnek's growing portfolio across FM and hospitality sectors, we can provide:\n\n- Trained housekeeping staff for hotel and commercial cleaning\n- HVAC, electrical, and plumbing technicians\n- Security and access control personnel\n- General maintenance and handyman workers\n- Landscaping and outdoor maintenance teams\n\nOur strength lies in bulk recruitment with consistent quality. We have placed 5,000+ workers in the Gulf with a zero-fraud track record spanning 25+ years.\n\nI would welcome a conversation about how we can support Farnek's staffing needs.\n\n{company_sign}"
        },
        {
            "name": "NMC Healthcare",
            "country": "UAE",
            "sector": "Healthcare",
            "location": "Abu Dhabi, UAE",
            "description": "One of the largest private healthcare operators in the UAE with hospitals and clinics across the Emirates and internationally.",
            "email_subject": "Indian Healthcare & Support Staff for NMC Hospital Network",
            "email_body": f"Dear HR / Recruitment Department,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) would like to offer our healthcare recruitment services to NMC Healthcare.\n\nIndia produces world-class healthcare professionals, and we can support NMC's staffing needs with:\n\n- Registered nurses (BSc Nursing, GNM certified)\n- Lab technicians and radiology technicians\n- Hospital housekeeping and sanitation staff\n- Patient care assistants and ward boys\n- Kitchen staff for hospital catering\n- Administrative and front desk staff\n- Drivers and ambulance assistants\n\nAll healthcare candidates hold recognized Indian certifications, and we coordinate credential verification and dataflow processing. Our deployment timeline for healthcare professionals is 45-60 days.\n\nCould we discuss NMC's upcoming recruitment needs?\n\n{company_sign}"
        },
        {
            "name": "Mediclinic Middle East",
            "country": "UAE",
            "sector": "Healthcare",
            "location": "Dubai & Abu Dhabi, UAE",
            "description": "International private hospital group with multiple facilities across UAE. Part of Mediclinic International with operations in 3 countries.",
            "email_subject": "Qualified Indian Nurses & Hospital Staff for Mediclinic UAE",
            "email_body": f"Dear Talent Acquisition / HR Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) provides healthcare recruitment services from India and would like to partner with Mediclinic Middle East.\n\nWe can support your hospital staffing requirements with:\n\n- Registered nurses and ICU/OT-trained nurses\n- Lab technicians, pharmacy assistants, and X-ray technicians\n- Hospital housekeeping and sterilization department staff\n- Patient transport and ward assistants\n- Hospital kitchen and dietary department staff\n- Maintenance technicians (biomedical, electrical, HVAC)\n\nOur healthcare candidates are sourced from reputed Indian nursing colleges and hospitals, with all certifications verified. We manage the complete process including dataflow, medical testing, and E-Migrate registration.\n\nI would be pleased to discuss a recruitment partnership at your convenience.\n\n{company_sign}"
        },

        # ===== SAUDI ARABIA (21-38) =====
        {
            "name": "Saudi Binladin Group",
            "country": "Saudi Arabia",
            "sector": "Construction & Engineering",
            "location": "Jeddah, Saudi Arabia",
            "description": "One of the world's largest construction companies. Key contractor for Saudi mega projects with decades of experience.",
            "email_subject": "Large-Volume Skilled Construction Workers from India - Licensed Recruiter",
            "email_body": f"Dear Recruitment / HR Department,\n\nShiva Travel & Manpower Consultancy (Govt. of India License RA B-1794) is pleased to introduce our large-volume construction recruitment capabilities for Saudi Binladin Group.\n\nWith Saudi Arabia's Vision 2030 driving unprecedented construction activity, we can support your manpower needs with:\n\n- Masons, plasterers, and tile fixers (50-200 per batch)\n- Carpenters and shuttering carpenters\n- Steel fixers and reinforcement workers\n- Certified welders (SMAW, GTAW, SAW)\n- Painters, waterproofing specialists, and insulators\n- Heavy equipment operators and crane operators\n- General laborers and helpers\n\nWe are fully equipped for large-scale mobilization with 30-45 day deployment cycles. Our 25-year track record includes zero fraud complaints and full government compliance.\n\nPlease let us know how we can register as an approved supplier for Saudi Binladin Group.\n\n{company_sign}"
        },
        {
            "name": "Nesma & Partners",
            "country": "Saudi Arabia",
            "sector": "Construction & Industrial",
            "location": "Jeddah, Saudi Arabia",
            "description": "Key Vision 2030 contractor working on NEOM, Red Sea Project, and major industrial developments. 40+ years experience, thousands of employees.",
            "email_subject": "Skilled Indian Manpower for NEOM & Vision 2030 Projects - Nesma Partnership",
            "email_body": f"Dear HR / Procurement Team,\n\nShiva Travel & Manpower Consultancy (Govt. of India License RA B-1794) recognizes Nesma & Partners' pivotal role in Saudi Arabia's Vision 2030 projects, including NEOM and the Red Sea Project.\n\nWith the enormous manpower demands of these mega projects, we offer:\n\n- Construction workers: Masons, carpenters, steel fixers, scaffolders\n- Industrial workers: Welders, pipe fitters, riggers, insulators\n- MEP technicians: Electricians, plumbers, HVAC specialists\n- Heavy equipment operators with Saudi/Gulf experience\n- General laborers and site helpers in large volumes\n\nWe can mobilize large batches (100-500 workers) with 30-45 day turnaround, all with completed E-Migrate registration and medical clearances. Our trade testing center partnerships ensure every worker meets project-specific skill requirements.\n\nMay we discuss how to become an approved manpower supplier for Nesma?\n\n{company_sign}"
        },
        {
            "name": "Alfanar Group",
            "country": "Saudi Arabia",
            "sector": "Construction & Renewable Energy",
            "location": "Riyadh, Saudi Arabia",
            "description": "Top Saudi contractor active in renewable energy, smart city projects, NEOM, and Saudi solar energy initiatives.",
            "email_subject": "Construction & Renewable Energy Workers for Alfanar's Expanding Projects",
            "email_body": f"Dear HR Department,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) wishes to offer our recruitment services to Alfanar Group, particularly for your growing renewable energy and construction projects.\n\nWe can provide:\n- Solar panel installers and electricians\n- Construction workers for smart city and infrastructure projects\n- Certified welders and fabricators\n- Cable layers and electrical technicians\n- Civil workers: Masons, carpenters, painters\n- General laborers and helpers\n\nIndia has a growing pool of solar and renewable energy trained workers, and we can source candidates with relevant certifications and experience. All deployments are fully E-Migrate compliant.\n\nI would appreciate the opportunity to discuss Alfanar's manpower requirements.\n\n{company_sign}"
        },
        {
            "name": "Al Rashid Trading & Contracting (RTCC)",
            "country": "Saudi Arabia",
            "sector": "Construction & Infrastructure",
            "location": "Al Khobar, Saudi Arabia",
            "description": "Major NEOM contractor executing potable water supply to Trojena resort - 43km pipelines, pumping stations, and reservoirs.",
            "email_subject": "Skilled Pipeline & Infrastructure Workers for RTCC's NEOM Projects",
            "email_body": f"Dear Recruitment Manager,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) has noted RTCC's critical role in NEOM's infrastructure, including the Trojena water supply project.\n\nFor your pipeline and infrastructure operations, we can supply:\n\n- Certified pipe welders (6G, 6GR) for large-diameter steel pipes\n- Pipe fitters and pipeline construction workers\n- Pump station mechanical and electrical technicians\n- Civil workers for reservoir and station construction\n- Heavy equipment operators for trenching and laying\n- Safety officers and general laborers\n\nOur candidates from India's industrial heartland have proven experience in pipeline and infrastructure projects across the Gulf. We can deploy within 30-45 days.\n\nCould we discuss becoming a manpower supply partner for RTCC's NEOM operations?\n\n{company_sign}"
        },
        {
            "name": "Saudi Aramco (Contractor Workforce)",
            "country": "Saudi Arabia",
            "sector": "Oil, Gas & Energy",
            "location": "Dhahran, Saudi Arabia",
            "description": "World's largest oil company. Massive ongoing hiring for maintenance, expansion, and modernization projects across Saudi Arabia.",
            "email_subject": "Oil & Gas Manpower for Saudi Aramco Contractor Projects",
            "email_body": f"Dear Vendor Management / Contractor Relations,\n\nShiva Travel & Manpower Consultancy (Govt. of India License RA B-1794) would like to register as a manpower supplier for Saudi Aramco's contractor workforce requirements.\n\nWe supply skilled and semi-skilled workers for Aramco project contractors in the following categories:\n\n- Welders (6G certified, SMAW/GTAW/FCAW)\n- Pipe fitters and riggers\n- Instrument and electrical technicians\n- Scaffolders and insulators\n- Safety officers and fire watchers\n- Heavy equipment operators\n- General maintenance workers and helpers\n\nAll candidates undergo trade testing at approved centers and receive comprehensive safety orientation including H2S awareness and confined space training documentation.\n\nPlease guide us on the vendor registration process for Aramco contractor manpower supply.\n\n{company_sign}"
        },
        {
            "name": "SABIC (Saudi Basic Industries Corporation)",
            "country": "Saudi Arabia",
            "sector": "Chemicals & Manufacturing",
            "location": "Riyadh, Saudi Arabia",
            "description": "Global chemicals giant and major Saudi employer. Opportunities in manufacturing, R&D, supply chain, and environmental compliance.",
            "email_subject": "Industrial & Manufacturing Manpower for SABIC Operations",
            "email_body": f"Dear HR / Procurement Department,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) offers specialized industrial manpower recruitment for SABIC's manufacturing and petrochemical operations.\n\nWe can provide:\n- Plant operators and process technicians\n- Mechanical and instrument maintenance technicians\n- Welders and fabrication workers for shutdown/turnaround projects\n- Warehouse and logistics workers\n- Laboratory assistants and quality control helpers\n- General industrial workers and cleaners\n\nOur candidates from India's industrial training institutes are experienced in petrochemical and manufacturing environments. We ensure all necessary certifications and safety training are completed before deployment.\n\nI would welcome the opportunity to discuss a manpower supply arrangement with SABIC.\n\n{company_sign}"
        },
        {
            "name": "Red Sea Global",
            "country": "Saudi Arabia",
            "sector": "Tourism & Mega Projects",
            "location": "Riyadh, Saudi Arabia",
            "description": "Developer of The Red Sea and Amaala luxury tourism mega projects under Vision 2030. Massive construction and hospitality hiring.",
            "email_subject": "Construction & Hospitality Manpower for Red Sea Global's Mega Projects",
            "email_body": f"Dear Talent Acquisition / Workforce Planning,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) is excited about the opportunities presented by Red Sea Global's luxury tourism mega projects.\n\nWe can support both the construction and operational phases with:\n\nConstruction Phase:\n- Masons, carpenters, steel fixers, and finishing tradesmen\n- MEP technicians and installers\n- Landscaping and outdoor construction workers\n\nOperational Phase:\n- Trained hospitality staff: Housekeeping, F&B, kitchen teams\n- Facility maintenance technicians\n- Drivers, security staff, and general workers\n\nIndia's diverse workforce can provide both the construction muscle and the hospitality finesse that luxury resort projects demand. Our 25-year Gulf experience ensures smooth deployments.\n\nCould we explore a partnership for your upcoming recruitment drives?\n\n{company_sign}"
        },
        {
            "name": "NEOM Company",
            "country": "Saudi Arabia",
            "sector": "Mega Project Development",
            "location": "NEOM, Tabuk, Saudi Arabia",
            "description": "Saudi Arabia's $500B futuristic mega city project. THE LINE, Trojena, Oxagon - creating tens of thousands of jobs.",
            "email_subject": "Large-Scale Workforce Deployment for NEOM's Historic Mega Project",
            "email_body": f"Dear Workforce Planning / Procurement Team,\n\nShiva Travel & Manpower Consultancy (Govt. of India License RA B-1794) is positioned to support NEOM's unprecedented workforce requirements across THE LINE, Trojena, and Oxagon developments.\n\nWe offer large-scale mobilization capabilities:\n\n- Construction trades: All categories from foundation to finishing\n- Industrial workers: Welders, pipe fitters, fabricators for Oxagon\n- Infrastructure: Road workers, utility installers, landscapers\n- Hospitality: Staff for Trojena resort and service operations\n- General labor: Helpers, cleaners, stores assistants\n\nOur mobilization capacity: 200-1,000 workers per quarter with 30-45 day cycles. All workers are E-Migrate compliant, trade-tested, and receive project-specific safety orientation.\n\nWe understand NEOM's scale requires large, reliable recruitment partners. We are ready to demonstrate our capabilities.\n\n{company_sign}"
        },
        {
            "name": "Al Bawani Company",
            "country": "Saudi Arabia",
            "sector": "Construction",
            "location": "Riyadh, Saudi Arabia",
            "description": "One of Saudi Arabia's top contractors specializing in commercial, residential, and infrastructure projects across the Kingdom.",
            "email_subject": "Reliable Indian Manpower Supply for Al Bawani's Construction Operations",
            "email_body": f"Dear HR / Recruitment Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) would like to introduce our construction manpower services to Al Bawani Company.\n\nFor your commercial and infrastructure projects, we can supply:\n\n- Skilled masons, carpenters, and steel fixers\n- Finishing trades: Painters, tile fixers, gypsum workers\n- MEP technicians: Electricians, plumbers, AC technicians\n- Certified welders and pipe fitters\n- General helpers and construction laborers\n\nWe handle end-to-end recruitment: sourcing, screening, trade testing, medical clearance, documentation, and E-Migrate registration. Our deployment timeline is 30-45 days.\n\nMay we send our company profile and register as a manpower supply partner?\n\n{company_sign}"
        },
        {
            "name": "Dr. Sulaiman Al Habib Medical Group",
            "country": "Saudi Arabia",
            "sector": "Healthcare",
            "location": "Riyadh, Saudi Arabia",
            "description": "Leading Saudi healthcare provider with multiple hospitals. Actively recruiting doctors, nurses, technicians, and admin staff for 2026.",
            "email_subject": "Indian Healthcare Professionals for Al Habib Medical Group",
            "email_body": f"Dear HR / Medical Recruitment Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) offers healthcare recruitment services from India for Dr. Sulaiman Al Habib Medical Group.\n\nIndia produces over 100,000 nursing graduates annually, and we can source:\n\n- Registered nurses (BSc Nursing, GNM) with hospital experience\n- Lab technicians and radiology/X-ray technicians\n- Pharmacy assistants and pharmacy technicians\n- Hospital housekeeping and sterilization staff\n- Patient care assistants and ward attendants\n- Hospital kitchen and dietary staff\n- Administrative and data entry clerks\n\nWe coordinate credential verification, medical council attestation, and dataflow processing. Our healthcare deployment timeline is 45-60 days.\n\nCould we discuss your upcoming recruitment plans from India?\n\n{company_sign}"
        },
        {
            "name": "El Seif Engineering Contracting",
            "country": "Saudi Arabia",
            "sector": "Construction & Engineering",
            "location": "Riyadh, Saudi Arabia",
            "description": "Major Saudi EPC contractor with projects in oil & gas, industrial, infrastructure, and building construction sectors.",
            "email_subject": "EPC Manpower from India for El Seif Engineering Projects",
            "email_body": f"Dear Procurement / HR Department,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) provides skilled manpower for EPC projects and wishes to partner with El Seif Engineering Contracting.\n\nFor your diverse project portfolio, we can supply:\n\n- Industrial trades: Welders, pipe fitters, riggers, insulators\n- Civil trades: Masons, carpenters, steel fixers, shuttering workers\n- MEP: Electricians, plumbers, HVAC technicians, fire system installers\n- Heavy equipment operators: Cranes, excavators, loaders, rollers\n- Safety personnel and general helpers\n\nOur candidates are sourced from India's top industrial training institutes and undergo rigorous trade testing. We offer rapid batch deployment with complete documentation.\n\nI would appreciate the opportunity to register as an El Seif manpower supplier.\n\n{company_sign}"
        },
        {
            "name": "Qiddiya Investment Company",
            "country": "Saudi Arabia",
            "sector": "Entertainment & Construction",
            "location": "Riyadh, Saudi Arabia",
            "description": "Saudi Arabia's entertainment mega project - theme parks, sports venues, and cultural attractions. Massive construction and operational hiring.",
            "email_subject": "Construction & Operations Manpower for Qiddiya Entertainment City",
            "email_body": f"Dear Workforce Planning Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) is keen to support Qiddiya Investment Company's ambitious entertainment mega project.\n\nFor the construction and future operational phases, we can provide:\n\nConstruction: Masons, carpenters, steel fixers, MEP technicians, painters, finishing workers, heavy equipment operators, and general laborers.\n\nOperations (future): Hospitality staff, F&B workers, maintenance technicians, housekeeping teams, security staff, and facility management workers.\n\nWith Qiddiya's scale requiring thousands of workers, our bulk mobilization capability (200-500 per quarter) and 25-year Gulf track record make us an ideal recruitment partner.\n\nCould we discuss registering as an approved manpower supplier for Qiddiya?\n\n{company_sign}"
        },
        {
            "name": "Marriott International - Saudi Arabia",
            "country": "Saudi Arabia",
            "sector": "Hospitality & Hotels",
            "location": "Multiple Saudi locations",
            "description": "Operating and expanding luxury hotel properties across Saudi Arabia in line with Vision 2030 tourism targets.",
            "email_subject": "Trained Indian Hotel Staff for Marriott's Saudi Arabia Expansion",
            "email_body": f"Dear Regional Talent Acquisition,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) would like to support Marriott International's expanding presence in Saudi Arabia.\n\nWith Saudi Arabia's ambitious tourism targets under Vision 2030, the demand for trained hospitality professionals is growing rapidly. We can provide:\n\n- Housekeeping teams: Room attendants, public area, laundry\n- F&B service: Waiters, stewards, baristas, room service\n- Kitchen staff: Indian cuisine chefs, commis, helpers, bakers\n- Engineering: Maintenance technicians, electricians, AC mechanics\n- Back office: Stores, drivers, security, general helpers\n\nOur candidates are sourced from India's hospitality training institutes and experienced hotel workers seeking Gulf opportunities. All deployments are fully compliant with Indian government regulations.\n\nMay I share our hospitality recruitment capabilities in detail?\n\n{company_sign}"
        },
        {
            "name": "Hilton Hotels - Saudi Arabia",
            "country": "Saudi Arabia",
            "sector": "Hospitality & Hotels",
            "location": "Multiple Saudi locations",
            "description": "Expanding hotel operations across Saudi Arabia with multiple brands. Hiring across all hotel operations and support functions.",
            "email_subject": "Reliable Hospitality Manpower from India for Hilton KSA Properties",
            "email_body": f"Dear HR / Talent Acquisition Team,\n\nShiva Travel & Manpower Consultancy (Govt. of India License RA B-1794) offers hospitality recruitment services for Hilton's growing Saudi Arabia portfolio.\n\nAs Saudi Arabia targets millions of annual tourists under Vision 2030, we can help staff your properties with:\n\n- Bulk housekeeping recruitment (20-100 per batch)\n- Kitchen teams: Chefs, commis, kitchen stewards, bakery staff\n- F&B service teams: Waiters, banquet staff, room service\n- Hotel maintenance and engineering staff\n- Back-of-house workers: Stores, helpers, drivers\n\nOur 25-year track record in Gulf hospitality recruitment ensures quality candidates who are trained, documented, and ready to deploy within 30-45 days.\n\nShall we arrange a call to discuss Hilton KSA's upcoming staffing needs?\n\n{company_sign}"
        },
        {
            "name": "Dar Al Arkan Real Estate",
            "country": "Saudi Arabia",
            "sector": "Real Estate & Construction",
            "location": "Riyadh, Saudi Arabia",
            "description": "One of Saudi Arabia's largest real estate developers with massive residential and commercial projects driving Vision 2030.",
            "email_subject": "Skilled Construction Workforce for Dar Al Arkan's Real Estate Projects",
            "email_body": f"Dear Recruitment / Procurement Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) congratulates Dar Al Arkan on its role in Saudi Arabia's real estate transformation.\n\nFor your residential and commercial projects, we can supply:\n\n- Finishing trades: Painters, tile workers, gypsum installers, flooring workers\n- Civil trades: Masons, carpenters, steel fixers\n- MEP: Electricians, plumbers, AC installers, fire system workers\n- Landscaping and hardscaping crews\n- General helpers and site laborers\n\nWith real estate construction booming under Vision 2030, having a reliable Indian manpower partner ensures cost-effective, timely workforce supply. Our deployment cycle is 30-45 days per batch.\n\nMay I send our company profile and available candidate database?\n\n{company_sign}"
        },
        {
            "name": "Al Rajhi Construction",
            "country": "Saudi Arabia",
            "sector": "Construction & Infrastructure",
            "location": "Riyadh, Saudi Arabia",
            "description": "Major Saudi construction firm handling large infrastructure, commercial, and government projects across the Kingdom.",
            "email_subject": "Indian Skilled Labor for Al Rajhi Construction Projects",
            "email_body": f"Dear HR Manager,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) would like to offer our construction recruitment services to Al Rajhi Construction.\n\nWe specialize in large-volume deployment of Indian construction workers:\n\n- Masons and block layers\n- Shuttering and finishing carpenters\n- Steel fixers and bar benders\n- Certified welders and fabricators\n- Electricians and plumbers\n- Scaffolders, painters, and waterproofers\n- Heavy equipment operators and general helpers\n\nOur workforce comes from India's northern states where construction skills are strong and workers are known for their dedication and hard work. Full government compliance and trade testing included.\n\nI would welcome the chance to register as an Al Rajhi manpower supplier.\n\n{company_sign}"
        },

        # ===== QATAR (39-50) =====
        {
            "name": "Al Jaber Engineering",
            "country": "Qatar",
            "sector": "Construction & Engineering",
            "location": "Doha, Qatar",
            "description": "Leading Qatari contractor since 1995. Part of Al Jaber Group with 15,000+ employees across construction, transport, and engineering.",
            "email_subject": "Skilled Indian Construction Workers for Al Jaber Engineering Projects",
            "email_body": f"Dear HR / Recruitment Department,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) would like to propose a manpower supply partnership with Al Jaber Engineering.\n\nWith 15,000+ employees and a growing project portfolio, your need for reliable workers is continuous. We can supply:\n\n- Civil trades: Masons, carpenters, steel fixers, plasterers\n- MEP trades: Electricians, plumbers, HVAC technicians\n- Industrial trades: Welders, pipe fitters, fabricators\n- Heavy equipment operators and crane operators\n- General laborers, helpers, and site cleaners\n\nWe have 25+ years of Gulf recruitment experience with 5,000+ workers successfully placed. Our deployment cycle is 30-45 days with full E-Migrate compliance.\n\nMay we discuss registration as an approved manpower supplier for Al Jaber?\n\n{company_sign}"
        },
        {
            "name": "UrbaCon Trading & Contracting",
            "country": "Qatar",
            "sector": "Construction",
            "location": "Doha, Qatar",
            "description": "Grade A licensed Qatari builder with 30+ years experience in infrastructure, residential, and commercial construction projects.",
            "email_subject": "Quality Construction Manpower from India for UrbaCon Projects",
            "email_body": f"Dear Recruitment Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) wishes to introduce our construction manpower services to UrbaCon Trading & Contracting.\n\nAs a Grade A contractor with a diverse project portfolio, UrbaCon can benefit from our reliable Indian worker supply:\n\n- Experienced masons, carpenters, and steel fixers\n- Finishing workers: Painters, tile fixers, gypsum workers\n- MEP technicians: Electricians, plumbers, AC installers\n- Certified welders and pipe fitters\n- Scaffolders, riggers, and safety officers\n- General helpers and construction laborers\n\nWe provide trade-tested, medically screened, and fully documented workers within 30-45 days. Our 25-year zero-fraud record speaks to our commitment to quality and compliance.\n\nI look forward to exploring a partnership with UrbaCon.\n\n{company_sign}"
        },
        {
            "name": "Qatari Diar Real Estate",
            "country": "Qatar",
            "sector": "Real Estate & Development",
            "location": "Doha, Qatar",
            "description": "Government-owned real estate investment company developing major projects in Qatar and internationally.",
            "email_subject": "Manpower Support for Qatari Diar's Prestigious Real Estate Developments",
            "email_body": f"Dear HR / Project Procurement Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) would like to offer our workforce supply services for Qatari Diar's real estate developments.\n\nWe can provide workers for both construction and facility operations:\n\nConstruction: Masons, carpenters, steel fixers, MEP technicians, finishing workers, landscapers, and general helpers.\n\nFacility Operations: Maintenance technicians, housekeeping staff, security guards, drivers, and general support workers.\n\nWith 25 years of Gulf experience and a zero-fraud track record, we deliver reliable, documented workers within 30-45 days. All deployments comply with Indian government regulations and E-Migrate requirements.\n\nCould we discuss becoming an approved supplier for Qatari Diar's workforce needs?\n\n{company_sign}"
        },
        {
            "name": "QatarEnergy",
            "country": "Qatar",
            "sector": "Oil, Gas & Energy",
            "location": "Doha, Qatar",
            "description": "Qatar's state energy company (formerly Qatar Petroleum). Backbone of Qatar's economy, continuously hiring across all energy operations.",
            "email_subject": "Skilled Energy Sector Workers from India for QatarEnergy Operations",
            "email_body": f"Dear Recruitment / Vendor Registration Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) wishes to register as an approved manpower supplier for QatarEnergy's operations.\n\nFor Qatar's energy sector, we can supply:\n\n- Certified welders (6G, SMAW, GTAW) and pipe fitters\n- Instrument and electrical technicians\n- Mechanical maintenance technicians\n- Scaffolders, riggers, and insulators\n- Heavy equipment operators\n- Safety officers and fire watchers\n- Plant operators and process technicians\n- General helpers and support staff\n\nOur candidates hold relevant industrial certifications and many have prior Gulf oil & gas experience. We ensure all safety training documentation (H2S, confined space, working at height) is completed before deployment.\n\nPlease guide us on QatarEnergy's vendor empanelment process.\n\n{company_sign}"
        },
        {
            "name": "Qatar Foundation",
            "country": "Qatar",
            "sector": "Education & Development",
            "location": "Doha, Qatar",
            "description": "Non-profit organization driving education, science, and community development. Manages Education City and numerous facilities.",
            "email_subject": "Facility Support Staff for Qatar Foundation's Education City Campus",
            "email_body": f"Dear HR / Facilities Management Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) would like to offer our manpower services for Qatar Foundation's extensive campus and facility operations.\n\nFor Education City and other Qatar Foundation facilities, we can provide:\n\n- Facility maintenance technicians (HVAC, electrical, plumbing)\n- Housekeeping and cleaning staff\n- Landscaping and groundskeeping workers\n- Security and access control personnel\n- Kitchen and catering staff\n- Drivers and logistics support\n- General helpers and support workers\n\nOur candidates are screened for professionalism and reliability, essential for educational and community-serving environments. We deploy within 30-45 days with full documentation.\n\nI would welcome the opportunity to discuss Qatar Foundation's staffing requirements.\n\n{company_sign}"
        },
        {
            "name": "Hamad Medical Corporation",
            "country": "Qatar",
            "sector": "Healthcare",
            "location": "Doha, Qatar",
            "description": "Qatar's main public healthcare provider with multiple hospitals. Major employer of healthcare professionals from around the world.",
            "email_subject": "Indian Nurses & Hospital Support Staff for Hamad Medical Corporation",
            "email_body": f"Dear Medical Recruitment / HR Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) provides healthcare recruitment services and wishes to serve Hamad Medical Corporation's staffing needs.\n\nIndia's healthcare workforce is globally recognized, and we can supply:\n\n- Registered nurses (BSc Nursing, GNM) with hospital experience\n- Lab technicians, radiology technicians, ECG technicians\n- Hospital housekeeping and sterilization staff\n- Patient care assistants and ward helpers\n- Hospital kitchen and dietary staff\n- Laundry and linen management workers\n- Administrative and clerical support staff\n\nWe manage credential verification, dataflow processing, and all government documentation. Our healthcare deployment timeline is 45-60 days.\n\nCould we discuss registration as an approved international recruitment agency for HMC?\n\n{company_sign}"
        },
        {
            "name": "Al Emadi Hospital",
            "country": "Qatar",
            "sector": "Healthcare",
            "location": "Doha, Qatar",
            "description": "Prominent private hospital in Qatar with multi-specialty services. Actively hiring medical and support staff.",
            "email_subject": "Healthcare Professionals & Hospital Staff from India for Al Emadi Hospital",
            "email_body": f"Dear HR / Medical Recruitment Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) offers healthcare recruitment services from India and wishes to partner with Al Emadi Hospital.\n\nWe can support your staffing needs with:\n\n- Registered nurses with multi-specialty experience\n- Lab and diagnostic technicians\n- Pharmacy assistants\n- Hospital housekeeping and sterilization staff\n- Patient attendants and ward helpers\n- Kitchen and catering staff\n- Maintenance technicians (biomedical, AC, electrical)\n\nAll healthcare candidates hold recognized certifications with verified credentials. We handle the complete recruitment process including documentation, medical testing, and government compliance.\n\nI would be pleased to discuss a recruitment partnership at your convenience.\n\n{company_sign}"
        },
        {
            "name": "Redco Construction (Almana Group)",
            "country": "Qatar",
            "sector": "Construction",
            "location": "Doha, Qatar",
            "description": "Major Qatari contractor handling commercial, residential, and infrastructure projects. Part of the Almana Group conglomerate.",
            "email_subject": "Skilled Indian Construction Workers for Redco's Qatar Projects",
            "email_body": f"Dear Procurement / HR Department,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) would like to register as a manpower supply partner for Redco Construction.\n\nFor your commercial and infrastructure projects, we offer:\n\n- Masons, carpenters, steel fixers, and plasterers\n- Electricians, plumbers, and HVAC technicians\n- Certified welders and pipe fitters\n- Painters, tile fixers, and finishing workers\n- Heavy equipment operators\n- General helpers and construction laborers\n\nOur candidates are trade-tested, medically cleared, and deployment-ready within 30-45 days. We have 25 years of Gulf experience with 5,000+ successful placements.\n\nMay we submit our company profile for your vendor list?\n\n{company_sign}"
        },
        {
            "name": "Galfar Engineering & Contracting - Qatar",
            "country": "Qatar",
            "sector": "Engineering & Construction",
            "location": "Doha, Qatar",
            "description": "International EPC contractor with significant Qatar operations in civil, infrastructure, and industrial construction.",
            "email_subject": "EPC Manpower from India for Galfar's Qatar Operations",
            "email_body": f"Dear HR / Recruitment Manager,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) would like to offer our EPC manpower services for Galfar Engineering's Qatar operations.\n\nWe specialize in providing workers for EPC projects:\n\n- Civil: Masons, carpenters, steel fixers, shuttering workers\n- Mechanical: Welders, pipe fitters, riggers, millwrights\n- Electrical: Electricians, cable jointers, instrument technicians\n- General: Scaffolders, painters, insulators, helpers\n- Heavy equipment operators and crane operators\n\nOur Indian workers are known for their skill, discipline, and adaptability in Gulf conditions. Full E-Migrate compliance and 30-45 day deployment guaranteed.\n\nI would appreciate the chance to discuss a supply partnership with Galfar Qatar.\n\n{company_sign}"
        },
        {
            "name": "Al Bandary Engineering",
            "country": "Qatar",
            "sector": "Engineering & Construction",
            "location": "Doha, Qatar",
            "description": "Established Qatari engineering firm specializing in MEP, infrastructure, and building construction projects.",
            "email_subject": "MEP & Construction Manpower for Al Bandary Engineering Projects",
            "email_body": f"Dear HR Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) wishes to introduce our manpower supply services to Al Bandary Engineering.\n\nFor your MEP and construction projects, we can provide:\n\n- Electricians (building and industrial)\n- Plumbers (copper, PPR, GI, CPVC)\n- HVAC technicians and duct installers\n- Fire fighting system technicians\n- Civil workers: Masons, carpenters, steel fixers\n- Painters and finishing workers\n- General helpers and labor\n\nWe have been supplying skilled Indian workers to the Gulf for 25+ years with a zero-fraud track record. All workers are trade-tested and deployed within 30-45 days.\n\nCould we arrange a meeting to present our services?\n\n{company_sign}"
        },
        {
            "name": "Qatar Cool",
            "country": "Qatar",
            "sector": "Utilities & Facilities",
            "location": "Doha, Qatar",
            "description": "Qatar's district cooling provider for major developments including The Pearl, Lusail, and West Bay. Specialized HVAC/cooling operations.",
            "email_subject": "HVAC & Technical Manpower for Qatar Cool's Cooling Operations",
            "email_body": f"Dear HR / Operations Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) would like to explore a manpower partnership with Qatar Cool for your specialized cooling operations.\n\nWe can provide technically trained workers for:\n\n- Chiller plant operators and technicians\n- HVAC maintenance technicians\n- Pipe fitters and welders for cooling distribution networks\n- Electrical and instrument technicians\n- General maintenance workers and helpers\n- Facility support staff\n\nIndia's HVAC and refrigeration training institutes produce skilled technicians who adapt well to Gulf operations. Our candidates are trade-tested and documented within 30-45 days.\n\nI would welcome the opportunity to discuss Qatar Cool's staffing requirements.\n\n{company_sign}"
        },
        {
            "name": "Katara Hospitality",
            "country": "Qatar",
            "sector": "Hospitality & Hotels",
            "location": "Doha, Qatar",
            "description": "Qatar's global hospitality investment company managing luxury hotels and resorts in Qatar and worldwide.",
            "email_subject": "Trained Indian Hospitality Staff for Katara Hospitality Properties",
            "email_body": f"Dear Talent Acquisition Team,\n\nShiva Travel & Manpower Consultancy (License RA B-1794, MEA India) is pleased to offer our hospitality recruitment services to Katara Hospitality.\n\nFor your luxury hotel and resort properties, we can provide:\n\n- Trained housekeeping teams (room attendants, laundry, public area)\n- F&B service staff (waiters, bartenders, banquet staff)\n- Kitchen staff (Indian cuisine chefs, commis, helpers, bakers)\n- Spa and wellness attendants\n- Front office and guest services staff\n- Engineering and maintenance technicians\n- General workers: Drivers, security, stores, cleaners\n\nIndian hospitality professionals are recognized globally for their warmth and service dedication. Our pre-departure orientation ensures staff meet luxury service standards from day one.\n\nMay I share our hospitality recruitment portfolio for your consideration?\n\n{company_sign}"
        },
    ]

    return employers


if __name__ == "__main__":
    build_pdf()
