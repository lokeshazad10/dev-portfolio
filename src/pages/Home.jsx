import React, { useState } from 'react';
import { 
  Code2, 
  ExternalLink, 
  RotateCcw, 
  Mail, 
  Sparkles, 
  ArrowUpRight, 
  Terminal, 
  Send,
  Layers,
  GraduationCap,
  Briefcase,
  SunMedium,
  MoonStar
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import CustomCursor from '../components/CustomCursor';
import MagneticButton from '../components/MagneticButton';
import TiltCard from '../components/TiltCard';

const PROJECTS = [
  {
    title: 'Marvel Animated Website',
    category: 'Landing Page',
    description: ' This project is a cinematic, Marvel-inspired animated landing page built with HTML, CSS, and JavaScript. It features interactive character transitions, animated text, layered image effects, and a smooth hero section that changes between Spider-Man, Iron Man, Black Panther, Hulk, and Loki using GSAP and Shery.js. Itʼs a stylish static frontend demo focused on motion design and visual storytelling rather than backend functionality. ',
    tech: ['HTML5', 'CSS3', 'Shery js', 'GSAP'],
    liveUrl: 'https://marvel-animated-website.vercel.app/',
    githubUrl: 'https://github.com/lokeshazad10/Marvel-Animated-Website',
  },
  {
    title: 'Pasta Maniac',
    category: 'Restaurant Experience',
    description: 'High-performance animated food brand showcase with silky GSAP scroll interactions, custom product showcases, and interactive menus.',
    tech: ['HTML5', 'CSS3', 'GSAP', 'JavaScript'],
    liveUrl: 'https://pastamaniac.netlify.app/',
    githubUrl: 'https://github.com/lokeshazad10/restaurant-website',
  },
  {
    title: 'Shop.co eCommerce',
    category: 'Modern Web Storefront',
    description: 'Comprehensive e-commerce application featuring product filtering, cart persistence, fluid UI states, and responsive checkout flows.',
    tech: ['React.js', 'Tailwind CSS', 'Context API'],
    liveUrl: 'https://shopco10.vercel.app/',
    githubUrl: 'https://github.com/lokeshazad10/E-Commerce-Website',
  },
];

const SKILLS = [
  'React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'GSAP Animation',
  'Node.js', 'Express.js', 'MongoDB', 'Git / GitHub', 'HTML5 & CSS3',
  'Responsive UI/UX', 'REST APIs', 'Frontend Architecture'
];

const HIGHLIGHTS = [
  {
    title: 'Design-first interfaces',
    description: 'I turn product ideas into polished, conversion-focused interfaces with strong visual hierarchy and clean interaction design.',
    icon: Code2,
  },
  {
    title: 'Full-stack execution',
    description: 'From frontend experiences to backend flows, I build cohesive web applications that feel seamless from first click to final action.',
    icon: Layers,
  },
  {
    title: 'Performance-minded builds',
    description: 'I optimize speed, responsiveness, and maintainability so every page feels smooth across devices and traffic scenarios.',
    icon: ExternalLink,
  },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 4500);
    }, 1200);
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden font-sans transition-colors duration-300 ${
        isDarkMode ? 'bg-[#090a0f] text-zinc-100' : 'bg-[#f5f7fb] text-zinc-900'
      }`}
    >
      <CustomCursor />

      {/* Ambient background glow orbs */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-137.5 h-137.5 bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-150 h-150 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-125 h-125 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Navigation Bar */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-4xl">
        <nav
          className={`flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-xl border shadow-2xl transition-colors duration-300 ${
            isDarkMode
              ? 'bg-zinc-900/60 border-zinc-800'
              : 'bg-white/75 border-zinc-200 shadow-zinc-200/60'
          }`}
        >
          <a href="#" className="font-display font-black text-xl tracking-wider text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
            LA<span className="text-indigo-400">.</span>
          </a>

          <div className={`hidden sm:flex items-center space-x-7 text-sm ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Work</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label="Toggle dark mode"
              className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-zinc-800 border-zinc-700 text-amber-300 hover:bg-zinc-700'
                  : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              {isDarkMode ? <SunMedium className="w-4 h-4" /> : <MoonStar className="w-4 h-4" />}
            </button>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Available for Hire</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold mb-8 uppercase tracking-widest ${
          isDarkMode
            ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
            : 'bg-indigo-100 border-indigo-200 text-indigo-600'
        }`}>
          <Sparkles className="w-3.5 h-3.5" /> Frontend & Creative MERN Developer
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Crafting <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-300 to-cyan-400">animated experiences</span> that captivate audiences.
        </h1>

        <p className={`text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-light ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Hi, I&apos;m <span className={isDarkMode ? 'text-white font-medium' : 'text-zinc-900 font-medium'}>Lokesh Azad</span>. I build high-performance web applications, interactive visual layouts, and responsive interfaces fueled by modern JavaScript and scalable codebases.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(99,102,241,0.4)]"
          >
            Explore Projects
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className={`px-8 py-3.5 rounded-full border font-semibold text-sm ${
              isDarkMode
                ? 'bg-zinc-900 border-zinc-700/80 hover:border-zinc-500 text-zinc-300 hover:text-white'
                : 'bg-white border-zinc-300 hover:border-zinc-400 text-zinc-700 hover:text-zinc-900'
            }`}
          >
            Get in Touch
          </MagneticButton>
        </div>
      </section>

      {/* Infinite Skills Marquee */}
      <div className={`w-full py-8 border-y overflow-hidden relative ${isDarkMode ? 'border-zinc-800/80 bg-zinc-900/30' : 'border-zinc-200 bg-zinc-100/80'}`}>
        <div className={`flex w-[200%] animate-marquee space-x-10 text-sm tracking-widest font-mono uppercase ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          {[...SKILLS, ...SKILLS].map((skill, index) => (
            <span key={index} className="flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* About / Highlights Section */}
      <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4 text-indigo-400 font-mono text-sm uppercase tracking-wider">
          <Sparkles className="w-4 h-4" /> Why work with me
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight max-w-xl">
            Building smooth digital experiences with clarity and craft.
          </h2>
          <p className={`text-sm max-w-md leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            I blend interface design thinking with engineering discipline to create products that feel premium, work fast, and scale with real user needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className={`group p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                isDarkMode
                  ? 'border-zinc-800 bg-zinc-900/40 hover:border-indigo-500/50 hover:bg-zinc-900/70'
                  : 'border-zinc-200 bg-white/80 hover:border-indigo-300 hover:bg-white'
              }`}
            >
              <div className={`mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl border group-hover:scale-105 transition-transform ${
                isDarkMode ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' : 'bg-indigo-100 text-indigo-600 border-indigo-200'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className={`font-display text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{title}</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['3+', 'Years exploring web products'],
            ['12+', 'Projects shipped'],
            ['100%', 'Responsive-first mindset'],
            ['24/7', 'Curiosity-driven learning'],
          ].map(([value, label]) => (
            <div key={label} className={`rounded-2xl border p-5 text-center ${isDarkMode ? 'border-zinc-800 bg-zinc-950/40' : 'border-zinc-200 bg-white/80'}`}>
              <div className="font-display text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">{value}</div>
              <p className={`mt-2 text-xs uppercase tracking-[0.18em] ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About & Education Timeline Section */}
      <section id="education" className="py-28 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4 text-indigo-400 font-mono text-sm uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" /> Academic Journey & Foundations
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-14">
          Education & Training
        </h2>

        <div className={`space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 ${isDarkMode ? 'before:bg-zinc-800' : 'before:bg-zinc-200'}`}>
          {/* Degree 1 */}
          <div className="relative pl-10">
            <div className={`absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ${isDarkMode ? 'ring-[#090a0f]' : 'ring-[#f5f7fb]'}`} />
            <div className={`p-6 rounded-2xl border backdrop-blur-sm ${isDarkMode ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-200 bg-white/80'}`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className={`font-display text-lg font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Bachelor of Computer Applications (BCA)</h3>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Graduate
                </span>
              </div>
              <p className={`text-sm mb-3 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Atal Bihari Vajpayee University (ABVV) / CMD PG College, Bilaspur</p>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-zinc-500' : 'text-zinc-700'}`}>
                Specialized in Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms, and modern web application development.
              </p>
            </div>
          </div>

          {/* Schooling */}
          <div className="relative pl-10">
            <div className={`absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full ring-4 ${isDarkMode ? 'bg-zinc-600 ring-[#090a0f]' : 'bg-zinc-300 ring-[#f5f7fb]'}`} />
            <div className={`p-6 rounded-2xl border backdrop-blur-sm ${isDarkMode ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-200 bg-white/80'}`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className={`font-display text-lg font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Higher Secondary School Certificate (10+2)</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-mono ${isDarkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-700 border border-zinc-200'}`}>
                  CGBSE Board
                </span>
              </div>
              <p className={`text-sm mb-2 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Mathematics & Science Track</p>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-zinc-500' : 'text-zinc-700'}`}>
                Strong focus on analytical mathematics, logical reasoning, and computer fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4 text-indigo-400 font-mono text-sm uppercase tracking-wider">
          <Briefcase className="w-4 h-4" /> Selected Works
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Crafted with passion & code.
          </h2>
          <p className="text-zinc-400 text-sm max-w-md">
            Interactive prototypes, SaaS tools, and production-ready applications with smooth animations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <TiltCard key={idx} isDarkMode={isDarkMode} className="p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition ${isDarkMode ? 'bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'}`}
                      aria-label="GitHub Repository"
                    >
                      <FaGithub/>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white transition"
                      aria-label="Live Demo"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className={`font-display text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {project.description}
                </p>
              </div>

              <div className={`flex flex-wrap gap-2 pt-4 border-t ${isDarkMode ? 'border-zinc-800/60' : 'border-zinc-200'}`}>
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className={`text-xs font-mono px-2.5 py-1 rounded-md border ${isDarkMode ? 'bg-zinc-800/50 text-zinc-300 border-zinc-700/40' : 'bg-zinc-100 text-zinc-700 border-zinc-200'}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-6 max-w-5xl mx-auto">
        <div className={`p-8 sm:p-14 rounded-3xl border backdrop-blur-2xl ${isDarkMode ? 'border-zinc-800 bg-linear-to-b from-zinc-900/80 to-zinc-950/80' : 'border-zinc-200 bg-linear-to-b from-white to-zinc-100'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm uppercase tracking-wider mb-4">
                <Mail className="w-4 h-4" /> Let&apos;s Connect
              </div>
              <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                Have an idea? Let&apos;s build it together.
              </h2>
              <p className={`text-sm leading-relaxed mb-8 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                I am actively exploring frontend and full-stack development roles, freelance web designs, and creative collaborations.
              </p>

              <div className="space-y-4 text-sm">
                <div className={`flex items-center gap-3 ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>lokeshazad10@gmail.com</span>
                </div>
                <div className={`flex items-center gap-3 ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span>Instagram: @developer_lokesh</span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-3 mt-8">
                <a
                  href="https://github.com/lokeshazad10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition ${isDarkMode ? 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'}`}
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/lokeshazad10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition ${isDarkMode ? 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'}`}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com/developer_lokesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition ${isDarkMode ? 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'}`}
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-xs font-mono uppercase mb-1 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Lokesh"
                  className={`w-full px-4 py-3 rounded-xl border focus:border-indigo-500 focus:outline-none text-sm transition ${isDarkMode ? 'bg-zinc-950/60 border-zinc-800 text-white placeholder:text-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400'}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-mono uppercase mb-1 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3 rounded-xl border focus:border-indigo-500 focus:outline-none text-sm transition ${isDarkMode ? 'bg-zinc-950/60 border-zinc-800 text-white placeholder:text-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400'}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-mono uppercase mb-1 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className={`w-full px-4 py-3 rounded-xl border focus:border-indigo-500 focus:outline-none text-sm transition resize-none ${isDarkMode ? 'bg-zinc-950/60 border-zinc-800 text-white placeholder:text-zinc-500' : 'bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400'}`}
                />
              </div>

              <MagneticButton
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                }`}
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : isSuccess ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </MagneticButton>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t text-center text-xs ${isDarkMode ? 'border-zinc-800/80 text-zinc-500' : 'border-zinc-200 text-zinc-500'}`}>
        <p>© 2026 Lokesh Azad. Designed & Engineered with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}