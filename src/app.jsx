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
  Layers,
  Heart,
  Star,
  Microscope,
  Terminal,
  Zap,
  Eye,
  Copy,
  Check,
  Send
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
      { name: "Time-Series Analysis", icon: <Layers size={18} />, color: "text-blue-500" },
      { name: "Human-Centric AI", icon: <Heart size={18} />, color: "text-red-500" },
      { name: "Music & Expression", icon: <Music size={18} />, color: "text-pink-500" }
    ],
    experience: [
      {
        role: "Machine Learning Engineer",
        company: "Roshan",
        period: "Aug 2024 - Present",
        desc: "Building PyTorch-based models for high-dimensional time-series forecasting and sequential data."
      },
      {
        role: "Teaching Assistant",
        company: "Sharif University of Technology",
        period: "2024 - Present",
        desc: "Helping younger students navigate Bioinformatics, Numerical Computations, and Programming."
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
        link: "#"
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
      }
    ],
    honors: [
      { title: "Academic Excellence", event: "Sharif University of Technology", year: "2022 - Present" },
      { title: "Vertex AI Certification", event: "Google Cloud", year: "2024" }
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
      className={`px-4 py-2 transition-colors duration-200 text-sm font-medium ${
        activeSection === id 
          ? 'text-blue-500' 
          : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
      }`}
    >
      {name}
    </button>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-[#0a0a0f] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${darkMode ? 'border-white/5 bg-[#0a0a0f]/80' : 'border-slate-200 bg-white/80'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight uppercase">
            Sahand <span className="font-light opacity-50 text-sm tracking-widest ml-1">Akramipour</span>
          </span>
          <div className="hidden md:flex items-center space-x-1">
            <NavItem name="Background" id="home" />
            <NavItem name="Works" id="works" />
            <NavItem name="Journey" id="experience" />
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 ml-4 rounded-lg transition-all ${darkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-200 text-slate-600'}`}
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
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-teal-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-white bg-white shadow-xl'}`}>
                <img 
                  src="/me.png" 
                  alt="Sahand Akramipour"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest">
                  <GraduationCap size={12} /> 4th Year @ Sharif University
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-[10px] font-black uppercase tracking-widest">
                  <Sparkles size={12} /> Research Collaboration
                </div>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] uppercase">
                Hey, I'm {profile.name.split(' ')[0]}.
              </h1>
              <p className={`text-xl mb-10 leading-relaxed max-w-2xl font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {profile.about}
              </p>
              
              <div className="space-y-4 mb-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500/80">I'm currently into</h3>
                <div className="flex flex-wrap gap-3">
                  {profile.passions.map(item => (
                    <div key={item.name} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all hover:scale-105 ${darkMode ? 'border-white/5 bg-white/5 text-slate-200' : 'border-slate-200 bg-white shadow-sm text-slate-700'}`}>
                      <span className={item.color}>{item.icon}</span>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href={`mailto:${profile.primaryEmail}`} className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold transition-all hover:bg-blue-500 hover:scale-105 shadow-lg shadow-blue-600/20">
                  <Send size={18} /> Say Hello
                </a>
                <a href={profile.linkedin} target="_blank" className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all border ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'}`}>
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a href={profile.github} target="_blank" className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all border ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'}`}>
                  <Github size={20} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className={`py-28 px-6 ${darkMode ? 'bg-slate-900/20' : 'bg-slate-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Selected Work</h2>
            <div className="h-1.5 w-20 bg-blue-500 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.works.map((item, idx) => (
              <a 
                key={idx} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group p-8 rounded-3xl border transition-all block ${item.highlight ? 'lg:col-span-1 shadow-blue-500/5' : ''} ${darkMode ? 'bg-[#0d1117]/50 border-white/5 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:shadow-lg'}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-2xl ${darkMode ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${item.type === 'Research' ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' : 'bg-blue-500/10 text-blue-500 border-blue-500/20'}`}>
                      {item.type}
                    </span>
                    {item.link !== "#" && <ExternalLink size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight">{item.title}</h3>
                <p className={`mb-6 text-sm font-light leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
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
                  <div className="absolute left-0 top-1 w-1.5 h-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-full h-0 group-hover:h-full bg-blue-500 transition-all duration-500" />
                  </div>
                  <div className="text-sm font-bold text-blue-500 mb-2 uppercase tracking-widest">{exp.period}</div>
                  <h3 className="text-2xl font-bold mb-3">{exp.role}</h3>
                  <div className="text-lg font-medium opacity-60 mb-4">{exp.company}</div>
                  <p className={`leading-relaxed font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="awards">
            <h2 className="text-3xl font-black mb-12 uppercase italic">Recognition</h2>
            <div className="space-y-4">
              {profile.honors.map((honor, idx) => (
                <div key={idx} className={`flex items-center justify-between p-6 rounded-2xl border ${darkMode ? 'bg-white/5 border-white/5 hover:bg-white/[0.08]' : 'bg-white border-slate-200 hover:shadow-md'} transition-all`}>
                  <div>
                    <div className="font-bold text-lg mb-1">{honor.title}</div>
                    <div className="text-xs opacity-50 uppercase tracking-widest font-bold">{honor.event}</div>
                  </div>
                  <div className="text-sm font-mono text-blue-500 font-bold">{honor.year}</div>
                </div>
              ))}
              <div className={`mt-12 p-6 rounded-2xl border border-dashed ${darkMode ? 'border-slate-800 bg-slate-900/40 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-600'}`}>
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
      <footer className="py-40 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none uppercase">
              Get in <br /> <span className="text-blue-500 italic">Touch</span>.
            </h2>
            <p className={`text-lg font-light max-w-lg mx-auto mb-10 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Whether it's a research collaboration, a cool project idea, or just to say hi, my inbox is always open.
            </p>
          </div>

          <div className={`inline-flex flex-col md:flex-row items-center gap-4 p-4 rounded-3xl border transition-all ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
            <button 
              onClick={copyEmail}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${darkMode ? 'bg-white text-black hover:bg-blue-500 hover:text-white' : 'bg-slate-900 text-white hover:bg-blue-600'}`}
            >
              {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
              {copied ? "Email Copied!" : "Copy Primary Email"}
            </button>
            
            <div className="flex items-center gap-2 px-4">
              <a href={profile.linkedin} target="_blank" title="LinkedIn" className={`p-4 rounded-2xl transition-all ${darkMode ? 'hover:bg-white/10 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-600 hover:text-black'}`}>
                <Linkedin size={24} />
              </a>
              <a href={profile.github} target="_blank" title="GitHub" className={`p-4 rounded-2xl transition-all ${darkMode ? 'hover:bg-white/10 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-600 hover:text-black'}`}>
                <Github size={24} />
              </a>
              <a href={`mailto:${profile.institutionalEmail}`} title="Institutional Email" className={`p-4 rounded-2xl transition-all ${darkMode ? 'hover:bg-white/10 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-600 hover:text-black'}`}>
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="mt-32 pt-10 border-t border-white/5 flex flex-col items-center gap-4 opacity-30 text-[10px] font-black uppercase tracking-[0.4em]">
            <span>© 2026 Sahand Akramipour</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;