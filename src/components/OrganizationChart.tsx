import React from "react";
import { motion } from "motion/react";
import { Users, ShieldCheck } from "lucide-react";

const OrganizationChart = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div
        className="absolute inset-0 z-0 opacity-[0.1]"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-full mx-auto flex flex-col items-center relative">
          {/* Root */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-900 text-white px-10 py-6 font-black text-xl text-center border-l-4 border-red-500 w-full max-w-md z-10 tracking-widest uppercase"
          >
            HỘI TƯ VẤN VÀ ĐẠI LÝ THUẾ
            <br />
            THÀNH PHỐ HỒ CHÍ MINH
          </motion.div>

          {/* Line down */}
          <div className="w-px h-12 bg-gray-300"></div>

          {/* Horizontal Branch */}
          <div className="relative w-full flex flex-col items-center">
            {/* Top row: BKT and BCH */}
            <div className="relative w-full flex flex-col md:flex-row justify-center md:items-start items-center gap-8 md:gap-24">
              {/* Desktop Horizontal Line connecting BKT and BCH - fixed width between node centers */}
              <div
                className="absolute top-0 bg-gray-300 h-px hidden md:block"
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "340px",
                }}
              ></div>

              {/* Branch 1: Ban Kiểm Tra */}
              <div className="flex flex-col items-center w-full md:w-auto pt-0 md:pt-8 relative">
                <div className="w-px h-8 bg-gray-300 absolute top-0 hidden md:block"></div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 text-gray-900 px-6 py-4 transition-colors font-bold text-sm text-center flex items-center justify-center gap-2 cursor-default w-[240px] uppercase tracking-wider"
                >
                  <ShieldCheck size={18} className="text-amber-600" />
                  BAN KIỂM TRA
                </motion.div>
              </div>

              {/* Branch 2: Ban Chấp Hành */}
              <div className="flex flex-col items-center w-full md:w-auto pt-0 md:pt-8 relative">
                <div className="w-px h-8 bg-gray-300 absolute top-0 hidden md:block"></div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-red-900 text-red-900 px-6 py-4 transition-colors font-bold text-sm text-center flex items-center justify-center gap-2 relative z-10 w-[240px] uppercase tracking-wider"
                >
                  <Users size={18} />
                  BAN CHẤP HÀNH
                </motion.div>

                <div className="w-px h-10 bg-gray-300"></div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 text-white px-6 py-4 font-bold text-sm text-center w-[240px] uppercase tracking-wider"
                >
                  BAN THƯỜNG TRỰC
                </motion.div>

                <div className="w-px h-12 bg-gray-300"></div>
              </div>
            </div>

            {/* Bottom row: Specialist Boards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full relative mt-[-1px]"
            >
              <div className="max-w-[1240px] mx-auto px-4 relative">
                {/* Horizontal line for specialist boards - fixed logic to end at node centers */}
                <div
                  className="hidden md:block absolute top-0 bg-gray-300 h-px"
                  style={{
                    left: `calc(100% / 7 / 2 + 8px)`,
                    right: `calc(100% / 7 / 2 + 8px)`,
                  }}
                ></div>

                <div className="grid grid-cols-2 md:grid-cols-7 gap-4 pt-10">
                  {[
                    "VĂN PHÒNG HỘI",
                    "BAN HỘI VIÊN",
                    "BAN CÔNG TÁC XÃ HỘI",
                    "BAN XÂY DỰNG",
                    "BAN THƯƠNG MẠI DỊCH VỤ",
                    "BAN TÀI CHÍNH",
                    "BAN TRUYỀN THÔNG",
                  ].map((label, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center relative"
                    >
                      {/* Vertical connector line */}
                      <div className="hidden md:block w-px h-10 bg-gray-300 absolute -top-10 left-1/2 -translate-x-1/2"></div>
                      <div className="px-3 py-4 bg-white border border-gray-100 text-[11px] font-bold text-gray-800 text-center flex items-center justify-center min-h-[90px] w-full hover:border-red-900 transition-colors uppercase tracking-tight leading-snug ring-1 ring-black/[0.03]">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationChart;
