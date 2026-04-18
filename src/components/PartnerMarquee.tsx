import React from "react";
import { motion } from "motion/react";

const PartnerMarquee = () => {
  const partners = [
    {
      name: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/960px-Facebook_f_logo_%282021%29.svg.png",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/960px-Apple_logo_black.svg.png",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png",
    },
    {
      name: "Zalo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1280px-Icon_of_Zalo.svg.png",
    },
    {
      name: "TikTok",
      logo: "https://static.wikia.nocookie.net/tiktok/images/e/eb/TikTok_Logo.png/revision/latest?cb=20210816124125",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1280px-Netflix_icon.svg.png",
    },
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Đối tác chiến lược
          </h2>
          <div className="h-1 w-12 bg-red-600 rounded-full"></div>
        </div>
      </div>

      <div className="relative flex w-full mb-20">
        {/* Lớp phủ gradient hai đầu tạo hiệu ứng Fade-out chuyên nghiệp */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-10 group"
            >
              <div className="relative w-40 h-20 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-full object-contain filter drop-shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Join BLTBA CTA Card inside PartnerMarquee section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative h-64 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Large Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/90 to-transparent flex flex-col justify-center px-8 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gia nhập BLTBA ngay hôm nay
            </h2>
            <p className="text-red-100 max-w-md mb-8 text-lg">
              Trở thành một phần của cộng đồng doanh nghiệp năng động nhất khu
              vực Bình Lợi Trung.
            </p>
            <button className="bg-white text-red-900 font-bold py-3.5 px-10 rounded-full w-fit hover:bg-red-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Đăng ký tham gia
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerMarquee;
