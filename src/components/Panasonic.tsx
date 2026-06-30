import Reveal from "./Reveal";

export default function Panasonic() {
  return (
    <section id="panasonic" className="relative overflow-hidden bg-charcoal py-28">
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://ideogram.ai/api/images/ephemeral/17wbD5DXWrOoVVqnje2S1w.png?exp=1782883986&sig=979a200310e4c560ededaafe2df41f1b1f5295023d20dbab4c6d0066fe5c1008"
          alt="Advanced battery manufacturing facility at dusk"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/40" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-amber">
            Anchor Tenant
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Panasonic&apos;s{" "}
            <span className="gradient-text">$4B battery facility</span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
            In November 2022, Panasonic broke ground on a $4 billion advanced
            battery production facility. This 309-acre project confirms both the
            strategic advantage of locating in America&apos;s heartland and the
            market&apos;s belief in the owners&apos; ability to deliver a
            world-class enterprise park.
          </p>

          <blockquote className="mt-8 border-l-2 border-energy pl-6">
            <p className="text-xl italic text-white/85">
              &ldquo;Kansas has an impressive history of being home to a skilled
              manufacturing workforce. We appreciate Kansas&apos; dedication to
              sustainability and its commitment to and growth in the clean and
              renewable energy space.&rdquo;
            </p>
            <footer className="mt-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Kris Takamoto — EVP, Panasonic Energy
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "$4B", l: "Capital Investment" },
              { v: "309", l: "Acre Footprint" },
              { v: "2022", l: "Groundbreaking" },
              { v: "4,000+", l: "Projected Jobs" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-6">
                <div className="text-3xl font-bold text-white md:text-4xl">
                  {s.v}
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-white/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
