"use client";

import Counter from "./Counter";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://ideogram.ai/api/images/ephemeral/PZ9sXU7FWpyia0RrtQnSLg.png?exp=1782883996&sig=ce39850e2e2c8f682491e92aeda9f6cf3b5cbd35009a266016c897104f06f90d"
          alt="Aerial view of ASTRA Enterprise Park at golden hour"
          className="h-full w-full object-cover animate-slowZoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/50 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-energy animate-fadeUp">
          The Heart of North America
        </p>
        <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl animate-fadeUp">
          No other site in America{" "}
          <span className="gradient-text">measures up to ASTRA</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/75 animate-fadeUp md:text-xl">
          The new home of Panasonic&apos;s $4B advanced battery production
          facility. A 9,000+ acre enterprise park with utility-scale renewable
          energy on-site, surrounded by a skilled workforce.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fadeUp">
          <a
            href="#vision"
            className="rounded-full bg-gradient-to-r from-energy to-amber px-8 py-4 text-base font-semibold text-midnight transition-transform hover:scale-105"
          >
            Explore the Development
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Start a Conversation
          </a>
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { v: <Counter end={9000} suffix="+" />, l: "Total Acres" },
            { v: <Counter end={4} prefix="$" suffix="B" />, l: "Panasonic Investment" },
            { v: <Counter end={2000} suffix="+" />, l: "Preserved Acres" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <div className="text-4xl font-bold text-white md:text-5xl">{s.v}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <div className="h-2 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
