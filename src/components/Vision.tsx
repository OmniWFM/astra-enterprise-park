import Reveal from "./Reveal";

const pillars = [
  {
    title: "Institutional Due Diligence",
    body: "Proven ability to meet the rigorous standards of the world's most demanding institutional partners.",
  },
  {
    title: "Skilled Workforce",
    body: "One of the most diverse workforces in the country, backed by dedicated job training programs.",
  },
  {
    title: "Renewable Energy On-Site",
    body: "Utility-scale renewable energy generation, delivered behind the meter for true cost control.",
  },
  {
    title: "Rail, Interstate & Air",
    body: "Immediate access to freight rail, interstate highways and a modern airport in one location.",
  },
  {
    title: "Unconstrained Land",
    body: "Abundant acreage without neighbor constraints — room to build at a truly institutional scale.",
  },
  {
    title: "Local Ownership",
    body: "Local ownership enables fast decisions inside a genuinely pro-business community.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="relative bg-midnight py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-energy">
            The Vision
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            A <span className="gradient-text">legacy endeavor</span> in the
            center of the country
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            More than 2,000 acres of preserved public parklands that will never
            be developed, alongside endless opportunity for economic growth. The
            central location overlaps both coasts in time zone, and more than 85%
            of the country is reachable by road or rail within two days.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-white/10 bg-panel/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-energy/50">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-energy to-amber text-lg font-bold text-midnight">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-white/65">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
