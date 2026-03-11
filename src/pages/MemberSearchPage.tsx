import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ChevronDown, CheckSquare, Globe, Mail, Phone, MapPin, Building2 } from 'lucide-react';

interface Member {
  id: string;
  name: string;
  logo: string;
  industry: string;
  industryEn: string;
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
    productTypes: ['Thi công nội thất', 'Xây dựng dân dụng', 'Tư vấn thiết kế'],
    mainMaterials: ['Gỗ tự nhiên', 'Gỗ công nghiệp', 'Kim loại', 'Kính'],
    website: 'https://deltacorp.vn',
    email: 'contact@deltacorp.vn',
    phone: '024 3821 7885',
    address: '81 Lạc Trung, Hai Bà Trưng, Hà Nội'
  }
];

const MemberSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('Tất cả');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const industries = useMemo(() => {
    const unique = Array.from(new Set(membersData.map(m => m.industry)));
    return ['Tất cả', ...unique];
  }, []);

  const filteredMembers = useMemo(() => {
    return membersData.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.productTypes.some(pt => pt.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesIndustry = selectedIndustry === 'Tất cả' || member.industry === selectedIndustry;
      return matchesSearch && matchesIndustry;
    });
  }, [searchTerm, selectedIndustry]);

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
      <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center">
            {/* Search Input */}
            <div className="relative flex-grow border-b lg:border-b-0 lg:border-r border-gray-100">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Tìm tên công ty, sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-4 py-6 bg-transparent focus:outline-none font-medium text-gray-700"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex overflow-x-auto no-scrollbar py-4 lg:py-0 lg:pl-8 gap-3">
              {industries.map(industry => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                    selectedIndustry === industry 
                      ? 'bg-red-50 text-red-700 border-red-200 shadow-sm' 
                      : 'bg-white text-gray-600 border-gray-200 hover:text-red-700 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index % 6 * 0.05 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group"
                >
                  {/* Logo Section */}
                  <div className="relative h-48 overflow-hidden bg-gray-50">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                    <img 
                      src={member.logo} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 z-20">
                      <span className="bg-red-700 text-white px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider shadow-sm">
                        {member.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors line-clamp-2 min-h-[3.5rem] leading-tight">
                      {member.name}
                    </h3>

                    <div className="space-y-4 mb-6 flex-grow">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 bg-red-50 text-red-600 p-0.5 rounded">
                          <CheckSquare className="w-3 h-3" />
                        </div>
                        <div className="text-xs leading-relaxed">
                          <span className="font-bold text-gray-900">Sản phẩm:</span>{' '}
                          <span className="text-gray-600 line-clamp-2">{member.productTypes.join('; ')}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 bg-red-50 text-red-600 p-0.5 rounded">
                          <CheckSquare className="w-3 h-3" />
                        </div>
                        <div className="text-xs leading-relaxed">
                          <span className="font-bold text-gray-900">Nguyên liệu:</span>{' '}
                          <span className="text-gray-600 line-clamp-2">{member.mainMaterials.join('; ')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                      {member.website && (
                        <a href={member.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] text-gray-500 hover:text-red-700 transition-colors">
                          <Globe className="w-3.5 h-3.5" />
                          <span className="truncate">{member.website.replace('https://', '')}</span>
                        </a>
                      )}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-[10px] text-gray-500 hover:text-red-700 transition-colors">
                          <Mail className="w-3.5 h-3.5" />
                          <span className="truncate">{member.email}</span>
                        </a>
                      )}
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
                  onClick={() => { setSearchTerm(''); setSelectedIndustry('Tất cả'); }}
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
