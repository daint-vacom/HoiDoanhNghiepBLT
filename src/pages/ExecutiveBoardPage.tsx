import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Users, ShieldCheck, Award } from "lucide-react";
import OrganizationChart from "../components/OrganizationChart";

const ExecutiveBoardPage = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 2000], ["-20%", "20%"]);

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

  // Re-organize board members into 3 main levels based on standard executive structure
  const president = bchMembers.filter((m) => m.role === "Chủ tịch");

  const level2 = bchMembers.filter(
    (m) =>
      m.role === "Phó chủ tịch thường trực" ||
      m.role === "Phó chủ tịch - Tổng thư ký" ||
      m.role === "Phó chủ tịch",
  );

  const level3 = [
    ...bchMembers.filter((m) => m.role === "Ủy viên Ban thường vụ"),
    ...inspectionBoard, // Integrate Ban kiểm tra into lowest tier for a cleaner look
  ];

  // Add mock company data to see UI changes
  if (president[0]) president[0].company = "Tập đoàn Vingroup";
  if (level2[0]) level2[0].company = "Công ty CP ABC";
  if (level2[1]) level2[1].company = "Tập đoàn Hòa Phát";
  if (level2[2]) level2[2].company = "Công ty Gỗ Đức Thành";
  if (level2[3]) level2[3].company = "Sacomreal";
  if (level3[0]) level3[0].company = "Vacom JSC";
  if (level3[3]) level3[3].company = "Techcombank";

  const HierarchicalMemberCard = ({
    member,
    sizeClass,
    borderClass = "border-white/20",
    borderWidthClass = "border-4",
    textClass,
    delay = 0,
  }: {
    member: any;
    sizeClass: string;
    borderClass?: string;
    borderWidthClass?: string;
    textClass: { name: string; role: string };
    delay?: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center group relative py-3 px-3 rounded-2xl transition-all duration-300 hover:bg-white/5 w-48 md:w-56 lg:w-64"
    >
      <div
        className={`${sizeClass} relative rounded-full overflow-hidden ${borderWidthClass} ${borderClass} shadow-lg mb-3 transition-all duration-500 group-hover:scale-105`}
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>

      <div className="relative z-10">
        <h4
          className={`font-bold text-white uppercase tracking-tight ${textClass.name} drop-shadow-md leading-tight group-hover:text-amber-400 transition-colors duration-300`}
        >
          {member.name}
        </h4>
        <p
          className={`font-semibold uppercase tracking-widest ${textClass.role || "text-amber-500"} mt-0.5 drop-shadow-sm leading-tight`}
        >
          {member.role}
        </p>

        {member.company && (
          <p className="text-gray-400 text-[10px] md:text-[11px] mt-1.5 font-medium leading-tight opacity-80 italic">
            {member.company}
          </p>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-20 relative bg-gray-950 overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
            alt="Board context"
            className="w-full h-full object-cover opacity-20 object-right"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/80 to-gray-950"></div>
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
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed opacity-90">
              Hội đồng lãnh đạo tâm huyết, dẫn dắt cộng đồng doanh nghiệp BLTBA
              phát triển bền vững và gắn kết.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organizagram - Kept for structure context, or can be removed if strictly members only */}
      <OrganizationChart />

      {/* Hierarchical Board Members Section */}
      <section className="py-16 relative overflow-hidden bg-[#0a0f1a]">
        {/* Blended Background with blue tint and subtle pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0a162e] to-[#0a0f1a]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

          <motion.img
            src="https://viet-power.vn/wp-content/uploads/2022/08/chup-anh-profile-cong-ty-3.jpg"
            alt="Office background"
            className="absolute left-0 top-[-20%] w-full h-[140%] object-cover opacity-10 grayscale transform-gpu will-change-transform"
            style={{ y: backgroundY }}
            referrerPolicy="no-referrer"
          />

          {/* Subtle blue & red glow */}
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-[120px] transform-gpu"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-red-600/5 rounded-full blur-[120px] transform-gpu"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
          {/* Level 1: Chủ tịch */}
          <div className="mb-12 w-full flex justify-center">
            {president.map((member, idx) => (
              <HierarchicalMemberCard
                key={idx}
                member={member}
                sizeClass="w-36 h-36 md:w-44 md:h-44"
                borderWidthClass="border-[4px]"
                borderClass="border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                textClass={{
                  name: "text-xl md:text-2xl text-white",
                  role: "text-xs md:text-sm text-amber-500",
                }}
                delay={0.1}
              />
            ))}
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3"></div>

          {/* Level 2: Phó chủ tịch */}
          <div className="mb-3 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center justify-items-center max-w-6xl mx-auto">
            {level2.map((member, idx) => (
              <HierarchicalMemberCard
                key={idx}
                member={member}
                sizeClass="w-24 h-24 md:w-32 md:h-32"
                borderWidthClass="border-[3px]"
                borderClass="border-amber-500/80 shadow-[0_0_20px_rgba(245,158,11,0.15)]"
                textClass={{
                  name: "text-base md:text-lg text-white",
                  role: "text-[10px] md:text-xs text-amber-500",
                }}
                delay={0.2 + idx * 0.05}
              />
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 max-w-4xl mx-auto"></div>

          {/* Level 3: Ủy viên & Ban kiểm tra */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 justify-center justify-items-center max-w-7xl mx-auto">
            {level3.map((member, idx) => (
              <HierarchicalMemberCard
                key={idx}
                member={member}
                sizeClass="w-16 h-16 md:w-24 md:h-24"
                borderWidthClass="border-[2px]"
                borderClass="border-amber-600/60 shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                textClass={{
                  name: "text-[13px] md:text-sm text-white",
                  role: "text-[9px] md:text-[10px] text-amber-600",
                }}
                delay={0.3 + idx * 0.03}
              />
            ))}
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
