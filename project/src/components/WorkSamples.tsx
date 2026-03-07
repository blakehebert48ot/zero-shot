import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const samples = [
  {
    category: 'E-Commerce',
    title: 'The Viral Hook',
    video: '/demo-video.mp4', // You will replace these with real filenames later
  },
  {
    category: 'SaaS',
    title: 'Problem/Solution',
    video: '/demo-video.mp4',
  },
  {
    category: 'Digital Product',
    title: 'UGC Testimonial',
    video: '/demo-video.mp4',
  },
];

export default function WorkSamples() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-brand-blue tracking-wider">THE ARCHIVE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Recent Winning Creatives</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what the "Zero Shot" protocol looks like in action. 
            All videos generated 100% by AI from static images.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {samples.map((sample, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group cursor-pointer"
            >
              {/* Phone Frame */}
              <div className="relative aspect-[9/16] bg-gray-900 rounded-[2rem] overflow-hidden border-4 border-gray-800 shadow-2xl transition-all duration-300 group-hover:border-brand-blue/50 group-hover:shadow-brand-blue/20">
                
                {/* Video Placeholder (Replace with real video tags later) */}
                <video
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <source src={sample.video} type="video/mp4" />
                </video>

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <span className="text-xs font-mono text-brand-blue mb-1 block">{sample.category}</span>
                  <h3 className="text-xl font-bold text-white">{sample.title}</h3>
                </div>

                {/* Play Button Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 border border-white/20">
                   <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}