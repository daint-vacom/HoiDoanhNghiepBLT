import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Calendar, User, ArrowRight, Loader2 } from 'lucide-react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: 'hoat-dong' | 'giao-thuong' | 'doi-tac';
  date: string;
  author: string;
  image: string;
}

const CATEGORIES = [
  { id: 'all', name: 'Tất cả tin tức', path: '/tin-tuc' },
  { id: 'hoat-dong', name: 'Tin hoạt động hội', path: '/tin-tuc/hoat-dong' },
  { id: 'giao-thuong', name: 'Tin giao thương', path: '/tin-tuc/giao-thuong' },
  { id: 'doi-tac', name: 'Tin hội viên đối tác', path: '/tin-tuc/doi-tac' },
];

const MOCK_NEWS: NewsItem[] = Array.from({ length: 50 }).map((_, i) => ({
  id: i + 1,
  title: [
    "Hội nghị Xúc tiến Đầu tư Bình Lợi Trung 2026",
    "Ký kết hợp tác chiến lược giữa BLTBA và các đối tác quốc tế",
    "Doanh nghiệp hội viên tiêu biểu quý I/2026",
    "Chương trình Caravan Giao thương kết nối vùng kinh tế",
    "Hội thảo Chuyển đổi số cho doanh nghiệp vừa và nhỏ",
    "Gặp gỡ và đối thoại cùng lãnh đạo địa phương",
  ][i % 6] + ` - Số ${i + 1}`,
  excerpt: "Hội Doanh nghiệp Bình Lợi Trung (BLTBA) vừa tổ chức thành công chuỗi sự kiện kết nối doanh nghiệp, thu hút sự tham gia của hơn 200 đại biểu và các nhà đầu tư trong và ngoài nước...",
  category: ['hoat-dong', 'giao-thuong', 'doi-tac'][i % 3] as any,
  date: `2026-03-${(i % 28) + 1 < 10 ? '0' + ((i % 28) + 1) : (i % 28) + 1}`,
  author: "Ban Truyền thông BLTBA",
  image: `https://picsum.photos/seed/news-${i}/800/600`,
}));

const NewsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine category from path
  const getCategoryFromPath = (path: string) => {
    if (path.includes('/hoat-dong')) return 'hoat-dong';
    if (path.includes('/giao-thuong')) return 'giao-thuong';
    if (path.includes('/doi-tac')) return 'doi-tac';
    return 'all';
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(getCategoryFromPath(location.pathname));
  const [visibleItems, setVisibleItems] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const loaderRef = useRef<HTMLDivElement>(null);
  const ITEMS_PER_PAGE = 6;

  // Update category when path changes
  useEffect(() => {
    setSelectedCategory(getCategoryFromPath(location.pathname));
  }, [location.pathname]);

  // Filter items based on search and category
  const filteredItems = MOCK_NEWS.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Reset and load initial items when filters change
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    const initial = filteredItems.slice(0, ITEMS_PER_PAGE);
    setVisibleItems(initial);
    if (initial.length >= filteredItems.length) {
      setHasMore(false);
    }
  }, [searchQuery, selectedCategory]);

  // Load more items
  const fetchMore = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      const nextItems = filteredItems.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);
      if (nextItems.length > 0) {
        setVisibleItems(prev => [...prev, ...nextItems]);
        setPage(prev => prev + 1);
      }
      
      if ((page + 1) * ITEMS_PER_PAGE >= filteredItems.length) {
        setHasMore(false);
      }
      setLoading(false);
    }, 800);
  }, [loading, hasMore, page, filteredItems]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [fetchMore, hasMore]);

  const handleCategoryChange = (catId: string) => {
    const cat = CATEGORIES.find(c => c.id === catId);
    if (cat) {
      navigate(cat.path);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-gray-50 pt-32 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-6 tracking-tight">Trung tâm Tin tức BLTBA</h1>
            <p className="text-gray-600 text-lg">Cập nhật những thông tin mới nhất về hoạt động hội, cơ hội giao thương và tin tức từ cộng đồng hội viên.</p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Điểm tin (Featured News) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8 border-b border-gray-100 pb-4">
            <div className="w-2 h-8 bg-red-700 rounded-full"></div>
            <h2 className="text-3xl font-bold text-red-800">
              Điểm tin chính
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Main Featured Item */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-sm border border-gray-100 h-full flex flex-col">
                <div className="aspect-video lg:aspect-auto lg:h-[300px] overflow-hidden shrink-0">
                  <img 
                    src={MOCK_NEWS[0].image} 
                    alt={MOCK_NEWS[0].title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 bg-white flex-grow flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${
                      MOCK_NEWS[0].category === 'hoat-dong' ? 'bg-red-700' : 
                      MOCK_NEWS[0].category === 'giao-thuong' ? 'bg-amber-600' : 'bg-blue-600'
                    }`}>
                      {CATEGORIES.find(c => c.id === MOCK_NEWS[0].category)?.name.replace('Tin ', '')}
                    </span>
                    <span className="text-gray-400 text-xs">{MOCK_NEWS[0].date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors leading-tight">
                    {MOCK_NEWS[0].title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {MOCK_NEWS[0].excerpt}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - 3 Stacked Cards */}
            <div className="flex flex-col gap-3 h-full">
              {[MOCK_NEWS[1], MOCK_NEWS[2], MOCK_NEWS[3]].map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm flex-1"
                >
                  <div className="w-full sm:w-[35%] aspect-video shrink-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="sm:w-[65%] p-4 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-red-700 text-[10px] font-bold uppercase">
                        {CATEGORIES.find(c => c.id === item.category)?.name.replace('Tin ', '')}
                      </span>
                      <span className="text-gray-400 text-[10px]">{item.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-red-700 transition-colors mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tất cả tin tức */}
      <section className="relative bg-gray-50 border-t border-gray-100">
        {/* Full-width Sticky Search & Filter Bar */}
        <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center">
              {/* Search Input - Full width on mobile, integrated on desktop */}
              <div className="relative flex-grow border-b lg:border-b-0 lg:border-r border-gray-100">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm trong tất cả tin tức..." 
                  className="w-full pl-8 pr-4 py-6 bg-transparent focus:outline-none font-medium text-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Category Filters */}
              <div className="flex overflow-x-auto no-scrollbar py-4 lg:py-0 lg:pl-8 gap-3">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                      selectedCategory === cat.id 
                        ? 'bg-red-50 text-red-700 border-red-200 shadow-sm' 
                        : 'bg-white text-gray-600 border-gray-200 hover:text-red-700 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Tất cả tin tức</h2>
            <span className="text-gray-500 text-sm font-medium">
              {filteredItems.length} kết quả
            </span>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index % 6 * 0.05 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider text-white shadow-sm ${
                        item.category === 'hoat-dong' ? 'bg-red-700' : 
                        item.category === 'giao-thuong' ? 'bg-amber-600' : 'bg-blue-600'
                      }`}>
                        {CATEGORIES.find(c => c.id === item.category)?.name.replace('Tin ', '')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-[10px] text-gray-400 mb-2 space-x-3">
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {item.date}</span>
                      <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {item.author}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-xs line-clamp-3 mb-6 flex-grow leading-relaxed">
                      {item.excerpt}
                    </p>
                    
                    <button className="flex items-center text-red-700 font-bold text-xs group/btn mt-auto">
                      Xem chi tiết
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Loading State & End of Content */}
          <div ref={loaderRef} className="mt-16 flex flex-col items-center justify-center py-10">
            {loading && (
              <div className="flex flex-col items-center">
                <Loader2 className="w-8 h-8 text-red-700 animate-spin mb-4" />
                <p className="text-gray-500 text-sm font-medium italic">Đang tải thêm tin tức...</p>
              </div>
            )}
            
            {!hasMore && visibleItems.length > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <div className="w-12 h-0.5 bg-gray-200 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-400 text-sm font-medium">Bạn đã xem hết tin tức</p>
              </motion.div>
            )}

            {visibleItems.length === 0 && !loading && (
              <div className="text-center py-20">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Không tìm thấy tin tức</h3>
                <p className="text-gray-500 text-sm">Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc của bạn.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}
                  className="mt-4 text-red-700 font-bold text-sm hover:underline"
                >
                  Xóa tất cả bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
