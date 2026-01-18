import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VideoDemo from './components/VideoDemo';
import HowItWorks from './components/HowItWorks';
import BentoGrid from './components/BentoGrid';
import Pricing from './components/Pricing';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-brand-black text-brand-text overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative">
        <Navigation />
        <Hero />
        <VideoDemo />
        <HowItWorks />
        <BentoGrid />
        <Pricing />

        {/* UPDATED FOOTER SECTION */}
        <footer className="border-t border-gray-900/50 bg-black py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Side: Live Status */}
            <div className="flex items-center gap-3">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-gray-600 font-mono text-sm">
                © {currentYear} Zero Shot. All systems operational.
              </span>
            </div>

            {/* Right Side: Links */}
            <div className="flex items-center gap-8 text-gray-600 font-mono text-sm">

              {/* Hidden for now, will add later
              <a href="#" className="hover:text-brand-blue transition-colors duration-200">Terms</a>
              <a href="#" className="hover:text-brand-blue transition-colors duration-200">Privacy</a>
              */}

              {/* IMPORTANT: This opens the user's email app when clicked */}
              <a 
                href="mailto:zeroshotagency@gmail.com" 
                className="hover:text-brand-blue transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;