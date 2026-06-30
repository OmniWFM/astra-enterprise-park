import Reveal from "./Reveal";

const owners = [
  {
    name: "Kessinger Hunter",
    detail:
      "A full-service commercial real estate firm in business since 1879, operating $2B+ of assets nationwide and across the European Union.",
  },
  {
    name: "RESIGHT Holdings",
    detail:
      "A leader in environmental remediation, bringing deep expertise in responsible, sustainable land development.",
  },
  {
    name: "Midland Properties",
    detail:
      "A Kansas City-based family equity firm with long roots in the region and a long-term ownership horizon.",
  },
];

export default function Ownership() {
  return (
    <section id="ownership" className="relative bg-charcoal py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-amber">
            Local Ownership. Long-Term Vision.
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            Stewarded by an{" "}
            <span className="gradient-text">experienced ownership group</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Working with local, state and federal agencies, the owners have
            pursued a development plan that makes the highest and best use of the
            property — enveloped by thousands of acres of public parks and
            state-of-the-art manufacturing, industrial and energy developments.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {owners.map((o, i) => (
            <Reveal key={o.name} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-panel/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber/50">
                <h3 className="text-2xl font-bold text-white">{o.name}</h3>
                <div className="mt-4 h-px w-12 bg-gradient-to-r from-energy to-amber" />
                <p className="mt-4 text-white/65">{o.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
