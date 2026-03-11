import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section - Cinematic & Compact */}
      <section className="bg-gray-950 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/40 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight uppercase"
          >
            LIÊN HỆ <span className="text-red-600">VỚI CHÚNG TÔI</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
          >
            BLTBA luôn sẵn sàng lắng nghe và hỗ trợ quý doanh nghiệp trong mọi hoạt động phát triển.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Information - Left (4 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-6"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider flex items-center">
                  <span className="w-8 h-1 bg-red-700 mr-3"></span>
                  Thông tin liên hệ
                </h2>
                
                <div className="space-y-5">
                  <div className="flex items-start group">
                    <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-tight">Trụ sở chính</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Tòa nhà CT1, Khu đô thị Cổ Nhuế, Phường Cổ Nhuế 1, Quận Bắc Từ Liêm, TP. Hà Nội</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-tight">Điện thoại</h3>
                      <p className="text-sm text-gray-600">024 3838 3838</p>
                      <p className="text-sm text-gray-600">Hotline: 090 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-tight">Email</h3>
                      <p className="text-sm text-gray-600">info@bltba.vn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-tight">Giờ làm việc</h3>
                      <p className="text-sm text-gray-600">Thứ 2 - Thứ 6: 08:00 - 17:00</p>
                      <p className="text-sm text-gray-600">Thứ 7: 08:00 - 12:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed - Specific location */}
              <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.657453597845!2d105.78277231540243!3d21.04638699255453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3b445a31ad%3A0xad2d966f1d27038c!2zQ1QxIEtodSDEkcO0IHRo4buLIEMhu5UgTmjhur8!5e0!3m2!1svi!2s!4v1647000000000!5m2!1svi!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="BLTBA Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form - Right (8 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Gửi tin nhắn cho chúng tôi</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Họ và tên *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 outline-none transition-all text-sm"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Tên công ty</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 outline-none transition-all text-sm"
                      placeholder="Nhập tên công ty"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 outline-none transition-all text-sm"
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Số điện thoại *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 outline-none transition-all text-sm"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Chủ đề</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 outline-none transition-all bg-white text-sm"
                  >
                    <option>Đăng ký hội viên</option>
                    <option>Hợp tác kinh doanh</option>
                    <option>Góp ý - Phản hồi</option>
                    <option>Khác</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Nội dung tin nhắn *</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-600/20 focus:border-red-600 outline-none transition-all resize-none text-sm"
                    placeholder="Nhập nội dung tin nhắn của bạn..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3.5 px-6 rounded-lg transition-all flex items-center justify-center group shadow-lg shadow-red-900/10"
                >
                  <span className="uppercase tracking-widest text-sm">Gửi tin nhắn</span>
                  <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
