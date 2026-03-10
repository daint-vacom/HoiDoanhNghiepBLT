import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-red-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight"
          >
            Liên hệ với chúng tôi
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-red-100 max-w-2xl mx-auto"
          >
            BLTBA luôn sẵn sàng lắng nghe và hỗ trợ quý doanh nghiệp
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-red-700 mb-8 uppercase">Thông tin liên hệ</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Trụ sở chính</h3>
                  <p className="text-gray-600">Tòa nhà CT1, Khu đô thị Cổ Nhuế, Phường Cổ Nhuế 1, Quận Bắc Từ Liêm, TP. Hà Nội</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Điện thoại</h3>
                  <p className="text-gray-600">024 3838 3838</p>
                  <p className="text-gray-600">Hotline: 090 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@bltba.vn</p>
                  <p className="text-gray-600">vanphong@bltba.vn</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Giờ làm việc</h3>
                  <p className="text-gray-600">Thứ 2 - Thứ 6: 08:00 - 17:00</p>
                  <p className="text-gray-600">Thứ 7: 08:00 - 12:00</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/map/800/400" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-4 py-2 rounded-md shadow-md text-gray-700 font-medium">Bản đồ vị trí</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gửi tin nhắn cho chúng tôi</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Tên công ty</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                    placeholder="Nhập tên công ty"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                    placeholder="Nhập địa chỉ email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Chủ đề</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors bg-white"
                >
                  <option>Đăng ký hội viên</option>
                  <option>Hợp tác kinh doanh</option>
                  <option>Góp ý - Phản hồi</option>
                  <option>Khác</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Nội dung tin nhắn *</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors resize-none"
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center group"
              >
                <span>Gửi tin nhắn</span>
                <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
