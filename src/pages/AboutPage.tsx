import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, Leaf, Users, Link as LinkIcon, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50/50">
      {/* Về BLTBA Section */}
      <section className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
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
      </section>

      {/* 5 Sứ mệnh Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="relative">
          {/* Desktop Layout for Missions */}
          <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
            {/* Top Left */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full"
            >
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-6 border border-red-100">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Đưa cộng đồng doanh nghiệp phát triển vững mạnh</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Trong đó sự đóng góp về giá trị sản xuất, xuất khẩu của các Doanh nghiệp chiếm tỷ trọng cao bằng những sản phẩm có giá trị gia tăng cao.</p>
            </motion.div>

            {/* Center Circle */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="flex text-red-600 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <div className="w-40 h-40 rounded-full border-2 border-red-600 flex items-center justify-center mb-4 bg-white shadow-lg relative">
                <span className="text-7xl font-bold text-red-600">5</span>
              </div>
              <h2 className="text-3xl font-bold text-red-700 uppercase">Sứ mệnh</h2>
            </motion.div>

            {/* Top Right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full"
            >
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-6 border border-red-100">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Nâng cao năng lực cạnh tranh cho doanh nghiệp</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Đào tạo, phát triển nguồn nhân lực kỹ thuật giúp nâng cao giá trị, chất lượng và khả năng cạnh tranh của doanh nghiệp; Chuyển đổi từ sản xuất gia công sang phát triển sản phẩm có thiết kế để nâng cao giá trị sản phẩm.</p>
            </motion.div>

            {/* Bottom Left */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full"
            >
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-6 border border-red-100">
                <Leaf size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Hướng đến Xanh - Sạch - Số</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Đưa ngành Doanh nghiệp đi đầu trong xu hướng Xanh - Sạch - Số trong chuỗi giá trị từ Nguyên liệu - Thiết kế - Sản xuất - Thương mại - Quản trị.</p>
            </motion.div>

            {/* Bottom Center */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full"
            >
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-6 border border-red-100">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Phát triển và Kế thừa</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Bồi dưỡng, phát triển và chuyển giao thế hệ kế thừa để những nền tảng vững chắc từ thế hệ trước được tiếp bước và phát triển qua các thế hệ sau.</p>
            </motion.div>

            {/* Bottom Right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full"
            >
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-6 border border-red-100">
                <LinkIcon size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Gắn kết cộng đồng doanh nghiệp</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Xây dựng mối quan hệ hiệp nhất giữa các doanh nghiệp hội viên, giữa hội viên với các tổ chức và cơ quan quản lý Nhà nước. Xây dựng cộng đồng phát triển với trách nhiệm xã hội.</p>
            </motion.div>
          </div>

          {/* Mobile Layout for Missions */}
          <div className="lg:hidden space-y-8">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <div className="flex text-red-600 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <div className="w-32 h-32 rounded-full border-2 border-red-600 flex items-center justify-center mb-4 bg-white shadow-lg">
                <span className="text-6xl font-bold text-red-600">5</span>
              </div>
              <h2 className="text-2xl font-bold text-red-700 uppercase">Sứ mệnh</h2>
            </div>

            {[
              { icon: TrendingUp, title: "Đưa cộng đồng doanh nghiệp phát triển vững mạnh", desc: "Trong đó sự đóng góp về giá trị sản xuất, xuất khẩu của các Doanh nghiệp chiếm tỷ trọng cao bằng những sản phẩm có giá trị gia tăng cao." },
              { icon: Target, title: "Nâng cao năng lực cạnh tranh cho doanh nghiệp", desc: "Đào tạo, phát triển nguồn nhân lực kỹ thuật giúp nâng cao giá trị, chất lượng và khả năng cạnh tranh của doanh nghiệp; Chuyển đổi từ sản xuất gia công sang phát triển sản phẩm có thiết kế để nâng cao giá trị sản phẩm." },
              { icon: Leaf, title: "Hướng đến Xanh - Sạch - Số", desc: "Đưa ngành Doanh nghiệp đi đầu trong xu hướng Xanh - Sạch - Số trong chuỗi giá trị từ Nguyên liệu - Thiết kế - Sản xuất - Thương mại - Quản trị." },
              { icon: Users, title: "Phát triển và Kế thừa", desc: "Bồi dưỡng, phát triển và chuyển giao thế hệ kế thừa để những nền tảng vững chắc từ thế hệ trước được tiếp bước và phát triển qua các thế hệ sau." },
              { icon: LinkIcon, title: "Gắn kết cộng đồng doanh nghiệp", desc: "Xây dựng mối quan hệ hiệp nhất giữa các doanh nghiệp hội viên, giữa hội viên với các tổ chức và cơ quan quản lý Nhà nước. Xây dựng cộng đồng phát triển với trách nhiệm xã hội." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4 border border-red-100">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chúng tôi là Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-12">Chúng tôi là</h2>
        
        {/* Acronyms */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16">
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
      </section>

      {/* Đối tác Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto border-t border-gray-200">
        <h2 className="text-2xl font-bold text-red-700 mb-8">Đối tác</h2>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <img 
              key={i}
              src={`https://picsum.photos/seed/partner${i}/150/60`} 
              alt={`Partner ${i}`} 
              className="h-12 object-contain"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </section>

      {/* Kênh truyền thông Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto border-t border-gray-200">
        <h2 className="text-2xl font-bold text-red-700 mb-8">Kênh truyền thông</h2>
        <div className="flex gap-4">
          {['zalo', 'facebook', 'instagram', 'youtube'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
            >
              <span className="sr-only">{social}</span>
              {/* Placeholder for social icons, using generic shapes for now */}
              <div className="w-6 h-6 border-2 border-current rounded-sm"></div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

