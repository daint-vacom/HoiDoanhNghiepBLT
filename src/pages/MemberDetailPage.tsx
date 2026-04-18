import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Building2,
  ChevronRight,
  Award,
  Users,
  Factory,
  BarChart3,
  ExternalLink,
} from "lucide-react";

// Tái sử dụng interface và dữ liệu từ MemberSearchPage (Trong thực tế nên tách ra file types/data riêng)
interface Member {
  id: string;
  name: string;
  logo: string;
  industries: string[];
  boards: string[];
  description: string;
  productTypes: string[];
  mainMaterials: string[];
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
  markets?: string[];
  certificates?: string[];
  capacity?: string;
  employees?: string;
  factorySize?: string;
}

const membersData: Member[] = [
  {
    id: "1",
    name: "CÔNG TY CỔ PHẦN LANDCO",
    logo: "https://picsum.photos/seed/landco/200/200",
    industries: ["Chế biến Gỗ", "Cung cấp vật liệu xây dựng"],
    boards: ["Ban Xây dựng", "Ban Thương mại Dịch vụ"],
    description:
      "LANDCO là đơn vị hàng đầu trong lĩnh vực sản xuất và thi công nội thất cao cấp, chuyên cung cấp các giải pháp toàn diện cho không gian sống và làm việc chuyên nghiệp.",
    productTypes: [
      "Gỗ nguyên liệu",
      "Ván / Wood material",
      "Panels",
      "Máy móc",
      "Thiết bị / Machinery",
      "Equipment",
      "Tools",
      "Phụ kiện",
      "Vật tư / Hardware",
    ],
    mainMaterials: [
      "Tràm / Acacia",
      "Cao su / Rubber wood",
      "Tuyết tùng / Cedar",
      "Giá tỵ (Gỗ Tếch hoặc gỗ Sao) / Teak",
      "Óc chó / Walnut",
      "Sồi / Oak",
    ],
    website: "https://landco.vn",
    email: "info@landco.vn",
    phone: "024 3756 1234",
    address: "Khu công nghiệp Quang Minh, Mê Linh, Hà Nội",
    markets: ["Vietnam", "Quốc tế"],
    certificates: ["ISO 9001", "ISO 14001"],
    capacity: "101 - 150 containers/tháng",
    employees: "351 - 450 người",
    factorySize: "30,000 m2",
  },
  {
    id: "2",
    name: "TẬP ĐOÀN GỖ AN CƯỜNG",
    logo: "https://picsum.photos/seed/ancuong/200/200",
    industries: ["Vật liệu nội thất", "Cung cấp vật liệu xây dựng"],
    boards: ["Ban Xây dựng"],
    description:
      "An Cường là nhà sản xuất cung cấp nguyên vật liệu trang trí nội thất và vật liệu décor hàng đầu tại Việt Nam và khu vực Đông Nam Á.",
    productTypes: [
      "Ván MFC",
      "Ván Laminate",
      "Ván Acrylic",
      "Cửa gỗ công nghiệp",
      "Sàn gỗ",
    ],
    mainMaterials: ["MDF", "HDF", "Gỗ dán / Plywood"],
    website: "https://ancuong.com",
    email: "info@ancuong.com",
    phone: "1900 633 810",
    address: "DT747B Phường Thái Hòa, Tân Uyên, Bình Dương",
    markets: ["Vietnam", "ASEAN"],
    certificates: ["Green Label", "ISO 9001"],
  },
];

const MemberDetailPage = () => {
  const { id } = useParams();

  const member = useMemo(() => {
    return membersData.find((m) => m.id === id);
  }, [id]);

  if (!member) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Không tìm thấy thông tin hội viên
        </h2>
        <Link
          to="/hoi-vien/tra-cuu"
          className="mt-4 inline-block text-red-600 hover:underline"
        >
          Quay lại danh sách
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200 pt-32 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm font-medium text-gray-500 mb-6">
            <Link to="/" className="hover:text-red-600">
              Trang chủ
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/hoi-vien/tra-cuu" className="hover:text-red-600">
              Hội viên
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 truncate">{member.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-40 h-40 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-4 flex-shrink-0">
              <img
                src={member.logo}
                alt={member.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {member.boards.map((board) => (
                  <span
                    key={board}
                    className="bg-amber-100 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                  >
                    {board}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
                {member.name}
              </h1>
              <div className="flex flex-wrap gap-y-3 gap-x-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-sm">{member.address}</span>
                </div>
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    <span className="text-sm font-bold border-b border-red-600/30 hover:border-red-600">
                      {member.website.replace("https://", "")}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Giới thiệu */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-1 h-6 bg-red-600 rounded-full"></span>
                Giới thiệu công ty
              </h2>
              <div className="prose prose-red max-w-none text-gray-600 leading-relaxed">
                <p>{member.description}</p>
              </div>
            </section>

            {/* Sản phẩm & Vật liệu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 bg-red-600 rounded-full"></span>
                  Loại sản phẩm
                </h2>
                <div className="flex flex-wrap gap-2">
                  {member.productTypes.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm border border-gray-100 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 bg-red-600 rounded-full"></span>
                  Vật liệu chính
                </h2>
                <div className="flex flex-wrap gap-2">
                  {member.mainMaterials.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm border border-red-100 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Thông tin liên hệ */}
            <section className="bg-gray-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h2 className="text-xl font-bold mb-8 flex items-center gap-3 relative z-10">
                <span className="w-1 h-6 bg-red-500 rounded-full"></span>
                Thông tin kết nối
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 text-gray-300">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">
                        Email
                      </p>
                      <p className="font-medium text-white">
                        {member.email || "Đang cập nhật"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">
                        Điện thoại
                      </p>
                      <p className="font-medium text-white">
                        {member.phone || "Đang cập nhật"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">
                        Website
                      </p>
                      <p className="font-medium text-white">
                        {member.website || "Đang cập nhật"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">
                        Địa chỉ
                      </p>
                      <p className="font-medium text-white">{member.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Thông tin thêm theo HAWA style */}
            <section className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                  Năng lực hội viên
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <BarChart3 className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">
                      Thị trường chính
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {member.markets?.join(", ") || "Đang cập nhật"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">
                      Chứng chỉ
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {member.certificates?.join(", ") || "Đang cập nhật"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Factory className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">
                      Quy mô nhà máy
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {member.factorySize || "Đang cập nhật"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">
                      Số lượng nhân sự
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {member.employees || "Đang cập nhật"}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Sidebar */}
            <section className="bg-red-700 rounded-2xl p-8 text-white text-center shadow-lg shadow-red-900/20">
              <Building2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-bold mb-2">Yêu cầu báo giá?</h3>
              <p className="text-red-100 text-sm mb-6">
                Liên hệ trực tiếp với doanh nghiệp để được tư vấn chính xác
                nhất.
              </p>
              <button className="w-full bg-white text-red-700 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors">
                Gửi lời mời hợp tác
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetailPage;
