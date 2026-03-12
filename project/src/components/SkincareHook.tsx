import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function SkincareHook() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-16 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Headers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-blue-500 tracking-wider uppercase mb-4 block">
            Competitor Case Study
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Viral Quality. <span className="text-blue-500">Zero Filming.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            See how we generate scroll-stopping UGC for Skincare brands without shipping a product.
          </p>
        </motion.div>

        {/* PHONE CONTAINER WRAPPER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group mb-12 w-full max-w-[320px] mx-auto"
        >
          {/* Background Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-[3rem] opacity-20 group-hover:opacity-40 blur-3xl transition-all duration-500"></div>

          {/* THE PHONE FRAME (Thick Borders) */}
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden border-[8px] border-gray-900 shadow-2xl z-10">
            
            {/* Aspect Ratio Container */}
            <div className="aspect-[9/16] bg-gray-900 relative">
              
              {/* LIVE BADGE */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[10px] text-white/90">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                LIVE_PREVIEW
              </div>

              {/* VIDEO - SOURCED TO SAMPLE-VIDEO.MP4 */}
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted={false}
                loop
                playsInline
                controls={true}
              >
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Reflection/Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </motion.div>

        {/* The Only Exit: Tally Payment Button */}
        <div className="text-center w-full mt-4">
          <motion.a
            href="https://tally.so/r/VLQAzN"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-3 w-full max-w-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            <span>Get 3 Full Ads ($45)</span>
            <Play className="w-5 h-5 fill-current" />
          </motion.a>

          {/* MICRO COPY */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-500 font-mono text-sm mt-6 uppercase tracking-widest"
          >
            24H Delivery • Full Ownership
          </motion.p>
        </div>

      </div>
    </div>
  );
}