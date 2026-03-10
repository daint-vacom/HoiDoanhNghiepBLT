import React from 'react';
import { motion } from 'motion/react';

const PartnerMarquee = () => {
  const partners = [
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' },
    { name: 'VinGroup', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vingroup_logo.svg/1200px-Vingroup_logo.svg.png' },
    { name: 'Masan', logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/d/d1/Logo_Masan_Group.svg/1200px-Logo_Masan_Group.svg.png' },
    { name: 'Vietcombank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Vietcombank_logo.svg/2560px-Vietcombank_logo.svg.png' },
    { name: 'FPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo.svg/1200px-FPT_logo.svg.png' },
    { name: 'Viettel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Viettel_logo_2021.svg/1200px-Viettel_logo_2021.svg.png' },
    { name: 'Vinamilk', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Vinamilk_logo.svg/1200px-Vinamilk_logo.svg.png' },
    { name: 'PetroVietnam', logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/52/Petrovietnam_logo.svg/1200px-Petrovietnam_logo.svg.png' },
  ];

  // Duplicate the list for seamless looping
  const duplicatedPartners = [...partners, ...partners];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="text-3xl font-bold text-red-800 uppercase tracking-wider">
            Đối tác chiến lược
          </h2>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative flex overflow-x-hidden py-4"
      >
        <motion.div 
          className="flex whitespace-nowrap items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="mx-12 flex items-center justify-center w-48 h-24 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PartnerMarquee;
