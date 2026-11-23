"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { profile } from "@/data/site";
import ScrollLink from "./ScrollLink";

const links = [
  { to: "superhosts", label: "Superhosts" },
  { to: "work", label: "Work" },
  { to: "events", label: "Events" },
  { to: "contact", label: "Contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4"
    >
      <nav
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border px-3 pl-3 transition-all duration-500 ${
          scrolled ? "border-white/10 bg-black/55 backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <ScrollLink to="top" className="flex items-center gap-3">
          <Image
            src="/images/vishal.jpg"
            alt="Vishal Patadia"
            width={80}
            height={80}
            priority
            className="h-9 w-9 rounded-full object-cover ring-2 ring-white/10"
          />
          <span className="leading-tight">
            <span className="block text-sm font-medium">{profile.name}</span>
            <span className="hidden text-xs text-muted sm:block">
              {profile.role} · {profile.location}
            </span>
          </span>
        </ScrollLink>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <ScrollLink key={l.to} to={l.to} className="hidden rounded-full px-3 py-1.5 text-sm text-fg-2 transition-colors hover:text-fg md:inline">
              {l.label}
            </ScrollLink>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="rounded-full px-3 py-1.5 text-sm text-fg-2 hover:text-fg">
            Resume
          </a>
          <a
            href={profile.x}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-fg px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-green"
          >
            Hire me
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
