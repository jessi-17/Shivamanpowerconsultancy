"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useIsMobile } from "@/components/ui/isMobile";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

// Bilingual label: shows English + Punjabi line when PA is active
function NavLabel({ labelKey }: { labelKey: keyof typeof t }) {
  const { lang } = useLanguage();
  const entry = t[labelKey];
  return <>{lang === "pa" ? entry.pa : entry.en}</>;
}

// EN / PA pill toggle
function LangToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <button
      onClick={toggle}
      className="flex items-center gap-0.5 rounded-full border text-xs font-semibold overflow-hidden cursor-pointer"
      style={{ borderColor: "var(--primary-color)" }}
      aria-label="Toggle language"
    >
      <span
        className="px-2.5 py-1 transition-colors"
        style={{
          background: lang === "en" ? "var(--primary-color)" : "transparent",
          color: lang === "en" ? "#fff" : "var(--primary-color)",
        }}
      >
        EN
      </span>
      <span
        className="px-2.5 py-1 transition-colors"
        style={{
          background: lang === "pa" ? "var(--primary-color)" : "transparent",
          color: lang === "pa" ? "#fff" : "var(--primary-color)",
          fontFamily: "sans-serif",
        }}
      >
        ਪੰ
      </span>
    </button>
  );
}

const Header = () => {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", labelKey: "home" as keyof typeof t },
    { href: "/about-us", labelKey: "aboutUs" as keyof typeof t },
    { href: "/services", labelKey: "services" as keyof typeof t },
    { href: "/success-stories", labelKey: "successStories" as keyof typeof t },
    { href: "/blog", labelKey: "blog" as keyof typeof t },
  ];

  return (
    <section>
      <NavigationMenu
        viewport={isMobile}
        className="flex justify-between items-center min-w-full py-2 px-4 md:hidden"
      >
        <NavigationMenuList>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Shiva Manpower Consultants logo" width="42" height="40" />
            <span className="font-bold text-sm leading-tight text-(--color-bland-800)">
              Shiva Travels &<br />Manpower Consultancy
            </span>
          </Link>
        </NavigationMenuList>

        <NavigationMenuList className="flex items-center gap-2">
          <LangToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Icon
                icon="iconamoon:menu-burger-horizontal-bold"
                className="w-[32px] h-[32px] cursor-pointer hover:text-(--primary-color)"
              />
            </SheetTrigger>

            <SheetContent className="!z-[9999] bg-white focus:outline-none focus:ring-0">
              <SheetClose className="absolute right-3 top-3 focus:ring-0 focus:outline-none">
                <Icon
                  icon="maki:cross"
                  className="cursor-pointer text-(--primary-color)"
                  width="24"
                  height="24"
                />
              </SheetClose>

              <SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`font-light-hel relative cursor-pointer py-2 w-fit border-b-3 ${
                        pathname === link.href
                          ? "text-(--color-bland-800) border-(--primary-color) w-fit"
                          : "text-(--color-bland-700) border-transparent hover:text-(--color-bland-800) hover:border-(--primary-color)"
                      }`}
                    >
                      <NavLabel labelKey={link.labelKey} />
                    </Link>
                  ))}

                  <div className="flex items-center justify-between mt-4">
                    <Link href="/contactus">
                      <Button className="px-4 py-2 bg-(--primary-color) text-(--color-bland-25) rounded-[32px] text-base font-semibold leading-[150%] h-[45px] w-[130px] cursor-pointer hover:scale-95 border-(--primary-color)">
                        <NavLabel labelKey="contactUs" />
                      </Button>
                    </Link>
                    <Link href="/applynow">
                      <Button className="text-(--color-bland-700) font-medium tracking-tight cursor-pointer hover:border-b-1 hover:text-(--primary-color) rounded-none shadow-none p-2 w-[50%]">
                        <NavLabel labelKey="applyNow" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="hidden md:flex bg-(--color-bland-25) min-h-[70px] items-center justify-between min-w-full py-2">
        <NavigationMenuList>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Shiva Manpower Consultants logo" width="56" height="52" />
            <div className="flex flex-col">
              <span className="font-bold text-base leading-tight text-(--color-bland-800)">Shiva Travels</span>
              <span className="text-xs text-(--color-bland-400) tracking-wide">& Manpower Consultancy</span>
            </div>
          </Link>
        </NavigationMenuList>

        <NavigationMenuList className="flex gap-8">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <Link
                href={link.href}
                className={`font-light-hel navlinks relative cursor-pointer py-1 w-fit border-b-3 ${
                  pathname === link.href
                    ? "text-(--color-bland-800) border-(--primary-color) w-fit"
                    : "text-(--color-bland-700) border-transparent hover:text-(--color-bland-800) hover:border-(--primary-color)"
                }`}
              >
                <NavLabel labelKey={link.labelKey} />
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        <NavigationMenuList className="flex items-center gap-4">
          <NavigationMenuItem>
            <LangToggle />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/applynow">
              <Button className="text-(--color-bland-700) font-medium tracking-tight cursor-pointer hover:border-b-1 hover:text-(--primary-color) rounded-none shadow-none p-2">
                <NavLabel labelKey="applyNow" />
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:drop-shadow-lg">
            <Link href="/contactus">
              <Button className="px-4 py-2 bg-(--primary-color) text-(--color-bland-25) rounded-[32px] text-base font-semibold leading-[150%] h-[45px] w-[130px] cursor-pointer hover:scale-95 border-(--primary-color)">
                <NavLabel labelKey="contactUs" />
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
};

export default Header;
