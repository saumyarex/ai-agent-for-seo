import Image from "next/image";
import { ArrowUpRight, Globe } from "lucide-react";
import { PORTFOLIO_URL } from "./ConceptNotice";

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.828l-4.77-6.24L4.8 22H2l7.02-8.02L2 2h6.914l4.3 5.7L18.244 2Zm-1.2 18.4h1.86L7.08 3.48H5.08l11.964 16.92Z" />
    </svg>
  );
}

const productLinks = [
  { label: "AI Marketer", href: "#" },
  { label: "AI SEO", href: "#" },
  { label: "MCP", href: "#" },
  { label: "Agency", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socials = [
  { label: "Saumya on X", href: "https://x.com/saumyarex", icon: XIcon },
  {
    label: "Saumya's portfolio",
    href: PORTFOLIO_URL,
    icon: () => <Globe size={16} aria-hidden />,
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-black/6 bg-[#F5FAF0] text-neutral-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 0.5px, transparent 0.5px), linear-gradient(to bottom, rgba(0,0,0,0.04) 0.5px, transparent 0.5px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <Image src="/logo.svg" width={28} height={28} alt="Aurio" />
              <span className="text-lg font-semibold">Aurio</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-black/60">
              Stop doing SEO manually. Run a system that finds opportunities,
              executes changes, and grows your traffic while you focus on
              building.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="hover:border-brand/30 hover:text-brand flex h-9 w-9 items-center justify-center rounded-lg border border-black/6 bg-white/60 text-black/60 transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-black/50 uppercase">
              Product
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-black/70 transition-colors duration-200 hover:text-neutral-950"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-black/50 uppercase">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-black/70 transition-colors duration-200 hover:text-neutral-950"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-black/50 uppercase">
              Legal
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-black/70 transition-colors duration-200 hover:text-neutral-950"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-black/6 pt-6 text-xs text-black/50 sm:flex-row sm:items-center">
          <p>
            &copy; {year} · Aurio is a concept product. Designed &amp; built by{" "}
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-0.5 font-medium text-neutral-900 underline decoration-black/20 underline-offset-2 transition-colors hover:decoration-black/60"
            >
              Saumya
              <ArrowUpRight
                size={12}
                className="transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px"
              />
            </a>
          </p>
          <p className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>All systems running</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
