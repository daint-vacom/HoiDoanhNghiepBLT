import React from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const Activities = () => {
  const activities = [
    {
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      category: "Sự kiện - Hội thảo",
      title: "Chiến lược xuất khẩu hàng hóa Việt Nam sang thị trường EU",
      time: "9:00 am - 15.03.2026",
      location: "Hội trường A, Trung tâm Hội nghị TP.HCM",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
      category: "Sự kiện - Hội thảo",
      title: "Workshop: Chuyển đổi số cho doanh nghiệp vừa và nhỏ",
      time: "8:30 am - 20.03.2026",
      location: "Văn phòng BLTBA, Quận Bình Thạnh",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
      category: "Giao thương",
      title: "Kết nối cung cầu giữa các doanh nghiệp trong khu vực",
      time: "14:00 pm - 25.03.2026",
      location: "Khách sạn Rex, Quận 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop",
      category: "Sự kiện - Đào tạo",
      title: "Khóa đào tạo kỹ năng quản trị nhân sự hiện đại",
      time: "9:00 am - 05.04.2026",
      location: "Trung tâm Đào tạo Doanh nhân",
    },
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex justify-between items-end mb-10 pb-4 border-b border-gray-100"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-3"
          >
            <Calendar className="w-8 h-8 text-red-700" />
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Hoạt động Hội
            </h2>
          </motion.div>
          <motion.button
            variants={itemVariants}
            className="text-red-700 font-medium flex items-center hover:text-red-800 transition-colors"
          >
            Xem tất cả <ChevronRight className="w-4 h-4 ml-1" />
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group"
            >
              <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-red-700 text-[10px] font-bold rounded-full shadow-sm uppercase tracking-wider">
                    {activity.category}
                  </span>
                </div>
              </div>
              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-800 transition-colors line-clamp-2 leading-snug">
                    {activity.title}
                  </h3>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 hover:text-red-700 cursor-pointer transition-colors">
                    {activity.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2 text-amber-600" />
                    Thời gian: {activity.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2 text-amber-600" />
                    Địa điểm: {activity.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
