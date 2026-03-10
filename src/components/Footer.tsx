import React from 'react';
import { Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tighter">BLTBA</span>
              <span className="text-[10px] uppercase font-semibold text-amber-400">Bình Lợi Trung Business Association</span>
            </div>
            <p className="text-red-100/70 text-sm leading-relaxed">
              Hội Doanh nghiệp Bình Lợi Trung là tổ chức kết nối các doanh nghiệp, thúc đẩy giao thương và hỗ trợ phát triển bền vững cho cộng đồng doanh nhân.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center hover:bg-red-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center hover:bg-red-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-red-800 pb-2 inline-block">Liên hệ</h3>
            <ul className="space-y-4 text-sm text-red-100/70">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0" />
                <span>Số 123, Đường Bình Lợi, Phường 13, Quận Bình Thạnh, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0" />
                <span>+84 (028) 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0" />
                <span>info@bltba.vn</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-red-800 pb-2 inline-block">Liên kết nhanh</h3>
            <ul className="space-y-3 text-sm text-red-100/70">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Hội viên</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Tin tức</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-red-800 pb-2 inline-block">Bản tin</h3>
            <p className="text-sm text-red-100/70 mb-4">Đăng ký để nhận những thông tin mới nhất từ Hội.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="bg-red-900 border border-red-800 rounded px-4 py-2 text-sm focus:outline-none focus:border-red-500"
              />
              <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 rounded text-sm transition-colors">
                Đăng ký
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-red-900 text-center text-xs text-red-100/40">
          <p>Copyright © 2026 BLTBA - Binh Loi Trung Business Association. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
