import NodeDot from "./NodeDot";

export default function WhySponsorUsSection() {
  const benefits = [
    {
      num: "01",
      title: "Brand Visibility",
      description: (
        <>
          Position your brand at the forefront of innovation with impactful visibility across the event ecosystem—from venue branding and digital media to official communications and social platforms—ensuring lasting recognition among students, faculty, and industry professionals.
        </>
      ),
    },
    {
      num: "02",
      title: "Talent Engagement",
      description: (
        <>
          Connect with <span className="text-white font-semibold">3,000+ aspiring engineers</span> from diverse disciplines. Explore opportunities for recruitment, internships, campus outreach, and meaningful interactions with the next generation of professionals.
        </>
      ),
    },
    {
      num: "03",
      title: "Product & Service Showcase",
      description: (
        <>
          Showcase your products, services, and technologies through interactive exhibition spaces, live demonstrations, and hands-on experiences that encourage direct engagement with a tech-driven audience.
        </>
      ),
    },
    {
      num: "04",
      title: "Strategic Networking",
      description: (
        <>
          Build valuable connections with industry leaders, startups, academicians, alumni, and fellow partners, fostering collaborations that extend beyond the event.
        </>
      ),
    },
    {
      num: "05",
      title: "Support Innovation",
      description: (
        <>
          Demonstrate your commitment to education and technological advancement by supporting student-led initiatives, technical competitions, and innovation-driven experiences.
        </>
      ),
    },
    {
      num: "06",
      title: "Lasting Impact",
      description: (
        <>
          Be a part of an event that inspires learning, celebrates innovation, and empowers future engineers. Your partnership helps create opportunities that benefit both your organization and the student community.
        </>
      ),
    },
  ];

  return (
    <section id="sponsors" className="dark-section py-24 border-y border-mist scroll-mt-16 relative">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative">
        <NodeDot className="-ml-[52px] mt-2" />

        <div className="max-w-3xl mb-20">
          <h2 className="font-headline-lg text-headline-lg text-white mb-6">
            Why Partner With ITechRoots 16.0?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            At <span className="text-white font-semibold">ITechRoots 16.0</span>, we believe meaningful partnerships drive innovation. As one of Central India's premier technical festivals, we provide a platform where organizations can engage with bright minds, strengthen their brand presence, and contribute to an ecosystem of technology, creativity, and learning.
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

        <div className="mt-20 pt-12 border-t border-copper/10 max-w-3xl">
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed italic">
            Partner with <span className="text-white font-semibold">iTechRoots 16.0</span> and be a part of a platform where innovation meets opportunity, ideas become reality, and future leaders take their first step toward excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

