import NodeDot from "./NodeDot";

export default function EventSpectrum() {
  const categories = [
    {
      title: "Technical",
      subtitle: "Core Engineering",
      borderColor: "border-signal-green",
      dotColor: "bg-signal-green",
      list1: ["Hack-O-Roots 48h", "Code-Blitz Algorithmics", "Tech-Quizzard"],
      list2: ["Paper Presentation", "UI/UX Design Sprint", "Debug-It Challenge"],
    },
    {
      title: "Sports",
      subtitle: "Athletic Grit",
      borderColor: "border-copper",
      dotColor: "bg-copper",
      list1: ["Futsal Tournament", "3x3 Basketball", "E-Sports: Valorant"],
      list2: ["Table Tennis Open", "Chess Masters", "Cricket Bash"],
    },
    {
      title: "Cultural",
      subtitle: "Creative Flow",
      borderColor: "border-root-ink",
      dotColor: "bg-root-ink",
      list1: ["Grand Showcase Concert", "Beat-Roots Music", "Dance Fusion"],
      list2: ["Art Alley Exhibition", "Fashion Rootway", "Literary Arts Slam"],
    },
  ];

  return (
    <section className="paper-section py-24 relative">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative">
        <NodeDot className="-ml-[52px] mt-2" />
        
        <h2 className="font-headline-lg text-headline-lg text-root-ink mb-16">
          Event Spectrum
        </h2>
        
        <div className="space-y-12">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`grid grid-cols-1 md:grid-cols-4 gap-gutter border-l-4 ${cat.borderColor} pl-8 py-2`}
            >
              <div className="md:col-span-1">
                <h3 className="font-headline-md text-headline-md text-root-ink font-bold">
                  {cat.title}
                </h3>
                <p className="font-data-label text-data-label text-root-ink/65 uppercase tracking-wider">
                  {cat.subtitle}
                </p>
              </div>
              
              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  {cat.list1.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body-md text-body-md text-root-ink/90">
                      <div className={`w-2 h-2 ${cat.dotColor} rotate-45`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {cat.list2.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body-md text-body-md text-root-ink/90">
                      <div className={`w-2 h-2 ${cat.dotColor} rotate-45`}></div>
                      {cat.dotColor === "bg-root-ink" && item.includes("Art Alley") ? (
                        <span>{item}</span>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
