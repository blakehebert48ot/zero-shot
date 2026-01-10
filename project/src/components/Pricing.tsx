import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';

const features = [
  'Photo-to-Video Synthesis',
  'Optimized for TikTok/Reels (15-45s)', // Added this line
  'Viral Hook Scripting',
  'Human Quality Control',
  'Commercial Rights (100%)',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-sm text-brand-blue tracking-wider">FLAT RATE PRICING</span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-text mt-4">Simple. Transparent.</h2>
          <p className="text-gray-400 mt-4 text-lg">No monthly retainers. Just pay per asset.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative border-2 border-gray-800 rounded-3xl p-10 bg-gradient-to-b from-gray-900 to-black backdrop-blur-xl hover:border-brand-blue/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-purple-500/5 rounded-3xl"></div>

            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-800">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold border border-brand-blue/20">MOST POPULAR</span>
                  </div>
                  <h3 className="text-3xl font-bold text-brand-text">Single Asset</h3>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold text-brand-text">$45</div>
                  
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-5 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-brand-blue" />
                    </div>
                    <span className="text-gray-300 text-lg font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA BUTTON */}
              <motion.a
                href="https://buy.stripe.com/6oUbJ2gwe3dec8jbGQ8og01" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-brand-blue hover:bg-blue-600 text-white font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/button cursor-pointer shadow-lg shadow-brand-blue/20"
              >
                <span>Start Order</span>
                <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
              </motion.a>

              <p className="text-center text-gray-500 text-sm mt-6 font-mono flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                DELIVERED IN 24 HOURS
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}