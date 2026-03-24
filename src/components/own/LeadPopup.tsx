"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const STORAGE_KEY = "leadPopupDismissed";
const SUPPRESS_DAYS = 7;
const SCROLL_THRESHOLD = 0.4;

function BiText({ k }: { k: keyof typeof t }) {
  const { lang } = useLanguage();
  const entry = t[k];
  return <>{lang === "pa" ? entry.pa : entry.en}</>;
}

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { lang } = useLanguage();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const elapsed = Date.now() - parseInt(stored, 10);
      if (elapsed < SUPPRESS_DAYS * 24 * 60 * 60 * 1000) return;
    }

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total >= SCROLL_THRESHOLD) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi, I am interested in Gulf/Romania job placement.\nName: ${name}\nPhone: ${phone}`
    );
    window.open(`https://wa.me/919815358832?text=${text}`, "_blank");
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setVisible(false);
  };

  if (!visible) return null;

  const namePh = lang === "pa" ? `${t.namePlaceholder.en} / ${t.namePlaceholder.pa}` : t.namePlaceholder.en;
  const phonePh = lang === "pa" ? `${t.phonePlaceholder.en} / ${t.phonePlaceholder.pa}` : t.phonePlaceholder.en;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)" }}
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[380px] p-7"
        style={{ animation: "leadPopupIn 0.25s ease-out" }}
      >
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-(--color-bland-400) hover:text-(--color-bland-700) transition-colors cursor-pointer"
          aria-label="Close"
        >
          <Icon icon="maki:cross" width="18" height="18" />
        </button>

        {/* Header */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--primary-color)" }}>
            <BiText k="popupBadge" />
          </p>
          <h2 className="text-2xl font-bold text-(--color-bland-800) leading-tight mb-1">
            <BiText k="popupTitle" />
          </h2>
          <p className="text-sm text-(--color-bland-500)">
            <BiText k="popupSub" />
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder={namePh}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#e5e5e5] text-sm text-(--color-bland-800) outline-none focus:border-(--primary-color) transition-colors"
          />
          <input
            type="tel"
            placeholder={phonePh}
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#e5e5e5] text-sm text-(--color-bland-800) outline-none focus:border-(--primary-color) transition-colors"
          />

          <button
            type="submit"
            className="mt-1 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white cursor-pointer hover:scale-[0.98] transition-transform"
            style={{ background: "var(--primary-color)" }}
          >
            <Icon icon="mdi:whatsapp" width="18" height="18" />
            <BiText k="sendWhatsApp" />
          </button>
        </form>

        <p className="text-center text-xs text-(--color-bland-400) mt-4">
          <BiText k="zeroFees" />
        </p>
      </div>

      <style>{`
        @keyframes leadPopupIn {
          from { opacity: 0; transform: scale(0.93) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
