import React from 'react';
import { ChevronRight, Newspaper } from 'lucide-react';
import { motion } from 'motion/react';

const News = () => {
  const newsItems = [
    {
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
      category: 'Hoạt động hội',
      date: '08.03.2026',
      title: 'Cơ hội hợp tác kinh doanh giữa các doanh nghiệp Bình Lợi Trung và đối tác Nhật Bản',
      excerpt: 'Trong khuôn khổ chương trình xúc tiến thương mại, đoàn doanh nghiệp Nhật Bản đã có buổi làm việc nhằm thúc đẩy các hoạt động giao thương song phương.',
    },
    {
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
      category: 'Hội viên đối tác',
      date: '07.03.2026',
      title: 'Những thay đổi mới trong luật thuế hỗ trợ doanh nghiệp vừa và nhỏ năm 2026',
      excerpt: 'Chính phủ vừa ban hành nghị định mới nhằm giảm bớt gánh nặng thuế cho các doanh nghiệp trong giai đoạn phục hồi kinh tế.',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      category: 'Hoạt động hội',
      date: '06.03.2026',
      title: 'BLTBA tổ chức thành công đại hội nhiệm kỳ mới 2026 - 2030',
      excerpt: 'Đại hội đã bầu ra ban chấp hành mới với những gương mặt trẻ đầy nhiệt huyết và tầm nhìn chiến lược cho giai đoạn tới.',
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      category: 'Giao thương',
      date: '05.03.2026',
      title: 'Đơn hàng xuất khẩu nông sản sang thị trường Trung Đông tăng mạnh',
      excerpt: 'Các doanh nghiệp xuất khẩu nông sản tại Bình Lợi Trung ghi nhận sự tăng trưởng vượt bậc về số lượng đơn hàng từ các đối tác Trung Đông.',
    },
  ];

  const subNews = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      category: 'Giao thương',
      date: '05.03.2026',
      title: 'Đơn hàng xuất khẩu nông sản sang thị trường Trung Đông tăng mạnh',
    },
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      category: 'Giao thương',
      date: '04.03.2026',
      title: 'Hợp tác đào tạo nguồn nhân lực chất lượng cao cho ngành công nghệ',
    },
    {
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
      category: 'Hội viên đối tác',
      date: '03.03.2026',
      title: 'Doanh nghiệp Việt tìm kiếm cơ hội tại hội chợ quốc tế Thái Lan',
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-4">
          <div className="flex items-center space-x-3">
            <Newspaper className="w-8 h-8 text-red-700" />
            <h2 className="text-3xl font-bold text-red-800">
              Tin tức
            </h2>
          </div>
          <button className="text-red-700 font-medium flex items-center hover:underline">
            Xem tất cả <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Featured News - Left Column */}
          <div className="h-full">
            <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-sm border border-gray-100 h-full flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 bg-white flex-grow flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-red-700 text-sm font-bold uppercase tracking-wider">{newsItems[0].category}</span>
                  <span className="text-gray-400 text-sm">{newsItems[0].date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors leading-tight">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-600 text-base line-clamp-3 leading-relaxed">
                  {newsItems[0].excerpt}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - 3 Stacked Cards */}
          <div className="flex flex-col gap-4 h-full">
            {newsItems.slice(1).map((item, index) => (
              <div key={index} className="group cursor-pointer flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm flex-1">
                <div className="sm:w-[45%] aspect-[2/1] sm:aspect-auto overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="sm:w-[55%] p-4 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-red-700 text-[10px] font-bold uppercase">{item.category}</span>
                    <span className="text-gray-400 text-[10px]">{item.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-red-700 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-[11px] line-clamp-2 leading-tight">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {subNews.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="h-48 overflow-hidden rounded-lg mb-4 shadow-sm border border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-red-700 text-[10px] font-bold uppercase">{item.category}</span>
                <span className="text-gray-400 text-[10px]">{item.date}</span>
              </div>
              <h4 className="text-base font-bold text-gray-900 line-clamp-2 group-hover:text-red-700 transition-colors">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default News;
