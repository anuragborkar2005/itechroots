import NodeDot from "./NodeDot";

export default function SponsorshipArchitecture() {
  return (
    <section id="tiers" className="dark-section py-32 overflow-hidden relative scroll-mt-16">
      <div className="max-w-[1440px] mx-auto px-margin-desktop relative">
        <NodeDot className="-ml-[52px] mt-2" />
        
        <h2 className="font-headline-lg text-headline-lg text-white mb-20 text-center uppercase tracking-wider">
          Sponsorship Architecture
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line for Ladder */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-mist/20 z-0"></div>
          
          <div className="space-y-16 relative z-10">
            {/* Title Sponsor */}
            <div className="group cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="bg-signal-green text-root-ink px-12 py-6 w-full max-w-2xl text-center border-b-8 border-signal-green/30 transition-transform duration-300 group-hover:scale-[1.02]">
                  <span className="font-data-label text-data-label uppercase tracking-widest font-bold">
                    Primary Trunk
                  </span>
                  <h3 className="font-display-lg text-[48px] uppercase mt-2 font-bold leading-none">
                    Title Sponsor
                  </h3>
                </div>
                
                <div className="w-full max-w-2xl bg-[#121B2E] p-8 border-x border-b border-signal-green/20">
                  <table className="w-full text-left font-data-label text-data-label">
                    <tbody>
                      <tr className="border-b border-mist/20">
                        <td className="py-4 text-on-surface-variant font-semibold">Naming Rights</td>
                        <td className="py-4 text-white text-right">Full Event Branding</td>
                      </tr>
                      <tr className="border-b border-mist/20">
                        <td className="py-4 text-on-surface-variant font-semibold">Stall Space</td>
                        <td className="py-4 text-white text-right">20x20 Premium Zone</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-on-surface-variant font-semibold">Media Outreach</td>
                        <td className="py-4 text-white text-right">Logo on all National PR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Platinum Sponsor */}
            <div className="group cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 text-white px-10 py-5 w-full max-w-xl text-center border-b-4 border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-[1.02]">
                  <span className="font-data-label text-data-label uppercase tracking-widest text-on-surface-variant font-semibold">
                    Tier I
                  </span>
                  <h3 className="font-headline-lg text-headline-lg uppercase mt-1 font-bold">
                    Platinum Sponsor
                  </h3>
                </div>
                
                <div className="w-full max-w-xl bg-[#121B2E] p-6 border-x border-b border-white/10">
                  <p className="font-body-md text-body-md text-on-surface-variant text-center leading-relaxed">
                    Major event category naming rights, 15x15 Stall, Prime Social Media feature, and priority logo insertion.
                  </p>
                </div>
              </div>
            </div>

            {/* Gold Sponsor */}
            <div className="group cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="bg-copper/20 text-copper px-8 py-5 w-full max-w-lg text-center border-b-2 border-copper/40 hover:bg-copper/30 transition-all duration-300 group-hover:scale-[1.02] border-x border-t border-copper/10">
                  <span className="font-data-label text-data-label uppercase tracking-widest font-semibold block mb-1">
                    Tier II
                  </span>
                  <h3 className="font-headline-md text-headline-md uppercase font-bold">
                    Gold Sponsor
                  </h3>
                  <p className="font-body-md text-[13px] text-on-surface-variant/80 mt-3 normal-case leading-relaxed font-normal">
                    Category associate sponsorship rights, 10x10 Stall space, and visual branding across digital portals.
                  </p>
                </div>
              </div>
            </div>

            {/* Silver/Bronze */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-lg mx-auto">
              <div className="bg-[#121B2E] border border-mist/30 p-6 w-full sm:w-1/2 text-center hover:border-signal-green hover:shadow-[0_0_15px_rgba(61,220,151,0.1)] transition-all duration-300">
                <span className="font-data-label text-data-label text-on-surface-variant">Tier III</span>
                <h4 className="font-data-label text-data-label text-white font-bold block mt-2 tracking-widest text-lg">
                  SILVER
                </h4>
                <p className="text-on-surface-variant text-xs font-body-md mt-2">Logo space on web pages and media banner mentions.</p>
              </div>
              
              <div className="bg-[#121B2E] border border-mist/30 p-6 w-full sm:w-1/2 text-center hover:border-signal-green hover:shadow-[0_0_15px_rgba(61,220,151,0.1)] transition-all duration-300">
                <span className="font-data-label text-data-label text-on-surface-variant">Tier IV</span>
                <h4 className="font-data-label text-data-label text-white font-bold block mt-2 tracking-widest text-lg">
                  BRONZE
                </h4>
                <p className="text-on-surface-variant text-xs font-body-md mt-2">Logo displays inside regional brochures and digital slideshows.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
