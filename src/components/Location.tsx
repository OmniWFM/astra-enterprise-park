import Reveal from "./Reveal";

const cards = [
  {
    img: "https://ideogram.ai/api/images/ephemeral/24G6iKxJVQOBbOK_su3ryw.png?exp=1782883986&sig=21d99a43eaaa4dfbc74f0ab7a3074551971b9237d4331bd0f14d83e7b4c35c55",
    title: "Utility-Scale Energy",
    body: "Solar and wind generation on-site, behind the meter — powering tenants with clean, reliable energy.",
  },
  {
    img: "https://ideogram.ai/api/images/ephemeral/CWng90KsVwSfIRQP0a-sHw.png?exp=1782883986&sig=79ace07862d94d76ca2d4289a079ba9ad6ab5186eef5d166e1bcde86e80fe1dd",
    title: "Logistics District",
    body: "Freight rail and interstate corridors put 85% of the U.S. within a two-day reach by road or rail.",
  },
  {
    img: "https://ideogram.ai/api/images/ephemeral/uST-b1lAVQmZ9bT1Lj5m8A.png?exp=1782883986&sig=e56dae984ac6d0daa8e9904873e856c724d64e0e44c92f14b748a3f516102f90",
    title: "Preserved Parklands",
    body: "Over 2,000 acres of public parkland permanently preserved, framing the development in green.",
  },
];

export default function Location() {
  return (
    <section id="location" className="relative bg-midnight py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-energy">
            The KC Metro
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            The center of the country,{" "}
            <span className="gradient-text">connected to everywhere</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Central time overlaps with both coasts, and the location makes it
            easy to do business throughout the U.S. — with rail, interstate and a
            modern airport all within immediate reach.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-panel/60">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-white/65">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
