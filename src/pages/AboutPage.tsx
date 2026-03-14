import React from "react";
import { motion } from "motion/react";
import {
  Target,
  TrendingUp,
  Leaf,
  Users,
  Link as LinkIcon,
  Star,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Award,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import OrganizationChart from "../components/OrganizationChart";

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Về BLTBA Section */}
      <section className="pt-24 pb-16 relative bg-gray-950 overflow-hidden flex items-center min-h-[60vh]">
        {/* Blended Background Image - Right side */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/4 z-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
            alt="BLTBA Event"
            className="w-full h-full object-cover object-right opacity-40"
            style={{
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 90%)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 90%)",
            }}
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="px-4 max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 bg-gray-950/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 lg:p-0 rounded-3xl"
            >
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
                >
                  Về <span className="text-red-500">BLTBA</span>
                </motion.h1>
                <div className="w-16 h-1 bg-red-600 mb-6"></div>
              </div>

              <div className="text-gray-300 space-y-4 text-base leading-relaxed text-justify">
                <p className="text-lg font-medium text-white">
                  Hội Doanh nghiệp Quận Bắc Từ Liêm hoạt động với sứ mệnh kết
                  nối, hỗ trợ và phát triển cộng đồng doanh nghiệp trên địa bàn
                  quận và các khu vực lân cận.
                </p>
                <p>
                  Trải qua quá trình hình thành và phát triển, BLTBA đã không
                  ngừng lớn mạnh, thu hút đông đảo hội viên tham gia, trở thành
                  tổ chức có quy mô và uy tín, đại diện cho tiếng nói của cộng
                  đồng doanh nghiệp.
                </p>
                <p>
                  Sự kiện sáp nhập đánh dấu một bước chuyển quan trọng, hình
                  thành một hiệp hội thống nhất với quy mô lớn, quy tụ cộng đồng
                  doanh nghiệp hoạt động đa dạng trong các lĩnh vực: sản xuất,
                  thương mại, dịch vụ, công nghệ, xây dựng và bất động sản.
                </p>
                <p>
                  Với khát vọng gây dựng thương hiệu vững chắc, BLTBA nỗ lực
                  kiến tạo các nền tảng xúc tiến thương mại hiệu quả, mở rộng
                  thị trường và đóng góp tích cực cho sự phát triển chung của
                  nền kinh tế.
                </p>
              </div>
            </motion.div>

            {/* Empty space for the image to shine on large screens */}
            <div className="hidden lg:block lg:col-span-5"></div>
          </div>
        </div>
      </section>

      {/* 5 Sứ mệnh Section */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center space-x-2 mb-2"
            >
              <Star className="text-amber-500 w-3 h-3" fill="currentColor" />
              <Star className="text-amber-500 w-5 h-5" fill="currentColor" />
              <Star className="text-amber-500 w-3 h-3" fill="currentColor" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-extrabold text-red-800 uppercase tracking-tight"
            >
              5 Sứ mệnh cốt lõi
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 w-12 bg-amber-500 mx-auto mt-3"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Mission 1 - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group lg:col-span-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-red-50 rounded-bl-full -mr-6 -mt-6 transition-transform duration-500 group-hover:scale-110 z-0" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-10 h-10 bg-red-100 text-red-700 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                    <TrendingUp size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-700 transition-colors">
                    Đưa cộng đồng doanh nghiệp phát triển vững mạnh
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed max-w-2xl">
                    Trong đó sự đóng góp về giá trị sản xuất, xuất khẩu của các
                    Doanh nghiệp chiếm tỷ trọng cao bằng những sản phẩm có giá
                    trị gia tăng cao.
                  </p>
                </div>
                <div className="text-6xl font-black text-gray-50 absolute bottom-[-5px] right-4 select-none z-[-1]">
                  01
                </div>
              </div>
            </motion.div>

            {/* Mission 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0" />
              <div className="relative z-10">
                <div className="w-9 h-9 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                  <Target size={18} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-700 transition-colors">
                  Nâng cao năng lực cạnh tranh
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Đào tạo, phát triển nguồn nhân lực kỹ thuật giúp nâng cao giá
                  trị, chất lượng và khả năng cạnh tranh của doanh nghiệp;
                  Chuyển đổi từ sản xuất gia công sang phát triển sản phẩm có
                  thiết kế.
                </p>
              </div>
              <div className="text-5xl font-black text-gray-50 absolute bottom-[-5px] right-4 select-none z-0">
                02
              </div>
            </motion.div>

            {/* Mission 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0" />
              <div className="relative z-10">
                <div className="w-9 h-9 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                  <Leaf size={18} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  Hướng đến Xanh - Sạch - Số
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Đưa ngành Doanh nghiệp đi đầu trong xu hướng Xanh - Sạch - Số
                  trong chuỗi giá trị từ Nguyên liệu - Thiết kế - Sản xuất -
                  Thương mại - Quản trị.
                </p>
              </div>
              <div className="text-5xl font-black text-gray-50 absolute bottom-[-5px] right-4 select-none z-0">
                03
              </div>
            </motion.div>

            {/* Mission 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0" />
              <div className="relative z-10">
                <div className="w-9 h-9 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                  <Users size={18} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                  Phát triển và Kế thừa
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Bồi dưỡng, phát triển và chuyển giao thế hệ kế thừa để những
                  nền tảng vững chắc từ thế hệ trước được tiếp bước và phát
                  triển qua các thế hệ sau.
                </p>
              </div>
              <div className="text-5xl font-black text-gray-50 absolute bottom-[-5px] right-4 select-none z-0">
                04
              </div>
            </motion.div>

            {/* Mission 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110 z-0" />
              <div className="relative z-10">
                <div className="w-9 h-9 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                  <LinkIcon size={18} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors">
                  Gắn kết cộng đồng
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Xây dựng mối quan hệ hiệp nhất giữa các doanh nghiệp hội viên,
                  giữa hội viên với các tổ chức và cơ quan quản lý Nhà nước. Xây
                  dựng cộng đồng phát triển với trách nhiệm xã hội.
                </p>
              </div>
              <div className="text-5xl font-black text-gray-50 absolute bottom-[-5px] right-4 select-none z-0">
                05
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chúng tôi là Section */}
      <section className="py-16 relative bg-gray-900 overflow-hidden min-h-[60vh] flex items-center">
        {/* Blended Background Image - Left side */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 z-0">
          <img
            src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80"
            alt="BLTBA Team"
            className="w-full h-full object-cover object-left opacity-30"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 90%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 90%)",
            }}
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Empty space for the image to shine on large screens */}
            <div className="hidden lg:block relative h-full min-h-[300px]">
              {/* Floating Badge blended into the image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-gray-700 max-w-xs"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-red-900/50 text-red-400 rounded-full flex items-center justify-center border border-red-500/30">
                    <Users size={24} />
                  </div>
                  <div className="text-3xl font-black text-white">600+</div>
                </div>
                <p className="text-gray-400 text-sm font-medium">
                  Hội viên doanh nghiệp đồng hành và phát triển
                </p>
              </motion.div>
            </div>

            {/* Info Blocks */}
            <div className="space-y-8 bg-gray-900/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 lg:p-0 rounded-3xl">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2"
                >
                  Chúng tôi là ai
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
                >
                  Đại diện tiếng nói của cộng đồng doanh nghiệp
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 text-base leading-relaxed"
                >
                  BLTBA không chỉ là nơi giao lưu, mà còn là bệ phóng vững chắc
                  giúp các doanh nghiệp vươn xa, kiến tạo những giá trị bền vững
                  cho xã hội.
                </motion.p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Target className="w-6 h-6" />,
                    title: "Tầm nhìn chiến lược",
                    desc: "Trở thành hiệp hội doanh nghiệp kiểu mẫu, dẫn dắt sự phát triển kinh tế khu vực.",
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: "Giá trị cốt lõi",
                    desc: "Đoàn kết - Sáng tạo - Trách nhiệm - Cùng phát triển.",
                  },
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: "Mạng lưới rộng khắp",
                    desc: "Kết nối giao thương không giới hạn, vươn tầm quốc gia và quốc tế.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start group cursor-pointer relative p-4 rounded-2xl transition-all duration-300 hover:bg-gray-800/50"
                  >
                    {/* Outline Beam Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-500/50 transition-colors duration-500 z-0"></div>
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] z-0"></div>

                    <div className="relative z-10 w-12 h-12 bg-gray-800 text-red-400 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shrink-0 mr-4 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure Section */}
      <OrganizationChart />

      {/* Kênh truyền thông Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-red-900 to-red-950 rounded-3xl p-12 shadow-2xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20 transition-transform duration-700 group-hover:scale-150"></div>

            <div className="relative z-10 mb-10 md:mb-0 text-center md:text-left md:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-4">
                Kết nối với BLTBA
              </h2>
              <p className="text-red-100 text-lg max-w-md leading-relaxed mx-auto md:mx-0">
                Theo dõi các kênh truyền thông chính thức của chúng tôi để không
                bỏ lỡ những tin tức, sự kiện và cơ hội hợp tác mới nhất.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center md:justify-end gap-4 md:w-1/2">
              {[
                {
                  name: "Facebook",
                  icon: <Facebook size={24} />,
                  color: "hover:bg-[#1877F2] hover:border-[#1877F2]",
                },
                {
                  name: "Youtube",
                  icon: <Youtube size={24} />,
                  color: "hover:bg-[#FF0000] hover:border-[#FF0000]",
                },
                {
                  name: "Instagram",
                  icon: <Instagram size={24} />,
                  color: "hover:bg-[#E4405F] hover:border-[#E4405F]",
                },
                {
                  name: "Zalo",
                  icon: <MessageCircle size={24} />,
                  color: "hover:bg-[#0068FF] hover:border-[#0068FF]",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  title={social.name}
                  className={`w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-2 border border-white/20 ${social.color}`}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
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
