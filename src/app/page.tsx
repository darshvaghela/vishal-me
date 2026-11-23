import Image from "next/image";
import Nav from "@/components/Nav";
import HeroVideo from "@/components/HeroVideo";
import LoopVideo from "@/components/LoopVideo";
import Gallery from "@/components/Gallery";
import ScrollLink from "@/components/ScrollLink";
import { CountUp, FadeUp, PhotoWall, Magnetic, ScrollLine, ScrollProgress, Tilt, WordReveal } from "@/components/motion";
import { profile, stats, formats, experience, earlier, partners, sideProjects, testimonial } from "@/data/site";

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-sm text-muted">{children}</p>;
}

function Glow({ className }: { className: string }) {
  return <div aria-hidden className={`pointer-events-none absolute rounded-full blur-[120px] ${className}`} />;
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="top" className="overflow-x-clip">
        {/* ───────── Hero ───────── */}
        <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
          <Glow className="-left-40 top-10 -z-10 h-[420px] w-[420px] bg-violet/25" />
          <Glow className="-right-20 bottom-0 -z-10 h-[380px] w-[380px] bg-green/15" />

          {/* 3D photo wall */}
          <FadeUp delay={0.3} y={0} className="absolute inset-0 z-0">
            <PhotoWall />
          </FadeUp>
          <div className="pointer-events-none absolute inset-0 z-[1] bg-bg/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-bg lg:via-bg/40 lg:to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-bg to-transparent" />

          <div className="pointer-events-none relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-28 sm:px-6 lg:pt-24">
            <div className="pointer-events-auto max-w-2xl">
              <h1 className="font-serif text-[3.1rem] leading-[0.98] tracking-[-0.015em] sm:text-7xl lg:text-[5.3rem]">
                <WordReveal text="I build the rooms where *Solana* *builders* meet." delay={0.25} />
              </h1>

              <FadeUp delay={0.8}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-fg-2">
                  Three years running Solana community programs. I led operations for Superteam&apos;s{" "}
                  <span className="text-fg">Superhosts</span> program, whose event formats local hosts ran from London to the
                  Gold Coast, and I host events in person in Ahmedabad.
                </p>
              </FadeUp>

              <FadeUp delay={1}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Magnetic>
                    <a
                      href={profile.x}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fg px-6 py-3.5 font-medium text-black"
                    >
                      <span className="absolute inset-0 translate-y-full bg-gradient-sol transition-transform duration-500 group-hover:translate-y-0" />
                      <span className="relative">Get in touch</span>
                      <span className="relative transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <ScrollLink to="events" className="inline-block rounded-full border border-white/15 px-6 py-3.5 transition-colors hover:border-white/40 hover:bg-white/5">
                      See the events
                    </ScrollLink>
                  </Magnetic>
                </div>
              </FadeUp>
            </div>

          </div>

        </section>

        {/* ───────── Stats ───────── */}
        <section id="stats" className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.08}>
                <div className="border-glow h-full rounded-2xl p-5 sm:p-7">
                  <CountUp value={s.value} className="font-serif text-5xl leading-none sm:text-7xl" />
                  <p className="mt-3 text-sm leading-snug text-fg-2">{s.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ───────── Partners ───────── */}
        <section className="py-16 sm:py-20" aria-label="Partners">
          <p className="mb-7 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted">Worked alongside</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
            <div className="marquee flex w-max gap-14 whitespace-nowrap">
              {[...partners, ...partners].map((p, i) => (
                <span key={i} className="font-serif text-4xl text-white/35 transition-colors hover:text-fg sm:text-5xl" aria-hidden={i >= partners.length}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Superhosts ───────── */}
        <section id="superhosts" className="relative isolate border-y border-line bg-bg-2/60">
          <Glow className="left-1/3 top-20 -z-10 h-[500px] w-[500px] bg-violet/10" />
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
            <FadeUp>
              <Kicker>Superhosts</Kicker>
              <h2 className="max-w-4xl font-serif text-5xl leading-[1] sm:text-7xl">
                Event <span className="text-gradient italic">formats</span>, not one-off events.
              </h2>
            </FadeUp>

            <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
              <FadeUp className="lg:col-span-2 lg:row-span-2">
                <Tilt max={4} className="h-full rounded-3xl">
                  <div className="aspect-video h-full overflow-hidden rounded-3xl ring-1 ring-white/10 lg:aspect-auto lg:min-h-[460px]">
                    <HeroVideo />
                  </div>
                </Tilt>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div className="border-glow h-full rounded-3xl p-6 sm:p-7">
                  <p className="text-lg leading-relaxed text-fg-2">
                    At Superteam I ran operations for <span className="text-fg">Superhosts</span> with Chris. We didn&apos;t fly into
                    every city. We built event formats any local host could pick up and run, and supported each one remotely:
                    planning, partners, merch, content and follow-up.
                  </p>
                  <p className="mt-4 leading-relaxed text-fg-2">
                    One Ecosystem Call format ran in Kota, Bangkok and across Nigeria, and BuildStations and hackathons came
                    together with Wormhole, Colosseum, SendAI and Helius.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="group relative h-full min-h-[260px] overflow-hidden rounded-3xl ring-1 ring-white/10">
                  <LoopVideo
                    src="/video/superhosts-kits.mp4"
                    poster="/video/superhosts-kits-poster.jpg"
                    label="Stencilling Superhosts boxes by hand"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-green">Behind the scenes</p>
                    <p className="mt-1 font-serif text-2xl leading-tight">Every Superhosts box, stencilled by hand.</p>
                  </div>
                </div>
              </FadeUp>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {formats.map((f, i) => (
                <FadeUp key={f.name} delay={i * 0.07}>
                  <Tilt className="h-full rounded-2xl">
                    <div className="border-glow flex h-full flex-col rounded-2xl p-5">
                      <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <p className="mt-6 font-serif text-2xl leading-tight">{f.name}</p>
                      <p className="mt-2 text-sm leading-relaxed text-fg-2">{f.blurb}</p>
                    </div>
                  </Tilt>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Testimonial ───────── */}
        <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:py-32">
          <FadeUp>
            <figure className="relative">
              <span aria-hidden className="text-gradient absolute -left-2 -top-16 font-serif text-[9rem] leading-none sm:-left-10">
                &ldquo;
              </span>
              <blockquote className="font-serif text-3xl leading-[1.2] sm:text-[2.6rem]">
                {testimonial.quote.split("@imvishp").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-gradient italic">Vishal</span>}
                  </span>
                ))}
              </blockquote>
              <figcaption className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={96} height={96} className="h-12 w-12 rounded-full bg-[#f5eecf] ring-2 ring-white/10" />
                  <div className="leading-tight">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted">
                      {testimonial.handle} · {testimonial.role}
                    </p>
                  </div>
                </div>
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-fg-2 transition-colors hover:border-white/40 hover:text-fg"
                >
                  View on X · {testimonial.date} ↗
                </a>
              </figcaption>
            </figure>
          </FadeUp>
        </section>

        {/* ───────── Work ───────── */}
        <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <FadeUp>
                <Kicker>Work</Kicker>
                <h2 className="font-serif text-5xl leading-[1] sm:text-6xl">
                  From onboarding devs to bringing Solana to <span className="text-gradient italic">other chains&apos;</span> conferences.
                </h2>
                <a href={profile.resume} target="_blank" className="mt-8 inline-flex items-center gap-2 text-sm text-fg-2 underline decoration-white/20 underline-offset-4 hover:text-fg">
                  Full resume ↗
                </a>
              </FadeUp>
            </div>

            <div className="relative pl-8 sm:pl-10">
              <ScrollLine className="left-0" />
              {experience.map((e, i) => (
                <FadeUp key={e.org} delay={0.05} className={i ? "mt-14" : ""}>
                  <div className="relative">
                    <span className="absolute -left-[calc(2rem+4.5px)] top-2 h-2.5 w-2.5 rounded-full bg-green shadow-[0_0_14px_#14f195] sm:-left-[calc(2.5rem+4.5px)]" />
                    <p className="font-mono text-xs uppercase tracking-wider text-muted">{e.period}</p>
                    <h3 className="mt-2 font-serif text-4xl leading-tight">{e.org}</h3>
                    <p className="mt-1 text-fg-2">{e.role}</p>
                    <ul className="mt-5 space-y-3">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-3 leading-relaxed text-fg-2">
                          <span className="mt-[0.7rem] h-px w-4 shrink-0 bg-gradient-to-r from-violet to-green" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    {e.tags && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {e.tags.map((t) => (
                          <span key={t} className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-fg-2">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Events ───────── */}
        <section id="events" className="relative isolate border-t border-line bg-bg-2/60">
          <Glow className="right-0 top-40 -z-10 h-[460px] w-[460px] bg-green/10" />
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
            <FadeUp className="mb-12">
              <div>
                <Kicker>Events</Kicker>
                <h2 className="font-serif text-5xl leading-[1] sm:text-7xl">
                  Rooms I helped <span className="text-gradient italic">fill.</span>
                </h2>
              </div>
            </FadeUp>
            <Gallery />
          </div>
        </section>

        {/* ───────── Beyond ───────── */}
        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeUp>
              <Kicker>Before Solana</Kicker>
              <h2 className="font-serif text-5xl leading-[1]">Community first, always.</h2>
              <p className="mt-6 leading-relaxed text-fg-2">
                I started on tech Twitter in 2022 posting Python puzzles for students, went on to lead communities as a
                Microsoft Learn Student Ambassador, then joined the Bangalore hacker house in 2023 and never really left Solana.
              </p>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {earlier.map((e) => (
                  <li key={e.title} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                    <span className="font-medium">{e.title}</span>
                    <span className="text-sm text-muted">{e.detail}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <Kicker>Off the clock</Kicker>
              <h2 className="font-serif text-5xl leading-[1]">Things I make on the side.</h2>
              <div className="mt-8 grid gap-4">
                {sideProjects.map((s) => (
                  <Tilt key={s.title} max={6} className="rounded-2xl">
                    <a href={s.link} target="_blank" rel="noreferrer" className="border-glow group block rounded-2xl p-6">
                      <div className="flex items-center justify-between">
                        <p className="font-serif text-3xl">{s.title}</p>
                        <span className="rounded-full border border-line px-3 py-1 text-xs text-fg-2 transition-colors group-hover:border-green group-hover:text-green">
                          {s.cta} ↗
                        </span>
                      </div>
                      <p className="mt-3 leading-relaxed text-fg-2">{s.blurb}</p>
                    </a>
                  </Tilt>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ───────── Contact ───────── */}
        <section id="contact" className="relative isolate overflow-hidden">
          <LoopVideo
            src="/video/community.mp4"
            poster="/video/community-poster.jpg"
            label="A room full of community members waving at the camera"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-black/80 to-bg" />
          <div className="mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:py-44">
            <FadeUp>
              <p className="mb-5 text-sm text-fg-2">Let&apos;s work together</p>
              <h2 className="max-w-5xl font-serif text-6xl leading-[0.95] sm:text-8xl">
                Need someone to run your ecosystem&apos;s <span className="text-gradient italic">next room?</span>
              </h2>
              <p className="mt-7 max-w-xl text-lg text-fg-2">
                I&apos;m available for full-time, part-time and freelance work across operations, events, community and ecosystem growth. Remote, or on the ground.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                                    { href: profile.x, label: "X · @imvishp" },
                  { href: profile.telegram, label: "Telegram" },
                  { href: profile.github, label: "GitHub" },
                  { href: profile.substack, label: "Substack" },
                  { href: profile.resume, label: "Resume" },
                  { href: `mailto:${profile.email}`, label: "Email" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-black/30 px-5 py-2.5 text-sm backdrop-blur transition-colors hover:bg-white hover:text-black"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>
          <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 border-t border-white/10 px-4 py-6 text-sm text-muted sm:px-6">
            <span>© {new Date().getFullYear()} Vishal Patadia</span>
            <span>Ahmedabad, India</span>
          </footer>
        </section>
      </main>
    </>
  );
}
