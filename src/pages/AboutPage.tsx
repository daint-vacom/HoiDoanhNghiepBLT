import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Award, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-red-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight"
          >
            Giới thiệu BLTBA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-red-100 max-w-3xl mx-auto"
          >
            Hội Doanh nghiệp Quận Bắc Từ Liêm - Nơi hội tụ, kết nối và phát triển cộng đồng doanh nghiệp vững mạnh.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-red-700 mb-6 uppercase">Lịch sử hình thành</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Hội Doanh nghiệp Quận Bắc Từ Liêm (BLTBA) được thành lập với sứ mệnh tạo ra một sân chơi chung, một mái nhà chung cho cộng đồng doanh nghiệp đang hoạt động trên địa bàn quận.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Trải qua quá trình hình thành và phát triển, BLTBA đã không ngừng lớn mạnh, thu hút đông đảo hội viên tham gia, trở thành cầu nối vững chắc giữa chính quyền địa phương và cộng đồng doanh nghiệp.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://picsum.photos/seed/business-meeting/800/600" 
              alt="BLTBA Meeting" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white font-medium text-lg">Đại hội đại biểu Hội Doanh nghiệp Quận Bắc Từ Liêm</p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-12 uppercase">Tầm nhìn & Sứ mệnh</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Tầm nhìn", desc: "Trở thành tổ chức đại diện vững mạnh, uy tín hàng đầu của cộng đồng doanh nghiệp." },
              { icon: Users, title: "Sứ mệnh", desc: "Kết nối, hỗ trợ và bảo vệ quyền lợi hợp pháp của các doanh nghiệp hội viên." },
              { icon: Award, title: "Giá trị cốt lõi", desc: "Đoàn kết - Hợp tác - Đổi mới - Phát triển bền vững." },
              { icon: Shield, title: "Cam kết", desc: "Luôn đồng hành cùng sự phát triển của doanh nghiệp và kinh tế địa phương." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
