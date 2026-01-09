import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-900/50 backdrop-blur-xl bg-brand-black/80"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            {/* The Glow Effect */}
            <div className="absolute -inset-1 bg-brand-blue/50 rounded-xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
            
            {/* The Logo Itself */}
            <a href="#" className="relative block w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <img 
                src="/logo.png" 
                alt="Zero Shot Logo" 
                className="w-full h-full object-cover" 
              />
            </a>
          </div>
          <div>
            <div className="text-brand-text font-bold text-xl tracking-tight">Zero Shot</div>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex items-center gap-6">
          
          {/* --- CHANGE START: These links are now hidden on mobile --- */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#process" 
              className="text-gray-400 hover:text-brand-text transition-colors font-medium cursor-pointer"
            >
              Process
            </a>
            
            <a 
              href="#features" 
              className="text-gray-400 hover:text-brand-text transition-colors font-medium cursor-pointer"
            >
              Features
            </a>
          </div>
          {/* --- CHANGE END --- */}
          
          {/* This button stays visible on ALL screens */}
          <a 
            href="#pricing" 
            className="px-6 py-2.5 bg-brand-blue/10 hover:bg-brand-blue/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] text-brand-blue border border-brand-blue/30 rounded-lg font-semibold transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  );
}