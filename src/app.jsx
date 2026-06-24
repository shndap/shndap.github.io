import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Moon,
  Sun,
  Trophy,
  Cpu,
  Database,
  Search,
  Brain,
  Music,
  Palette,
  Sparkles,
  ChartCandlestick,
  Heart,
  Star,
  Microscope,
  Terminal,
  Zap,
  Eye,
  Copy,
  Check,
  Send,
  Server
} from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);

  const profile = {
    name: "Sahand Akramipour",
    status: "4th Year Computer Engineering Student",
    university: "Sharif University of Technology",
    primaryEmail: "sahandap@gmail.com",
    institutionalEmail: "sahand.akramipour11@sharif.edu",
    github: "https://github.com/shndap",
    linkedin: "https://linkedin.com/in/shndap",
    about: "I'm a senior at Sharif University of Technology, deeply curious about how we can make machines understand the world more like we do. Currently, I spend most of my time exploring Deep Learning, specifically looking into Time-Series analysis and LLMs. Beyond the technical side, I'm really interested in the 'human' part of AI—how it can help us interpret expression, music, and art. I enjoy building things that bridge complex math with real-world human experiences.",
    passions: [
      { name: "LLMs & Reasoning", icon: <Brain size={18} />, color: "text-purple-500" },
      { name: "Time-Series Forecasting", icon: <ChartCandlestick size={18} />, color: "text-blue-500" },
      { name: "Distributed ML Systems", icon: <Server size={18} />, color: "text-red-500" },
      { name: "Human-Centered AI", icon: <Heart size={18} />, color: "text-pink-500" }
    ],
    experience: [
      {
        role: "Machine Learning Engineer",
        company: "Roshan",
        period: "Aug 2024 - Present",
        desc: "Building PyTorch-based models for high-dimensional time-series forecasting and sequential data."
      },
      {
        role: "Research Assistant",
        company: "RIML @ Sharif University of Technology",
        period: "Jan 2025 - Present",
        desc: "Assisted in researches on LLM reasoning with Dr. Rohban at Robust and Interpretable Machine Learning Lab (RIML)."
      },
      {
        role: "Teaching Assistant",
        company: "Sharif University of Technology",
        period: "2024 - Present",
        desc: "Helping younger students navigate System 2 thinking in AI, Bioinformatics, Numerical Computations, and Programming."
      }
    ],
    works: [
      {
        title: "Facial Expression Compact Embedding",
        type: "Research",
        tech: "Deep Learning, Affective Computing",
        desc: "Researching efficient, low-dimensional representations of human affect. Exploring how machines can interpret the 'art' of non-verbal communication.",
        icon: <Microscope size={20} />,
        highlight: true,
        link: "#"
      },
      {
        title: "Abductive Reasoning in LLMs",
        type: "Research",
        tech: "LLMs, Cognitive Science",
        desc: "Investigating the capacity of Large Language Models to perform human-like abductive reasoning—inferring the best possible explanation for observed data.",
        icon: <Brain size={20} />,
        highlight: true,
        link: "https://openreview.net/forum?id=oPfWCIb7hu"
      },
      {
        title: "Stochastic Conv Nets",
        type: "Research",
        tech: "PyTorch, Probabilistic ML",
        desc: "Implemented custom stochastic layers to model uncertainty in perception, bridging the gap between rigid CNNs and human observation.",
        icon: <Cpu size={20} />,
        highlight: true,
        link: "https://github.com/shndap/stochastic-conv-nets"
      },
      {
        title: "Fashion MNIST Classification",
        type: "Project",
        tech: "Deep Learning, PyTorch",
        desc: "High-performance classification pipeline exploring various neural architectures for computer vision benchmarks.",
        icon: <Palette size={20} />,
        highlight: false,
        link: "https://github.com/shndap/fashion-mnist-classification"
      },
      {
        title: "Vision U-Net Segmentation",
        type: "Project",
        tech: "Computer Vision, U-Net",
        desc: "Advanced image segmentation project utilizing U-Net architecture for precise pixel-level classification.",
        icon: <Eye size={20} />,
        highlight: false,
        link: "https://github.com/shndap/vision-unet-segmentation"
      },
      {
        title: "Smart Grid Energy Simulation",
        type: "Project",
        tech: "Queuing Theory, Simulation",
        desc: "Comprehensive energy management simulation using Queuing Theory performance analysis for smart grid optimization.",
        icon: <Zap size={20} />,
        highlight: false,
        link: "https://github.com/shndap/smart-grid-energy-simulation"
      },
      {
        title: "Stream2PG",
        type: "Open Source Package",
        tech: "Apache Spark, PostgreSQL, Kafka",
        desc: "Published PyPI package that automatically streams Kafka topics into PostgreSQL using Spark Structured Streaming, featuring automatic table creation and schema evolution.",
        icon: <Database size={20} />,
        highlight: false,
        link: "https://github.com/shndap/stream2pg"
      },
    ],
    honors: [
      { title: "Academic Excellence", event: "Computer Engineering @ Sharif University of Technology", year: "2022 - Present" },
      { title: "Research Paper: CEDAR-GRPO", event: "Process-Aware Reinforcement Learning for General Abductive Reasoning in LLMs", year: "EMNLP 2026" },
      { title: "IOAA Gold Medal x2", event: "International Olympiad on Astronomy and Astrophysics - High School", year: "2021 & 2022" },
      // { title: "Prompt Engineering Certification", event: "Google Cloud", year: "2024" },
      // { title: "Computer Vision & CNNs", event: "Kaggle", year: "2024" },
      // { title: "Deep Learning", event: "Kaggle", year: "2024" }
    ]
  };

  const copyEmail = () => {
    const el = document.createElement('textarea');
    el.value = profile.primaryEmail;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const NavItem = ({ name, id }) => (
    <button
      onClick={() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }}
      className={`px-4 py-2 transition-colors duration-200 text-sm font-medium ${activeSection === id ? 'text-nav-active' : 'text-nav-idle hover-text-nav-idle-hover'}`}
    >
      {name}
    </button>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'theme-dark bg-page text-page' : 'theme-light bg-page text-page'}`}>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 border-b border-nav bg-nav`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight uppercase">
            Sahand <span className="font-light opacity-70 text-sm tracking-widest ml-1">Akramipour</span>
          </span>
          <div className="hidden md:flex items-center space-x-1">
            <NavItem name="Background" id="home" />
            <NavItem name="Works" id="works" />
            <NavItem name="Journey" id="experience" />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 ml-4 transition-all hover-bg-toggle ${darkMode ? 'text-nav-active' : 'text-nav-idle'}`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="relative group shrink-0">
              <div className="absolute -inset-2 opacity-20 group-hover:opacity-40 transition duration-1000 bg-hero-glow group-hover:bg-hero-glow-hover"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-nav bg-hero-surface">
                <img
                  src="/me.png"
                  alt="Sahand Akramipour"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 badge-blue text-[10px] font-black uppercase tracking-widest">
                  <GraduationCap size={12} /> 4th Year @ Sharif University
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 badge-purple text-[10px] font-black uppercase tracking-widest">
                  <Sparkles size={12} /> Research Collaboration
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[0.9] uppercase whitespace-nowrap">
                Hey, I'm {profile.name.split(' ')[0]}.
              </h1>
              <p className="text-xl mb-10 leading-relaxed text-justify max-w-2xl font-light text-body">
                {profile.about}
              </p>

              <div className="space-y-4 mb-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-label">I'm currently into</h3>
                <div className="flex flex-wrap gap-3">
                  {profile.passions.map(item => (
                    <div key={item.name} className="flex items-center gap-2 px-5 py-2.5 border text-sm font-semibold transition-all border-section bg-section text-page">
                      <span className={item.color}>{item.icon}</span>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href={`mailto:${profile.primaryEmail}`} className="flex items-center gap-3 px-8 py-4 font-bold transition-all bg-accent text-accent-text hover-bg-accent-hover hover-text-accent-hover">
                  <Send size={18} /> Say Hello
                </a>
                <a href={profile.linkedin} target="_blank" className="flex items-center gap-3 px-8 py-4 font-bold transition-all border border-nav hover-bg-section-hover">
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a href={profile.github} target="_blank" className="flex items-center gap-3 px-8 py-4 font-bold transition-all border border-nav hover-bg-section-hover">
                  <Github size={20} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-28 px-6 bg-work">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Selected Work</h2>
            <div className="h-1.5 w-20 bg-accent-line" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.works.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 border transition-all block bg-section border-section hover-border-section-hover"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-icon-surface text-icon">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest border ${item.type === 'Research' ? 'badge-purple' : 'badge-blue'}`}>
                      {item.type}
                    </span>
                    {item.link !== "#" && <ExternalLink size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight">{item.title}</h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-body">{item.desc}</p>
                <div className="text-[10px] font-mono opacity-50 uppercase tracking-widest">{item.tech}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Awards Combined */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>
            <h2 className="text-3xl font-black mb-12 uppercase italic">My Journey</h2>
            <div className="space-y-12">
              {profile.experience.map((exp, idx) => (
                <div key={idx} className="group relative pl-10">
                  <div className="absolute left-0 top-1 w-1.5 h-full bg-timeline overflow-hidden">
                    <div className="w-full h-0 group-hover:h-full transition-all duration-500 bg-accent-line" />
                  </div>
                  <div className="text-sm font-bold mb-2 uppercase tracking-widest text-accent-line">{exp.period}</div>
                  <h3 className="text-2xl font-bold mb-3">{exp.role}</h3>
                  <div className="text-lg font-medium opacity-60 mb-4">{exp.company}</div>
                  <p className="leading-relaxed font-light text-body">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="awards">
            <h2 className="text-3xl font-black mb-12 uppercase italic">Recognition</h2>
            <div className="space-y-4">
              {profile.honors.map((honor, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 border transition-all bg-section border-section hover-bg-section-hover">
                  <div>
                    <div className="font-bold text-lg mb-1">{honor.title}</div>
                    <div className="text-xs opacity-50 uppercase tracking-widest font-bold">{honor.event}</div>
                  </div>
                  <div className="text-sm font-mono font-bold text-accent-line text-right min-w-[120px]">{honor.year}</div>
                </div>
              ))}
              <div className="mt-12 p-6 border border-dashed border-section bg-section text-body">
                <div className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <GraduationCap size={14} /> Academic Background
                </div>
                <p className="text-sm font-light">
                  Currently a Senior Computer Engineering student at Sharif. GPA 3.6/4.0. Always happy to chat about ML research or interesting code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Contact Footer */}
      <footer className="py-40 px-6 border-t border-footer">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none uppercase">
              Get in <br /> <span className="italic text-accent-line">Touch</span>.
            </h2>
            <p className="text-lg font-light max-w-lg mx-auto mb-10 text-body">
              Whether it's a research collaboration, a cool project idea, or just to say hi, my inbox is always open.
            </p>
          </div>

          <div className="inline-flex flex-col md:flex-row items-center gap-4 p-4 border transition-all bg-section border-section">
            <button
              onClick={copyEmail}
              className="flex items-center gap-3 px-6 py-4 font-bold transition-all bg-page text-page hover-bg-accent-hover hover-text-accent-hover"
            >
              {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
              {copied ? "Email Copied!" : "Copy Primary Email"}
            </button>

            <div className="flex items-center gap-2 px-4">
              <a href={profile.linkedin} target="_blank" title="LinkedIn" className="p-4 transition-all text-card hover-bg-section-hover hover-text-section-hover">
                <Linkedin size={24} />
              </a>
              <a href={profile.github} target="_blank" title="GitHub" className="p-4 transition-all text-card hover-bg-section-hover hover-text-section-hover">
                <Github size={24} />
              </a>
              <a href={`mailto:${profile.institutionalEmail}`} title="Institutional Email" className="p-4 transition-all text-card hover-bg-section-hover hover-text-section-hover">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="mt-32 pt-10 border-t flex flex-col items-center gap-4 opacity-60 text-[10px] font-black uppercase tracking-[0.4em] border-footer">
            <span>© 2026 Sahand Akramipour</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;