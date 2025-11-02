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

const Header = () => {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/current-demands", label: "Current Demands" },
    { href: "/success-stories", label: "Success Stories" },
  ];

  return (
    <section>
      <NavigationMenu
        viewport={isMobile}
        className="flex justify-between items-center min-w-full py-2 px-4 md:hidden"
      >
        <NavigationMenuList>
          <Image src="/logo.jpg" alt="logo" width="72" height="68" />
        </NavigationMenuList>

        <NavigationMenuList>
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
                      {link.label}
                    </Link>
                  ))}

                  <div className="flex items-center justify-between mt-4">
                    <Button className="px-4 py-2 bg-(--primary-color) text-(--color-bland-25) rounded-[32px] text-base font-semibold leading-[150%] h-[45px] w-[130px] cursor-pointer hover:scale-95 border-(--primary-color)">
                      Contact Us
                    </Button>
                    <Button className="text-(--color-bland-700) font-medium tracking-tight cursor-pointer hover:border-b-1 hover:text-(--primary-color) rounded-none shadow-none p-2 w-[50%]">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="hidden md:flex bg-(--color-bland-25) min-h-[70px] items-center justify-between min-w-full py-2">
        <NavigationMenuList>
          <Image src="/logo.jpg" alt="logo" width="72" height="68" />
        </NavigationMenuList>

        <NavigationMenuList className="flex gap-8">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <Link
                key={link.href}
                href={link.href}
                className={`font-light-hel navlinks relative cursor-pointer py-1 w-fit border-b-3 ${
                  pathname === link.href
                    ? "text-(--color-bland-800) border-(--primary-color) w-fit"
                    : "text-(--color-bland-700) border-transparent hover:text-(--color-bland-800) hover:border-(--primary-color)"
                }`}
              >
                {link.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        <NavigationMenuList className="flex items-center gap-8">
          <NavigationMenuItem>
            <Button className="text-(--color-bland-700) font-medium tracking-tight cursor-pointer hover:border-b-1 hover:text-(--primary-color) rounded-none shadow-none p-2">
              Apply Now
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:drop-shadow-lg">
            <Button className="px-4 py-2 bg-(--primary-color) text-(--color-bland-25) rounded-[32px] text-base font-semibold leading-[150%] h-[45px] w-[130px] cursor-pointer hover:scale-95 border-(--primary-color)">
              Contact Us
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
};

export default Header;
