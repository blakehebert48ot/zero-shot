import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Sample() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-16 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Headers */}
        <div className="text-center mb-12 mt-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm text-blue-500 tracking-wider uppercase mb-4 block"
          >
            Zero Shot Agency: System Case Study
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Viral Quality. <span className="text-blue-500">Zero Filming.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We turn your static product photos into hyper-realistic UGC video ads in 24 hours. No shipping. No creators. No waiting.
          </motion.p>
        </div>

        {/* PHONE CONTAINER WRAPPER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group mb-12 w-full max-w-[320px] mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-[3rem] opacity-20 group-hover:opacity-40 blur-3xl transition-all duration-500"></div>

          <div className="relative bg-black rounded-[2.5rem] overflow-hidden border-[8px] border-gray-900 shadow-2xl z-10">
            
            <div className="aspect-[9/16] bg-gray-900 relative">
              
              {/* UPDATED BADGE: System vibe instead of marketing vibe */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[10px] text-white/90">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                STANDARD_OUTPUT_V1
              </div>

              <video
                className="w-full h-full object-cover"
                loop
                playsInline
                controls
                controlsList="nofullscreen"
                disablePictureInPicture
                preload="metadata"
              >
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </motion.div>

        {/* The Checkout Button */}
        <div className="text-center w-full mt-2">
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

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-500 font-mono text-sm mt-6 uppercase tracking-widest"
          >
            24H Delivery • Full Ownership
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-800 w-full text-center"
        >
          <p className="text-gray-600 text-sm">
            © 2026 Zero Shot Agency. <a href="/" className="text-gray-400 hover:text-white transition-colors underline decoration-gray-700 underline-offset-4">Visit Main Website</a>
          </p>
        </motion.div>

      </div>
    </div>
  );
}