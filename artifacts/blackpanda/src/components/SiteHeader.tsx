// @ts-ignore
import logo from "@assets/Gemini_Generated_Image_donrjidonrjidonr_1777815229817.png";

type SiteHeaderProps = {
  currentPath?: string;
};

export default function SiteHeader({ currentPath }: SiteHeaderProps) {
  const isEvents = currentPath === "/events";

  return (
    <header className="relative w-full p-6 flex flex-col sm:flex-row justify-center items-center gap-4">
      <a href="/" aria-label="BlackPanda Labs home">
        <img src={logo} alt="BlackPanda Logo" className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]" />
      </a>
      <nav className="sm:absolute sm:right-6 sm:top-1/2 sm:-translate-y-1/2 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.18em]">
        <a
          href="/events"
          aria-current={isEvents ? "page" : undefined}
          className="text-primary hover:text-white transition-colors border border-primary/40 hover:border-primary px-3 py-2 rounded bg-black/60"
        >
          Events
        </a>
      </nav>
    </header>
  );
}
