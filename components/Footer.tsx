import Image from "next/image";

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

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const productLinks = [
  { label: "AI Marketer", href: "https://www.get-ryze.ai/" },
  { label: "AI SEO", href: "#" },
  {
    label: "MCP",
    href: "https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp",
  },
  { label: "Agency", href: "https://www.get-ryze.ai/agency" },
];

const companyLinks = [
  { label: "About", href: "https://www.get-ryze.ai/about" },
  { label: "Blog", href: "https://www.get-ryze.ai/blog" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "mailto:ryzeaiteam@gmail.com" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "https://www.get-ryze.ai/privacy" },
  { label: "Terms of Service", href: "https://www.get-ryze.ai/term-services" },
];

const socials = [
  { label: "X", href: "https://twitter.com/getryze", icon: XIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/get-ryze-ai/",
    icon: LinkedInIcon,
  },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
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
            <a
              href="https://www.get-ryze.ai/"
              className="flex items-center gap-2"
            >
              <Image
                src="/main-logo-sun-2.png"
                width={28}
                height={28}
                alt="Ryze"
              />
              <span className="text-lg font-semibold">Ryze</span>
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

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-black/6 pt-6 text-xs text-black/50 sm:flex-row sm:items-center">
          <p>
            &copy; {year} Ryze AI. From dashboards to decisions — SEO that runs
            itself.
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
