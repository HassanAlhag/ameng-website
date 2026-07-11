import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { primaryNav, primaryCta } from "../../data/navigation";
import CTAButton from "../ui/CTAButton";
import Icon from "../../lib/icons";

// ============================================================
// Header
// Site-wide navigation. Renders entirely from src/data/navigation.js
// so adding a page/service/sector never means touching this file.
// Behavior:
//   - Transparent over the hero, solidifies to navy on scroll so
//     text stays legible over any hero image/gradient.
//   - Desktop: hover/focus mega menus for Services, Sectors &
//     Technology (item.megaMenu); simple links otherwise.
//   - Mobile: full-screen slide-down panel with accordion submenus
//     (item.children) — kept deliberately simple, no mega-menu layout.
// ============================================================

// Shared right-hand CTA panel used by every desktop mega menu.
function MegaMenuCta({ cta }) {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden border-l border-white/10 bg-ink-950/70 p-5">
      <div className="bg-points pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative">
        <strong className="block text-[13.5px] font-bold leading-snug text-white">{cta.title}</strong>
        <p className="mt-2 text-[12px] leading-relaxed text-haze">{cta.text}</p>
      </div>
      <CTAButton to={cta.path} variant="ghost" className="relative mt-4 text-[13px]">
        {cta.buttonLabel}
      </CTAButton>
    </div>
  );
}

function ServicesMegaMenu({ megaMenu }) {
  return (
    <div className="grid grid-cols-[repeat(3,1fr)_240px]">
      {megaMenu.columns.map((column) => (
        <div key={column.title} className="border-r border-white/5 p-5">
          <div className="font-data mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-orange">
            {column.title}
          </div>
          <ul className="flex flex-col gap-1" role="none">
            {column.items.map((item) => (
              <li key={item.path} role="none">
                <Link
                  to={item.path}
                  role="menuitem"
                  className="group flex flex-col gap-1 rounded-md px-2.5 py-2.5 transition-colors hover:bg-white/5"
                >
                  <span className="flex items-center gap-2 text-[13px] font-semibold text-white group-hover:text-orange">
                    <Icon name={item.icon} className="h-4 w-4 shrink-0 text-orange/70" strokeWidth={1.75} />
                    {item.label}
                  </span>
                  <span className="pl-6 text-[11.5px] leading-snug text-haze">{item.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <MegaMenuCta cta={megaMenu.cta} />
    </div>
  );
}

function ChipGridMegaMenu({ items, cta }) {
  return (
    <div className="grid grid-cols-[1fr_240px]">
      <div className="grid grid-cols-2 gap-2 p-5" role="none">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            role="menuitem"
            className="flex items-center gap-2.5 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2.5 text-[13px] font-semibold text-white transition-colors hover:border-orange/40 hover:bg-white/5 hover:text-orange"
          >
            <Icon name={item.icon} className="h-4 w-4 shrink-0 text-orange" strokeWidth={1.75} />
            {item.label}
          </Link>
        ))}
      </div>
      <MegaMenuCta cta={cta} />
    </div>
  );
}

// Desktop mega menu panel: dark glass surface with GIS-style decorative
// texture behind the content, switched by type onto the layouts above.
function MegaMenuPanel({ item, open }) {
  const { megaMenu } = item;
  const width = megaMenu.type === "services" ? 800 : 620;

  return (
    <div
      className={`absolute left-1/2 top-full max-w-[92vw] -translate-x-1/2 overflow-hidden rounded-xl border border-white/10 bg-ink-950/95 shadow-[var(--shadow-card-dark)] backdrop-blur-md transition-all duration-150 ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
      }`}
      style={{ width }}
      role="menu"
      aria-label={`${item.label} menu`}
    >
      <div className="bg-grid-dense pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="bg-scan-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative">
        {megaMenu.type === "services" && <ServicesMegaMenu megaMenu={megaMenu} />}
        {megaMenu.type === "sectors" && <ChipGridMegaMenu items={megaMenu.chips} cta={megaMenu.cta} />}
        {megaMenu.type === "technology" && <ChipGridMegaMenu items={megaMenu.grid} cta={megaMenu.cta} />}
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMobileMenu(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-ink-900/95 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm"
          : "bg-gradient-to-b from-ink-950/80 to-transparent"
      }`}
    >
      <a href="#main-content" className="skip-link">Skip to content</a>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="AMEng home">
          <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#FF6B00" />
            <path d="M32 12 L50 46 H41.5 L32 27.5 L22.5 46 H14 Z" fill="#0A1620" />
            <circle cx="32" cy="20" r="3" fill="#0A1620" />
          </svg>
          <span className="text-xl font-extrabold tracking-tight text-white">
            AM<span className="text-orange">Eng</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const isOpen = openDesktopMenu === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && setOpenDesktopMenu(item.label)}
                onMouseLeave={() => item.megaMenu && setOpenDesktopMenu(null)}
                onFocus={() => item.megaMenu && setOpenDesktopMenu(item.label)}
                onBlur={(e) => {
                  if (item.megaMenu && !e.currentTarget.contains(e.relatedTarget)) {
                    setOpenDesktopMenu(null);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape" && item.megaMenu) setOpenDesktopMenu(null);
                }}
              >
                <NavLink
                  to={item.path}
                  aria-haspopup={item.megaMenu ? "true" : undefined}
                  aria-expanded={item.megaMenu ? isOpen : undefined}
                  className={({ isActive }) =>
                    `flex items-center gap-1 rounded-md px-4 py-2 text-[13.5px] font-semibold transition-colors ${
                      isActive ? "text-orange" : "text-white/85 hover:text-orange"
                    }`
                  }
                >
                  {item.label}
                  {item.megaMenu && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                      strokeWidth={2.5}
                    />
                  )}
                </NavLink>

                {item.megaMenu && <MegaMenuPanel item={item} open={isOpen} />}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <CTAButton to={primaryCta.path} size="md" icon={false}>
            {primaryCta.label}
          </CTAButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-ink-900 px-6 pb-8 lg:hidden">
          <nav className="flex flex-col divide-y divide-white/10" aria-label="Mobile primary">
            {primaryNav.map((item) => (
              <div key={item.label} className="py-1">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    className="flex-1 py-3 text-[15px] font-semibold text-white"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() =>
                        setOpenMobileMenu((v) => (v === item.label ? null : item.label))
                      }
                      className="p-3 text-white/70"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openMobileMenu === item.label ? "rotate-180" : ""
                        }`}
                        strokeWidth={2.5}
                      />
                    </button>
                  )}
                </div>
                {item.children && openMobileMenu === item.label && (
                  <div className="flex flex-col gap-0.5 pb-3 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="rounded px-3 py-2 text-[13.5px] text-haze hover:text-orange"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-5">
            <CTAButton to={primaryCta.path} className="w-full" icon={false}>
              {primaryCta.label}
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
