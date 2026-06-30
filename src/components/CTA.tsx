import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-midnight py-32">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-energy/20 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Build your future at{" "}
            <span className="gradient-text">ASTRA</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Today&apos;s industrial needs require more than land — they require
            forward-thinking partners. Let&apos;s talk about how ASTRA can be the
            home of what you build next.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:leasing@astraenterprisepark.io"
              className="rounded-full bg-gradient-to-r from-energy to-amber px-8 py-4 text-base font-semibold text-midnight transition-transform hover:scale-105"
            >
              Contact Leasing
            </a>
            <a
              href="https://www.kessingerhunter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              About the Developer
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
