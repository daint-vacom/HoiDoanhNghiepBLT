import React from "react";
import { motion } from "motion/react";
import { Users, ShieldCheck, Award } from "lucide-react";

const ExecutiveBoardPage = () => {
  const bchMembers = [
    {
      name: "Phùng Quốc Mẫn",
      role: "Chủ tịch",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Bùi Như Việt",
      role: "Phó chủ tịch thường trực",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Nguyễn Hoài Bảo",
      role: "Phó chủ tịch - Tổng thư ký",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Nguyễn Chánh Phương",
      role: "Phó chủ tịch",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Dương Thị Minh Tuệ",
      role: "Phó chủ tịch",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    },
    {
      name: "Nguyễn Thới Hòa Bình",
      role: "Phó chủ tịch",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Phạm Chân Quang",
      role: "Phó chủ tịch",
      img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop",
    },
    {
      name: "Tô Ngọc Ngời",
      role: "Phó chủ tịch",
      img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Trần Anh Vũ",
      role: "Phó chủ tịch",
      img: "https://images.unsplash.com/photo-1544168190-79c154570661?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Lương Thị Ngọc Xuyến",
      role: "Phó chủ tịch",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    },
    {
      name: "Lê Hải Liễu",
      role: "Ủy viên Ban thường vụ",
      img: "https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?q=80&w=2068&auto=format&fit=crop",
    },
    {
      name: "Vũ Quang Huy",
      role: "Ủy viên Ban thường vụ",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop",
    },
    {
      name: "Trần Lam Sơn",
      role: "Ủy viên Ban thường vụ",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Nguyễn Thanh Lam",
      role: "Ủy viên Ban thường vụ",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Đặng Quốc Cường",
      role: "Ủy viên Ban thường vụ",
      img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  const inspectionBoard = [
    {
      name: "Trần Tuấn Anh",
      role: "Trưởng Ban kiểm tra",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Nguyễn Khắc Vũ",
      role: "Ủy viên Ban kiểm tra",
      img: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Nguyễn Dương Hiệu",
      role: "Ủy viên Ban kiểm tra",
      img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Tạ Thành Thảo",
      role: "Ủy viên Ban kiểm tra",
      img: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  const MemberCard = ({ member }: { member: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-3 sm:p-4 flex flex-col gap-1 flex-grow justify-center text-center">
        <h4 className="font-bold text-gray-900 group-hover:text-red-700 transition-colors text-[14px] sm:text-base leading-tight">
          {member.name}
        </h4>
        <p className="text-[11px] sm:text-[12px] text-red-600 font-extrabold uppercase tracking-wider line-clamp-2">
          {member.role}
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-20 relative bg-gray-900 overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
            alt="Board context"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Ban Chấp Hành <span className="text-red-500">Nhiệm Kỳ I</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Hội đồng lãnh đạo tâm huyết, dẫn dắt cộng đồng doanh nghiệp BLTBA
              phát triển bền vững và gắn kết.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organizational Structure Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-2">
              Sơ đồ tổ chức
            </h2>
            <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 mb-4" />
            <p className="text-xs text-gray-500 uppercase font-bold tracking-[0.2em]">
              Phân cấp & Vận hành
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col items-center relative">
            {/* Root */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-900 to-red-800 text-white px-10 py-5 rounded-2xl shadow-xl font-black text-lg text-center border border-red-700/50 w-full max-w-sm z-10"
            >
              ĐẠI HỘI ĐẠI BIỂU
              <div className="text-[10px] text-red-200 mt-1 font-bold tracking-widest uppercase mb-1">
                Nhiệm kỳ I (2025 - 2028)
              </div>
            </motion.div>

            {/* Line down */}
            <div className="w-px h-8 bg-gray-300"></div>

            {/* Horizontal Branch */}
            <div className="relative w-full max-w-[600px] flex flex-col md:flex-row justify-between md:items-start items-center gap-8 md:gap-0">
              {/* Desktop Horizontal Line connecting BKT and BCH */}
              <div className="absolute top-0 left-[25%] right-[25%] h-px bg-gray-300 hidden md:block"></div>

              {/* Branch 1: Ban Kiểm Tra */}
              <div className="flex flex-col items-center w-full md:w-1/2 pt-0 md:pt-6 relative">
                <div className="w-px h-6 bg-gray-300 absolute top-0 hidden md:block"></div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-amber-200 text-amber-700 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow font-bold text-sm text-center flex items-center justify-center gap-2 cursor-default w-[220px]"
                >
                  <ShieldCheck size={18} />
                  BAN KIỂM TRA
                </motion.div>
                {/* Mobile connecting line */}
                <div className="w-px h-8 bg-gray-300 md:hidden mt-2"></div>
              </div>

              {/* Branch 2: Ban Chấp Hành */}
              <div className="flex flex-col items-center w-full md:w-1/2 pt-0 md:pt-6 relative">
                <div className="w-px h-6 bg-gray-300 absolute top-0 hidden md:block"></div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-red-200 text-red-800 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow font-bold text-sm text-center flex items-center justify-center gap-2 relative z-10 w-[220px]"
                >
                  <Users size={18} />
                  BAN CHẤP HÀNH
                </motion.div>

                <div className="w-px h-8 bg-gray-300"></div>

                {/* Sub-branches of Ban Chấp Hành */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative w-full flex justify-center mt-2"
                >
                  <div className="grid grid-cols-2 gap-3 w-[260px] sm:w-[320px]">
                    {[
                      "BAN THƯỜNG VỤ",
                      "BAN CỐ VẤN",
                      "BAN CHUYÊN GIA",
                      "CÁC CÂU LẠC BỘ",
                    ].map((label, idx) => (
                      <div
                        key={idx}
                        className={`px-2 sm:px-4 py-3 rounded-lg border text-[11px] sm:text-xs font-bold text-center flex items-center justify-center ${label === "BAN THƯỜNG VỤ" ? "bg-red-50 text-red-800 border-red-200 shadow-sm" : "bg-white text-gray-600 border-gray-200 shadow-sm"}`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members - Card Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Ban Chấp Hành List */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                    Ban Chấp Hành
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Đội ngũ lãnh đạo và các Ủy viên thường trực
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {bchMembers.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Ban Kiểm Tra List */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                    Ban Kiểm Tra
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Giám sát và đảm bảo tính minh bạch
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {inspectionBoard.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-red-900 rounded-2xl p-10 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12 pointer-events-none">
              <Award size={250} />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 uppercase tracking-tighter">
                Gắn kết vì sự phát triển
              </h2>
              <p className="text-red-100 text-base sm:text-lg max-w-2xl opacity-90 leading-relaxed">
                Chúng tôi luôn chào đón những ý tưởng mới và sự đóng góp từ tất
                cả hội viên để xây dựng BLTBA ngày càng vững mạnh.
              </p>
            </div>
            <button className="relative z-10 px-8 py-4 bg-white text-red-900 font-bold rounded-full transition-all hover:bg-red-50 hover:shadow-lg uppercase tracking-widest text-sm active:scale-95 flex-shrink-0">
              Liên hệ ban thư ký
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveBoardPage;
