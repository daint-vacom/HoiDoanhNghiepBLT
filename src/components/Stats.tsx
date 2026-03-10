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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-white py-12 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="text-4xl font-bold text-red-700 mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-amber-600 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
