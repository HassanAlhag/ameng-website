import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { primaryNav, primaryCta } from "../../data/navigation";
import CTAButton from "../ui/CTAButton";

// ============================================================
// Header
// Site-wide navigation. Renders entirely from src/data/navigation.js
// so adding a page/service/sector never means touching this file.
// Behavior:
//   - Transparent over the hero, solidifies to navy on scroll so
//     text stays legible over any hero image/gradient.
//   - Desktop: hover/click dropdowns for Services & Sectors.
//   - Mobile: full-screen slide-down panel with accordion submenus.
// ============================================================
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
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDesktopMenu(item.label)}
              onMouseLeave={() => item.children && setOpenDesktopMenu(null)}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-md px-4 py-2 text-[13.5px] font-semibold transition-colors ${
                    isActive ? "text-orange" : "text-white/85 hover:text-orange"
                  }`
                }
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.5} />}
              </NavLink>

              {item.children && (
                <div
                  className={`absolute left-1/2 top-full grid w-[560px] -translate-x-1/2 grid-cols-2 gap-1 rounded-lg border border-white/10 bg-ink-900 p-3 shadow-[var(--shadow-card-dark)] transition-all duration-150 ${
                    openDesktopMenu === item.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                  role="menu"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      role="menuitem"
                      className="rounded-md px-3 py-2.5 text-[13px] font-medium text-haze transition-colors hover:bg-white/5 hover:text-orange"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
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
