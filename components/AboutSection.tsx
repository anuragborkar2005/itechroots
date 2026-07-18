import NodeDot from "./NodeDot";

export default function AboutSection() {
  return (
    <section id="about" className="paper-section py-24 relative scroll-mt-16">
      <div className="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
        <NodeDot className="-ml-[52px] mt-2" />
        
        <div className="md:col-span-8">
          <h2 className="font-headline-lg text-headline-lg text-root-ink mb-12">
            About ITECHROOTS 16.0
          </h2>
          <div className="space-y-6 max-w-2xl">
            <p className="font-body-lg text-body-lg text-root-ink/80 leading-relaxed">
              ITECHROOTS is the hallmark of the Department of Information Technology at YCCE, Nagpur. For over a decade, it has served as the premier stage for students to showcase technical ingenuity, competitive spirit, and artistic talent.
            </p>
            <p className="font-body-lg text-body-lg text-root-ink/80 leading-relaxed">
              The 16.0 edition is designed as a modular ecosystem where the brightest minds from across central India converge. As a sponsor, you are not just funding an event; you are rooting your brand in the fertile ground of future-ready talent.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 border-l border-copper/30 pl-8 space-y-12 py-4">
          <div className="group">
            <p className="font-data-label text-data-label text-copper uppercase mb-2 tracking-wider">Central Focus</p>
            <p className="font-headline-md text-headline-md text-root-ink font-semibold group-hover:text-signal-green transition-colors duration-300">
              Technocratic Excellence
            </p>
            <div className="w-full h-[1px] bg-copper/20 mt-4"></div>
          </div>
          
          <div className="group">
            <p className="font-data-label text-data-label text-copper uppercase mb-2 tracking-wider">Participation</p>
            <p className="font-headline-md text-headline-md text-root-ink font-semibold group-hover:text-signal-green transition-colors duration-300">
              30+ Colleges Nationwide
            </p>
            <div className="w-full h-[1px] bg-copper/20 mt-4"></div>
          </div>
          
          <div className="group">
            <p className="font-data-label text-data-label text-copper uppercase mb-2 tracking-wider">Legacy</p>
            <p className="font-headline-md text-headline-md text-root-ink font-semibold group-hover:text-signal-green transition-colors duration-300">
              15 Successful Editions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
