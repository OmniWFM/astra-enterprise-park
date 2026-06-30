export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-[0.3em] text-white">
            ASTRA
          </span>
          <span className="h-2 w-2 rounded-full bg-energy" />
        </div>
        <p className="text-sm text-white/50">
          ASTRA Enterprise Park — Kansas City Metro. Led by Kessinger Hunter.
        </p>
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} ASTRA Enterprise Park
        </p>
      </div>
    </footer>
  );
}
