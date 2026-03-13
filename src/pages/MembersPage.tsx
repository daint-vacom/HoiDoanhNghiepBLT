import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, CreditCard, UserPlus, ShieldCheck, TrendingUp, Users, Globe, Briefcase, Building2, ArrowRight } from 'lucide-react';

const MembersPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const [formData, setFormData] = useState({
    companyName: '',
    taxId: '',
    address: '',
    industry: '',
    repName: '',
    repPosition: '',
    phone: '',
    email: '',
    website: '',
    referral: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative text-white py-32 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
            alt="Team collaboration" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-red-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight"
          >
            Trở Thành Hội Viên BLTBA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-red-100 max-w-3xl mx-auto"
          >
            Gia nhập cộng đồng doanh nghiệp lớn mạnh, mở rộng mạng lưới kết nối và nắm bắt cơ hội phát triển kinh doanh không giới hạn.
          </motion.p>
        </div>
      </section>

      {/* Quyền lợi Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wider mb-4">Quyền Lợi Hội Viên</h2>
            <div className="w-24 h-1 bg-red-700 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-8 h-8 text-red-700" />, title: "Kết nối giao thương", desc: "Mở rộng mạng lưới quan hệ với hàng trăm doanh nghiệp hội viên, tạo cơ hội hợp tác kinh doanh." },
              { icon: <TrendingUp className="w-8 h-8 text-red-700" />, title: "Hỗ trợ xúc tiến", desc: "Tham gia các chương trình xúc tiến thương mại, hội chợ, triển lãm với chi phí ưu đãi." },
              { icon: <ShieldCheck className="w-8 h-8 text-red-700" />, title: "Bảo vệ quyền lợi", desc: "Được Hội đại diện bảo vệ quyền và lợi ích hợp pháp trong các hoạt động sản xuất kinh doanh." },
              { icon: <Briefcase className="w-8 h-8 text-red-700" />, title: "Đào tạo & Tư vấn", desc: "Tham gia các khóa đào tạo nâng cao năng lực quản trị, tư vấn pháp lý, thuế, hải quan miễn phí hoặc giảm giá." },
              { icon: <Globe className="w-8 h-8 text-red-700" />, title: "Quảng bá thương hiệu", desc: "Được giới thiệu hình ảnh, sản phẩm, dịch vụ trên các kênh truyền thông chính thức của Hội." },
              { icon: <FileText className="w-8 h-8 text-red-700" />, title: "Cập nhật thông tin", desc: "Thường xuyên nhận được các thông tin mới nhất về chính sách pháp luật, thị trường, kinh tế." }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Các Ban Chuyên Môn Section */}
      <section className="pt-20 pb-0 bg-white overflow-hidden">
        <div className="flex flex-col">
          {[
            {
              name: "Ban Xây dựng",
              desc: "Quy tụ các doanh nghiệp trong lĩnh vực xây dựng, kiến trúc, nội thất và vật liệu xây dựng. Cùng nhau kiến tạo những công trình chất lượng và bền vững, đóng góp vào sự phát triển hạ tầng đô thị.",
              count: "320+",
              image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
              color: "from-slate-950",
              accent: "text-blue-400",
              bgAccent: "bg-blue-500/10"
            },
            {
              name: "Ban Thương mại Dịch vụ",
              desc: "Nơi kết nối các doanh nghiệp hoạt động trong lĩnh vực logistics, tài chính, truyền thông, du lịch và công nghệ. Thúc đẩy giao thương, chuyển đổi số và đổi mới sáng tạo trong kinh doanh.",
              count: "280+",
              image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
              color: "from-emerald-950",
              accent: "text-emerald-400",
              bgAccent: "bg-emerald-500/10"
            }
          ].map((board, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
              className="relative min-h-[500px] flex items-center overflow-hidden group"
            >
              {/* Background Image */}
              <img
                src={board.image}
                alt={board.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${index % 2 === 0 ? 'md:bg-gradient-to-r' : 'md:bg-gradient-to-l'} ${board.color} via-black/50 to-transparent opacity-95`}></div>

              {/* Content Container */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`max-w-2xl ${index % 2 === 0 ? 'mr-auto' : 'ml-auto text-right items-end flex flex-col'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="space-y-6"
                  >
                    <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                      {board.name}
                    </h3>
                    
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                      {board.desc}
                    </p>
                    
                    <div className={`flex items-center gap-6 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                      <div className={`${board.bgAccent} backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10`}>
                        <div className={`text-3xl font-black ${board.accent}`}>{board.count}</div>
                        <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Hội viên</div>
                      </div>
                      
                      <button className={`group ${board.accent} font-bold flex items-center hover:brightness-125 transition-all text-lg`}>
                        {index % 2 === 0 ? (
                          <>
                            Tìm hiểu thêm <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                          </>
                        ) : (
                          <>
                            <ArrowRight className="mr-2 w-6 h-6 rotate-180 group-hover:-translate-x-2 transition-transform" /> Tìm hiểu thêm
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quy trình đăng ký Section */}
      <section className="py-24 relative px-4 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gray-50 z-0"></div>
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#b91c1c 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wider mb-4">Quy Trình Đăng Ký</h2>
            <div className="w-24 h-1 bg-red-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: <FileText className="w-8 h-8" />, title: "Điền form đăng ký", desc: "Hoàn thiện thông tin doanh nghiệp theo mẫu đăng ký bên dưới." },
              { step: "02", icon: <UserPlus className="w-8 h-8" />, title: "Xét duyệt hồ sơ", desc: "Ban thư ký tiếp nhận và thẩm định hồ sơ trong vòng 3-5 ngày làm việc." },
              { step: "03", icon: <CreditCard className="w-8 h-8" />, title: "Đóng hội phí", desc: "Nhận thông báo trúng tuyển và tiến hành đóng hội phí theo quy định." },
              { step: "04", icon: <CheckCircle2 className="w-8 h-8" />, title: "Trở thành hội viên", desc: "Nhận giấy chứng nhận và chính thức tham gia các hoạt động của Hội." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Large background number */}
                <div className="absolute -right-4 -bottom-4 text-9xl font-black text-gray-50 opacity-50 group-hover:text-red-50 transition-colors duration-300 pointer-events-none select-none">
                  {item.step}
                </div>
                
                {/* Square Icon Container */}
                <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center text-red-700 mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300 relative z-10">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-red-700 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hội phí Section */}
      <section className="py-24 relative px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80" 
            alt="Business meeting" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gray-900/90"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider mb-4">Hội Phí</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Khoản đóng góp để duy trì và phát triển các hoạt động mang lại giá trị thiết thực cho cộng đồng doanh nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Phí gia nhập */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-red-600/30 transition-colors"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Phí gia nhập</h3>
                  <p className="text-sm text-gray-400">Đóng 1 lần duy nhất khi đăng ký</p>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white">
                  <UserPlus className="w-6 h-6" />
                </div>
              </div>
              
              <div className="text-4xl font-extrabold text-white mb-8 border-b border-white/10 pb-8">
                1.000.000<span className="text-lg text-gray-400 font-normal ml-1">VNĐ</span>
              </div>
              
              <ul className="text-left space-y-4 mb-8 flex-grow">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-red-500 mr-3 shrink-0 mt-0.5" /> <span className="text-gray-200">Cấp giấy chứng nhận hội viên</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-red-500 mr-3 shrink-0 mt-0.5" /> <span className="text-gray-200">Bộ kit chào mừng (Huy hiệu, sổ tay...)</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-red-500 mr-3 shrink-0 mt-0.5" /> <span className="text-gray-200">Đăng tải thông tin trên danh bạ</span></li>
              </ul>
            </motion.div>

            {/* Hội phí thường niên */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-red-900 to-red-950 rounded-2xl p-8 border border-red-800 shadow-2xl relative overflow-hidden flex flex-col group"
            >
              
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-600/30 rounded-full blur-3xl group-hover:bg-red-600/40 transition-colors"></div>
              
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Hội phí thường niên</h3>
                  <p className="text-sm text-red-200">Đóng hàng năm để duy trì tư cách</p>
                </div>
                <div className="w-12 h-12 bg-red-800/50 rounded-lg flex items-center justify-center text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              
              <div className="text-4xl font-extrabold text-white mb-8 border-b border-red-800/50 pb-8 relative z-10">
                2.000.000<span className="text-lg text-red-200 font-normal ml-1">VNĐ/năm</span>
              </div>
              
              <ul className="text-left space-y-4 mb-8 flex-grow relative z-10">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-amber-400 mr-3 shrink-0 mt-0.5" /> <span className="text-red-50">Tham gia miễn phí các sự kiện định kỳ</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-amber-400 mr-3 shrink-0 mt-0.5" /> <span className="text-red-50">Quyền biểu quyết tại Đại hội</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-amber-400 mr-3 shrink-0 mt-0.5" /> <span className="text-red-50">Hỗ trợ truyền thông doanh nghiệp</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-amber-400 mr-3 shrink-0 mt-0.5" /> <span className="text-red-50">Ưu đãi từ các đối tác liên kết</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form đăng ký Section */}
      <section className="py-20 bg-gray-50 px-4" id="dang-ky">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wider mb-4">Đơn Đăng Ký Gia Nhập</h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Vui lòng điền đầy đủ thông tin dưới đây. Ban thư ký sẽ liên hệ với bạn trong thời gian sớm nhất.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Thông tin doanh nghiệp */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-6 flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-red-700" /> Thông tin doanh nghiệp
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tên doanh nghiệp (Đầy đủ theo GPKD) <span className="text-red-500">*</span></label>
                    <input type="text" name="companyName" required value={formData.companyName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="VD: Công ty Cổ phần ABC" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mã số thuế <span className="text-red-500">*</span></label>
                    <input type="text" name="taxId" required value={formData.taxId} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="VD: 0101234567" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lĩnh vực hoạt động chính <span className="text-red-500">*</span></label>
                    <select name="industry" required value={formData.industry} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors bg-white">
                      <option value="">-- Chọn lĩnh vực --</option>
                      <option value="Xây dựng & Bất động sản">Xây dựng & Bất động sản</option>
                      <option value="Thương mại & Bán lẻ">Thương mại & Bán lẻ</option>
                      <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                      <option value="Sản xuất">Sản xuất</option>
                      <option value="Y tế & Dược phẩm">Y tế & Dược phẩm</option>
                      <option value="Vận tải & Logistics">Vận tải & Logistics</option>
                      <option value="Khác">Khác</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ trụ sở chính <span className="text-red-500">*</span></label>
                    <input type="text" name="address" required value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                    <input type="url" name="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="https://" />
                  </div>
                </div>
              </div>

              {/* Thông tin người đại diện */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-6 flex items-center mt-8">
                  <UserPlus className="w-5 h-5 mr-2 text-red-700" /> Thông tin người đại diện tham gia Hội
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên <span className="text-red-500">*</span></label>
                    <input type="text" name="repName" required value={formData.repName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="Nguyễn Văn A" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Chức vụ <span className="text-red-500">*</span></label>
                    <input type="text" name="repPosition" required value={formData.repPosition} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="Giám đốc / CEO" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại di động <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="09xx xxx xxx" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email liên hệ <span className="text-red-500">*</span></label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="email@domain.com" />
                  </div>
                </div>
              </div>

              {/* Khác */}
              <div>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Người/Đơn vị giới thiệu (Nếu có)</label>
                    <input type="text" name="referral" value={formData.referral} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none transition-colors" placeholder="Tên hội viên hoặc tổ chức giới thiệu" />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button type="submit" className="w-full md:w-auto px-8 py-4 bg-red-700 text-white font-bold rounded-md hover:bg-red-800 transition-colors shadow-md flex items-center justify-center text-lg">
                  Gửi Đơn Đăng Ký <CheckCircle2 className="ml-2 w-5 h-5" />
                </button>
                <p className="text-sm text-gray-500 mt-4 text-center md:text-left">
                  Bằng việc gửi đơn đăng ký, bạn đồng ý với các <a href="#" className="text-red-600 hover:underline">Điều lệ và Quy định</a> của BLTBA.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MembersPage;
