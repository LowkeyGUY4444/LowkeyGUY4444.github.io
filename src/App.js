import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code, ExternalLink, Menu, X } from 'lucide-react';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  const experience = [
    {
      title: "Full Stack Intern",
      org: "KACOF Digital Solutions",
      date: "June 2025 - December 2025",
      desc: "Developing scalable microservices using Node.js and improving frontend performance by 30%."
    },
    {
      title: "Computer Science Degree",
      org: "Amritsar Group Of Colleges",
      date: "2022 - Present",
      desc: "Specializing in Full Stack Development. GPA: 6.8/10"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Chat Application",
      description: "Real-time messaging app with secure auth.",
      tags: ["Node.js", "React", "CSS", "FireBase"],
      image: "/chatapp.png",
      codeLink: "https://github.com/LowkeyGUY4444/project",
      demoLink: "https://messagegar.netlify.app/"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A fully functional online store with cart and payment integration.",
      tags: ["Node.js", "React", "Tailwind CSS", "Express.js", "MongoDB"],
      image: "/hamrobazar.png",
      codeLink: "https://github.com/LowkeyGUY4444/my-app",
      demoLink: "https://hamrobazzer.vercel.app/"
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-cyan-500/30">

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1f1f1f] h-[80px]">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex justify-between items-center">
          <span className="text-2xl font-bold tracking-tight text-white">Akshya Thapa</span>

          <div className="hidden md:flex gap-8 items-center">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[#a3a3a3] hover:text-cyan-400 font-medium transition-colors">
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:min-h-[700px] flex items-center px-6 overflow-hidden">

        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="max-w-[1200px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center z-10">
          <div>
            <p className="text-cyan-400 font-medium text-xl mb-2">Computer Science Student & Developer</p>
            <h1 className="text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">Akshya Thapa</h1>
            <p className="text-[#d4d4d4] text-lg leading-relaxed max-w-[500px] mb-8">
              Turning complex problems into elegant, high-performance software solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#projects"><button className="bg-cyan-500 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-cyan-600 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">View Projects</button></a>
              <a href="https://drive.google.com/file/d/1oMY81QUw-IHVfoMR9vwdYThBTEOP-ufQ/view?usp=drive_link"><button className="border-2 border-cyan-500 text-cyan-400 font-semibold px-8 py-3.5 rounded-xl hover:bg-cyan-500/10 transition-all">Download CV</button></a>
            </div>

            <div className="flex gap-4 text-[#737373]">
              <a href="https://github.com/LowkeyGUY4444"><Github className="hover:text-white cursor-pointer transition-colors" /></a>
              <a href="https://www.linkedin.com/in/akshya-thapa"><Linkedin className="hover:text-white cursor-pointer transition-colors" /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akshyathapa23@gmail.com"><Mail className="hover:text-white cursor-pointer transition-colors" /></a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[80px]"></div>
              <img src="/profilePic.jpg"
                alt="Profile"
                className="w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full object-cover border-4 border-[#1f1f1f] relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Visual Skill Icons */}
      <section id="about" className="bg-[#0f0f0f] py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-[60px] items-center">
            <div className="space-y-6 text-[#d4d4d4] text-lg leading-relaxed">
              <p>I specialize in building bridges between complex data architecture and seamless user interfaces.</p>
              <p>Currently pursuing a degree in Computer Science, I focus on creating scalable applications and exploring the potential of AI to solve real-world problems.</p>
            </div>

            {/* Visual Skill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:scale-105 hover:border-cyan-500/50 transition-all group">
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#737373] group-hover:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-[#141414] border border-[#1f1f1f] rounded-xl overflow-hidden hover:border-cyan-500 transition-all group">
                <div className="h-56 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[#a3a3a3] text-sm mb-4">{project.description}</p>
                  <div className="flex gap-2 mb-6">
                    {project.tags.map(tag => <span key={tag} className="bg-[#1f1f1f] text-cyan-400 text-[10px] px-2 py-1 rounded font-bold uppercase">{tag}</span>)}
                  </div>
                  <div className="flex justify-between text-cyan-400 font-bold text-xs uppercase tracking-tighter">
                    <span className="flex items-center gap-1 cursor-pointer hover:underline"><Code size={14} /><a href={project.codeLink}> Code</a></span>
                    <span className="flex items-center gap-1 cursor-pointer hover:underline"><ExternalLink size={14} /><a href={project.demoLink}> Demo</a></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">Experience & Education</h2>
          <div className="max-w-3xl mx-auto border-l-2 border-[#1f1f1f] pl-8 space-y-12">
            {experience.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)]"></div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-cyan-400 font-medium mb-1">{item.org}</p>
                <p className="text-[#737373] text-sm mb-3 uppercase tracking-widest">{item.date}</p>
                <p className="text-[#d4d4d4] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-[#a3a3a3] max-w-xl mx-auto mb-10 text-lg">I'm currently looking for new opportunities and collaborations. My inbox is always open.</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=akshyathapa23@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 text-white font-bold px-12 py-4 rounded-xl hover:bg-cyan-600 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-[#1f1f1f] text-center">
        <p className="text-[#737373] text-sm">© 2025 Akshya Thapa. Developed with React & Tailwind.</p>
        <div className="w-[134px] h-[5px] bg-[#525252] rounded-full mx-auto mt-8"></div>
      </footer>
    </div>
  );
};

export default Portfolio;