import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 font-sans scroll-smooth">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* STICKY NAVIGATION */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic shadow-lg shadow-blue-500/20">P</div>
            <span className="font-bold tracking-tight text-lg">PETER GOOD</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-6 border-r border-slate-800 pr-6 mr-2">
               <a href="#work" className="text-sm text-slate-400 hover:text-white transition">Work</a>
               <a href="#timeline" className="text-sm text-slate-400 hover:text-white transition">Experience</a>
               <a href="#lab" className="text-sm text-slate-400 hover:text-white transition">Modern Lab</a>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/Peterbgood" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/peter-good-2104b965/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="py-24 md:py-32 flex flex-col md:flex-row items-center gap-12 border-b border-slate-900">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] tracking-widest font-black mb-6 uppercase">
              Enterprise Frontend Specialist
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
              Modernizing <br />
              <span className="text-blue-500">The Stack.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              12 years at FIS delivering secure, accessible banking interfaces. 
              Currently bridging enterprise-grade reliability with <span className="text-white">Next.js & React</span>.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <a href="mailto:peterwgood@gmail.com" className="bg-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 transition shadow-xl shadow-blue-500/20">
                  Let's Connect
               </a>
               <a href="/resume.pdf" target="_blank" className="px-8 py-4 bg-slate-900 border border-slate-800 rounded-2xl font-bold hover:bg-slate-800 transition">
                  Resume PDF
               </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
               <img 
                 src="/peter.PNG" 
                 alt="Peter Good" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
        </section>

        {/* STATS BENTO */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-20">
          {[
            { label: "FIS Career", val: "12+ Yrs" },
            { label: "Bank Sites", val: "50+" },
            { label: "Optimization", val: "80%" },
            { label: "SLA Speed", val: "1-Day" }
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-900/30 border border-slate-800/50 p-8 rounded-3xl text-center">
              <p className="text-3xl font-black text-white mb-1 tracking-tight">{stat.val}</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* PROFESSIONAL TIMELINE */}
        <section id="timeline" className="py-24 border-t border-slate-900">
          <h2 className="text-3xl font-black mb-16 text-center italic">The Career Arc</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* 1: Present */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"></div>
                <div className="w-0.5 h-full bg-slate-800"></div>
              </div>
              <div className="pb-12">
                <h4 className="text-xl font-bold text-white">Modern Lab Mastery</h4>
                <p className="text-blue-500 text-sm font-bold mb-3 uppercase tracking-wider">Present • Learning & Building</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Deep diving into <strong>React, Next.js, and Tailwind CSS</strong>. Applying a decade of institutional logic to modern, component-driven frontend architecture.
                </p>
              </div>
            </div>

            {/* 2: FIS Web Dev */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-slate-700"></div>
                <div className="w-0.5 h-full bg-slate-800"></div>
              </div>
              <div className="pb-12">
                <h4 className="text-xl font-bold text-white">Web Developer — FIS</h4>
                <p className="text-slate-500 text-sm font-bold mb-3 uppercase tracking-wider">2012 — 2025</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The backbone of my career. Built and maintained 50+ custom sites for banks and credit unions using <strong>DNN CMS</strong>. Specialized in WCAG accessibility and secure UI lifecycle management.
                </p>
              </div>
            </div>

            {/* 3: Account Manager */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-slate-800"></div>
                <div className="w-0.5 h-full bg-transparent"></div>
              </div>
              <div className="pb-4">
                <h4 className="text-xl font-bold text-white">Account Manager — FIS</h4>
                <p className="text-slate-500 text-sm font-bold mb-3 uppercase tracking-wider">2006 — 2012</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Developed enterprise communication skills and SLA management. This foundation ensures my code is always built with <strong>client goals and business logic</strong> first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED CASE STUDIES */}
        <section id="work" className="py-24 border-t border-slate-900">
          <h2 className="text-3xl font-black mb-12">Institutional Proof</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Project 1 */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500/40 transition-all">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Geo. D. Warthen Bank</h3>
                <p className="text-xs text-blue-500 font-bold mb-4 uppercase">Full Responsive Build</p>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed italic">
                  "Built the entire responsive site from scratch with a focus on WCAG AA accessibility and secure banking interfaces."
                </p>
                <a href="https://www.gdwbank.com/" target="_blank" className="text-xs font-black uppercase tracking-widest hover:text-blue-400 transition underline underline-offset-8">Visit Live Site</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-purple-500/40 transition-all">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Vast Bank</h3>
                <p className="text-xs text-purple-500 font-bold mb-4 uppercase">DNN CMS Development</p>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed italic">
                  "Developed full site using DNN CMS, including custom themes optimized for user trust and cross-browser stability."
                </p>
                <a href="http://www.vast.bank" target="_blank" className="text-xs font-black uppercase tracking-widest hover:text-purple-400 transition underline underline-offset-8">Visit Live Site</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-emerald-500/40 transition-all">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Fidelity Bank</h3>
                <p className="text-xs text-emerald-500 font-bold mb-4 uppercase">Front-end Rebuild</p>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed italic">
                  "Led the entire rebuild, creating a mobile-first, fast-loading site with polished UX and full WCAG compliance."
                </p>
                <a href="http://www.fbot.com" target="_blank" className="text-xs font-black uppercase tracking-widest hover:text-emerald-400 transition underline underline-offset-8">Visit Live Site</a>
              </div>
            </div>
          </div>
        </section>

        {/* THE MODERN LAB */}
        <section id="lab" className="py-24 border-t border-slate-900">
           <div className="bg-gradient-to-br from-slate-900 to-blue-950/40 border border-slate-800 p-12 rounded-[3rem] relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl font-black mb-6 italic text-white">The Modern Lab</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  While my FIS career is rooted in stability, my lab is where I innovate. Building a suite of 
                  <strong> React-based tools</strong> (Calorie Counter, Travel Itineraries) to master state 
                  management and server-side rendering.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {['React.js', 'Next.js', 'Tailwind', 'TypeScript', 'Node.js', 'Git'].map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-950/80 rounded-lg text-[10px] font-bold text-blue-400 border border-blue-500/20">{t}</span>
                  ))}
                </div>
                <a href="https://github.com/Peterbgood" target="_blank" className="bg-white text-black px-8 py-3 rounded-xl font-black text-sm hover:bg-blue-500 hover:text-white transition shadow-2xl">
                  Inspect My Code on GitHub
                </a>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10"></div>
           </div>
        </section>

        {/* EDUCATION & CONTACT */}
        <section className="py-24 grid md:grid-cols-2 gap-12 items-center border-t border-slate-900">
          <div>
            <h2 className="text-3xl font-black mb-8">Education</h2>
            <div className="space-y-6">
              <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800/50">
                <h4 className="font-bold text-lg">A.S. Web Development</h4>
                <p className="text-slate-400 text-sm">St. Petersburg College, 2022</p>
              </div>
              <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800/50">
                <h4 className="font-bold text-lg">Web Development Certification</h4>
                <p className="text-slate-400 text-sm">St. Petersburg College, 2015</p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h2 className="text-3xl font-black mb-4">Let's Talk.</h2>
            <p className="text-slate-500 mb-8 italic">Available for remote roles or Knoxville-based opportunities.</p>
            <a href="mailto:peterwgood@gmail.com" className="text-2xl md:text-4xl font-bold text-white hover:text-blue-500 transition underline underline-offset-[12px] decoration-blue-500/30">
              peterwgood@gmail.com
            </a>
          </div>
        </section>

      </main>

      <footer className="py-20 text-center border-t border-slate-900/50">
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-black">
          © 2026 Peter Good | Built with Next.js 16 & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}