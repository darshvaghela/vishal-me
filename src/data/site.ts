export const profile = {
  name: "Vishal Patadia",
  role: "Ecosystem & Operations",
  location: "Ahmedabad, India",
  email: "thevpro25@gmail.com",
  x: "https://x.com/imvishp",
  telegram: "https://t.me/imvishp",
  github: "https://github.com/imvisp",
  substack: "https://substack.com/@imvishp",
  resume: "https://drive.google.com/file/d/1VvYebo8YDgDEPiOlL7kNsODIsci1-R4B/view?usp=drive_link",
};

export const stats = [
  { value: "3+", label: "years in the Solana ecosystem" },
  { value: "500+", label: "developers onboarded into Solana" },
  { value: "20+", label: "countries with events I coordinated" },
  { value: "20+", label: "ecosystem partners worked with" },
];

export const formats = [
  {
    name: "Solana Ecosystem Call IRL",
    blurb:
      "Watch parties for the monthly Solana Ecosystem Call. Easy for any local host to spin up, and a place for devs and Superteam members to meet.",
  },
  {
    name: "Cash Landing",
    blurb:
      "An evening on how to earn your first crypto with the skills you already have, from bounties to grants to jobs.",
  },
  {
    name: "CO-HACK",
    blurb:
      "Multi-day co-working sprints for teams building for global hackathons like Colosseum's Radar.",
  },
  {
    name: "Satoshi's Slice",
    blurb: "Bitcoin Pizza Day, celebrated with the local community.",
  },
  {
    name: "Solana Turns",
    blurb: "Birthday parties for Solana's genesis block, held city by city.",
  },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  points: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    org: "Little Unusual",
    role: "Project Coordinator · Contract",
    period: "May – Jun 2026",
    points: [
      "Owned client communication with the Solana Foundation, from gathering requirements to collecting feedback.",
      "Researched and wrote the video scripts, ran production with the core team and freelance editors, and delivered the final videos on time.",
    ],
    tags: ["Production", "Client ops"],
  },
  {
    org: "Solana Tour",
    role: "Co-Founder · Operations, Strategy & Admin",
    period: "Jan – Jul 2025",
    points: [
      "Co-founded Solana Tour with Chris to put Solana in front of the audiences at major non-Solana conferences.",
      "Brought in Bitrefill, LBank, Magic Eden, Oro, Superteam UAE, Backpack, SNS, MonkeDAO, Chomp and DeCharge as partners.",
      "Co-hosted Day of DePIN at ETHDenver 2025 (1,150 attendees) alongside DePHY, DeCharge, Roam and DIMO.",
    ],
    tags: ["Conferences", "Sponsorships"],
  },
  {
    org: "Superteam · Superhosts",
    role: "Global Event Coordinator & Operations",
    period: "Aug 2023 – Dec 2024",
    points: [
      "Led operations for Superhosts, Superteam's program for running events worldwide, with @chrisdotsol.",
      "Designed reusable event formats (Ecosystem Call IRL, Cash Landing, CO-HACK) that local hosts ran in their own cities.",
      "Partnered with Wormhole, Colosseum, SendAI and Helius to onboard new developers into Solana.",
    ],
    tags: ["Programs", "Global ops"],
  },
  {
    org: "Solana Foundation",
    role: "DevRel Intern",
    period: "Apr – Jul 2023",
    points: [
      "Built and led a developer cohort that onboarded 100+ developers into Solana.",
      "Designed the curriculum, operations and communication workflows, and unblocked devs quickly to cut time-to-first-success.",
    ],
    tags: ["DevRel", "Education"],
  },
];

export const earlier = [
  { title: "Microsoft Learn Student Ambassador · Gold", detail: "Global student community leadership" },
  { title: "Social3 · Community Manager Intern", detail: "Jan 2023" },
  { title: "MCA · SSIT Bhat, Gandhinagar", detail: "2022 – 2024" },
  { title: "Superteam Member", detail: "Recognised for contributions to the community" },
];

export const partners = [
  "Solana Foundation",
  "Superteam",
  "Colosseum",
  "Wormhole",
  "Helius",
  "SendAI",
  "Magic Eden",
  "Backpack",
  "Bitrefill",
  "LBank",
  "SNS",
  "MonkeDAO",
  "DeCharge",
  "Chomp",
  "Oro",
];

export type Mode = "hosted" | "global" | "tour";

export type Photo = {
  src: string;
  w: number;
  h: number;
  title: string;
  place: string;
  date?: string;
  mode: Mode;
  note?: string;
  link?: string;
};

export const testimonial = {
  quote:
    "Bringing @imvishp on board as Events Relations for Superhosts has been one of my best decisions this year. His support allows me to focus on strategy and stay on top of my priorities. He also goes above and beyond with his own ideas and constructive feedback. Super grateful for his help.",
  name: "chris.sol",
  handle: "@chrisdotsol",
  role: "Superhosts · Superteam",
  date: "Sep 4, 2024",
  avatar: "/images/chris.jpg",
  link: "https://x.com/chrisdotsol/status/1831249190661353955",
};

export const photos: Photo[] = [
  // Hosted in person, Ahmedabad
  { src: "amd-solana-turns", w: 2000, h: 1020, title: "Solana Turns 4", place: "Ahmedabad", date: "Mar 2024", mode: "hosted", note: "Solana's birthday, celebrated in my city" },
  { src: "amd-call-feb", w: 2000, h: 1500, title: "Solana Ecosystem Call IRL", place: "Ahmedabad", date: "Feb 2024", mode: "hosted" },
  { src: "amd-call-jan", w: 1500, h: 2000, title: "Ecosystem Call Watch Party", place: "Ahmedabad", date: "Jan 2024", mode: "hosted", note: "Co-hosted with Neil Shroff" },
  { src: "amd-solana-cake", w: 2000, h: 1647, title: "The Solana Turns 4 cake", place: "Ahmedabad", date: "Mar 2024", mode: "hosted" },
  { src: "amd-session-feb", w: 2000, h: 1500, title: "Intro to the Solana ecosystem", place: "Ahmedabad", date: "Feb 2024", mode: "hosted" },
  { src: "amd-call-apr", w: 2000, h: 1500, title: "Solana Ecosystem Call IRL", place: "Ahmedabad", date: "Apr 2024", mode: "hosted" },
  { src: "amd-solana-turns-2", w: 2000, h: 1324, title: "Solana Turns 4", place: "Ahmedabad", date: "Mar 2024", mode: "hosted" },
  { src: "amd-meetup-jun", w: 2000, h: 1500, title: "Superteam community meetup", place: "India", date: "Jun 2024", mode: "hosted" },

  // Coordinated remotely through Superteam / Superhosts
  { src: "london-demoday", w: 2000, h: 1333, title: "Superteam UK Demo Day", place: "London, UK", date: "2024", mode: "global", link: "https://luma.com/STUKDemoDay" },
  { src: "london-buildstation", w: 2000, h: 1333, title: "London BuildStation", place: "London, UK", date: "Mar – Apr 2024", mode: "global", note: "545 attendees", link: "https://luma.com/LondonBuildStation2024" },
  { src: "goldcoast-kickoff", w: 2000, h: 1333, title: "Solana Summer Kickoff", place: "Gold Coast, Australia", mode: "global" },
  { src: "nigeria-group", w: 2000, h: 1333, title: "Solana Ecosystem Call IRL", place: "Nigeria", mode: "global" },
  { src: "bangkok-group", w: 2000, h: 1333, title: "Ecosystem Call IRL × Eden", place: "Bangkok, Thailand", mode: "global" },
  { src: "kota-group", w: 2000, h: 1500, title: "Solana Ecosystem Call IRL", place: "Kota, India", mode: "global", note: "57 attendees", link: "https://luma.com/ecosystem-call-Kota" },
  { src: "monash-talk", w: 2000, h: 1333, title: "Solana workshop at Monash", place: "Malaysia", mode: "global" },
  { src: "airl-bhopal", w: 1200, h: 900, title: "A(I)RL Hackathon by Superhosts × SendAI", place: "Bhopal, India", date: "2025", mode: "global" },
  { src: "london-hacking", w: 2000, h: 1333, title: "BuildStation hacking floor", place: "London, UK", date: "2024", mode: "global" },
  { src: "nigeria-call", w: 2000, h: 1333, title: "Superteam Nigeria community", place: "Nigeria", mode: "global" },
  { src: "goldcoast-talk", w: 2000, h: 1333, title: "SolanaANZ meetup", place: "Australia", mode: "global" },
  { src: "kota-talk", w: 2000, h: 1500, title: "\"Where are you dialing in from?\"", place: "Kota, India", mode: "global" },
  { src: "monash-stage", w: 2000, h: 1500, title: "PYUSD on Solana session", place: "Malaysia", mode: "global" },
  { src: "bangkok-night", w: 2000, h: 1333, title: "Networking night", place: "Bangkok, Thailand", mode: "global" },
  { src: "nigeria-portrait", w: 2000, h: 1500, title: "Superteam Nigeria", place: "Nigeria", mode: "global" },
  { src: "nouns-deli", w: 1280, h: 960, title: "\"Only possible on Solana\"", place: "Australia", mode: "global" },
  { src: "london-group", w: 2000, h: 1333, title: "BuildStation crew", place: "London, UK", date: "2024", mode: "global" },

  // Solana Tour
  { src: "solana-speed-panel", w: 1200, h: 900, title: "Solana Speed · Builders' Panel", place: "Denver, USA", date: "ETHDenver 2025", mode: "tour", link: "https://luma.com/solanaspeed" },
  { src: "dimo-cybertruck", w: 900, h: 1200, title: "Day of DePIN × Solana Tour", place: "Denver, USA", date: "ETHDenver 2025", mode: "tour", note: "1,150 attendees", link: "https://luma.com/dayofdepin" },
  { src: "solana-speed-room", w: 1804, h: 1188, title: "Solana Speed", place: "Denver, USA", date: "ETHDenver 2025", mode: "tour" },
];

/** Photos that float through the 3D hero (thumbnails live in /public/images/thumbs). */
export const wall = [
  "london-demoday",
  "amd-solana-turns",
  "goldcoast-kickoff",
  "nigeria-group",
  "bangkok-group",
  "kota-group",
  "solana-speed-panel",
  "london-buildstation",
  "amd-call-feb",
  "monash-talk",
  "airl-bhopal",
  "nigeria-portrait",
  "dimo-cybertruck",
  "london-hacking",
  "amd-solana-cake",
  "goldcoast-talk",
  "amd-meetup-jun",
  "monash-stage",
  "nigeria-call",
  "london-group",
  "amd-call-jan",
  "nouns-deli",
];

export const sideProjects = [
  {
    title: "Rooms",
    blurb:
      "A voice-chat app I vibe-coded in under a week with Claude, without writing a line of code by hand. Create a room, share a 4-letter code, start talking.",
    link: "https://roomschat.vercel.app",
    cta: "Try it",
  },
  {
    title: "Writing on Substack",
    blurb: "The full story of building with AI tools, and other notes from the ecosystem.",
    link: "https://substack.com/@imvishp",
    cta: "Read",
  },
];
