"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) void v.play().catch(() => {});
      else v.pause();
    }, { rootMargin: "200px" });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) {
      v.currentTime = 0;
      void v.play();
    }
    setMuted(v.muted);
  };

  return (
    <div className="relative h-full overflow-hidden rounded-[inherit] bg-black">
      <video
        ref={ref}
        className="h-full w-full object-cover"
        src="/video/superhosts.mp4"
        poster="/video/superhosts-poster.jpg"
        muted
        loop
        playsInline
        preload="none"
        aria-label="Superhosts event recap video"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-green">Superhosts · Superteam</p>
          <p className="mt-1.5 font-serif text-2xl leading-tight sm:text-3xl">The program I ran ops for</p>
        </div>
        <button
          onClick={toggle}
          className="relative z-10 shrink-0 rounded-full border border-white/25 bg-black/40 px-3.5 py-1.5 text-xs backdrop-blur hover:bg-white hover:text-black"
          aria-pressed={!muted}
        >
          {muted ? "♪ Sound on" : "Mute"}
        </button>
      </div>
    </div>
  );
}
