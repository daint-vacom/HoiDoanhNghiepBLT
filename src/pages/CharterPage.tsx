import React from "react";
import { motion } from "motion/react";
import {
  FileText,
  Download,
  CheckCircle2,
  Award,
  ShieldCheck,
  Scale,
} from "lucide-react";

const CharterPage = () => {
  const chapters = [
    {
      id: 1,
      title: "Chương I: Tên gọi, Tôn chỉ, Mục đích",
      content: [
        {
          subTitle: "Điều 1: Tên gọi",
          text: "Tên hội: Hội Doanh nghiệp Quận Bắc Từ Liêm (Viết tắt: BLTBA).",
        },
        {
          subTitle: "Điều 2: Tôn chỉ",
          text: "Hội Doanh nghiệp Quận Bắc Từ Liêm là tổ chức xã hội - nghề nghiệp của các doanh nghiệp, tổ chức kinh tế và các nhà quản lý, chuyên gia hoạt động trên địa bàn Quận Bắc Từ Liêm và các khu vực lân cận.",
        },
        {
          subTitle: "Điều 3: Mục đích",
          text: "Liên kết, hợp tác, hỗ trợ nhau về kinh tế - kỹ thuật trong sản xuất, kinh doanh, dịch vụ; nâng cao giá trị sản phẩm; đại diện và bảo vệ quyền, lợi ích hợp pháp của hội viên.",
        },
      ],
    },
    {
      id: 2,
      title: "Chương II: Nhiệm vụ và Quyền hạn",
      content: [
        {
          subTitle: "Điều 4: Nhiệm vụ",
          text: "Tuyên truyền mục đích của Hội; Đại diện cho hội viên trong các quan hệ nội và ngoại; Bồi dưỡng, nâng cao kiến thức cho hội viên.",
        },
        {
          subTitle: "Điều 5: Quyền hạn",
          text: "Tham gia các chương trình, dự án của Nhà nước; Tổ chức các dịch vụ hỗ trợ doanh nghiệp; Góp ý các văn bản pháp quy.",
        },
      ],
    },
    {
      id: 3,
      title: "Chương III: Hội viên",
      content: [
        {
          subTitle: "Điều 6: Điều kiện gia nhập",
          text: "Các doanh nghiệp thuộc mọi thành phần kinh tế, các nhà quản lý có tâm huyết, tán thành điều lệ Hội và tự nguyện đăng ký tham gia.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Header section with Hero style */}
      <section className="pt-32 pb-16 relative bg-red-900 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
            alt="Charter background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase">
              Điều lệ hội <span className="text-amber-400">BLTBA</span>
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-red-100 text-lg max-w-2xl mx-auto">
              Văn bản pháp lý nền tảng quy định về tổ chức, hoạt động và quyền
              lợi của hội viên Hội Doanh nghiệp Quận Bắc Từ Liêm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Content Area */}
            <div className="lg:flex-1 order-2 lg:order-1">
              <div className="prose prose-red max-w-none prose-headings:text-red-900 prose-p:text-gray-700">
                {chapters.map((chapter) => (
                  <motion.div
                    key={chapter.id}
                    id={`chapter-${chapter.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                  >
                    <h2 className="text-2xl font-extrabold text-red-800 mb-8 pb-3 border-b border-gray-100 flex items-center gap-3">
                      <Scale className="w-6 h-6 text-red-600" />
                      {chapter.title}
                    </h2>
                    <div className="space-y-8">
                      {chapter.content.map((item, idx) => (
                        <div
                          key={idx}
                          className="relative pl-6 border-l-2 border-red-100 hover:border-red-500 transition-colors"
                        >
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            {item.subTitle}
                          </h4>
                          <p className="text-base text-gray-600 leading-relaxed text-justify">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Conclusion/Summary */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-20 pt-10 border-t border-gray-100"
                >
                  <p className="text-base text-gray-500 italic leading-relaxed text-center max-w-3xl mx-auto">
                    "Tất cả hội viên khi gia nhập BLTBA đều cam kết tuân thủ các
                    điều khoản quy định tại Điều lệ này nhằm xây dựng một cộng
                    đồng doanh nghiệp vững mạnh, minh bạch và phát triển."
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Sidebar / Quick Links */}
            <div className="lg:w-80 order-1 lg:order-2">
              <div className="sticky top-32 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 uppercase tracking-tight text-sm">
                  <FileText className="w-4 h-4 text-red-600" />
                  Mục lục điều lệ
                </h3>
                <nav className="space-y-3">
                  {chapters.map((chapter) => (
                    <a
                      key={chapter.id}
                      href={`#chapter-${chapter.id}`}
                      className="block text-xs font-semibold text-gray-500 hover:text-red-700 hover:translate-x-1 transition-all uppercase tracking-wide"
                    >
                      {chapter.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-red-900 border-2 border-red-900 py-3 px-6 rounded-full font-bold hover:bg-red-50 transition-all active:scale-95 shadow-sm">
                    <Download className="w-4 h-4" />
                    TẢI FILE PDF
                  </button>
                  <p className="text-[10px] text-gray-400 mt-4 text-center uppercase font-medium tracking-widest">
                    Version 2024.1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharterPage;
