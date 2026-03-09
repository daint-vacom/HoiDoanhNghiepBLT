import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Business Building" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            HỘI DOANH NGHIỆP BÌNH LỢI TRUNG - BLTBA
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light uppercase tracking-widest">
            KẾT NỐI - PHÁT TRIỂN - BỀN VỮNG
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-700/80 backdrop-blur-sm text-white border border-amber-400/50 px-8 py-3 rounded flex items-center mx-auto hover:bg-red-600 transition-all group"
          >
            Về chúng tôi
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Slider Indicators (Static for now) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-white"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
      </div>
    </section>
  );
};

export default Hero;
