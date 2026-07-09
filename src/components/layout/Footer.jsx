import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { footerNav, primaryCta } from "../../data/navigation";

// ============================================================
// Footer
// Site-wide footer. Link columns come from src/data/navigation.js
// (footerNav), so they stay in sync with services.js / sectors.js.
// ============================================================
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="bg-grid-dense">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2" aria-label="AMEng home">
                <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
                  <rect width="64" height="64" rx="14" fill="#FF6B00" />
                  <path d="M32 12 L50 46 H41.5 L32 27.5 L22.5 46 H14 Z" fill="#0A1620" />
                  <circle cx="32" cy="20" r="3" fill="#0A1620" />
                </svg>
                <span className="text-lg font-extrabold text-white">
                  AM<span className="text-orange">Eng</span>
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-[13.5px] italic leading-relaxed text-mist">
                Precision, Above and Below Ground™
              </p>
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-haze/80">
                A multidisciplinary infrastructure services company delivering geospatial,
                utility engineering and asset intelligence solutions across North America.
              </p>
              <div className="mt-6 flex flex-col gap-2.5">
                <a href="mailto:Info@AMEng.ca" className="flex items-center gap-2 text-[13.5px] text-haze hover:text-orange">
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                  Info@AMEng.ca
                </a>
                <span className="flex items-center gap-2 text-[13.5px] text-haze">
                  <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                  Serving clients across North America
                </span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-white">Services</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {footerNav.services.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-[13.5px] text-haze hover:text-orange">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/services" className="text-[13.5px] font-semibold text-orange">
                    View all services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sectors */}
            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-white">Sectors</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {footerNav.sectors.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-[13.5px] text-haze hover:text-orange">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/sectors" className="text-[13.5px] font-semibold text-orange">
                    View all sectors →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-white">Company</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {footerNav.company.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-[13.5px] text-haze hover:text-orange">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={primaryCta.path} className="text-[13.5px] font-semibold text-orange">
                    {primaryCta.label} →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-[12px] text-mist">© {year} AMEng. All rights reserved.</p>
            <p className="font-data text-[11px] uppercase tracking-wider text-mist">
              ASCE 38-22 · CSA S250 · NASSCO PACP / MACP / LACP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
