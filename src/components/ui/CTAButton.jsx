import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// ============================================================
// CTAButton
// One button component used everywhere in the site so every call
// to action looks and behaves consistently.
//   variant: "primary" (solid orange, brand CTA color) | "secondary"
//            (outline, for on-dark or on-light secondary actions)
//            | "ghost" (text-only, for low-emphasis inline links)
//   to:      internal route -> renders a react-router <Link>
//   href:    external url    -> renders a plain <a>
// ============================================================
const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const sizes = {
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

// Note on text-navy over bg-orange: pure white text on the brand's
// #FF6B00 orange only hits ~2.9:1 contrast (fails WCAG AA's 4.5:1 for
// normal-size text). Precision Navy on SUE Safety Orange — both real
// brand colors from the guideline — hits ~5.5:1, so solid-orange
// buttons use navy text instead of white to stay accessible without
// changing the brand color itself.
const variants = {
  primary:
    "bg-orange text-navy shadow-[0_4px_18px_rgba(255,107,0,0.28)] hover:bg-orange-dark hover:-translate-y-0.5",
  secondary:
    "border-2 border-white/30 text-white hover:border-orange hover:text-orange",
  "secondary-dark":
    "border-2 border-navy/25 text-navy hover:border-orange hover:text-orange",
  // Used for the primary action inside an orange CTASection band, where a
  // solid-orange or white-on-orange button would fail contrast against the bg.
  "on-orange":
    "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  // Secondary action on an orange band — same contrast reasoning as
  // "on-orange" above, but text-only so it doesn't compete with the primary CTA.
  "on-orange-ghost": "text-navy underline decoration-2 underline-offset-4 hover:text-navy/70 px-0 py-0",
  ghost: "text-orange hover:text-orange-dark px-0 py-0",
};

export default function CTAButton({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  ...rest
}) {
  const isGhostVariant = variant === "ghost" || variant === "on-orange-ghost";
  const classes = `${base} ${isGhostVariant ? "" : sizes[size]} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${classes} group`} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={`${classes} group`} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={`${classes} group`} {...rest}>
      {content}
    </button>
  );
}
