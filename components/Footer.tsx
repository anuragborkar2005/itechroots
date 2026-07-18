export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/30 w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-12 max-w-[1440px] mx-auto">
        <div className="col-span-1">
          <div className="font-headline-md text-headline-md text-on-surface mb-4 font-bold">
            ITECHROOTS 16.0
          </div>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Rooted in Excellence, Engineered for the Future.
          </p>
        </div>
        
        <div className="col-span-1 flex flex-col gap-3">
          <a
            className="font-data-label text-data-label text-on-surface-variant hover:text-tertiary transition-colors hover:underline decoration-root-line-weight"
            href="#about"
          >
            About
          </a>
          <a
            className="font-data-label text-data-label text-on-surface-variant hover:text-tertiary transition-colors hover:underline decoration-root-line-weight"
            href="#communities"
          >
            Communities
          </a>
          <a
            className="font-data-label text-data-label text-on-surface-variant hover:text-tertiary transition-colors hover:underline decoration-root-line-weight"
            href="#events"
          >
            Events
          </a>
        </div>
        
        <div className="col-span-1 flex flex-col gap-3">
          <a
            className="font-data-label text-data-label text-on-surface-variant hover:text-tertiary transition-colors hover:underline decoration-root-line-weight"
            href="#sponsors"
          >
            Sponsors
          </a>
          <a
            className="font-data-label text-data-label text-on-surface-variant hover:text-tertiary transition-colors hover:underline decoration-root-line-weight"
            href="#tiers"
          >
            Tiers
          </a>
          <a
            className="font-data-label text-data-label text-on-surface-variant hover:text-tertiary transition-colors hover:underline decoration-root-line-weight"
            href="#contact"
          >
            Contact
          </a>
        </div>
        
        <div className="col-span-1">
          <p className="font-data-label text-data-label text-tertiary uppercase mb-4 tracking-wider font-semibold">
            Social Presence
          </p>
          <a
            className="font-data-label text-data-label text-on-surface-variant hover:text-tertiary transition-colors inline-flex items-center gap-2"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-sm">share</span>
            Instagram @ITECHROOTS_16.0
          </a>
        </div>
      </div>
      
      <div className="px-margin-desktop py-6 border-t border-outline-variant/30 text-center">
        <p className="font-data-label text-data-label text-on-surface-variant">
          © {currentYear} ITECHROOTS 16.0. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
