import { motion } from 'framer-motion';
import { Zap, Clock, Brain, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Hyper-Real Motion',
    description: 'We turn static JPEGs into fluid, realistic video motion that looks like high-budget camera work.',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: Clock,
    title: '24h Turnaround',
    description: 'From file upload to finished asset in one day. Speed that keeps up with viral trends.',
    gradient: 'from-brand-blue/10 to-purple-500/10',
  },
  {
    icon: Brain,
    title: 'Algorithmic Scripting',
    description: 'We generate scripts optimized for retention, specifically designed to stop the scroll in 3 seconds.',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    icon: Shield,
    title: 'Commercial Rights',
    description: '100% ownership. Use your generated assets for paid ads, organic socials, or anywhere you want.',
    gradient: 'from-pink-500/10 to-blue-500/10',
  },
];

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
          <span className="font-mono text-sm text-brand-blue tracking-wider">CORE FEATURES</span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-text mt-4">The AI Advantage</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

              <div className="relative border border-gray-800 rounded-2xl p-8 backdrop-blur-xl bg-gray-900/40 hover:border-brand-blue/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl"></div>

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-brand-blue" />
                  </div>

                  <h3 className="text-2xl font-bold text-brand-text mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"></div>
    </section>
  );
}