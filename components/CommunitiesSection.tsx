import NodeDot from "./NodeDot";

export default function CommunitiesSection() {
  const communities = [
    {
      title: "SPIRIT",
      tagline: "Society of Passionate Individuals Representing Information Technology",
      description: "SPIRIT is the student council of the IT Department that drives all social engagement and leadership activities. It manages intra/inter college competitions, awareness drives, organizing teams, discipline, and logistics.",
    },
    {
      title: "CSI",
      tagline: "Computer Society of India (ESTD. 1965)",
      description: "CSI provides a platform for students to showcase their technical acumen and problem-solving skills. It nurtures innovation and keeps students aligned with the evolving world of technology.",
    },
    {
      title: "AURA",
      tagline: "Active Unity for Responsible Action",
      description: "AURA serves as the official cultural forum under the student council. The forum plays a crucial role in enhancing the cultural dimension of ITECHROOTS, contributing to the holistic development of students beyond academics.",
    },
  ];

  return (
    <section id="communities" className="dark-section py-24 scroll-mt-16 relative">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative">
        <NodeDot className="-ml-[52px] mt-2" />

        <h2 className="font-headline-lg text-headline-lg text-white mb-16">
          The Student Communities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {communities.map((comm) => (
            <div
              key={comm.title}
              className="bg-[#121B2E] p-8 border border-white/5 relative group hover:border-signal-green/50 hover:shadow-[0_0_20px_rgba(61,220,151,0.05)] transition-all duration-300 ease-out flex flex-col justify-between"
            >
              <div>
                <div className="w-3 h-3 bg-signal-green rotate-45 absolute top-4 left-4 group-hover:scale-125 transition-transform duration-300"></div>
                <h3 className="font-headline-md text-headline-md text-white mb-2 mt-4 font-bold tracking-tight">
                  {comm.title}
                </h3>
                <p className="font-data-label text-signal-green uppercase mb-4 tracking-wider font-semibold text-xs leading-relaxed">
                  {comm.tagline}
                </p>
                {/*{comm.motto && (
                  <p className="font-body-md text-[14px] text-copper/90 italic mb-4 font-medium">
                    {comm.motto}
                  </p>
                )}*/}
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {comm.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
