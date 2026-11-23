"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

export const PhotoWall = dynamic(() => import("./wall/PhotoWall"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

const ease = [0.16, 1, 0.3, 1] as const;

/** Fades and lifts children into view once. */
export function FadeUp({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Headline that rises in word by word (pure CSS, paints without waiting for JS). Wrap words in *stars* to highlight. */
export function WordReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text.replace(/\*/g, "")}>
      {words.map((w, i) => {
        const hl = w.startsWith("*");
        const clean = w.replace(/\*/g, "");
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom" aria-hidden>
            <span className={`word-up ${hl ? "text-gradient italic" : ""}`} style={{ animationDelay: `${delay + i * 0.05}s` }}>
              {clean}
              {i < words.length - 1 ? "\u00a0" : ""}
            </span>
          </span>
        );
      })}
    </span>
  );
}

/** Counts up to a number when scrolled into view. Keeps any suffix like "+". */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const num = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "");
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, num, { duration: 1.6, ease, onUpdate: (v) => setShown(Math.round(v)) });
    return () => c.stop();
  }, [inView, num]);

  return (
    <span ref={ref} className={className}>
      {shown}
      {suffix}
    </span>
  );
}

/** Card that tilts toward the cursor in 3D with a moving light sheen. */
export function Tilt({ children, className = "", max = 10 }: { children: React.ReactNode; className?: string; max?: number }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 200, damping: 20 });
  const sheen = useTransform([mx, my], ([x, y]) =>
    `radial-gradient(500px circle at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(255,255,255,0.12), transparent 40%)`,
  );

  return (
    <motion.div
      className={`relative [transform-style:preserve-3d] ${className}`}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      {children}
      <motion.div className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{ background: sheen }} />
    </motion.div>
  );
}

/** Button/link that leans toward the cursor. */
export function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useSpring(0, { stiffness: 250, damping: 18 });
  const y = useSpring(0, { stiffness: 250, damping: 18 });
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ x, y }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-sol" style={{ scaleX }} />;
}

/** Vertical line that fills as its container scrolls past. */
export function ScrollLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div ref={ref} className={`absolute inset-y-0 w-px bg-white/10 ${className}`}>
      <motion.div className="h-full w-full origin-top bg-gradient-to-b from-[#9945FF] to-[#14F195]" style={{ scaleY }} />
    </div>
  );
}

/** Image/video wrapper that drifts slightly on scroll. */
export function Parallax({ children, className = "", amount = 60 }: { children: React.ReactNode; className?: string; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-[calc(100%+120px)] -translate-y-[60px]">
        {children}
      </motion.div>
    </div>
  );
}

/** Soft spotlight that follows the cursor inside its parent. */
export function Spotlight() {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const bg = useTransform([x, y], ([a, b]) => `radial-gradient(600px circle at ${a}px ${b}px, rgba(153,69,255,0.10), transparent 60%)`);
  return (
    <motion.div
      className="absolute inset-0"
      style={{ background: bg }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
    />
  );
}
