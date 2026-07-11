import Icon from "../../lib/icons";

// ============================================================
// CardMedia
// Shared top-of-card visual for TechnologyCard and ServiceCard.
// If `image` is supplied, renders the photo (full-bleed, no heavy
// text overlay — content lives below in the card body instead).
// If not, renders a generated on-brand "picture": a colored gradient
// wash + grid/point pattern behind a large centered icon glyph, bold
// enough to read as a deliberate graphic tile rather than a texture,
// so every card still gets a distinct visual even without real photography.
// ============================================================
const MOTIFS = ["bg-grid-dense", "bg-points", "bg-grid", "bg-points"];
const WASHES = [
  "from-orange/25 via-ink-900/40 to-ink-950",
  "from-ink-500/35 via-ink-900/40 to-ink-950",
  "from-orange/20 via-ink-600/25 to-ink-950",
  "from-ink-600/40 via-ink-900/40 to-ink-950",
];

export default function CardMedia({ image, icon, index = 0, alt = "" }) {
  return (
    <div className="relative h-36 w-full overflow-hidden border-b border-white/10 bg-ink-950">
      {image ? (
        <>
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-transparent to-transparent" aria-hidden="true" />
          {icon && (
            <Icon
              name={icon}
              className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 text-white/15"
              strokeWidth={1}
            />
          )}
        </>
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${WASHES[index % WASHES.length]}`} aria-hidden="true" />
          <div className={`absolute inset-0 ${MOTIFS[index % MOTIFS.length]} opacity-80`} aria-hidden="true" />
          {icon && (
            <Icon
              name={icon}
              className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-orange/40"
              strokeWidth={1.25}
            />
          )}
        </>
      )}
      {icon && (
        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-orange/30 bg-ink-950/70 text-orange backdrop-blur-sm">
          <Icon name={icon} className="h-4.5 w-4.5" />
        </div>
      )}
    </div>
  );
}
