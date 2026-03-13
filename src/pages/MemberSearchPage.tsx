import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ChevronDown, CheckSquare, Globe, Mail, Phone, MapPin, Building2 } from 'lucide-react';

interface Member {
  id: string;
  name: string;
  logo: string;
  industry: string;
  industryEn: string;
  board: 'Ban Xây dựng' | 'Ban Thương mại Dịch vụ';
  description: string;
  productTypes: string[];
  mainMaterials: string[];
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
}

const membersData: Member[] = [
  {
    id: '1',
    name: 'CÔNG TY CỔ PHẦN LANDCO',
    logo: 'https://picsum.photos/seed/landco/200/200',
    industry: 'Chế biến Gỗ',
    industryEn: 'Wood processing',
    board: 'Ban Xây dựng',
    description: 'LANDCO là đơn vị hàng đầu trong lĩnh vực sản xuất và thi công nội thất cao cấp, chuyên cung cấp các giải pháp toàn diện cho không gian sống và làm việc chuyên nghiệp.',
    productTypes: ['Gỗ nguyên liệu', 'Ván / Wood material', 'Panels', 'Máy móc', 'Thiết bị / Machinery', 'Equipment', 'Tools', 'Phụ kiện', 'Vật tư / Hardware'],
    mainMaterials: ['Tràm / Acacia', 'Cao su / Rubber wood', 'Tuyết tùng / Cedar', 'Giá tỵ (Gỗ Tếch hoặc gỗ Sao) / Teak', 'Óc chó / Walnut', 'Sồi / Oak'],
    website: 'https://landco.vn',
    email: 'info@landco.vn',
    phone: '024 3756 1234',
    address: 'Khu công nghiệp Quang Minh, Mê Linh, Hà Nội'
  },
  {
    id: '2',
    name: 'TẬP ĐOÀN GỖ AN CƯỜNG',
    logo: 'https://picsum.photos/seed/ancuong/200/200',
    industry: 'Vật liệu nội thất',
    industryEn: 'Interior materials',
    board: 'Ban Xây dựng',
    description: 'An Cường là nhà sản xuất cung cấp nguyên vật liệu trang trí nội thất và vật liệu décor hàng đầu tại Việt Nam và khu vực Đông Nam Á.',
    productTypes: ['Ván MFC', 'Ván Laminate', 'Ván Acrylic', 'Cửa gỗ công nghiệp', 'Sàn gỗ'],
    mainMaterials: ['MDF', 'HDF', 'Gỗ dán / Plywood'],
    website: 'https://ancuong.com',
    email: 'info@ancuong.com',
    phone: '1900 633 810',
    address: 'DT747B Phường Thái Hòa, Tân Uyên, Bình Dương'
  },
  {
    id: '3',
    name: 'CÔNG TY TNHH MINH LONG',
    logo: 'https://picsum.photos/seed/minhlong/200/200',
    industry: 'Vật liệu trang trí',
    industryEn: 'Decorative materials',
    board: 'Ban Xây dựng',
    description: 'Minh Long chuyên cung cấp các loại vật liệu gỗ công nghiệp, tấm vật liệu phủ Melamine, Laminate, Acrylic phục vụ cho ngành sản xuất nội thất hiện đại.',
    productTypes: ['Tấm vật liệu phủ Melamine', 'Laminate', 'Acrylic', 'Ván dăm', 'Ván sợi'],
    mainMaterials: ['Gỗ cao su', 'Gỗ tràm', 'Gỗ thông'],
    website: 'https://gominhlong.com',
    email: 'info@gominhlong.com',
    phone: '1900 636 202',
    address: 'Tầng 14, Tòa nhà Geleximco, 36 Hoàng Cầu, Đống Đa, Hà Nội'
  },
  {
    id: '4',
    name: 'CÔNG TY CP XÂY DỰNG & NỘI THẤT DELTA',
    logo: 'https://picsum.photos/seed/delta/200/200',
    industry: 'Xây dựng & Nội thất',
    industryEn: 'Construction & Interior',
    board: 'Ban Xây dựng',
    description: 'Delta là tổng thầu xây dựng và thi công nội thất uy tín, với nhiều năm kinh nghiệm trong các dự án dân dụng, công nghiệp và hạ tầng quy mô lớn.',
    productTypes: ['Thi công nội thất', 'Xây dựng dân dụng', 'Tư vấn thiết kế'],
    mainMaterials: ['Gỗ tự nhiên', 'Gỗ công nghiệp', 'Kim loại', 'Kính'],
    website: 'https://deltacorp.vn',
    email: 'contact@deltacorp.vn',
    phone: '024 3821 7885',
    address: '81 Lạc Trung, Hai Bà Trưng, Hà Nội'
  }
];

const boards = [
  {
    id: 'construction',
    name: 'Ban Xây dựng',
    industries: ['Chế biến Gỗ', 'Vật liệu nội thất', 'Vật liệu trang trí', 'Xây dựng & Nội thất', 'Kiến trúc', 'Cơ điện']
  },
  {
    id: 'trade',
    name: 'Ban Thương mại Dịch vụ',
    industries: ['Logistics', 'Tài chính', 'Truyền thông', 'Du lịch', 'Ẩm thực', 'Y tế', 'Công nghệ thông tin']
  }
];

const MemberSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [openAccordion, setOpenAccordion] = useState<string | null>('construction');

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries(prev => 
      prev.includes(industry) 
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    );
  };

  const toggleBoardAll = (boardIndustries: string[]) => {
    const allSelected = boardIndustries.every(ind => selectedIndustries.includes(ind));
    if (allSelected) {
      // Remove all industries of this board
      setSelectedIndustries(prev => prev.filter(ind => !boardIndustries.includes(ind)));
    } else {
      // Add all industries of this board that are not already selected
      const newIndustries = boardIndustries.filter(ind => !selectedIndustries.includes(ind));
      setSelectedIndustries(prev => [...prev, ...newIndustries]);
    }
  };

  const filteredMembers = useMemo(() => {
    return membersData.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.productTypes.some(pt => pt.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          member.industry.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(member.industry);
      return matchesSearch && matchesIndustry;
    });
  }, [searchTerm, selectedIndustries]);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-950 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/40 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            TRA CỨU <span className="text-red-600">HỘI VIÊN</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Tìm kiếm và kết nối với mạng lưới doanh nghiệp uy tín trong cộng đồng BLTBA.
          </motion.p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Input - Full Width */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input 
              type="text" 
              placeholder="Tìm tên công ty, sản phẩm, ngành nghề..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-gray-50 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all outline-none text-lg font-medium text-gray-700 shadow-sm"
            />
          </div>
          
          {/* Accordion Filters */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-900 font-bold mb-4">
              <Filter className="w-5 h-5 text-red-700" />
              <span>Lọc theo Ban & Ngành nghề</span>
            </div>

            {boards.map((board) => (
              <div key={board.id} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setOpenAccordion(openAccordion === board.id ? null : board.id)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-700"></div>
                    <span className="font-bold text-gray-900 uppercase tracking-wide text-sm">{board.name}</span>
                    <span className="text-xs text-gray-500 font-medium bg-gray-200 px-2 py-0.5 rounded-full">
                      {board.industries.filter(ind => selectedIndustries.includes(ind)).length} / {board.industries.length}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openAccordion === board.id ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {openAccordion === board.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 flex flex-wrap gap-2 border-t border-gray-100">
                        {/* "Tất cả" badge for this board */}
                        <button
                          onClick={() => toggleBoardAll(board.industries)}
                          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                            board.industries.every(ind => selectedIndustries.includes(ind))
                              ? 'bg-red-700 text-white border-red-700'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-red-300'
                          }`}
                        >
                          Tất cả
                        </button>
                        
                        {board.industries.map(industry => (
                          <button
                            key={industry}
                            onClick={() => toggleIndustry(industry)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                              selectedIndustries.includes(industry)
                                ? 'bg-red-50 text-red-700 border-red-200 shadow-sm'
                                : 'bg-white text-gray-500 border-gray-200 hover:text-red-700 hover:bg-gray-50 hover:border-gray-300'
                            }`}
                          >
                            {industry}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Danh sách hội viên</h2>
            <span className="text-gray-500 text-sm font-medium">
              {filteredMembers.length} kết quả
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index % 4 * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex group cursor-pointer relative"
                >
                  {/* Board Banner */}
                  <div className="absolute top-0 left-0 bg-amber-400 text-gray-900 text-[10px] font-bold px-3 py-1 rounded-br-lg z-10 shadow-sm uppercase tracking-wider">
                    {member.board}
                  </div>

                  {/* Logo Section - Left Side */}
                  <div className="w-32 sm:w-40 flex-shrink-0 bg-gray-50 flex items-center justify-center p-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-white p-1 shadow-inner">
                      <img 
                        src={member.logo} 
                        alt={member.name} 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Content Section - Right Side */}
                  <div className="p-5 sm:p-6 flex-grow flex flex-col min-w-0">
                    <div className="mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors line-clamp-1 leading-tight">
                        {member.name}
                      </h3>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block bg-red-50 text-red-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                        {member.industry}
                      </span>
                    </div>
                    
                    <p className="text-gray-500 text-xs sm:text-sm mb-3 line-clamp-3 leading-relaxed">
                      {member.description}
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Globe className="w-3.5 h-3.5 text-red-600" />
                        <span className="text-[11px] sm:text-xs font-medium truncate max-w-[120px]">
                          {member.website?.replace('https://', '') || 'Đang cập nhật'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-3.5 h-3.5 text-red-600" />
                        <span className="text-[11px] sm:text-xs font-medium">
                          {member.phone || 'Đang cập nhật'}
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-end">
                      <span className="text-red-700 font-bold text-[11px] sm:text-xs group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Chi tiết
                        <svg className="w-3 h-3 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredMembers.length === 0 && (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-500">Không tìm thấy hội viên nào</h3>
                <p className="text-gray-400">Vui lòng thử lại với từ khóa khác hoặc thay đổi bộ lọc.</p>
                <button 
                  onClick={() => { setSearchTerm(''); setSelectedIndustries([]); }}
                  className="mt-6 text-red-700 font-semibold hover:underline"
                >
                  Xóa tất cả bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Bạn muốn gia nhập cộng đồng BLTBA?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Hãy trở thành một phần của mạng lưới doanh nghiệp năng động, cùng nhau phát triển và tạo ra những giá trị bền vững.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-red-900/20">
              Đăng ký ngay
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full font-bold transition-all backdrop-blur-md">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberSearchPage;
