import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VSLModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VSLModal({ isOpen, onClose }: VSLModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop (Dark Background) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-5xl bg-black border border-gray-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-brand-blue rounded-full text-white transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
               
               {/* THE REAL VSL VIDEO PLAYER */}
               <video 
                 className="w-full h-full object-contain"
                 src="/vsl.mp4" 
                 autoPlay
                 controls
                 playsInline
               >
                 Your browser does not support the video tag.
               </video>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}