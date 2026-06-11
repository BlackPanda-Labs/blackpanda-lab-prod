import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import SiteHeader from "@/components/SiteHeader";

// @ts-ignore
import banner from "@assets/Gemini_Generated_Image_ar2uixar2uixar2u_1777815252358.png";
// @ts-ignore
import img1 from "@assets/Gemini_Generated_Image_fvkd0sfvkd0sfvkd_1777815252358.png";
// @ts-ignore
import img2 from "@assets/Gemini_Generated_Image_5mphg25mphg25mph_1777815252358.png";
// @ts-ignore
import img3 from "@assets/Gemini_Generated_Image_g129tfg129tfg129_1777815252358.png";
// @ts-ignore
import img4 from "@assets/Gemini_Generated_Image_c9tozrc9tozrc9to_1777815302132.png";
// @ts-ignore
import slide from "@assets/Gemini_Generated_Image_j3j9gdj3j9gdj3j9_1777815334701.png";

const TYPING_STRINGS = [
  "Red Team Practitioner",
  "Offensive Security Research",
  "Vulnerability Assessment"
];

function TypewriterEffect() {
  const [text, setText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const currentString = TYPING_STRINGS[stringIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && text === currentString) {
      typingSpeed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setStringIndex((prev) => (prev + 1) % TYPING_STRINGS.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting ? currentString.substring(0, prev.length - 1) : currentString.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, stringIndex]);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((p) => !p), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  return (
    <span className="text-xl md:text-2xl text-primary font-mono min-h-[32px] inline-block">
      {text}
      <span className={`${blink ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>|</span>
    </span>
  );
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  const [payload, setPayload] = useState("");
  const [b64, setB64] = useState("...");
  const [hex, setHex] = useState("...");

  const handleEncode = () => {
    if (!payload) return;
    setB64(window.btoa(payload));
    setHex(payload.split('').map(c => c.charCodeAt(0).toString(16)).join(' '));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-primary selection:text-black">
      <SiteHeader />

      <section className="relative pt-12 pb-24 px-6 flex flex-col items-center justify-center text-center min-h-[70vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.05)_0%,rgba(5,5,5,1)_60%)] pointer-events-none" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"
        >
          <motion.h1 variants={fadeUpVariant} className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            BlackPanda
          </motion.h1>
          
          <motion.div variants={fadeUpVariant} className="mb-12">
            <TypewriterEffect />
          </motion.div>

          <motion.a
            variants={fadeUpVariant}
            href="https://chat.whatsapp.com/EHxUeKcbR0Q7VLkLRsZKoH"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-mono font-bold text-primary bg-black border-2 border-primary rounded hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.5),0_0_40px_rgba(57,255,20,0.2)] hover:shadow-[0_0_30px_rgba(57,255,20,0.8),0_0_60px_rgba(57,255,20,0.4)]"
          >
            <span className="mr-2">&gt;_</span>
            Join the Command Center
          </motion.a>
        </motion.div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="bg-[#0a0a0a] border border-[#1a1a1a] border-t-4 border-primary p-8 rounded-lg shadow-2xl"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="text-primary mr-3">⚡</span> Live WAF Evasion Encoder
            </h2>
            <span className="text-[10px] font-mono text-primary animate-pulse tracking-widest">SYSTEM ONLINE</span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              type="text" 
              value={payload}
              onChange={(e) => setPayload(e.target.value)}
              className="flex-1 bg-black border border-[#2a2a2a] p-4 rounded text-primary font-mono outline-none focus:border-primary transition-colors"
              placeholder="Enter payload (e.g. <script>alert(1)</script>)"
            />
            <button 
              onClick={handleEncode}
              className="px-8 py-4 bg-primary text-black font-bold rounded hover:bg-white transition-colors duration-300 uppercase tracking-tighter"
            >
              Obfuscate
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 font-mono">
            <div className="bg-black p-4 border border-[#1a1a1a] rounded">
              <label className="text-[10px] text-[#555] block mb-2 uppercase tracking-widest">Base64 Output</label>
              <div className="text-primary break-all">{b64}</div>
            </div>
            <div className="bg-black p-4 border border-[#1a1a1a] rounded">
              <label className="text-[10px] text-[#555] block mb-2 uppercase tracking-widest">Hex Output</label>
              <div className="text-primary break-all">{hex}</div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-48 md:h-64 border-y border-[#2a2a2a] relative overflow-hidden"
      >
        <img src={banner} alt="Cybersecurity Banner" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </motion.section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Vulnerability Assessment",
              desc: "Identify critical security weaknesses in systems, networks, and applications before adversaries exploit them."
            },
            {
              title: "Advanced Network Auditing",
              desc: "Deep packet inspection, protocol analysis, and network topology mapping to uncover hidden attack vectors."
            },
            {
              title: "Red Teaming Operations",
              desc: "Full-scope adversary simulation, social engineering, and breach attack simulations to test true resilience."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="bg-[#1a1a1a] border-t-2 border-primary p-8 rounded-b-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(57,255,20,0.15)] group"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-primary mr-2 opacity-50 group-hover:opacity-100 transition-opacity">#</span>
                {feature.title}
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 border-l-4 border-primary pl-4"
          >
            Project Screenshots
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[img1, img2, img3, img4].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl overflow-hidden border border-[#2a2a2a] hover:border-primary transition-colors duration-300 group"
              >
                <img 
                  src={img} 
                  alt={`Screenshot ${i + 1}`} 
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(57,255,20,0.1)_0%,rgba(5,5,5,1)_50%)]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <img src={slide} alt="Cyber Visual" className="max-w-sm w-full mx-auto rounded-lg shadow-[0_0_30px_rgba(57,255,20,0.1)] border border-[#2a2a2a]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Stop Watching. Start Hacking.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#a0a0a0] mb-12 max-w-2xl"
          >
            Join the BlackPanda community. Free open-source labs. Ethical hacking tutorials. Community-driven.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="https://chat.whatsapp.com/EHxUeKcbR0Q7VLkLRsZKoH"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-mono font-bold text-primary bg-black border-2 border-primary rounded hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.5),0_0_40px_rgba(57,255,20,0.2)] hover:shadow-[0_0_30px_rgba(57,255,20,0.8),0_0_60px_rgba(57,255,20,0.4)]"
          >
            <span className="mr-2">&gt;_</span>
            Join the Command Center
          </motion.a>
        </div>
      </section>

      <footer className="border-t border-[#1a1a1a] bg-[#020202] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-[#808080]">
          <p className="mb-4 md:mb-0">BlackPanda | Offensive Security Labs & Training | Founder: Debojit Singh</p>
          <div className="flex space-x-6 items-center">
            <span>@blackpandalabs</span>
            <a 
              href="https://chat.whatsapp.com/EHxUeKcbR0Q7VLkLRsZKoH" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline hover:text-white transition-colors"
            >
              WhatsApp Community
            </a>
          </div>
        </div>
      </footer>

      <a
        href="https://chat.whatsapp.com/EHxUeKcbR0Q7VLkLRsZKoH"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-black text-primary border-2 border-primary rounded-full p-4 shadow-[0_0_15px_rgba(57,255,20,0.4)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] hover:bg-primary hover:text-black transition-all duration-300 group"
      >
        <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20 group-hover:opacity-40"></span>
        <FaWhatsapp className="w-8 h-8 relative z-10" />
      </a>
    </div>
  );
}
