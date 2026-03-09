import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VideoDemo from './components/VideoDemo';
import HowItWorks from './components/HowItWorks';
import BentoGrid from './components/BentoGrid';
import Pricing from './components/Pricing';
import VSLModal from './components/VSLModal';

function App() {
  const currentYear = new Date().getFullYear();
  const [isVSLOpen, setIsVSLOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-black text-brand-text overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative">
        <Navigation />
        
        <Hero onOpenVSL={() => setIsVSLOpen(true)} />
        
        <div id="demo">
          <VideoDemo />
        </div>
        
        <HowItWorks />
        <BentoGrid />
        <Pricing />

        <footer className="border-t border-gray-900/50 bg-black py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-gray-600 font-mono text-sm">
                © {currentYear} Zero Shot. All systems operational.
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-gray-600 font-mono text-sm">
              <span className="text-gray-400">Founder & Lead Developer: Blake Hebert</span>
              <span className="text-gray-400 select-all cursor-text">
                Contact: zeroshotagency@gmail.com
              </span>
            </div>
          </div>
        </footer>

        <VSLModal isOpen={isVSLOpen} onClose={() => setIsVSLOpen(false)} />
      </div>
    </div>
  );
}

export default App;