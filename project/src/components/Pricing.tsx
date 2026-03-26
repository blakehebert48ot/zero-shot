import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Clock } from 'lucide-react';

// UPDATED FEATURES TO SELL "FULL LENGTH" & "FINISHED"
const features = [
  {
    text: '3 Full-Length Video Ads',
    subtext: 'We don\'t do short clips. You get complete 15-25s commercials.'
  },
  {
    text: 'Fully Edited & Ready to Post',
    subtext: null
  },
  {
    text: 'Optimized for TikTok/Reels (9:16)',
    subtext: null
  },
  {
    text: 'Viral Hook Scripting Included',
    subtext: null
  },
  {
    text: '100% Commercial Rights',
    subtext: null
  },
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
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">Simple. Transparent.</h2>
          <p className="text-gray-400 mt-4 text-lg">No monthly retainers. Just pay per batch.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto relative group"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative border-2 border-gray-800 rounded-3xl p-8 md:p-10 bg-gradient-to-b from-gray-900 to-black backdrop-blur-xl hover:border-brand-blue/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-purple-500/5 rounded-3xl"></div>

            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-800">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold border border-brand-blue/20 shadow-[0_0_10px_rgba(37,99,235,0.2)]">
                      MOST POPULAR
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Viral Tester Pack</h3>
                  <div className="flex items-center gap-2 mt-2 text-green-400 text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    <span>15-25 Seconds Per Ad</span>
                  </div>
                </div>
                {/* UPDATED PRICING BLOCK */}
                <div className="text-right">
                  <div className="text-5xl font-bold text-white">$45</div>
                  <div className="text-brand-blue font-bold text-sm mt-1 uppercase tracking-wider">Beta Rate</div>
                  <div className="text-gray-500 text-xs font-mono mt-1 line-through">Normally $150</div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-6 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <span className={`text-lg font-medium ${index < 2 ? 'text-white font-bold' : 'text-gray-300'}`}>
                        {feature.text}
                      </span>
                      {feature.subtext && (
                        <p className="text-gray-500 text-sm mt-0.5 leading-snug">{feature.subtext}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA BUTTON */}
              <motion.a
                href="https://tally.so/r/VLQAzN"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-brand-blue hover:bg-blue-600 text-white font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/button cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                <span>Get My 3 Full Ads</span>
                <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
              </motion.a>

              {/* UPDATED FOOTER / GUARANTEE */}
              <div className="mt-6 text-center flex flex-col items-center gap-3">
                <p className="text-green-500 text-sm font-bold tracking-wide">
                  Zero Risk: If you don't love all 3 ads, we redo them free.
                </p>
                <div>
                  <p className="text-gray-500 text-sm font-mono flex items-center justify-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    DELIVERED IN 24 HOURS
                  </p>
                  <p className="text-xs text-gray-500 font-bold tracking-wide uppercase">
                    ONE-TIME PAYMENT • NO SUBSCRIPTION
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}