import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Download,
  ExternalLink,
  ChevronRight,
  X,
  Palette,
  Bot,
  Sparkles,
  Hash,
  PenTool,
  Calendar,
  LayoutGrid,
  Target,
  Award,
  ArrowRight,
  ChevronLeft,
  Menu,
  Eye
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const CAMPAIGNS = [
  {
    id: 1,
    title: "Premium Gym Membership",
    category: "Fitness",
    tag: "Social Ad Campaign",
    goal: "Increase gym memberships through high-converting offer-driven creatives.",
    approach: "Bold typography, urgency-driven CTAs, performance-focused copy, and striking before/after contrast.",
    tools: ["Canva", "ChatGPT", "AI Image Gen"],
    images: [
      "/assets/images/TRANSFORM.png",
      "/assets/images/Before The Legend.png",
    ]
  },
  {
    id: 2,
    title: "Restaurant Grand Opening",
    category: "Food & Beverage",
    tag: "Brand Awareness",
    goal: "Build brand presence and drive footfall for a new restaurant launch.",
    approach: "Vibrant food photography, grand opening hype, festive Indian aesthetics, and storytelling captions.",
    tools: ["Canva", "ChatGPT", "AI Image Gen"],
    images: [
      "/assets/images/Spicy Garden Restaurant.png",
      "/assets/images/xfdeS_N-WGc9WSzoxw4as.png",
      "/assets/images/ASleZ3-lCp92NIgLybEF8.png",
    ]
  },
  {
    id: 3,
    title: "Coffee Shop Branding",
    category: "Hospitality",
    tag: "Brand Identity",
    goal: "Establish brand identity and increase repeat visits.",
    approach: "Cozy aesthetic, student-friendly tone, lifestyle-driven imagery, and minimalist design.",
    tools: ["Canva", "AI Image Gen"],
    images: [
      "/assets/images/iKhMAuUnypKwseh8zFR62.png",
      "/assets/images/COFFEE2.png",
    ]
  },
  {
    id: 4,
    title: "Luxury Real Estate",
    category: "Real Estate",
    tag: "Premium Lead Gen",
    goal: "Attract high-net-worth buyers for premium property listings.",
    approach: "Elegant dark aesthetic, serif headings, exclusive lifestyle copy targeting affluent investors.",
    tools: ["Canva", "ChatGPT"],
    images: [
      "/assets/images/KKwc0dbwzaCdX-zC31svI.png",
    ]
  },
  {
    id: 5,
    title: "Edu-Institute Admissions",
    category: "Education",
    tag: "Enrollment Drive",
    goal: "Boost admissions and brand recognition for an educational institute.",
    approach: "Student success stories, professional blue palette, 'Apply Now' urgency, and clear value props.",
    tools: ["Canva", "ChatGPT", "AI Image Gen"],
    images: [
      "/assets/images/NaLJITB-I8PYywTgOqzhU.png",
    ]
  }
];

const SKILLS = [
  { name: "Canva", icon: <Palette size={28} className="text-pink-400" />, color: "from-pink-500/20 to-rose-500/10" },
  { name: "ChatGPT", icon: <Bot size={28} className="text-emerald-400" />, color: "from-emerald-500/20 to-teal-500/10" },
  { name: "AI Image Gen", icon: <Sparkles size={28} className="text-indigo-400" />, color: "from-indigo-500/20 to-purple-500/10" },
  { name: "Social Media Marketing", icon: <Hash size={28} className="text-pink-500" />, color: "from-pink-500/20 to-fuchsia-500/10" },
  { name: "Content Creation", icon: <PenTool size={28} className="text-cyan-400" />, color: "from-cyan-500/20 to-blue-500/10" },
  { name: "Instagram Marketing", icon: <i className="fa-brands fa-instagram text-rose-500 text-2xl"></i>, color: "from-rose-500/20 to-pink-500/10" },
  { name: "LinkedIn", icon: <i className="fa-brands fa-linkedin text-blue-400 text-2xl"></i>, color: "from-blue-500/20 to-indigo-500/10" },
  { name: "Graphic Design", icon: <LayoutGrid size={28} className="text-amber-400" />, color: "from-amber-500/20 to-yellow-500/10" },
  { name: "Campaign Strategy", icon: <Target size={28} className="text-purple-400" />, color: "from-purple-500/20 to-violet-500/10" },
  { name: "Content Planning", icon: <Calendar size={28} className="text-green-400" />, color: "from-green-500/20 to-emerald-500/10" }
];

const PROJECTS = [
  {
    title: "AI UGC Ad Content Generator",
    code: "01",
    desc: "An AI-powered tool for generating high-converting UGC ad scripts, hooks, and social media captions — great for brands, creators, and agencies.",
    link: "https://future-pe-02-iota.vercel.app/",
    image: "/assets/images/ai_ugc_generator_preview.png",
    tags: ["AI", "Marketing", "Automation"]
  },
  {
    title: "AI Website Copy Generator",
    code: "02",
    desc: "Automatically generates professional homepage copy, service descriptions, and CTAs for local businesses using AI prompt engineering.",
    link: "https://future-pe-01-ten.vercel.app/",
    image: "/assets/images/ai_copy_generator_preview.png",
    tags: ["AI", "Copywriting", "Web"]
  },
  {
    title: "SkillConnect",
    code: "03",
    desc: "A full-stack web platform that bridges the gap between skilled workers and clients — with real-time job posting and worker profiles.",
    link: "https://saikona-zdls.onrender.com/",
    image: "/assets/images/skillconnect_preview.png",
    tags: ["Full-Stack", "React", "Node.js"]
  }
];

const CERTS = [
  {
    title: "Introduction to Social Media",
    org: "SimpliLearn SkillUP",
    date: "4th June 2026",
    img: "/assets/images/10309021_9325567_1780605895101_page-0001.jpg"
  },
  {
    title: "Prompt Engineering",
    org: "Future Interns",
    date: "May 2026",
    img: "/assets/images/NANDA KISHORE Internship Certificate_page-0001.jpg"
  }
];

const NAV_LINKS = ['about', 'skills', 'work', 'projects', 'certifications', 'contact'];

// ─── FADE IN VARIANT ─────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
  })
};

// ─── CAMPAIGN MODAL ───────────────────────────────────────────────────────────
function CampaignModal({ campaign, onClose }) {
  const [currentImg, setCurrentImg] = useState(0);
  const total = campaign.images.length;

  const prev = () => setCurrentImg(i => (i - 1 + total) % total);
  const next = () => setCurrentImg(i => (i + 1) % total);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
        style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-[32px] bg-slate-900 border border-white/10 relative"
          onClick={e => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/5 hover:bg-white/15 transition-all"
          >
            <X size={24} />
          </button>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Gallery */}
            <div className="relative bg-black/40 rounded-tl-[32px] rounded-bl-[32px] overflow-hidden min-h-[400px] flex items-center justify-center">
              <motion.img
                key={currentImg}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={campaign.images[currentImg]}
                alt={`${campaign.title} ${currentImg + 1}`}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              {total > 1 && (
                <>
                  <button onClick={prev} className="absolute left-4 p-3 rounded-full bg-black/50 hover:bg-black/80 transition-all">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={next} className="absolute right-4 p-3 rounded-full bg-black/50 hover:bg-black/80 transition-all">
                    <ChevronRight size={24} />
                  </button>
                  {/* Dot nav */}
                  <div className="absolute bottom-6 flex gap-2">
                    {campaign.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImg(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentImg ? 'bg-indigo-400 scale-125' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                  <div className="absolute top-6 left-6 bg-black/60 px-3 py-1.5 rounded-full text-sm font-semibold">
                    {currentImg + 1} / {total}
                  </div>
                </>
              )}
            </div>

            {/* Right: Info */}
            <div className="p-10 md:p-14 flex flex-col gap-8">
              <div>
                <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">{campaign.category}</span>
                <h2 className="text-3xl md:text-4xl font-black mt-2 leading-tight">{campaign.title}</h2>
                <span className="inline-block mt-3 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                  {campaign.tag}
                </span>
              </div>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/5">
                  <h4 className="text-white/50 text-xs uppercase tracking-widest mb-2">Campaign Goal</h4>
                  <p className="text-white/90 leading-relaxed">{campaign.goal}</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5">
                  <h4 className="text-white/50 text-xs uppercase tracking-widest mb-2">Marketing Approach</h4>
                  <p className="text-white/90 leading-relaxed">{campaign.approach}</p>
                </div>
                <div>
                  <h4 className="text-white/50 text-xs uppercase tracking-widest mb-3">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {campaign.tools.map(t => (
                      <span key={t} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Thumbnail strip */}
              {total > 1 && (
                <div>
                  <h4 className="text-white/50 text-xs uppercase tracking-widest mb-3">All Creatives</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {campaign.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImg(i)}
                        className={`rounded-xl overflow-hidden border-2 transition-all ${i === currentImg ? 'border-indigo-500' : 'border-transparent opacity-50 hover:opacity-80'}`}
                      >
                        <img src={img} alt={`thumb-${i}`} className="w-full aspect-square object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c14] text-white overflow-x-hidden">
      {/* Ambient blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-indigo-700/15 blur-[130px]" />
        <div className="absolute top-1/2 -left-48 w-[600px] h-[600px] rounded-full bg-pink-700/10 blur-[130px]" />
        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-700/10 blur-[130px]" />
      </div>

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5" style={{ background: 'rgba(8,12,20,0.85)', backdropFilter: 'blur(20px)' }}>
        <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-indigo-400">N</span>K<span className="text-pink-400">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link}`} className="text-sm font-medium text-slate-400 hover:text-white capitalize transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 rounded-full text-sm font-bold transition-all">
              Hire Me <ArrowRight size={16} />
            </a>
            <button className="md:hidden p-2" onClick={() => setMenuOpen(v => !v)}>
              <Menu size={24} />
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-white/5 md:hidden">
              <div className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map(link => (
                  <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)} className="text-slate-300 capitalize font-medium py-1">{link}</a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section className="pt-44 pb-32 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold mb-8">
            <Sparkles size={14} /> Open to Internship Opportunities
          </span>
        </motion.div>
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8"
        >
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span style={{ background: 'linear-gradient(135deg, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Nanda Kishore
            </span>
          </span>
        </motion.h1>
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12"
        >
          Social Media Marketing Enthusiast & AI-Powered Content Creator — turning ideas into{' '}
          <span className="text-white font-semibold">high-converting campaigns</span> for brands that matter.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="flex flex-wrap gap-4">
          <a href="#work" className="inline-flex items-center gap-2 bg-white text-[#080c14] px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl shadow-white/10">
            Explore My Work <ChevronRight size={20} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border border-white/15 hover:bg-white/5 px-8 py-4 rounded-full font-bold text-lg transition-all">
            Get In Touch
          </a>
        </motion.div>
        {/* Stats */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="flex flex-wrap gap-10 mt-20 pt-10 border-t border-white/5">
          {[['5+', 'Campaigns Built'], ['10+', 'Creatives Designed'], ['3', 'Live Projects'], ['2', 'Certifications']].map(([val, label]) => (
            <div key={label}>
              <div className="text-4xl font-black text-white mb-1">{val}</div>
              <div className="text-slate-500 text-sm">{label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-20 items-center">
          {/* Profile placeholder card */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden bg-white/5 border border-white/10 p-4 flex flex-col items-center justify-center min-h-[400px] shadow-2xl shadow-indigo-500/10">
              <a
                href="https://www.linkedin.com/in/nandakishore2410/"
                target="_blank"
                className="relative w-full aspect-[4/5] overflow-hidden rounded-[32px] group/pic border border-white/10"
              >
                <img
                  src="/assets/images/profile.jpg"
                  alt="Nanda Kishore"
                  className="w-full h-full object-cover object-top grayscale group-hover/pic:grayscale-0 group-hover/pic:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover/pic:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                    <ExternalLink size={32} className="text-white" />
                  </div>
                </div>
              </a>
              <div className="p-8 text-center">
                <p className="text-2xl font-black tracking-tight">Nanda Kishore</p>
                <p className="text-indigo-400 font-semibold mt-1">CSE Student & Content Strategist</p>
                <div className="flex gap-4 mt-6 justify-center">
                  <a href="https://www.linkedin.com/in/nandakishore2410/" target="_blank" className="p-3 rounded-xl bg-white/5 hover:bg-blue-500/20 transition-all border border-white/5"><i className="fa-brands fa-linkedin text-blue-400 text-xl"></i></a>
                  <a href="https://www.instagram.com/" target="_blank" className="p-3 rounded-xl bg-white/5 hover:bg-pink-500/20 transition-all border border-white/5"><i className="fa-brands fa-instagram text-pink-400 text-xl"></i></a>
                  <a href="https://github.com/kishore071005" target="_blank" className="p-3 rounded-xl bg-white/5 hover:bg-slate-400/20 transition-all border border-white/5"><i className="fa-brands fa-github text-slate-400 text-xl"></i></a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Text */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="space-y-8">
            <div>
              <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Who Am I</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3 leading-tight">
                Where <span style={{ background: 'linear-gradient(135deg, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tech Meets</span>{' '}Marketing
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg">
              I'm a Computer Science Engineering student with a serious passion for digital marketing. My unique strength is combining <span className="text-white font-semibold">engineering thinking</span> with <span className="text-white font-semibold">creative storytelling</span>.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              I've built AI-powered marketing tools, designed campaigns for fitness, food, real estate, and education brands — all before finishing my degree.
            </p>
            <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
              <p className="text-indigo-200 italic text-lg leading-relaxed">
                "Turning ideas into engaging campaigns through creativity, strategy, and AI tools."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-32 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">What I Use</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">My <span style={{ background: 'linear-gradient(135deg, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Skill Stack</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.05}
                whileHover={{ y: -8, scale: 1.04 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${skill.color} border border-white/5 flex flex-col items-center gap-3 cursor-default text-center`}
              >
                {skill.icon}
                <span className="font-semibold text-sm text-white/80">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPAIGNS / WORK ── */}
      <section id="work" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">Featured <span style={{ background: 'linear-gradient(135deg, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Campaigns</span></h2>
            <p className="text-slate-500 mt-4 text-lg">Click any campaign to view the full gallery & strategy</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMPAIGNS.map((campaign, i) => (
              <motion.div
                key={campaign.id}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedCampaign(campaign)}
                className="group cursor-pointer rounded-[28px] overflow-hidden border border-white/8 bg-slate-900/50 hover:border-indigo-500/40 transition-all duration-300"
                style={{ boxShadow: '0 0 0 0 rgba(99,102,241,0)' }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  <img
                    src={campaign.images[0]}
                    alt={campaign.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                    <span className="text-white font-bold">View Campaign</span>
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                  {/* Image count badge */}
                  {campaign.images.length > 1 && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/70 rounded-full text-xs font-bold">
                      {campaign.images.length} creatives
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">{campaign.category}</span>
                    <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-slate-400">{campaign.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-indigo-300 transition-colors">{campaign.title}</h3>
                  <p className="text-slate-500 text-sm mt-3 line-clamp-2">{campaign.goal}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Modal */}
      {selectedCampaign && (
        <CampaignModal campaign={selectedCampaign} onClose={() => setSelectedCampaign(null)} />
      )}

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Web & AI</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">AI <span style={{ background: 'linear-gradient(135deg, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-[32px] border border-white/10 bg-slate-900/40 hover:border-indigo-500/30 transition-all"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-white/5">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase">Project {project.code}</span>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 py-2">
                    {project.tags.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60">{t}</span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition-all pt-2 group-hover:gap-3"
                  >
                    Launch Project <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Credentials</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">Verified <span style={{ background: 'linear-gradient(135deg, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Certifications</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CERTS.map((cert, i) => (
              <motion.div
                key={cert.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
                whileHover={{ y: -8 }}
                className="rounded-[32px] overflow-hidden border border-white/10 bg-slate-900/50 group"
              >
                {/* Certificate Image — full display */}
                <div className="overflow-hidden bg-black/30">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Info */}
                <div className="p-8 flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-indigo-500/10 flex-shrink-0">
                    <Award size={28} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{cert.title}</h3>
                    <p className="text-slate-400 mt-1">{cert.org}</p>
                    <p className="text-slate-600 text-sm mt-1">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESUME ── */}
      <section className="py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="p-14 md:p-20 rounded-[48px] border border-white/10 bg-gradient-to-br from-indigo-900/20 to-slate-900/20"
          >
            <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-8">
              <Download size={36} className="text-indigo-400" />
            </div>
            <h2 className="text-4xl font-black mb-4">Want the Full Picture?</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Download my complete resume to view my academic background, internship history, and projects in detail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/assets/docs/Resume of me.docx"
                target="_blank"
                className="inline-flex items-center gap-3 border border-white/20 hover:bg-white/5 px-10 py-5 rounded-full font-bold text-lg transition-all"
              >
                <Eye size={22} className="text-indigo-400" /> View Resume
              </a>
              <a
                href="/assets/docs/Resume of me.docx"
                download
                className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-indigo-600/20"
              >
                <Download size={22} /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-black mt-4 mb-6 leading-tight">
              Let's <span style={{ background: 'linear-gradient(135deg, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Build</span> Something
            </h2>
            <p className="text-slate-400 text-xl max-w-xl mx-auto mb-16">
              Open to internships, freelance projects, and collaborations. Let's talk!
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="flex flex-wrap justify-center gap-6">
            <a href="mailto:kishore071005@gmail.com" className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-lg font-medium">
              <Mail size={22} className="text-indigo-400" /> kishore071005@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/nandakishore2410/" target="_blank" className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:bg-blue-500/10 transition-all text-lg font-medium">
              <i className="fa-brands fa-linkedin text-blue-400 text-xl"></i> LinkedIn
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:bg-pink-500/10 transition-all text-lg font-medium">
              <i className="fa-brands fa-instagram text-pink-400 text-xl"></i> Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-slate-600 text-sm">
        © 2024 Nanda Kishore · Built with React, Tailwind CSS & Framer Motion
      </footer>
    </div>
  );
}
