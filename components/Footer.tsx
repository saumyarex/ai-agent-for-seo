import Image from "next/image";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.828l-4.77-6.24L4.8 22H2l7.02-8.02L2 2h6.914l4.3 5.7L18.244 2Zm-1.2 18.4h1.86L7.08 3.48H5.08l11.964 16.92Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-1.98c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.3-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.3-.52-1.48.11-3.09 0 0 .97-.31 3.18 1.18a10.95 10.95 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.61.23 2.79.12 3.09.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.37-5.27 5.66.41.36.78 1.06.78 2.13v3.15c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

const productLinks = [
  { label: "AI Marketer", href: "https://www.get-ryze.ai/" },
  { label: "AI SEO", href: "#" },
  { label: "MCP", href: "https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp" },
  { label: "Agency", href: "https://www.get-ryze.ai/agency" },
];

const companyLinks = [
  { label: "About", href: "https://www.get-ryze.ai/about" },
  { label: "Blog", href: "https://www.get-ryze.ai/blog" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "mailto:ryzeaiteam@gmail.com" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Security", href: "#" },
];

const socials = [
  { label: "X", href: "https://twitter.com/getryze", icon: XIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/getryze", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com", icon: GithubIcon },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/6 bg-white text-neutral-900">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="https://www.get-ryze.ai/" className="flex items-center gap-2">
              <Image src="/main-logo-sun-2.png" width={28} height={28} alt="Ryze" />
              <span className="text-lg font-semibold">Ryze</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-black/60">
              The autonomous SEO system that finds opportunities, creates content,
              and gets you cited in AI search — automatically.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/6 bg-white text-black/60 transition-colors duration-200 hover:border-[#D97706]/30 hover:text-[#D97706]"
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
            &copy; {year} Ryze AI. Built for founders who&rsquo;d rather ship than
            audit.
          </p>
          <p className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D97706]" />
            <span>All systems running</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
