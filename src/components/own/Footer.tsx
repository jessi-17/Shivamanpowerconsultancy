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
        { text: "Home", url: "#" },
        { text: "About us", url: "#" },
        { text: "Services", url: "#" },
        { text: "Current Demands", url: "#" },
        { text: "Success Stories", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "#" },
        { text: "Team", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "#" },
        { text: "Privacy", url: "#" },
      ],
    },
    {
      title: "Current Demands",
      links: [
        { text: "Demand 1", url: "#" },
        { text: "Demand 2", url: "#" },
        { text: "Demand 3", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "Facebook", url: "#" },
        { text: "LinkedIn", url: "#" },
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
                      <a href={link.url}>{link.text}</a>
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
