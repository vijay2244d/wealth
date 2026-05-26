import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark, TrendingUp, ShieldCheck, PieChart, Mail, Info, Home as HomeIcon, Briefcase, User, Sparkles, PhoneCall, MailOpen } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

// Pages
const Home = () => (
  <PageWrapper>
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gold-400 font-serif italic text-xl mb-4"
      >
        Welcome to Excellence
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-8xl font-display font-medium tracking-tight mb-8"
      >
        Architecting Your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Financial Legacy</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.5 }}
        className="max-w-2xl text-lg text-white font-serif leading-relaxed mb-12"
      >
        Precision instruments for the modern investor. We provide bespoke financial solutions 
        rooted in clarity, security, and consistent growth.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Link 
          to="/services" 
          className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white font-medium rounded-sm transition-all duration-300 tracking-widest uppercase text-xs"
        >
          Explore Services
        </Link>
      </motion.div>
    </div>
  </PageWrapper>
);

const About = () => (
  <PageWrapper>
    <div className="max-w-6xl mx-auto py-24 px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <span className="text-gold-500 font-mono text-xs uppercase tracking-[0.4em]">Our Institution</span>
            <h2 className="text-5xl md:text-7xl font-display leading-[0.9] uppercase">The Pursuit of <br/> <span className="text-white/40">Financial Mastery</span></h2>
          </div>
          
          <div className="space-y-8 font-serif text-xl text-white/70 leading-relaxed italic">
            <p className="border-l-2 border-gold-500/30 pl-8">
              "We operate at the intersection of heritage and innovation. Finestra Wealth does not merely manage capital; we architect the structures that preserve it across the horizon of generations."
            </p>
            <p className="not-italic text-base text-white/50">
              Founded on the bedrock of integrity and foresight, our institution has stood as a bastion of stability in volatile global markets for over three decades. We serve a distinguished clientele who demand nothing less than absolute precision and strategic excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="space-y-1">
              <div className="text-4xl font-display text-gold-400">$42B+</div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-white/30">Assets Under Management</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-display text-gold-400">12</div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-white/30">Global Economic Hubs</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative aspect-[4/5] bg-white/5 border border-white/10 rounded-sm overflow-hidden flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
          <Landmark size={200} className="text-gold-500/10 group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/60 backdrop-blur-md border border-white/5">
            <h3 className="font-display text-xl mb-2 text-gold-200">Institutional Philosophy</h3>
            <p className="text-xs text-white/40 leading-relaxed font-serif italic">
              Our investment committee employs zero-trust validation models to neutralize systemic risks while capturing non-obvious alpha in emerging equity clusters.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-40 grid md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
        {[
          { title: "Sovereign Custody", text: "Absolute title clarity and estate preservation via distributed graphical audit protocols." },
          { title: "Adaptive Yield", text: "Neutralizing volatility through real-time algorithmic balancing of high-liquidity clusters." },
          { title: "Global Mandate", text: "Serving the unique ambitions of intergenerational families and institutional capital." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + (i * 0.1) }}
            className="space-y-4"
          >
            <h4 className="font-display text-gold-500 tracking-widest uppercase">{item.title}</h4>
            <p className="text-sm text-white/40 font-serif leading-relaxed italic">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

const ActionOverlay = ({ type, onComplete }: { type: 'call' | 'mail', onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] bg-[#0c0c0c] flex items-center justify-center overflow-hidden"
    >
      {type === 'call' && (
         <motion.div
           animate={{ rotate: [-15, 15, -15, 15, 0] }}
           transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
           className="text-gold-500"
         >
           <PhoneCall size={100} />
         </motion.div>
      )}
      {type === 'mail' && (
         <motion.div
           initial={{ scale: 0.8 }}
           animate={{ scale: [0.8, 1.2, 1] }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="text-gold-500 relative"
         >
           {/* Simple envelope opening illusion: crossfade Mail to MailOpen */}
           <motion.div
             animate={{ opacity: [1, 0] }}
             transition={{ delay: 0.8, duration: 0.2 }}
             className="absolute inset-0"
           >
             <Mail size={100} />
           </motion.div>
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: [0, 1] }}
             transition={{ delay: 0.8, duration: 0.2 }}
           >
             <MailOpen size={100} />
           </motion.div>
         </motion.div>
      )}
    </motion.div>
  );
};

const Contact = () => {
  const [activeAction, setActiveAction] = useState<'call' | 'mail' | null>(null);

  const handleAction = (type: 'call' | 'mail') => {
    setActiveAction(type);
  };

  const handleActionComplete = () => {
    if (activeAction === 'call') {
      window.location.href = "tel:7810071916";
    } else if (activeAction === 'mail') {
      window.location.href = "mailto:info@financewealth.com";
    }
    setActiveAction(null);
  };

  return (
    <>
      <AnimatePresence>
        {activeAction && <ActionOverlay type={activeAction} onComplete={handleActionComplete} />}
      </AnimatePresence>
      <PageWrapper>
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/80 via-transparent to-[#0c0c0c] pointer-events-none"></div>

          <div className="relative z-10 w-full max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display text-center mb-16 uppercase tracking-widest text-white/90">Connect <span className="text-gold-500">With Us</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <button onClick={() => handleAction('call')} className="flex flex-col items-center justify-center gap-6 p-12 bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all group aspect-square rounded-sm text-center shadow-lg hover:shadow-[0_0_40px_rgba(184,145,38,0.2)]">
                  <div className="p-6 bg-gold-500/10 text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all rounded-full">
                    <PhoneCall size={48} />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 group-hover:text-white transition-colors">Direct Line</p>
                  </div>
                </button>

                <button onClick={() => handleAction('mail')} className="flex flex-col items-center justify-center gap-6 p-12 bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all group aspect-square rounded-sm text-center shadow-lg hover:shadow-[0_0_40px_rgba(184,145,38,0.2)]">
                  <div className="p-6 bg-gold-500/10 text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all rounded-full">
                    <Mail size={48} />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 group-hover:text-white transition-colors">Institutional Desk</p>
                  </div>
                </button>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

// page-wrapper component for consistent intro animations
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// Landing Intro Component
const LandingIntro = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[200] bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Realistic ₹2000 Banknote */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotateY: 30, x: -100 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[95vw] max-w-[850px] aspect-[2.3] bg-[#f5eef1] shadow-[0_40px_80px_rgba(0,0,0,0.3)] border border-black/10 overflow-hidden flex preserve-3d"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #d487b3 0%, #d487b3 30%, #f5eef1 30%, #f5eef1 100%),
              url("https://www.transparenttextures.com/patterns/natural-paper.png")
            `,
          }}
        >
          {/* Main Content Sections */}
          <div className="absolute inset-0 flex">
            {/* Left Section (Magenta) */}
            <div className="w-[30%] h-full relative p-4 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="text-black/80 font-serif font-bold text-[10px]">भारतीय रिज़र्व बैंक</div>
                <div className="text-black/60 font-serif text-[7px]">केन्द्रीय सरकार द्वारा प्रत्याभूत</div>
                <div className="text-black/80 font-mono text-xs mt-4 font-bold tracking-tighter">9DB 945812</div>
                
                {/* 2000 Text Vertical */}
                <div className="text-black/30 font-bold text-4xl rotate-90 absolute left-2 top-24 opacity-20">₹2000</div>
              </div>

              {/* Watermark Section */}
              <div className="mb-8 pl-4">
                 <div className="w-20 h-24 border-2 border-dotted border-black/5 rounded-sm bg-black/5"></div>
              </div>

              <div className="text-black/70 font-semibold text-2xl italic">₹२०००</div>
            </div>

            {/* Gandhi Portrait (Central-Right) */}
            <div className="w-[45%] h-full relative flex items-center justify-center">
              {/* Green Security Thread - Shifted Left */}
              <div className="absolute left-[-10px] top-0 h-full w-2 flex flex-col justify-around py-2 opacity-80 z-20">
                {[...Array(6)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ backgroundColor: ['#15803d', '#16a34a', '#15803d'] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    className="w-full h-10 border-y border-black/10"
                  />
                ))}
              </div>

              <div className="relative w-full h-full flex flex-col items-center justify-center overflow-visible">
                 <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="relative z-10 translate-x-8"
                >
                  {/* Refined Portrait Container with Soft Oval Edge */}
                  <div className="w-52 h-64 relative flex items-center justify-center translate-x-12 mix-blend-multiply opacity-95">
                    <div className="absolute inset-0 overflow-hidden" 
                         style={{ 
                           clipPath: 'ellipse(42% 48% at 50% 50%)',
                           filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.2))'
                         }}>
                       <img 
                         src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg" 
                         alt="Mahatma Gandhi Portrait"
                         className="w-full h-full object-cover grayscale contrast-[1.4] brightness-[1.15] scale-[2.6] origin-[51%_17%]"
                         referrerPolicy="no-referrer"
                       />
                    </div>
                  </div>
                  <div className="text-[8px] text-black/60 font-bold font-serif text-center -mt-10 tracking-[0.3em] uppercase opacity-70">Mahatma Gandhi</div>
                </motion.div>

                {/* Speech Bubble - Repositioned to not block Gandhi */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
                  animate={{ opacity: 1, scale: 1, x: -160, y: -80 }}
                  transition={{ delay: 2.2, duration: 0.6, type: "spring", damping: 14 }}
                  className="absolute z-[100] bg-white text-[#bc4b9b] px-10 py-6 rounded-3xl rounded-br-none shadow-[0_30px_60px_rgba(0,0,0,0.4)] whitespace-nowrap border-2 border-[#bc4b9b]/10"
                >
                  <span className="text-xl md:text-3xl font-serif font-black italic tracking-tighter text-[#8e3a75]">"ha ha better move with me"</span>
                  <div className="absolute bottom-[-2px] left-[-2px] w-6 h-6 bg-white rotate-45 border-l-2 border-b-2 border-[#bc4b9b]/5" />
                </motion.div>
              </div>
            </div>

            {/* Right Section (Details & Denomination) */}
            <div className="flex-1 h-full p-6 flex flex-col justify-between items-end relative bg-gradient-to-l from-white/20 to-transparent">
              <div className="w-full flex justify-between items-start">
                 <div className="flex-1 text-center font-serif text-[12px] text-black/80 font-bold tracking-widest pt-2 px-6">
                   RESERVE BANK OF INDIA<br/>
                   <span className="text-[7px] font-normal text-black/60">Central Government Guaranteed</span>
                 </div>
                 
                 {/* Ashoka Pillar Emblem */}
                 <div className="w-16 h-24 border border-black/10 flex flex-col items-center justify-center p-1 bg-black/5 mr-4">
                    <Landmark size={32} className="text-black/60" />
                    <div className="text-[5px] font-serif text-black/50 font-black uppercase tracking-[0.1em] mt-1">सत्यमेव जयते</div>
                 </div>
              </div>

              <div className="relative w-full flex justify-end items-center -mt-8">
                 <div className="text-black font-serif text-6xl md:text-8xl font-black tracking-tighter italic">₹2000</div>
              </div>

              <div className="w-full space-y-2">
                 <div className="flex justify-between items-end border-b border-black/10 pb-1">
                   <div className="text-black/60 font-serif text-[6px] text-left">
                     <p className="mb-0.5">I PROMISE TO PAY THE BEARER THE SUM OF TWO THOUSAND RUPEES</p>
                     <p className="italic font-bold">Urijit Patel</p>
                     <p className="font-bold border-t border-black/5 mt-1">GOVERNOR</p>
                   </div>
                   <div className="text-black/80 font-mono text-sm font-bold tracking-tighter">9DB 945812</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Border Bleed Segments */}
          <div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none">
             <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-40">
                {[...Array(7)].map((_, i) => <div key={`l-${i}`} className="w-6 h-[1px] bg-black -rotate-12" />)}
             </div>
             <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-40">
                {[...Array(7)].map((_, i) => <div key={`r-${i}`} className="w-6 h-[1px] bg-black rotate-12" />)}
             </div>
          </div>
          
          {/* Subtle Reflective Animation */}
          <motion.div 
            animate={{ left: ['-100%', '300%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-40 h-[200%] bg-white/5 -rotate-45 pointer-events-none"
          />
        </motion.div>

        {/* Global Transition Logic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          onAnimationComplete={onComplete}
        />
      </div>
    </motion.div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <LandingIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <Router>
        <div className={`min-h-screen bg-[#0c0c0c] text-white selection:bg-gold-500 selection:text-white overflow-x-hidden ${showIntro ? 'h-screen overflow-hidden' : ''}`}>
          {/* Navigation */}
          <nav className="fixed top-0 left-0 w-full z-50 bg-[#0c0c0c]/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 border-2 border-gold-500 flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
                <span className="text-gold-500 font-display text-sm font-bold rotate-0 group-hover:-rotate-45 transition-transform duration-500">F</span>
              </div>
              <span className="font-display text-xl tracking-widest uppercase">Finestra</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-gold-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 bg-[#0c0c0c] flex flex-col items-center justify-center gap-8 md:hidden"
            >
              <Link to="/" className="text-3xl font-display" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/services" className="text-3xl font-display" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/about" className="text-3xl font-display" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" className="text-3xl font-display" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <main className="pt-24 pb-12">
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <footer className="py-24 border-t border-white/5 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-20 space-y-6">
               <motion.div 
                 whileHover={{ scale: 1.05, rotate: 5 }}
                 className="w-20 h-20 border border-gold-900/30 rounded-full flex items-center justify-center p-4 bg-gold-950/20"
               >
                  <Landmark className="text-gold-500" size={40} />
               </motion.div>
               <div className="space-y-2">
                 <h2 className="font-display text-3xl tracking-[0.4em] uppercase text-gold-200">Finestra Wealth</h2>
                 <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">The Architect of Global Prosperity</p>
               </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
              <div className="text-white/20 text-[10px] tracking-widest uppercase">
                © 2026 Finestra Wealth Management. All Rights Reserved.
              </div>
              <div className="flex gap-10">
                <span className="text-white/30 hover:text-gold-400 transition-colors cursor-pointer text-[10px] uppercase tracking-widest">Privacy Policy</span>
                <span className="text-white/30 hover:text-gold-400 transition-colors cursor-pointer text-[10px] uppercase tracking-widest">Terms of Service</span>
                <span className="text-white/30 hover:text-gold-400 transition-colors cursor-pointer text-[10px] uppercase tracking-widest">Global Locations</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </Router>
    </>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`relative py-1 group overflow-hidden`}
    >
      <span className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isActive ? 'text-gold-500' : 'text-white/70 group-hover:text-white'}`}>
        {children}
      </span>
      <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-gold-500 transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
    </Link>
  );
}

// ---------------------------------------------------------
// Services Page & Interactive Cards
// ---------------------------------------------------------

const SERVICES = [
  { id: 'bond', title: 'Bonds', description: 'Fixed-income securities with guaranteed preservation of capital.', icon: <ShieldCheck size={32} /> },
  { id: 'security', title: 'Securities', description: 'Tradable financial assets including equity and debt instruments.', icon: <Landmark size={32} /> },
  { id: 'mutual_fund', title: 'Mutual Funds', description: 'Professionally managed investment funds pooling diverse capital.', icon: <PieChart size={32} /> },
  { id: 'stock', title: 'Stocks', description: 'Direct equity ownership in high-growth enterprise markets.', icon: <TrendingUp size={32} /> },
];

function ServicesPage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleComplete = (serviceId: string) => {
    setActiveCard(null);
    navigate(`/contact?service=${serviceId}`);
  };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display mb-6"
          >
            Our Portfolio of Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto font-serif text-lg"
          >
            Explore our specialized instruments designed to protect and compound your wealth 
            across generations. Click each instrument to explore its structure.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="relative group h-[450px] cursor-pointer"
              onClick={() => setActiveCard(service.id)}
            >
              {/* Advanced Card Structure */}
              <div className="absolute inset-0 bg-[#0e0e0e] border border-white/10 rounded-sm overflow-hidden flex flex-col p-1">
                {/* Decorative Pattern Background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                
                {/* Visual Header / Content Area */}
                <div className="relative h-48 bg-white/5 border border-white/5 overflow-hidden flex items-center justify-center p-8 group-hover:bg-gold-500/5 transition-colors duration-700">
                  <div className="absolute top-2 right-2 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 animate-pulse"></span>
                    <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Grade A-{index + 1}</span>
                  </div>
                  
                  <motion.div 
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="text-gold-500/40 group-hover:text-gold-500 transition-all duration-700"
                  >
                    {React.cloneElement(service.icon as React.ReactElement, { size: 64 })}
                  </motion.div>
                </div>

                {/* Information Section */}
                <div className="flex-1 p-8 flex flex-col justify-between relative bg-gradient-to-b from-transparent to-white/[0.02]">
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <h3 className="text-2xl font-display tracking-widest uppercase text-white/90 group-hover:text-white">{service.title}</h3>
                      <span className="text-[10px] font-mono text-white/20">0{index + 1}</span>
                    </div>
                    <div className="w-full h-[1px] bg-gradient-to-r from-gold-500 to-transparent opacity-30"></div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-white/40 font-serif text-sm leading-relaxed italic group-hover:text-white/60 transition-colors">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-gold-500 opacity-60">Architectural Asset</span>
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="p-2 border border-white/10 rounded-full text-white/20 group-hover:text-gold-400 group-hover:border-gold-500/30 transition-all"
                      >
                         <TrendingUp size={16} />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-t from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Overlays */}
      <AnimatePresence>
        {activeCard === 'bond' && <BondAnimation onClose={() => setActiveCard(null)} onComplete={() => handleComplete('bond')} />}
        {activeCard === 'stock' && <StockAnimation onClose={() => setActiveCard(null)} onComplete={() => handleComplete('stock')} />}
        {activeCard === 'mutual_fund' && <MutualFundAnimation onClose={() => setActiveCard(null)} onComplete={() => handleComplete('mutual_fund')} />}
        {activeCard === 'security' && <SecurityAnimation onClose={() => setActiveCard(null)} onComplete={() => handleComplete('security')} />}
      </AnimatePresence>
    </PageWrapper>
  );
}

// ---------------------------------------------------------
// Special Animations (Bond & Stock)
// ---------------------------------------------------------

function BondAnimation({ onClose, onComplete }: { onClose: () => void; onComplete?: () => void }) {
  const [isSignTriggered, setIsSignTriggered] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [userName, setUserName] = useState('');
  const [tempName, setTempName] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setIsScrolledToBottom(true);
      }
    }
  };

  const handleSign = () => {
    if (!userName || isSigned) return;
    setIsSignTriggered(true);
    // Simulate drawing time
    setTimeout(() => setIsSigned(true), 2000);
  };

  const submitName = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      setUserName(tempName.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/98 overflow-hidden">
      <button 
        className="absolute top-10 right-10 z-[110] text-white/30 hover:text-white transition-all p-2 group"
        onClick={onClose}
      >
        <X size={40} className="group-hover:rotate-90 transition-transform duration-500" />
      </button>

      {/* Atmospheric Background Noise for the Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>

      <motion.div
        initial={{ 
          y: 600, 
          rotateX: 45, 
          rotateY: -10,
          opacity: 0,
          scale: 0.8
        }}
        animate={{ 
          y: 0, 
          rotateX: 0, 
          rotateY: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{ 
          duration: 1.8, 
          ease: [0.19, 1, 0.22, 1]
        }}
        className="relative w-[98%] max-w-5xl h-[94vh] max-h-[1000px] bg-[#fcfaf2] shadow-[0_60px_120px_-20px_rgba(0,0,0,1)] flex flex-col perspective-2000 overflow-hidden rounded-[2px]"
        style={{ 
          backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
        }}
      >
        {/* Paper Texture and Realism Effects */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-multiply"></div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/kraft-paper.png')]"></div>
        
        {/* Deckled Edge Effect */}
        <div className="absolute inset-0 border-[24px] border-[#ede9d0] pointer-events-none opacity-40"></div>
        <div className="absolute inset-[2px] border-[1px] border-gold-900/10 pointer-events-none"></div>

        {/* Global Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none rotate-45">
          <span className="text-9xl font-display uppercase tracking-[1em]">VANTIGO</span>
        </div>
        
        <AnimatePresence>
          {showContent && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex flex-col h-full relative z-10 p-10 md:p-20 lg:p-24"
            >
              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="overflow-y-auto flex-grow custom-scrollbar pr-4 mb-2"
              >
                {/* Header Section */}
                <div className="text-center mb-16 relative">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 2 }}
                    className="flex justify-center mb-6"
                  >
                    <div className="p-4 border border-gold-900/20 rounded-full bg-gold-50/50 backdrop-blur-sm">
                      <Landmark size={60} className="text-gold-900/80" />
                    </div>
                  </motion.div>
                  
                  <h1 className="font-display text-4xl md:text-5xl text-gold-950 tracking-[0.3em] uppercase mb-4">
                    Certificate of Indebtedness
                  </h1>
                  <p className="text-gold-900/40 font-sans text-xs tracking-[0.5em] uppercase font-bold">
                    Series A-2026 // Senior Secured Note
                  </p>
                  
                  <div className="flex items-center justify-center gap-6 mt-10 opacity-60">
                    <div className="h-[1px] w-20 bg-gold-900/30"></div>
                    <div className="text-[10px] text-gold-900 tracking-widest font-sans uppercase">Institutional Grade</div>
                    <div className="h-[1px] w-20 bg-gold-900/30"></div>
                  </div>
                </div>

                {/* Substantive Content */}
                <div className="space-y-12 text-gold-950 font-serif text-xl md:text-2xl leading-[1.8] text-justify max-w-3xl mx-auto italic opacity-90">
                  <p className="indent-12 first-letter:text-5xl first-letter:font-display first-letter:mr-3 first-letter:float-left first-letter:text-gold-900 not-italic font-sans text-sm tracking-wide opacity-100 uppercase pb-4 border-b border-gold-900/10">
                    Terms of Engagement and Fiscal Fidelity
                  </p>
                  
                  <p>
                    This instrument witnesses that for value received, the Undersigned, representing the interests of the custodial board at 
                    <span className="not-italic font-bold text-gold-950 px-1 font-display">Vantigo Wealth Management</span>, 
                    hereby acknowledges the strategic allocation of principal sum into a diversified portfolio of high-grade assets.
                  </p>

                  <p>
                    The Issuer hereby covenants to maintain the integrity of capital through rigorous market surveillance and adaptive yield management protocols. 
                    This obligation is secured by the collective fiscal strength of our sovereign market partners and the institutional heritage of the firm.
                  </p>

                  <p>
                    Participation in this Series A emission subjects the holder to the governing laws of international trust and the proprietary execution frameworks 
                    designed to neutralize systemic volatility while capturing emerging alpha.
                  </p>

                  <p>
                    Verification of this certificate is performed asynchronously via distributed cryptographical audit, ensuring absolute title clarity 
                    and the perpetual preservation of the holder's estate.
                  </p>

                  <div className="py-12 border-y border-gold-900/5 my-12 flex flex-col items-center">
                    <p className="font-sans text-[9px] uppercase tracking-[0.6em] text-gold-900/40 mb-2">Finalization Protocol</p>
                    <p className="text-sm opacity-50">--- Proceed to bottom for authorized manual execution ---</p>
                  </div>

                  <p className="text-lg opacity-80">
                    Executed as a deed and delivered on this day, {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}.
                  </p>
                </div>
              </div>

              {/* Action/Signature Area */}
              <div className="h-[200px] mt-auto flex flex-col items-center justify-end">
                {!isScrolledToBottom ? (
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center gap-2 text-gold-900/30 font-sans text-[10px] tracking-widest uppercase mb-4"
                  >
                    <p>Continue scrolling to unlock signature</p>
                    <motion.div className="w-[1px] h-8 bg-gold-900/20"></motion.div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-xl bg-white/50 backdrop-blur-sm p-8 rounded-sm shadow-inner border border-gold-900/5"
                  >
                    {!userName ? (
                      <form onSubmit={submitName} className="flex flex-col gap-4">
                        <label className="text-[10px] tracking-[0.4em] uppercase text-gold-900/60 font-sans font-bold text-center">Identity Attestation</label>
                        <div className="relative group">
                          <input 
                            type="text" 
                            className="w-full bg-transparent border-b-2 border-gold-950/20 focus:border-gold-900 outline-none text-gold-950 font-script text-3xl px-4 py-2 transition-all text-center"
                            placeholder="Type Your Full Name"
                            value={tempName}
                            onChange={(e) => setTempName(e.target.value)}
                            autoFocus
                          />
                          <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gold-600 hover:text-gold-900 p-2 transition-colors">
                             <User size={24} />
                          </button>
                        </div>
                        <p className="text-center text-[9px] text-gold-900/40 uppercase tracking-widest font-sans">Enter full legal name to proceed to final signing</p>
                      </form>
                    ) : (
                      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                        <div className="space-y-1 text-center md:text-left">
                          <p className="text-gold-900/40 text-[9px] uppercase tracking-widest font-bold">Holder Attestation</p>
                          <h4 className="font-script text-3xl text-gold-950">{userName}</h4>
                        </div>

                        <div className="relative group flex flex-col items-center">
                          <div 
                            className={`relative w-64 h-24 border-b-2 border-gold-900 flex items-center justify-center cursor-crosshair transition-all duration-300 ${!isSignTriggered && 'hover:bg-gold-900/5'}`}
                            onClick={handleSign}
                          >
                            {(isSignTriggered || isSigned) && (
                              <motion.span 
                                className="font-script text-4xl text-[#1a1a1a]"
                                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                                animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                              >
                                {userName}
                              </motion.span>
                            )}

                            {!isSignTriggered && (
                              <div className="flex flex-col items-center gap-2 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
                                <p className="font-sans text-[8px] uppercase tracking-[0.4em] text-gold-950 font-bold">Authorized Signatory</p>
                                <motion.p 
                                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                                  transition={{ repeat: Infinity, duration: 2 }}
                                  className="text-[9px] uppercase text-gold-600"
                                >
                                  Apply Manual Sign
                                </motion.p>
                              </div>
                            )}

                            {isSigned && (
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-8 flex flex-col items-center gap-3 w-full"
                              >
                                <div className="text-center text-gold-900/30 text-[8px] font-mono tracking-widest uppercase">
                                  Hash: {Math.random().toString(16).substring(2, 10)}-{Math.random().toString(16).substring(2, 10)}
                                </div>
                                <button onClick={onComplete} className="px-6 py-2 bg-gold-900 text-[#fcfaf2] text-[10px] uppercase tracking-widest font-bold shadow-lg hover:bg-gold-800 transition-colors rounded-sm pointer-events-auto z-50">
                                  Proceed to Consultation
                                </button>
                              </motion.div>
                            )}
                          </div>
                          <p className="mt-2 text-[9px] text-gold-900/30 font-sans uppercase tracking-[0.2em] font-bold">Signature Witnessed As Deed</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Paper folds and highlights for 3D effect */}
        <div className="absolute top-0 left-0 w-full h-[10px] bg-white opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full h-[10px] bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full shadow-[inset_0_0_150px_rgba(0,0,0,0.06)] pointer-events-none border border-black/5"></div>
        <div className="absolute -left-10 top-0 w-20 h-full bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
        <div className="absolute -right-10 top-0 w-20 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
      </motion.div>
    </div>
  );
}

function MutualFundAnimation({ onClose, onComplete }: { onClose: () => void; onComplete?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/98 overflow-hidden perspective-2000"
    >
      <button 
        className="absolute top-10 right-10 z-[110] text-white/30 hover:text-white transition-all p-2 group"
        onClick={onClose}
      >
        <X size={40} className="group-hover:rotate-90 transition-transform duration-500" />
      </button>

      {/* Decorative Background */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[12vw] font-display uppercase tracking-widest leading-none whitespace-nowrap">Diversified</h2>
      </div>
      
      {/* Background Grid */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[400px] opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'rotateX(75deg) translateY(50px) scale(3)',
          transformOrigin: 'bottom'
        }}
      ></div>

      <div 
        className="relative w-full max-w-6xl h-[600px] flex items-center justify-center preserve-3d"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         {/* Center Core */}
         <motion.div 
            animate={{ rotateX: isHovered ? 20 : 0, rotateY: isHovered ? -20 : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-[500px] h-[500px] flex items-center justify-center preserve-3d"
         >
            {/* Glowing Center */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-40 h-40 bg-gold-500/20 rounded-full blur-3xl"
            ></motion.div>
            
            <motion.div 
              animate={{ rotateZ: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 border border-gold-400/30 rounded-full border-dashed"
            ></motion.div>
            
            <motion.div 
              animate={{ rotateZ: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 border-2 border-gold-500/10 rounded-full border-dotted"
            ></motion.div>

            {/* Core Icon */}
            <div className="relative z-20 w-20 h-20 bg-gradient-to-br from-gold-200 via-gold-500 to-gold-800 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(184,145,38,0.4)] border-4 border-black/50">
               <div className="absolute inset-0 rounded-full bg-white/20 blur-[1px]"></div>
               <PieChart className="text-black/90 relative z-10" size={36} />
            </div>

            {/* Orbiting Assets */}
            {[
              { icon: TrendingUp, radius: 180, angle: 0, label: "Equities", weight: "45%" },
              { icon: ShieldCheck, radius: 180, angle: 90, label: "Treasuries", weight: "25%" },
              { icon: Landmark, radius: 180, angle: 180, label: "Real Estate", weight: "20%" },
              { icon: PieChart, radius: 180, angle: 270, label: "Commodities", weight: "10%" }
            ].map((asset, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 z-10"
                initial={{ rotate: asset.angle, x: "-50%", y: "-50%" }}
                animate={{ rotate: asset.angle + 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                style={{ width: 0, height: 0 }}
              >
                <div style={{ transform: `translateX(${asset.radius}px)` }} className="relative flex flex-col items-center justify-center group cursor-pointer">
                   {/* Connection Line */}
                   <div className="absolute top-1/2 right-full w-[150px] h-[1px] bg-gradient-to-r from-gold-500/40 to-transparent -translate-y-1/2 origin-right"></div>
                   
                   <motion.div 
                     initial={{ rotate: -asset.angle }}
                     animate={{ rotate: -(asset.angle + 360) }}
                     transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                     className="w-14 h-14 bg-black/90 backdrop-blur-md border border-gold-500/40 rounded-full flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-black group-hover:scale-110 transition-all duration-300 z-20 shadow-[0_0_20px_rgba(184,145,38,0.2)]"
                   >
                     <asset.icon size={24} />
                   </motion.div>

                   {/* Label */}
                   <motion.div
                     initial={{ rotate: -asset.angle }}
                     animate={{ rotate: -(asset.angle + 360) }}
                     transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                     className="absolute top-16 flex flex-col items-center pointer-events-none"
                   >
                     <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-mono whitespace-nowrap drop-shadow-md">
                       {asset.label}
                     </span>
                     <span className="text-[8px] uppercase tracking-widest text-gold-500 font-bold mt-1">
                       {asset.weight}
                     </span>
                   </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Additional Outer Orbit Rings */}
            <motion.div 
              animate={{ rotateX: 60, rotateZ: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[450px] h-[450px] border border-white/5 rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ rotateX: -60, rotateZ: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[450px] h-[450px] border border-gold-500/10 rounded-full"
            ></motion.div>
         </motion.div>

         {/* Capital Inflow Particles */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                initial={{ 
                  x: Math.random() > 0.5 ? (Math.random() > 0.5 ? "-10%" : "110%") : Math.random() * 120 - 10 + "%", 
                  y: Math.random() > 0.5 ? (Math.random() > 0.5 ? "-10%" : "110%") : Math.random() * 120 - 10 + "%",
                  opacity: 0,
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{
                  x: "50%",
                  y: "50%",
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
                className="absolute w-1.5 h-1.5 bg-gold-300 rounded-full blur-[1px] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(184,145,38,0.8)]"
              />
            ))}
         </div>

         {/* Left HUD */}
         <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-20 left-10 border-l-2 border-gold-500 pl-6 space-y-4"
          >
            <h3 className="text-xl font-display uppercase tracking-widest text-gold-400">Pool Dynamics</h3>
            <div className="space-y-3">
              {[
                { label: 'Active Capital', val: '$4.2B' },
                { label: 'Yield Variance', val: '±1.2%' },
                { label: 'Liquidity', val: 'Tier 1' }
              ].map(item => (
                <div key={item.label} className="flex flex-col text-[9px] uppercase tracking-widest font-mono">
                  <span className="text-white/30">{item.label}</span>
                  <span className="text-white/80 font-bold text-[11px] mt-0.5">{item.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

         {/* Bottom Text */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center w-full max-w-xl flex flex-col items-center z-50"
          >
            <h2 className="text-4xl font-display uppercase tracking-[0.4em] text-gold-300">Synergistic Pooling</h2>
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent mx-auto my-4"></div>
            <p className="text-white/40 tracking-[0.2em] text-[10px] uppercase font-sans leading-relaxed mb-6">
              Consolidating global capital into a singular, impenetrable matrix of diversified assets. 
              Engineered to neutralize volatility and compound intergenerational wealth.
            </p>
            <button onClick={onComplete} className="px-8 py-3 bg-gold-600 hover:bg-gold-500 text-black text-xs font-bold uppercase tracking-widest transition-colors rounded-sm shadow-[0_0_20px_rgba(184,145,38,0.3)] pointer-events-auto">
              Proceed to Consultation
            </button>
          </motion.div>
      </div>
    </motion.div>
  );
}

function SecurityAnimation({ onClose, onComplete }: { onClose: () => void; onComplete?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const tickers = ["AAPL", "MSFT", "GOOG", "AMZN", "NVDA", "JPM", "V", "JNJ", "WMT", "PG"];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030303] overflow-hidden perspective-2000"
    >
      <button 
        className="absolute top-10 right-10 z-[120] text-white/30 hover:text-white transition-all p-2 group"
        onClick={onClose}
      >
        <X size={40} className="group-hover:rotate-90 transition-transform duration-500" />
      </button>

      {/* Futuristic Background Tickers */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex flex-col justify-around overflow-hidden">
         {[...Array(8)].map((_, i) => (
           <motion.div
             key={`ticker-bg-${i}`}
             animate={{ x: i % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
             transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
             className="whitespace-nowrap font-mono text-[6rem] md:text-[10rem] font-bold text-white uppercase tracking-tighter"
           >
             {tickers.map(t => `${t} ${(Math.random()*100).toFixed(2)} `).join(' • ')} {tickers.map(t => `${t} ${(Math.random()*100).toFixed(2)} `).join(' • ')}
           </motion.div>
         ))}
      </div>

      <div 
        className="relative w-full max-w-6xl h-[700px] flex items-center justify-center perspective-2000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Holographic Bull & Bear Core */}
        <motion.div
           animate={{ 
            rotateY: [0, 360],
            rotateX: isHovered ? 15 : 25,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ 
            rotateY: { duration: 40, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 1, ease: "easeOut" },
            scale: { duration: 0.8, ease: "easeOut" }
          }}
          className="relative w-96 h-96 preserve-3d"
        >
           {/* Center Pivot Sphere */}
           <div className="absolute inset-0 flex items-center justify-center preserve-3d">
             <div className="w-32 h-32 bg-gold-500/20 rounded-full blur-2xl"></div>
             
             {/* Orbiting Paths */}
             <div className="absolute w-72 h-72 border border-white/5 rounded-full" style={{ transform: 'rotateX(90deg)' }}></div>
             <div className="absolute w-80 h-80 border border-dashed border-gold-500/10 rounded-full" style={{ transform: 'rotateX(90deg)' }}></div>
           </div>

           {/* Bull Token */}
           <motion.div 
             animate={{ rotateY: [0, -360] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 preserve-3d"
           >
             <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-32 h-32 preserve-3d">
               {/* Keep Token Upright */}
               <motion.div 
                 animate={{ rotateY: [0, 360] }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="w-full h-full border-[3px] border-gold-400 bg-gold-900/60 backdrop-blur-xl rounded-full shadow-[0_0_40px_rgba(184,145,38,0.6)] flex flex-col items-center justify-center relative overflow-hidden"
               >
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_50%)]"></div>
                 {/* Bull SVG */}
                 <svg width="48" height="48" viewBox="0 0 100 100" className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10">
                   <path d="M10,40 Q10,10 30,10 T50,40 Q70,10 90,10 T90,40 Q90,70 50,90 Q10,70 10,40 Z" fill="none" stroke="#fce38a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                 </svg>
                 <span className="font-display uppercase tracking-widest text-gold-200 mt-2 text-[10px] font-bold z-10">Bull Market</span>
               </motion.div>
             </div>
           </motion.div>

           {/* Bear Token */}
           <motion.div 
             animate={{ rotateY: [180, -180] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 preserve-3d"
           >
             <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-32 h-32 preserve-3d">
               {/* Keep Token Upright */}
               <motion.div 
                 animate={{ rotateY: [180, 540] }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="w-full h-full border border-white/30 bg-black/80 backdrop-blur-xl rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)] flex flex-col items-center justify-center relative overflow-hidden"
               >
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]"></div>
                 {/* Bear SVG */}
                 <svg width="48" height="48" viewBox="0 0 100 100" className="z-10">
                   <path d="M30,60 C30,30 70,30 70,60 C70,80 60,90 50,90 C40,90 30,80 30,60 Z M35,35 L25,15 L45,30 M65,35 L75,15 L55,30" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                 </svg>
                 <span className="font-display uppercase tracking-widest text-white/50 mt-2 text-[10px] font-bold z-10">Bear Market</span>
               </motion.div>
             </div>
           </motion.div>

           {/* Vertical Data Rings to add structure */}
           <motion.div 
             animate={{ rotateX: [0, 360], rotateY: 90 }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dashed border-gold-500/20 rounded-full pointer-events-none preserve-3d"
           ></motion.div>
           <motion.div 
             animate={{ rotateX: [0, -360], rotateY: 45 }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full pointer-events-none preserve-3d"
           ></motion.div>
        </motion.div>

        {/* Global Market Data Overlay */}
        <div className="absolute top-10 left-10 space-y-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="border-l-2 border-gold-500 pl-6"
          >
            <h3 className="text-2xl font-display uppercase tracking-widest text-gold-400">Securities Exchange</h3>
            <p className="text-[10px] font-mono tracking-widest uppercase text-white/40 mt-1">Live Global Order Book</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {[
              { label: 'Daily Traded Volume', val: '$8.4 Trillion', trend: '+2.4%' },
              { label: 'Active Instruments', val: '14,209', trend: 'Global' },
              { label: 'Execution Latency', val: '0.04 ms', trend: 'Optimal' }
            ].map(item => (
              <div key={item.label} className="p-4 bg-white/5 border border-white/5 backdrop-blur-md w-64 group hover:border-gold-500/30 transition-colors cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gold-500/20 group-hover:bg-gold-500 transition-colors"></div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 block mb-1">{item.label}</span>
                <div className="flex items-end justify-between">
                  <span className="text-xl font-display text-white">{item.val}</span>
                  <span className="text-[10px] font-mono text-gold-400">{item.trend}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right side floating data stream */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.8 }}
           className="absolute top-20 right-10 flex flex-col items-end gap-2 text-right pointer-events-none"
        >
          <div className="text-[10px] uppercase tracking-widest text-gold-500/50 mb-4">Live Execution Stream</div>
          {[...Array(12)].map((_, i) => (
             <motion.div 
               key={i}
               animate={{ opacity: [0, 1, 0], y: [10, -10] }}
               transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
               className="font-mono text-[9px] text-white/60 tracking-wider flex gap-4"
             >
               <span className="text-white/30">{new Date().toISOString().substring(11,23)}</span>
               <span>{tickers[Math.floor(Math.random()*tickers.length)]}</span>
               <span className={Math.random() > 0.5 ? 'text-green-400' : 'text-red-400'}>
                 {Math.random() > 0.5 ? '+' : '-'}{(Math.random()*2).toFixed(2)}
               </span>
               <span className="text-white/20">{(Math.random()*1000).toFixed(0)} SHARES</span>
             </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center w-full max-w-2xl px-10 py-8 bg-black/60 backdrop-blur-xl border-t border-gold-900/30 flex flex-col items-center z-50"
        >
           <h2 className="text-3xl font-display uppercase tracking-[0.3em] text-gold-200">High-Velocity Execution</h2>
           <p className="mt-4 text-[10px] font-sans uppercase tracking-[0.2em] text-white/40 leading-relaxed mb-6">
             Direct access to global liquidity pools. Execute high-volume block trades with absolute precision 
             and zero market impact across global equity and debt markets.
           </p>
           <button onClick={onComplete} className="px-8 py-3 bg-gold-600 hover:bg-gold-500 text-black text-xs font-bold uppercase tracking-widest transition-colors rounded-sm shadow-[0_0_20px_rgba(184,145,38,0.3)] pointer-events-auto">
             Proceed to Consultation
           </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

function StockAnimation({ onClose, onComplete }: { onClose: () => void; onComplete?: () => void }) {
  const [phase, setPhase] = useState<'intro' | 'active'>('intro');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPhase('active'), 800);
    return () => clearTimeout(timer);
  }, []);

  const chartData = [30, 45, 35, 60, 50, 80, 70, 100, 90, 120, 110, 150];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 perspective-2000 overflow-hidden"
    >
      <button 
        className="absolute top-10 right-10 z-[110] text-white/50 hover:text-white transition-colors p-2"
        onClick={onClose}
      >
        <X size={40} />
      </button>

      <div 
        className="relative w-full max-w-6xl h-[600px] flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 atmosphere opacity-30"></div>

        {/* 3D Grid Floor */}
        <div 
          className="absolute inset-x-0 bottom-0 h-[300px] opacity-20 pointer-events-none"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: 'rotateX(75deg) translateY(50px) scale(3)',
            transformOrigin: 'bottom'
          }}
        ></div>

        <div className="relative w-full h-full flex flex-col items-center justify-center preserve-3d">
          
          {/* Legend/HUD */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-10 left-10 text-left border-l-2 border-gold-500 pl-4"
          >
            <h2 className="text-3xl font-display uppercase tracking-widest text-gold-400">Market Dynamics</h2>
            <p className="font-mono text-xs text-white/40 tracking-widest">Real-time projection // Volatility: Low</p>
          </motion.div>

          <motion.div 
            className="preserve-3d flex items-end justify-center gap-2 md:gap-6 h-[400px] mt-20"
            animate={{ 
              rotateY: isHovered ? [0, 45, -45, 0] : [0, 25, -25, 0],
              rotateX: isHovered ? 20 : 15
            }}
            transition={{ 
              duration: isHovered ? 8 : 12, 
              ease: "easeInOut", 
              repeat: Infinity 
            }}
          >
            <svg viewBox="0 0 1000 400" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="lineGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#b89126" />
                  <stop offset="100%" stopColor="#f5f2d1" />
                </linearGradient>
              </defs>
              
              {/* Animated Trend Line - Corrected coordinates */}
              {phase === 'active' && (
                <motion.path
                  d={`M ${chartData.map((h, i) => `${i * (1000 / (chartData.length - 1))}, ${400 - h * 2.5}`).join(' L ')}`}
                  fill="transparent"
                  stroke="url(#lineGrad)"
                  strokeWidth="3"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="svg-chart-line"
                />
              )}
            </svg>

            {chartData.map((h, i) => (
              <div 
                key={i} 
                className="relative group preserve-3d"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  initial={{ height: 0, opacity: 0, translateZ: 0 }}
                  animate={{ 
                    height: h * 2.5, 
                    opacity: hoveredIndex === i ? 1 : 0.8, 
                    translateZ: i * 15,
                    scale: hoveredIndex === i ? 1.05 : 1
                  }}
                  transition={{ 
                    height: { delay: i * 0.05, duration: 0.8 },
                    scale: { duration: 0.2 }
                  }}
                  className="w-4 md:w-10 bg-gradient-to-t from-gold-900/40 via-gold-600/60 to-gold-400 border-x border-t border-white/10 transition-all duration-300"
                  style={{
                    boxShadow: hoveredIndex === i 
                      ? `0 0 40px rgba(184, 145, 38, 0.6)`
                      : `0 -10px 30px rgba(184, 145, 38, ${h / 300})`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                   {/* 3D Side face */}
                   <div className="absolute top-0 left-full w-4 h-full bg-gold-900/20 origin-left rotate-y-90"></div>
                   
                   {/* Tooltip */}
                   <AnimatePresence>
                     {hoveredIndex === i && (
                       <motion.div 
                         initial={{ opacity: 0, y: 10, scale: 0.8 }}
                         animate={{ opacity: 1, y: -40, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.8 }}
                         className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded-sm font-mono text-xs whitespace-nowrap z-50 shadow-xl pointer-events-none"
                       >
                         <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                         <span className="font-bold">{h} units</span>
                       </motion.div>
                     )}
                   </AnimatePresence>

                   <div className="absolute -top-7 left-1/2 -translate-x-1/2 font-mono text-[10px] text-gold-300 opacity-40 group-hover:opacity-100 transition-opacity">
                      {(h / 2).toFixed(1)}%
                   </div>
                </motion.div>
                
                {/* Floor reflection/dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: hoveredIndex === i ? 1.5 : 1,
                    backgroundColor: hoveredIndex === i ? 'rgba(184, 145, 38, 0.8)' : 'rgba(184, 145, 38, 0.3)'
                  }}
                  transition={{ delay: (i * 0.1) + 1 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full blur-[1px] transition-colors"
                ></motion.div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-center mt-4 flex flex-col items-center relative z-50"
          >
            <h3 className="text-5xl font-display italic text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">Vantigo Projections</h3>
            <div className="flex gap-4 justify-center mt-4 mb-8">
               {['High Yield', 'Risk Managed', 'AI Curated'].map(tag => (
                 <span key={tag} className="text-[9px] uppercase tracking-[0.4em] border border-white/20 px-3 py-1 text-white/50">{tag}</span>
               ))}
            </div>
            <button onClick={onComplete} className="px-8 py-3 bg-gold-600 hover:bg-gold-500 text-black text-xs font-bold uppercase tracking-widest transition-colors rounded-sm shadow-[0_0_20px_rgba(184,145,38,0.3)] pointer-events-auto">
              Proceed to Consultation
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "110%", 
              opacity: 0, 
              scale: Math.random() * 0.5 + 0.5 
            }}
            animate={{ 
              y: "-10%", 
              opacity: [0, 0.4, 0],
              x: (Math.random() * 100 - 10) + "%"
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute w-1 h-1 bg-gold-400 rounded-full blur-[1px]"
          />
        ))}
      </div>
    </motion.div>
  );
}

