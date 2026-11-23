"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { photos, type Photo } from "@/data/site";
import { Tilt } from "./motion";

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current: Photo | null = open === null ? null : photos[open];

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {photos.map((p, i) => (
          <motion.figure
            key={p.src}
            className="mb-5 break-inside-avoid"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Tilt max={6} className="rounded-2xl">
              <button
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-2xl bg-card ring-1 ring-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                aria-label={`Open photo: ${p.title}, ${p.place}`}
              >
                <Image
                  src={`/images/${p.src}.jpg`}
                  alt={`${p.title}, ${p.place}`}
                  width={p.w}
                  height={p.h}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full brightness-[0.88] transition duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/0 to-black/0" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <p className="text-[15px] font-medium leading-snug text-fg">{p.title}</p>
                  <p className="mt-0.5 text-xs text-fg-2">
                    {p.place}
                    {p.date ? ` · ${p.date}` : ""}
                    {p.note ? ` · ${p.note}` : ""}
                  </p>
                </figcaption>
              </button>
            </Tilt>
          </motion.figure>
        ))}
      </div>

      {/* Rendered on <body> so no section, nav or transform can sit on top of it */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {current && (
              <motion.div
                className="fixed inset-0 z-[100] flex flex-col bg-black/92 p-4 backdrop-blur-xl sm:p-8"
                role="dialog"
                aria-modal="true"
                aria-label={current.title}
                onClick={close}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-mono text-fg-2">
                    {String(open! + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      close();
                    }}
                    aria-label="Close"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl leading-none hover:bg-white hover:text-black"
                  >
                    ×
                  </button>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.src}
                    className="relative my-4 min-h-0 flex-1"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={`/images/${current.src}.jpg`}
                      alt={`${current.title}, ${current.place}`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                      onClick={(e) => e.stopPropagation()}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="flex flex-wrap items-end justify-between gap-4" onClick={(e) => e.stopPropagation()}>
                  <div>
                    <p className="font-serif text-3xl">{current.title}</p>
                    <p className="mt-1 text-sm text-fg-2">
                      {current.place}
                      {current.date ? ` · ${current.date}` : ""}
                      {current.note ? ` · ${current.note}` : ""}
                    </p>
                    {current.link && (
                      <a href={current.link} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-green underline underline-offset-4">
                        View event page ↗
                      </a>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => step(-1)} aria-label="Previous photo" className="h-12 w-12 rounded-full border border-white/20 hover:bg-white hover:text-black">
                      ←
                    </button>
                    <button onClick={() => step(1)} aria-label="Next photo" className="h-12 w-12 rounded-full border border-white/20 hover:bg-white hover:text-black">
                      →
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
