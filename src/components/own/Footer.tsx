// import { Logo, LogoImage, LogoText } from "@/components/shadcnblocks/logo";

import Image from "next/image";
import logo from "../../../public/logo.jpg"
interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {

  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  tagline = "Your Strategic Manpower Partner for the Gulf Region",
  menuItems = [
    {
      title: "Sitemap",
      links: [
        { text: "Home", url: "/" },
        { text: "About us", url: "/about-us" },
        { text: "Services", url: "/services" },
        { text: "Success Stories", url: "/success-stories" },
        { text: "Contact Us", url: "/contactus" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "/about-us" },
        { text: "Services", url: "/services" },
        { text: "Careers", url: "/applynow" },
        { text: "Contact", url: "/contactus" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { text: "Gulf Job Openings Update", url: "https://www.instagram.com/shiva.travels.consultants?igsh=Y25ncHdseWlmcXE=" },
        { text: "Success Stories from Punjab", url: "https://www.instagram.com/shiva.travels.consultants?igsh=Y25ncHdseWlmcXE=" },
        { text: "Dubai Visa Process Guide", url: "https://www.facebook.com/share/1FbKs7X4WF/" },
        { text: "Latest Placement Updates", url: "https://www.facebook.com/share/1FbKs7X4WF/" },
      ],
    },
    {
      title: "Connect With Us",
      links: [
        { text: "Instagram", url: "https://www.instagram.com/shiva.travels.consultants?igsh=Y25ncHdseWlmcXE=" },
        { text: "Facebook", url: "https://www.facebook.com/share/1FbKs7X4WF/" },
        { text: "98148-20432", url: "tel:9814820432" },
        { text: "98149-20432", url: "tel:9814920432" },
      ],
    },
  ],
  copyright = "©2025 ShivaManPowerConsultancy",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <div className="py-8">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Image src={logo} alt="logo" width={100} height={100} />
              </div>
              <h2 className="mt-4 max-w-[50%] font-light-hel">{tagline}</h2>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold tracking-wider text-lg">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-light-hel text-base hover:font-bold"
                    >
                      <a href={link.url} {...(link.url.startsWith("http") || link.url.startsWith("tel:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export { Footer2 };
