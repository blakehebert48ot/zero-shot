import { motion } from 'framer-motion';
import { Image, Sparkles, Download } from 'lucide-react';

const steps = [
  {
    icon: Image,
    label: 'STEP_01',
    title: '1. Upload Assets',
    description: 'Send us a product URL or a few photos. No shipping required. We work with what you have.',
  },
  {
    icon: Sparkles,
    label: 'STEP_02',
    title: '2. We Generate Variations',
    description: 'We script and generate 3 unique viral hooks designed to stop the scroll and lower your CPA.',
  },
  {
    icon: Download,
    label: 'STEP_03',
    title: '3. Launch & Scale',
    description: 'Download your ads tomorrow. 100% usage rights. Drag and drop them straight into TikTok Ads Manager.',
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* NEW HEADLINE COPY */}
          <span className="font-mono text-sm text-brand-blue tracking-wider">NO SHIPPING • NO WAITING</span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-text mt-4">From Photo to Ad in 24 Hours.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* This is the gradient style you liked */}
              <div className="border border-gray-800 rounded-2xl p-8 hover:border-brand-blue/50 transition-all duration-300 bg-gradient-to-b from-gray-900/50 to-transparent backdrop-blur-sm h-full">
                <div className="flex items-center justify-between mb-6">
                  {/* CHANGED: Made text blue and slightly bolder */}
                  <span className="font-mono text-sm text-brand-blue font-bold tracking-widest">{step.label}</span>
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-text mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-brand-blue/50 to-transparent"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"></div>
    </section>
  );
}