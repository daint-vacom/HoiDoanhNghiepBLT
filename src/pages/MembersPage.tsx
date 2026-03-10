import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Building2, MapPin, Globe, Phone } from 'lucide-react';

// Mock data for members
const members = [
  {
    id: 1,
    name: "Công ty Cổ phần Đầu tư và Xây dựng ABC",
    industry: "Xây dựng & Bất động sản",
    address: "Khu đô thị Cổ Nhuế, Bắc Từ Liêm, Hà Nội",
    phone: "024 1234 5678",
    website: "www.abc-build.vn",
    logo: "https://picsum.photos/seed/logo1/150/150"
  },
  {
    id: 2,
    name: "Công ty TNHH Thương mại Dịch vụ XYZ",
    industry: "Thương mại & Bán lẻ",
    address: "Đường Phạm Văn Đồng, Bắc Từ Liêm, Hà Nội",
    phone: "024 8765 4321",
    website: "www.xyz-trading.vn",
    logo: "https://picsum.photos/seed/logo2/150/150"
  },
  {
    id: 3,
    name: "Công ty Cổ phần Công nghệ TechPro",
    industry: "Công nghệ thông tin",
    address: "Khu Công nghệ cao, Bắc Từ Liêm, Hà Nội",
    phone: "024 1122 3344",
    website: "www.techpro.vn",
    logo: "https://picsum.photos/seed/logo3/150/150"
  },
  {
    id: 4,
    name: "Công ty TNHH Sản xuất và Thương mại Minh Phát",
    industry: "Sản xuất",
    address: "Cụm Công nghiệp Từ Liêm, Hà Nội",
    phone: "024 5566 7788",
    website: "www.minhphat-mfg.vn",
    logo: "https://picsum.photos/seed/logo4/150/150"
  },
  {
    id: 5,
    name: "Công ty Cổ phần Dược phẩm HealthCare",
    industry: "Y tế & Dược phẩm",
    address: "Đường Hồ Tùng Mậu, Bắc Từ Liêm, Hà Nội",
    phone: "024 9988 7766",
    website: "www.healthcare-pharma.vn",
    logo: "https://picsum.photos/seed/logo5/150/150"
  },
  {
    id: 6,
    name: "Công ty TNHH Logistics Toàn Cầu",
    industry: "Vận tải & Logistics",
    address: "Đường Văn Tiến Dũng, Bắc Từ Liêm, Hà Nội",
    phone: "024 3344 5566",
    website: "www.globallogistics.vn",
    logo: "https://picsum.photos/seed/logo6/150/150"
  }
];

const industries = [
  "Tất cả lĩnh vực",
  "Xây dựng & Bất động sản",
  "Thương mại & Bán lẻ",
  "Công nghệ thông tin",
  "Sản xuất",
  "Y tế & Dược phẩm",
  "Vận tải & Logistics"
];

const MembersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("Tất cả lĩnh vực");

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "Tất cả lĩnh vực" || member.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

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
            Danh bạ Hội viên
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-red-100 max-w-2xl mx-auto"
          >
            Kết nối và hợp tác cùng cộng đồng doanh nghiệp BLTBA
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative">
              <label htmlFor="search" className="sr-only">Tìm kiếm doanh nghiệp</label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="search"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                placeholder="Tìm kiếm theo tên doanh nghiệp..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="industry" className="sr-only">Lĩnh vực hoạt động</label>
              <select
                id="industry"
                className="block w-full pl-3 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 outline-none transition-colors bg-white"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                {industries.map((industry, index) => (
                  <option key={index} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">Tìm thấy <span className="font-bold text-red-700">{filteredMembers.length}</span> hội viên</p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-100 shrink-0 mr-4">
                    <img 
                      src={member.logo} 
                      alt={`Logo ${member.name}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors line-clamp-2">
                      {member.name}
                    </h3>
                    <span className="inline-block px-2 py-1 bg-red-50 text-red-700 text-xs font-medium rounded mt-2">
                      {member.industry}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-start text-sm text-gray-600">
                    <MapPin size={16} className="mr-2 mt-0.5 shrink-0 text-gray-400" />
                    <span className="line-clamp-2">{member.address}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone size={16} className="mr-2 shrink-0 text-gray-400" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Globe size={16} className="mr-2 shrink-0 text-gray-400" />
                    <a href={`https://${member.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
                      {member.website}
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                <button className="text-red-600 text-sm font-medium hover:text-red-800 transition-colors flex items-center w-full justify-center">
                  Xem chi tiết
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-20">
            <Building2 size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">Không tìm thấy kết quả</h3>
            <p className="text-gray-500">Vui lòng thử lại với từ khóa hoặc bộ lọc khác.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default MembersPage;
