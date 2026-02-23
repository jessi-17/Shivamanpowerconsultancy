"use client";

import { useState } from "react";
import Header from "@/components/own/Header";
import { Footer2 } from "@/components/own/Footer";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Contactcard from "@/components/own/contactcard";

/* ─── Contact channel cards ─────────────────────────────── */
const contactChannels = [
  {
    icon: "mingcute:phone-fill",
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 9am to 6pm IST",
    href: "tel:+919876543210",
  },
  {
    icon: "mingcute:mail-fill",
    label: "Email Us",
    value: "info@shivamanpower.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@shivamanpower.com",
  },
  {
    icon: "mingcute:location-fill",
    label: "Visit Us",
    value: "Golden Avenue, Nakodar",
    sub: "Near Time Cafe, Jalandhar – 144040",
    href: "#",
  },
  {
    icon: "mingcute:whatsapp-fill",
    label: "WhatsApp",
    value: "+91 98765 43210",
    sub: "Quick queries & updates",
    href: "https://wa.me/919876543210",
  },
];

/* ─── Component ─────────────────────────────────────────── */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    yourname: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  // handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // handle select dropdown
  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      interest: value,
    });
  };

  // submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Form submitted successfully!");
      setFormData({ yourname: "", phone: "", email: "", interest: "", message: "" });
    } else {
      alert("Error: " + (data.message || data.error));
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <div className="bg-(--color-bland-25) px-4">
        <Header />
      </div>

      {/* ── HERO STRIP ── */}
      <section className="top-margins px-4 relative">
        <div
          className="pointer-events-none absolute -top-10 -left-20 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--primary-color) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute top-20 right-0 w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--primary-color-100) 0%, transparent 70%)",
          }}
        />

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-[#00000012] pb-10">
          <div className="flex flex-col gap-3">
            <span
              className="text-sm font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--primary-color)" }}
            >
              Get in Touch
            </span>
            <h1 className="font-extrabold text-4xl md:text-6xl leading-[115%] text-(--color-bland-800) max-w-[600px]">
              Let's Build Something <span>Great Together</span>
            </h1>
          </div>
          <p className="text-(--color-bland-600) max-w-[380px] leading-[160%] text-base">
            Whether you're a company looking for talent or a professional
            seeking your next opportunity in the Gulf — we're just a message
            away.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="top-margins px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Contact Channels + Map + Trust badges ── */}
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactChannels.map((ch, i) => (
                <a
                  key={i}
                  href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group relative flex flex-col gap-3 p-6 rounded-2xl border border-[#00000014] bg-white hover:border-(--primary-color) hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--primary-color-15), var(--primary-color-25))",
                    }}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "var(--primary-color-50)" }}
                    >
                      <Icon
                        icon={ch.icon}
                        width="20"
                        height="20"
                        style={{ color: "var(--primary-color)" }}
                      />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-(--color-bland-500)">
                      {ch.label}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <p className="font-semibold text-base text-(--color-bland-800)">
                      {ch.value}
                    </p>
                    <p className="text-sm text-(--color-bland-500) mt-0.5">
                      {ch.sub}
                    </p>
                  </div>
                  <Icon
                    icon="si:arrow-right-duotone"
                    width="20"
                    height="20"
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 -rotate-45 group-hover:rotate-0 transition-all duration-300"
                    style={{ color: "var(--primary-color)" }}
                  />
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-[#00000010] h-[260px]">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.0!2d75.47!3d31.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ba1234567890%3A0x0!2sNakodar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "mingcute:shield-fill", text: "Govt. Registered RA" },
                { icon: "mingcute:time-fill", text: "25+ Years Experience" },
                { icon: "mingcute:star-fill", text: "4.5★ Justdial Rated" },
                { icon: "mingcute:currency-dollar-fill", text: "Zero Candidate Fees" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00000010] bg-white text-sm text-(--color-bland-600)"
                >
                  <Icon
                    icon={b.icon}
                    width="16"
                    height="16"
                    style={{ color: "var(--primary-color)" }}
                  />
                  {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div>
                <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full mx-auto bg-(--color-bland-25) rounded-2xl px-8 py-6 shadow-lg transition-shadow duration-300 z-0 border border-[#0000000f] gap-4"
    >
      <div className="flex flex-col justify-start gap-2 w-full">
        <Label htmlFor="yourname">Name</Label>
        <Input
          type="text"
          id="yourname"
          value={formData.yourname}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full border border-gray-300 focus-visible:ring-0 focus-visible:outline-none focus:border-gray-400 placeholder:text-gray-400 placeholder:text-[13px]"
        />
      </div>

      <div className="flex flex-col justify-start gap-2 w-full">
        <Label htmlFor="phone">Phone</Label>
        <Input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone no"
          className="w-full border border-gray-300 focus-visible:ring-0 focus-visible:outline-none focus:border-gray-400 placeholder:text-gray-400 placeholder:text-[13px]"
        />
      </div>

      <div className="flex flex-col justify-start gap-2 w-full">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full border border-gray-300 focus-visible:ring-0 focus-visible:outline-none focus:border-gray-400 placeholder:text-gray-400 placeholder:text-[13px]"
        />
      </div>

      <div className="flex flex-col justify-start gap-2 w-full">
        <Label>You're Interested In</Label>
        <Select onValueChange={handleSelectChange} value={formData.interest}>
          <SelectTrigger className="w-full border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-400 text-gray-600">
            <SelectValue placeholder="Select a field" />
          </SelectTrigger>
          <SelectContent className="bg-white border-0">
            <SelectGroup>
              <SelectLabel>Select your future job</SelectLabel>
              <SelectItem value="Construction">Construction</SelectItem>
              <SelectItem value="Labour work">Labour work</SelectItem>
              <SelectItem value="Plumber">Plumber</SelectItem>
              <SelectItem value="Hair salon">Hair salon</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">
        <Button
          type="submit"
          className="w-full px-5 py-5 bg-(--primary-color) text-white rounded-[32px] text-base font-light leading-[150%] cursor-pointer hover:scale-95 border border-(--primary-color)"
        >
          Register Now
        </Button>
      </div>
    </form>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="top-margins px-4 pb-20">
        <div
          className="rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background:
              "linear-gradient(135deg, var(--primary-color-800), var(--primary-color))",
          }}
        >
          <div className="flex flex-col gap-3 text-white">
            <h2 className="text-3xl md:text-4xl font-bold leading-[120%]">
              Ready to hire or get placed?
            </h2>
            <p className="opacity-80 max-w-[400px] text-[#ffffffcc]! leading-[160%]">
              Book a free 15-minute consultation call with our expert team and
              take the first step today.
            </p>
          </div>
          <a href="tel:+919876543210">
            <Button className="bg-white text-(--primary-color) hover:bg-(--primary-color-25) rounded-[32px] px-8 py-6 text-base font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap hover:scale-95 transition-transform">
              <Icon icon="gg:phone" width="20" height="20" />
              Book a Free Call
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4">
        <Footer2 />
      </section>
    </div>
  );
}
