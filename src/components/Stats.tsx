import React from 'react';
import { motion } from 'motion/react';

const Stats = () => {
  const stats = [
    { label: 'Hội viên', value: '500+' },
    { label: 'Năm hoạt động', value: '15' },
    { label: 'Chương trình/ tháng', value: '12' },
    { label: 'Hội thảo, sự kiện/ năm', value: '40' },
    { label: 'Người tham gia sự kiện/ năm', value: '5000+' },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="bg-white py-12 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-red-700 mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-amber-600 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;
