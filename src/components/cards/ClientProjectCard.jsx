import { Check, MapPin } from "lucide-react";

// ============================================================
// ClientProjectCard
// One client's project experience on /projects. Three layouts, all
// driven by src/data/clientProjects.js:
//   featured – full-width, logo panel + scope checklist
//   list     – compact address + service rows (grouped projects)
//   single   – one project / scope line
// Logos sit in a small plate sized to the logo's own background so
// the supplied artwork is never stretched, cropped or recoloured.
// ============================================================

const plateClass = {
  light: "bg-white",
  dark: "bg-black",
  photo: "bg-[#8c8c8c]",
};

function LogoPlate({ logo, className = "" }) {
  // No approved logo supplied: the client name is shown as the card heading only.
  if (!logo) return null;
  return (
    <div className={`inline-flex overflow-hidden rounded-md ${plateClass[logo.plate] ?? "bg-white"} ${className}`}>
      <img
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        loading="lazy"
        className="block h-auto max-w-full"
      />
    </div>
  );
}

function Header({ client, logoClass }) {
  return (
    <div className="flex flex-col gap-4">
      <LogoPlate logo={client.logo} className={logoClass} />
      <div>
        <h3 className="text-[19px] font-bold leading-snug text-white">{client.name}</h3>
        {client.alsoListed && (
          <p className="mt-1 text-[13.5px] text-haze">{client.alsoListed}</p>
        )}
        {client.category && (
          <span className="font-data mt-3 inline-block rounded bg-orange/90 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-navy">
            {client.category}
          </span>
        )}
      </div>
    </div>
  );
}

const cardBase = "rounded-[10px] border border-white/10 bg-navy shadow-[var(--shadow-card-dark)]";

export default function ClientProjectCard({ client }) {
  if (client.layout === "featured") {
    return (
      <article className={`${cardBase} p-6 sm:p-8 lg:p-10`}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <Header client={client} logoClass="w-full max-w-[320px]" />
          <div>
            <p className="font-data text-xs font-bold uppercase tracking-[0.2em] text-orange">Scope of work</p>
            <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {client.scopes.map((scope) => (
                <li key={scope} className="flex items-start gap-2.5 text-[14px] leading-snug text-haze">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" strokeWidth={2.5} aria-hidden="true" />
                  {scope}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  }

  const logoClass = "w-auto max-w-[240px]";

  return (
    <article className={`${cardBase} w-full flex flex-col gap-6 p-6 sm:p-7`}>
      <Header client={client} logoClass={logoClass} />
      {client.layout === "list" ? (
        <ul className="divide-y divide-white/10 border-t border-white/10">
          {client.items.map((item) => (
            <li key={item.location} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <span className="flex items-center gap-2 text-[14px] font-semibold text-white">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-orange" strokeWidth={2.25} aria-hidden="true" />
                {item.location}
              </span>
              <span className="pl-[22px] text-[13.5px] text-haze sm:pl-0 sm:text-right">{item.service}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-4 border-t border-white/10 pt-5">
          {client.project && (
            <div>
              <p className="font-data text-[11px] font-bold uppercase tracking-[0.2em] text-orange">Project</p>
              <p className="mt-1 text-[14.5px] font-semibold text-white">{client.project}</p>
            </div>
          )}
          <div>
            <p className="font-data text-[11px] font-bold uppercase tracking-[0.2em] text-orange">Scope</p>
            <p className="mt-1 text-[14px] leading-relaxed text-haze">{client.scope}</p>
          </div>
        </div>
      )}
    </article>
  );
}
