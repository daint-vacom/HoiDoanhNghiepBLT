import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Activities from '../components/Activities';
import News from '../components/News';
import PartnerMarquee from '../components/PartnerMarquee';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Activities />
      
      {/* Promotional Banner Section */}
      <section className="py-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" 
                alt="Banner 1" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-red-900/40 flex items-center justify-center">
                <span className="text-white text-2xl font-bold uppercase tracking-widest border-2 border-white px-6 py-2">Ban xây dựng</span>
              </div>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Banner 2" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-red-900/40 flex items-center justify-center">
                <span className="text-white text-2xl font-bold uppercase tracking-widest border-2 border-white px-6 py-2">Ban thương mại dịch vụ</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <News />

      <PartnerMarquee />

      {/* Bottom Banner Section */}
      <section className="pb-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative h-64 rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Large Banner" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-transparent flex flex-col justify-center px-12">
              <h2 className="text-3xl font-bold text-white mb-4">Gia nhập BLTBA ngay hôm nay</h2>
              <p className="text-red-100 max-w-md mb-6">Trở thành một phần của cộng đồng doanh nghiệp năng động nhất khu vực Bình Lợi Trung.</p>
              <button className="bg-white text-red-900 font-bold py-3 px-8 rounded-full w-fit hover:bg-red-50 transition-colors">
                Đăng ký tham gia
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
