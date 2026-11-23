"use client";

/** In-page link that smooth-scrolls to a section without putting "#id" in the URL. */
export default function ScrollLink({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        const el = to === "top" ? document.body : document.getElementById(to);
        if (!el) return;
        e.preventDefault();
        if (to === "top") window.scrollTo({ top: 0, behavior: "smooth" });
        else el.scrollIntoView({ behavior: "smooth" });
        if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
      }}
    >
      {children}
    </a>
  );
}
