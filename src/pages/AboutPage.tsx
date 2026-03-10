import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, Leaf, Users, Link as LinkIcon, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Về BLTBA Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img 
                src="https://picsum.photos/seed/bltba1/600/800" 
                alt="BLTBA Event 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://picsum.photos/seed/bltba2/600/400" 
                alt="BLTBA Event 2" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://picsum.photos/seed/bltba3/600/400" 
                alt="BLTBA Event 3" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://picsum.photos/seed/bltba4/600/800" 
                alt="BLTBA Event 4" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-red-700 mb-8">Về BLTBA</h2>
            <div className="text-gray-700 space-y-4 leading-relaxed text-justify">
              <p>
                <strong>BLTBA – Hội Doanh nghiệp Quận Bắc Từ Liêm</strong> hoạt động với sứ mệnh kết nối, hỗ trợ và phát triển cộng đồng doanh nghiệp trên địa bàn quận và các khu vực lân cận.
              </p>
              <p>
                Trải qua quá trình hình thành và phát triển, BLTBA đã không ngừng lớn mạnh, thu hút đông đảo hội viên tham gia, trở thành tổ chức có quy mô và uy tín, đại diện cho tiếng nói của cộng đồng doanh nghiệp.
              </p>
              <p>
                Sự kiện đánh dấu một bước chuyển quan trọng trong tiến trình phát triển của tổ chức, hình thành một hiệp hội thống nhất với quy mô lớn, trở thành một trong những tổ chức có hoạt động sôi nổi và hiệu quả nhất.
              </p>
              <p>
                Sau sáp nhập và mở rộng, BLTBA quy tụ cộng đồng doanh nghiệp hoạt động đa dạng trong các lĩnh vực: sản xuất, thương mại, dịch vụ, công nghệ, xây dựng, bất động sản và các dịch vụ phụ trợ liên quan.
              </p>
              <p>
                Với khát vọng gây dựng thương hiệu doanh nghiệp vững chắc, vững mạnh năng lực trên thị trường, BLTBA nỗ lực thực hiện các chương trình, hoạt động kết nối trong cộng đồng hội viên, đồng thời kiến tạo các nền tảng xúc tiến thương mại hiệu quả nhằm tạo cơ hội kinh doanh cho hội viên, mở rộng thị trường và đóng góp tích cực cho sự phát triển chung của nền kinh tế.
              </p>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* 5 Sứ mệnh Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center space-x-2 mb-4"
            >
              <Star className="text-amber-500 w-5 h-5" fill="currentColor" />
              <Star className="text-amber-500 w-8 h-8" fill="currentColor" />
              <Star className="text-amber-500 w-5 h-5" fill="currentColor" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-red-800 uppercase tracking-tight"
            >
              5 Sứ mệnh cốt lõi
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 w-24 bg-amber-500 mx-auto mt-6"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mission 1 - Large Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group lg:col-span-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-50 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 z-0" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-red-100 text-red-700 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                    <TrendingUp size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">Đưa cộng đồng doanh nghiệp phát triển vững mạnh</h3>
                  <p className="text-gray-600 text-base leading-relaxed max-w-2xl">Trong đó sự đóng góp về giá trị sản xuất, xuất khẩu của các Doanh nghiệp chiếm tỷ trọng cao bằng những sản phẩm có giá trị gia tăng cao.</p>
                </div>
                <div className="text-9xl font-black text-gray-50 absolute bottom-[-20px] right-4 select-none z-[-1]">01</div>
              </div>
            </motion.div>

            {/* Mission 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110 z-0" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">Nâng cao năng lực cạnh tranh</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Đào tạo, phát triển nguồn nhân lực kỹ thuật giúp nâng cao giá trị, chất lượng và khả năng cạnh tranh của doanh nghiệp; Chuyển đổi từ sản xuất gia công sang phát triển sản phẩm có thiết kế.</p>
              </div>
              <div className="text-8xl font-black text-gray-50 absolute bottom-[-10px] right-4 select-none z-0">02</div>
            </motion.div>

            {/* Mission 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110 z-0" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                  <Leaf size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">Hướng đến Xanh - Sạch - Số</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Đưa ngành Doanh nghiệp đi đầu trong xu hướng Xanh - Sạch - Số trong chuỗi giá trị từ Nguyên liệu - Thiết kế - Sản xuất - Thương mại - Quản trị.</p>
              </div>
              <div className="text-8xl font-black text-gray-50 absolute bottom-[-10px] right-4 select-none z-0">03</div>
            </motion.div>

            {/* Mission 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110 z-0" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Phát triển và Kế thừa</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Bồi dưỡng, phát triển và chuyển giao thế hệ kế thừa để những nền tảng vững chắc từ thế hệ trước được tiếp bước và phát triển qua các thế hệ sau.</p>
              </div>
              <div className="text-8xl font-black text-gray-50 absolute bottom-[-10px] right-4 select-none z-0">04</div>
            </motion.div>

            {/* Mission 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110 z-0" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                  <LinkIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">Gắn kết cộng đồng</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Xây dựng mối quan hệ hiệp nhất giữa các doanh nghiệp hội viên, giữa hội viên với các tổ chức và cơ quan quản lý Nhà nước. Xây dựng cộng đồng phát triển với trách nhiệm xã hội.</p>
              </div>
              <div className="text-8xl font-black text-gray-50 absolute bottom-[-10px] right-4 select-none z-0">05</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chúng tôi là Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-red-800 uppercase tracking-tight"
            >
              Chúng tôi là
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 w-24 bg-amber-500 mx-auto mt-6"
            />
          </div>
          
          {/* Acronyms */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-20">
          {[
            { letter: "H", rest: "olistic", desc: "tư duy toàn diện" },
            { letter: "A", rest: "uthentic", desc: "thể hiện sự nổi trội" },
            { letter: "W", rest: "ow", desc: "tạo sự ngạc nhiên" },
            { letter: "A", rest: "ffiliate", desc: "cùng nhau kinh doanh" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center"
            >
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-extrabold text-red-800">{item.letter}</span>
                <span className="text-2xl font-bold text-gray-800">{item.rest}</span>
              </div>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { value: "35", label: "năm hoạt động", color: "bg-red-800" },
            { value: "600+", label: "hội viên", color: "bg-red-700" },
            { value: "50", label: "chương trình/ tháng", color: "bg-red-800" },
            { value: "250", label: "hội thảo, sự kiện/ năm", color: "bg-red-700" },
            { value: "2300+", label: "người tham gia sự kiện/ năm", color: "bg-red-800" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${stat.color} text-white p-6 rounded-xl text-center flex flex-col justify-center items-center h-32`}
            >
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* Đối tác Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-red-800 uppercase tracking-wider">Đối tác đồng hành</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/partner${i}/150/60`} 
                alt={`Partner ${i}`} 
                className="h-12 object-contain hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Kênh truyền thông Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between bg-red-900 rounded-3xl p-10 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-950 rounded-full blur-3xl opacity-50 -ml-20 -mb-20"></div>
            
            <div className="relative z-10 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Kết nối với BLTBA</h2>
              <p className="text-red-100 max-w-md">Theo dõi các kênh truyền thông chính thức của chúng tôi để cập nhật những tin tức và sự kiện mới nhất.</p>
            </div>
            
            <div className="relative z-10 flex gap-4">
              {['zalo', 'facebook', 'instagram', 'youtube'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-900 transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/20"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 border-2 border-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

