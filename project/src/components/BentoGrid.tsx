import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-sm text-brand-blue tracking-wider">THE NEW STANDARD</span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-text mt-4">Stop Shipping Products.</h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Traditional content creation is slow, expensive, and unreliable. We fixed it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* THE OLD WAY (LOSER) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-10 rounded-3xl border border-gray-800 bg-black/40 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-gray-400 mb-2">Traditional UGC</h3>
            <p className="text-gray-500 mb-8 text-sm">The "Old Way" of doing things</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 opacity-50">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div>
                  <p className="text-white font-medium">Wait 2 weeks for shipping</p>
                  <p className="text-gray-500 text-sm mt-1">You have to mail physical products to creators.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 opacity-50">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div>
                  <p className="text-white font-medium">Negotiate with creators</p>
                  <p className="text-gray-500 text-sm mt-1">Endless DMs, ghosting, and "updated rates."</p>
                </div>
              </div>

              <div className="flex items-start gap-4 opacity-50">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div>
                  <p className="text-white font-medium">Inconsistent Quality</p>
                  <p className="text-gray-500 text-sm mt-1">Bad lighting and shaky cameras are common.</p>
                </div>
              </div>

               <div className="flex items-start gap-4 opacity-50">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div>
                  <p className="text-white font-medium">$300+ Per Video</p>
                  <p className="text-gray-500 text-sm mt-1">Expensive retainers and hidden fees.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* THE ZERO SHOT WAY (WINNER) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-10 rounded-3xl border border-brand-blue/30 bg-gradient-to-b from-brand-blue/5 to-transparent backdrop-blur-sm shadow-[0_0_50px_rgba(59,130,246,0.1)]"
          >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 rounded-full bg-brand-blue text-white text-xs font-bold tracking-wider shadow-lg shadow-brand-blue/20">
                ZERO SHOT
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">The AI Protocol</h3>
            <p className="text-brand-blue mb-8 text-sm">The new standard for growth</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-brand-blue/30">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold">Instant Upload</p>
                  <p className="text-gray-400 text-sm mt-1">Just upload a JPEG. No shipping required.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-brand-blue/30">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold">24 Hour Turnaround</p>
                  <p className="text-gray-400 text-sm mt-1">Get your finished ad the very next day.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-brand-blue/30">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold">Studio Perfection</p>
                  <p className="text-gray-400 text-sm mt-1">Optimized lighting, fluid motion, and viral scripting.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-brand-blue/30">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold">$45 Flat Rate</p>
                  <p className="text-gray-400 text-sm mt-1">Pay per asset. No contracts. No nonsense.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}