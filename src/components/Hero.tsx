import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      type: 'intro',
      title: 'HỘI DOANH NGHIỆP BÌNH LỢI TRUNG - BLTBA',
      subtitle: 'KẾT NỐI - PHÁT TRIỂN - BỀN VỮNG',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      buttonText: 'Về chúng tôi'
    },
    {
      type: 'member',
      name: 'Tập đoàn Samsung Vina',
      description: 'Hội viên Kim cương - Đồng hành cùng sự phát triển công nghệ và đổi mới sáng tạo tại khu vực Bình Lợi Trung.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      align: 'right',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png'
    },
    {
      type: 'member',
      name: 'Ngân hàng Vietcombank',
      description: 'Hội viên Chiến lược - Cung cấp các giải pháp tài chính toàn diện cho cộng đồng doanh nghiệp BLTBA.',
      image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop',
      align: 'left',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Vietcombank_logo.svg/2560px-Vietcombank_logo.svg.png'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <section className="relative h-[600px] overflow-hidden pt-20 bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={slides[currentSlide].image} 
              alt="Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
            {slides[currentSlide].type === 'intro' ? (
              <div className="w-full text-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.2 }
                    }
                  }}
                >
                  <motion.h1 
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.p 
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    className="text-xl md:text-2xl text-gray-200 mb-8 font-light uppercase tracking-widest"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-red-700 text-white border border-amber-400/50 px-8 py-3 rounded flex items-center mx-auto hover:bg-red-600 transition-all group"
                    >
                      {slides[currentSlide].buttonText}
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            ) : (
              <div className={`w-full flex ${slides[currentSlide].align === 'right' ? 'justify-end' : 'justify-start'}`}>
                <motion.div 
                  initial={{ opacity: 0, x: slides[currentSlide].align === 'right' ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`max-w-xl ${slides[currentSlide].align === 'right' ? 'text-right' : 'text-left'} bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/10`}
                >
                  <div className={`flex items-center mb-2 ${slides[currentSlide].align === 'right' ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-amber-400 text-sm font-bold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded">Hội viên</span>
                  </div>
                  <div className={`flex items-center mb-4 ${slides[currentSlide].align === 'right' ? 'justify-end' : 'justify-start'}`}>
                    <img src={slides[currentSlide].logo} alt="Logo" className="h-12 object-contain brightness-0 invert" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {slides[currentSlide].name}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                  <button className={`text-amber-400 font-bold flex items-center hover:text-amber-300 transition-colors ${slides[currentSlide].align === 'right' ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}>
                    Tìm hiểu thêm <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-black/50 transition-all border border-white/10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-black/50 transition-all border border-white/10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-amber-400 w-8' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
