import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VideoDemo from './components/VideoDemo';
import HowItWorks from './components/HowItWorks';
import BentoGrid from './components/BentoGrid';
import Pricing from './components/Pricing';

function App() {
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

        <footer className="border-t border-gray-900 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-600 font-mono text-sm">
              © 2024 Zero Shot. All systems operational.
            </div>
            <div className="flex items-center gap-6 text-gray-600 font-mono text-sm">
              <a href="#" className="hover:text-brand-blue transition-colors">Terms</a>
              <a href="#" className="hover:text-brand-blue transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-blue transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
