import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-green">404</p>
      <h1 className="mt-4 font-serif text-6xl sm:text-7xl">
        This room is <span className="text-gradient italic">empty.</span>
      </h1>
      <p className="mt-4 text-fg-2">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 rounded-full bg-fg px-6 py-3 font-medium text-black hover:bg-green">
        Back to the main hall
      </Link>
    </main>
  );
}
