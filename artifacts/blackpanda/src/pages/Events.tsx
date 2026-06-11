import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import SiteHeader from "@/components/SiteHeader";

const contributionAreas = [
  "Documentation improvements",
  "Accessibility improvements",
  "Frontend improvements",
  "Mobile responsiveness",
  "Contributor onboarding",
  "Translation support",
  "Safe cybersecurity-learning resources",
  "Community documentation",
];

const rules = [
  "Work only on public BlackPanda Labs repositories and approved content.",
  "Do not test third-party systems.",
  "Do not share credentials, personal data or private information.",
  "Do not submit unsafe live-target instructions.",
  "Submit contributions through GitHub pull requests.",
  "Follow the community code of conduct.",
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function setMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function Events() {
  useEffect(() => {
    document.title = "Events | BlackPanda Labs";
    setMeta(
      "description",
      "BlackPanda Labs online open-source build sprints for documentation, accessibility, frontend improvements and safe cybersecurity-learning resources."
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-primary selection:text-black">
      <SiteHeader currentPath="/events" />

      <main>
        <section className="relative pt-12 pb-16 px-6 flex flex-col items-center justify-center text-center min-h-[42vh]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.06)_0%,rgba(5,5,5,1)_64%)] pointer-events-none" />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"
          >
            <motion.p variants={fadeUpVariant} className="text-primary font-mono text-sm uppercase tracking-[0.3em] mb-4">
              Events
            </motion.p>
            <motion.h1 variants={fadeUpVariant} className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
              Open-Source Build Sprints
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-[#a0a0a0] text-base md:text-lg max-w-3xl leading-relaxed">
              Beginner-friendly online collaboration for public projects, documentation, accessibility and safe learning resources.
            </motion.p>
          </motion.div>
        </section>

        <section className="py-10 px-6 max-w-6xl mx-auto relative z-10">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="bg-[#0a0a0a] border border-[#1a1a1a] border-t-4 border-primary p-6 md:p-8 rounded-lg shadow-2xl"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-8">
              <div>
                <div className="flex flex-wrap gap-3 mb-5 font-mono text-xs">
                  <span className="px-3 py-1 rounded border border-primary/60 text-primary bg-black">Coming Soon</span>
                  <span className="px-3 py-1 rounded border border-[#2a2a2a] text-[#c0c0c0] bg-black">Online</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  BlackPanda Labs Open-Source Build Sprint #1
                </h2>
                <p className="text-[#a0a0a0] leading-relaxed max-w-4xl">
                  A beginner-friendly online collaboration sprint for developers, cybersecurity learners, technical writers and first-time contributors who want to improve public projects, documentation and learning resources through small, reviewable contributions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <section className="bg-black border border-[#1a1a1a] rounded p-5">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-primary mr-2">#</span>
                  Contribution Areas
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#b0b0b0]">
                  {contributionAreas.map((area) => (
                    <li key={area} className="border border-[#1a1a1a] bg-[#050505] rounded p-3">
                      {area}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-black border border-[#1a1a1a] rounded p-5">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-primary mr-2">#</span>
                  Event Rules
                </h3>
                <ul className="space-y-3 text-[#b0b0b0]">
                  {rules.map((rule) => (
                    <li key={rule} className="flex gap-3 leading-relaxed">
                      <span className="text-primary" aria-hidden="true">
                        &gt;
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <section className="bg-black border border-[#1a1a1a] rounded p-5">
                <h3 className="text-xl font-bold text-white mb-3">Recognition</h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Participants may receive community acknowledgements for completed and reviewed contributions. Selected improvements may be showcased through BlackPanda Labs community channels.
                </p>
              </section>

              <section className="bg-black border border-[#1a1a1a] rounded p-5">
                <h3 className="text-xl font-bold text-white mb-3">Registration opening soon</h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  A public registration link will be added after owner review. No registration form is active yet.
                </p>
              </section>
            </div>

            <section className="bg-[#050505] border border-[#1a1a1a] rounded p-5 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Independence Notice</h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                BlackPanda Labs is an independent, student-led, volunteer-run open-source community. It is not affiliated with similarly named third-party organizations. This event is independently organized and is not presented as an accredited or sponsored program.
              </p>
            </section>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://blackpanda-labs.vercel.app/projects"
                className="inline-flex items-center justify-center px-6 py-3 font-mono font-bold text-primary bg-black border-2 border-primary rounded hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_16px_rgba(57,255,20,0.3)]"
              >
                Explore Public Projects
              </a>
              <a
                href="https://blackpanda-labs.vercel.app/contribute"
                className="inline-flex items-center justify-center px-6 py-3 font-mono font-bold text-primary bg-black border-2 border-primary rounded hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_16px_rgba(57,255,20,0.3)]"
              >
                Start Contributing
              </a>
              <a
                href="https://github.com/BlackPanda-Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-mono font-bold text-primary bg-black border-2 border-primary rounded hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_16px_rgba(57,255,20,0.3)]"
              >
                <FaGithub className="w-5 h-5" aria-hidden="true" />
                View GitHub
              </a>
            </div>
          </motion.article>
        </section>
      </main>

      <footer className="border-t border-[#1a1a1a] bg-[#020202] py-8 px-6 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-[#808080]">
          <p className="mb-4 md:mb-0">BlackPanda | Authorized Security Learning & Secure Development | Founder: Debojit Singh</p>
          <a href="/" className="text-primary hover:underline hover:text-white transition-colors">
            Back to Home
          </a>
        </div>
      </footer>
    </div>
  );
}
