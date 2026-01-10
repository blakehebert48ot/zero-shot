import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoDemo() {
  return (
    <section id="demo" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-brand-text mb-6">
            Real Results. <span className="text-brand-blue">Zero Filming.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Watch how we turn static product photos and scripts into high-retention video ads. 
          </p>
        </motion.div>

        {/* PHONE CONTAINER WRAPPER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group mb-12 max-w-[300px] mx-auto"
        >
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue via-purple-500 to-brand-blue rounded-[3rem] opacity-20 group-hover:opacity-40 blur-3xl transition-all duration-500"></div>

          {/* THE PHONE FRAME (Thick Borders) */}
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden border-[8px] border-gray-900 shadow-2xl z-10">
            
            {/* Aspect Ratio Container */}
            <div className="aspect-[9/16] bg-gray-900 relative">
              
              {/* LIVE BADGE (Now Inside) */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[10px] text-white/90">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                LIVE_PREVIEW
              </div>

              {/* VIDEO */}
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls={false} // Clean look (no controls)
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Reflection/Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-16">
          <motion.a
            href="#pricing"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-10 py-5 bg-brand-blue hover:bg-blue-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
          >
            <span>Start Order</span>
            <Play className="w-5 h-5" />
          </motion.a>

          <p className="text-gray-600 font-mono text-sm mt-6">
            Stop shipping products to creators. Start generating.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"></div>
    </section>
  );
}