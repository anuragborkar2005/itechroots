import NodeDot from "./NodeDot";

export default function WhyPartnerSection() {
  const benefits = [
    {
      num: "01",
      title: "Brand Visibility",
      description: "Omni-channel presence across physical banners, digital displays, and social media outreach reaching 50,000+ online impressions.",
    },
    {
      num: "02",
      title: "Talent Acquisition",
      description: "Direct access to a pool of 3000+ tech-savvy engineering students for recruitment, internships, and campus branding.",
    },
    {
      num: "03",
      title: "Market Presence",
      description: "Establish authority in the Gen-Z market segment and academic circles through curated experiential stalls.",
    },
    {
      num: "04",
      title: "Corporate Social Responsibility",
      description: "Support technical education and student development initiatives, reinforcing your commitment to building the future.",
    },
    {
      num: "05",
      title: "Networking",
      description: "Connect with fellow industry leaders, academic dignitaries, and prominent government officials during VIP sessions.",
    },
    {
      num: "06",
      title: "Lead Generation",
      description: "Showcase products and services directly to a captive audience, generating high-intent leads and early adopters.",
    },
  ];

  return (
    <section id="sponsors" className="dark-section py-24 border-y border-mist scroll-mt-16 relative">
      <div className="max-w-[1440px] mx-auto px-margin-desktop relative">
        <NodeDot className="-ml-[52px] mt-2" />
        
        <div className="max-w-2xl mb-20">
          <h2 className="font-headline-lg text-headline-lg text-white mb-6">
            Why Partner with Us?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Strategic brand positioning within the academic hub of central India, reaching a diverse demographic of innovators and decision-makers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-gutter">
          {benefits.map((item) => (
            <div key={item.num} className="border-t border-copper/30 pt-8 group">
              <span className="font-data-label text-data-label text-copper font-bold group-hover:text-signal-green transition-colors duration-300">
                {item.num}
              </span>
              <h4 className="font-headline-md text-headline-md text-white mt-4 mb-4 font-bold tracking-tight">
                {item.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
