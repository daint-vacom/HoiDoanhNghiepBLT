import React from "react";
import { ChevronRight, Info } from "lucide-react";
import { motion } from "motion/react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 items-start"
        >
          {/* Image Gallery Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.img
                variants={imageVariants}
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                alt="Meeting"
                className="rounded shadow-md w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
              <motion.img
                variants={imageVariants}
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
                alt="Office"
                className="rounded shadow-md w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-8">
              <motion.img
                variants={imageVariants}
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
                alt="Team"
                className="rounded shadow-md w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <motion.img
                variants={imageVariants}
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                alt="Presentation"
                className="rounded shadow-md w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-3 mb-6"
            >
              <Info className="w-8 h-8 text-red-700" />
              <h2 className="text-3xl font-bold text-red-800 relative inline-block">
                Về BLTBA
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500"></span>
              </h2>
            </motion.div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p
                variants={itemVariants}
                className="font-semibold text-red-700"
              >
                BLTBA – Hội Doanh nghiệp Bình Lợi Trung (Binh Loi Trung Business
                Association) là tổ chức xã hội - nghề nghiệp của các doanh
                nghiệp đang hoạt động trên địa bàn TP. Hồ Chí Minh.
              </motion.p>
              <motion.p variants={itemVariants}>
                Được thành lập với sứ mệnh kết nối cộng đồng doanh nghiệp, BLTBA
                không ngừng nỗ lực tạo ra môi trường giao thương lành mạnh, hỗ
                trợ hội viên phát triển bền vững và đóng góp tích cực cho sự
                phát triển kinh tế của khu vực Bình Lợi Trung nói riêng và Thành
                phố nói chung.
              </motion.p>
              <motion.p variants={itemVariants}>
                Chúng tôi tập trung vào việc tổ chức các buổi hội thảo chuyên
                đề, các chương trình xúc tiến thương mại, và là cầu nối giữa
                doanh nghiệp với chính quyền địa phương. Với hơn 500 hội viên
                hoạt động trong nhiều lĩnh vực khác nhau, BLTBA tự hào là một
                trong những hiệp hội doanh nghiệp năng động nhất.
              </motion.p>
            </div>
            <motion.button
              variants={itemVariants}
              className="mt-8 flex items-center text-red-700 font-semibold hover:text-red-900 transition-colors group border border-red-200 px-4 py-2 rounded"
            >
              Xem thêm...
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
