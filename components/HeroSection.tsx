import NodeDot from "./NodeDot";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden dark-section">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-desktop py-24">
        <NodeDot className="top-0 -mt-4" />
        
        <p className="font-data-label text-data-label text-signal-green mb-6 tracking-[0.2em] uppercase">
          Department of Information Technology · YCCE Nagpur
        </p>
        
        <h1 className="font-display-lg text-display-lg md:text-[120px] mb-4 leading-none text-white select-none">
          ITECHROOTS 16.0
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="font-headline-md text-headline-md text-signal-green">Innovation</span>
          <div className="w-1.5 h-1.5 bg-signal-green rotate-45"></div>
          <span className="font-headline-md text-headline-md text-signal-green">Collaboration</span>
          <div className="w-1.5 h-1.5 bg-signal-green rotate-45"></div>
          <span className="font-headline-md text-headline-md text-signal-green">Celebration</span>
        </div>
        
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
          Annual Flagship IT Symposium. A nexus of technical prowess, athletic grit, and cultural vibrance rooted in excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-gutter mb-20">
          <a
            href="#contact"
            className="inline-block text-center bg-signal-green text-root-ink px-8 py-4 font-data-label text-data-label font-bold hover:brightness-110 active:scale-98 transition-all duration-200"
          >
            Become a Sponsor
          </a>
          <a
            href="#sponsors"
            className="inline-block text-center border border-copper text-copper px-8 py-4 font-data-label text-data-label font-bold hover:bg-copper hover:text-white active:scale-98 transition-all duration-200"
          >
            Download Sponsorship Kit
          </a>
        </div>

        {/* Stat Bar */}
        <div className="relative w-full">
          <div className="absolute top-1/2 w-full h-[1px] bg-mist -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter relative z-10">
            <div className="flex items-center gap-4 bg-root-ink py-6 pr-6">
              <div className="w-4 h-4 bg-signal-green rotate-45 shrink-0 transition-transform hover:rotate-90 duration-300"></div>
              <div>
                <p className="font-headline-md text-headline-md text-white font-bold">5000+</p>
                <p className="font-data-label text-data-label text-on-surface-variant uppercase tracking-wider">Expected Footfall</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-root-ink py-6 px-6">
              <div className="w-4 h-4 bg-signal-green rotate-45 shrink-0 transition-transform hover:rotate-90 duration-300"></div>
              <div>
                <p className="font-headline-md text-headline-md text-white font-bold">18+</p>
                <p className="font-data-label text-data-label text-on-surface-variant uppercase tracking-wider">Exciting Events</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-root-ink py-6 pl-6">
              <div className="w-4 h-4 bg-signal-green rotate-45 shrink-0 transition-transform hover:rotate-90 duration-300"></div>
              <div>
                <p className="font-headline-md text-headline-md text-white font-bold">Industry-Academia</p>
                <p className="font-data-label text-data-label text-on-surface-variant uppercase tracking-wider">Strategic Connect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
