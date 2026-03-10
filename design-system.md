# Design System - BLTBA (Hội Doanh nghiệp Quận Bắc Từ Liêm)

Tài liệu này mô tả chi tiết phong cách thiết kế hiện tại của trang web BLTBA, nhằm đảm bảo tính đồng nhất (consistency) khi phát triển các tính năng mới hoặc sử dụng các mô hình AI để sinh code.

## 1. Phong cách thiết kế tổng thể (Overall Concept)
- **Phong cách:** Chuyên nghiệp, hiện đại, tối giản nhưng vẫn mang đậm tính tổ chức/doanh nghiệp (Corporate/NGO identity). Có nét tương đồng với các premium theme của WordPress dành cho doanh nghiệp.
- **Cảm giác (Vibe):** Đáng tin cậy, vững chắc, trang trọng nhưng vẫn năng động và dễ tiếp cận.
- **Bố cục (Layout):** Sử dụng hệ thống Grid tiêu chuẩn. Chiều rộng tối đa của nội dung thường được giới hạn ở `max-w-7xl` (1280px) kết hợp với `mx-auto` để căn giữa. Các section có khoảng trắng (whitespace) rộng rãi (`py-16`, `py-20`) để tạo sự thoáng đãng và tập trung vào nội dung.

## 2. Bảng màu (Color Palette)
Hệ thống màu sắc tập trung vào tông Đỏ và Hổ phách (Amber) làm điểm nhấn, kết hợp với các màu trung tính.

### Màu chính (Primary Colors)
- **Đỏ chủ đạo (`red-700` - `#b91c1c`):** Sử dụng cho Logo, các tiêu đề chính (Heading), nút bấm quan trọng (Primary Buttons), và các đường viền nhấn (Accent borders).
- **Đỏ đậm (`red-800` / `red-900`):** Sử dụng cho các trạng thái hover, background của Hero section hoặc các section cần sự nổi bật mạnh mẽ.
- **Đỏ cực đậm (`red-950`):** Sử dụng cho Footer để tạo cảm giác vững chãi, uy tín.
- **Đỏ nhạt (`red-50` / `red-100`):** Sử dụng làm màu nền phụ cho các icon, badge, hoặc text phụ trên nền đỏ đậm.

### Màu nhấn (Accent Colors)
- **Hổ phách (`amber-600` - `#d97706`):** Sử dụng cho các chi tiết nhỏ, icon, text phụ (như slogan dưới logo) để tạo điểm nhấn sang trọng.

### Màu trung tính (Neutral Colors)
- **Trắng (`white` - `#ffffff`):** Màu nền chủ đạo của trang web, tạo sự sạch sẽ, chuyên nghiệp.
- **Xám đậm (`gray-900` / `gray-800` / `gray-700`):** Sử dụng cho văn bản (Body text và Headings) để đảm bảo độ tương phản và dễ đọc.
- **Xám nhạt (`gray-50` / `gray-100` / `gray-200`):** Sử dụng làm màu nền cho các section phụ (như phần tìm kiếm tin tức), đường viền (borders), hoặc background của các thẻ (cards) để tạo sự phân cách nhẹ nhàng với nền trắng.

## 3. Nghệ thuật chữ (Typography)
- **Font chữ chủ đạo:** `Inter`, sans-serif. Đây là font chữ hiện đại, tối ưu cho hiển thị trên màn hình kỹ thuật số, mang lại cảm giác sạch sẽ và dễ đọc.

### Quy tắc cho Tiêu đề (Headings)
- **Kiểu dáng:** Thường sử dụng `uppercase` (in hoa) cho các tiêu đề lớn (Hero section, Tiêu đề section).
- **Độ đậm:** `font-bold` (700) hoặc `font-extrabold` (800).
- **Khoảng cách chữ (Tracking):** Sử dụng `tracking-tighter` cho Logo và `tracking-widest` cho các nhãn (labels) dạng banner. Các tiêu đề lớn thường dùng `tracking-tight`.
- **Màu sắc:** Thường là `text-red-700` hoặc `text-gray-900`.

### Quy tắc cho Văn bản thường (Body Text)
- **Kích thước:** `text-base` (16px) cho nội dung thông thường, `text-sm` (14px) cho các chi tiết phụ, footer, hoặc meta data (ngày tháng, tác giả).
- **Độ cao dòng (Line height):** Sử dụng `leading-relaxed` cho các đoạn văn bản dài để tăng tính dễ đọc.
- **Màu sắc:** `text-gray-600` hoặc `text-gray-700` để làm dịu mắt so với nền trắng.

## 4. Thành phần giao diện (UI Components)

### Nút bấm (Buttons)
- **Nút chính (Primary):** Nền `bg-red-700`, chữ trắng `text-white`, bo góc vừa phải `rounded` hoặc `rounded-md` (cho các hành động chuyên nghiệp) hoặc `rounded-full` (cho các nút Call-to-action thân thiện). Hover: `bg-red-800`.
- **Nút phụ / Bộ lọc (Secondary / Filters):** Dạng container nhẹ nhàng. Nền `bg-white` hoặc `bg-gray-50`, viền `border border-gray-200`, chữ `text-gray-600`. Trạng thái active/selected: `bg-red-50 text-red-700 border-red-200`. Bo góc tròn `rounded-full`.

### Thẻ (Cards)
- **Thiết kế:** Nền trắng `bg-white`, bo góc `rounded-lg` hoặc `rounded-xl`, đổ bóng nhẹ `shadow-sm`, viền mỏng `border border-gray-100`.
- **Tương tác:** Khi hover, thẻ thường nổi lên `hover:shadow-md` hoặc `hover:shadow-lg`, và hình ảnh bên trong có hiệu ứng zoom nhẹ `group-hover:scale-105` hoặc `group-hover:scale-110`. Tiêu đề thẻ đổi sang màu đỏ `group-hover:text-red-700`.

### Hình ảnh (Images)
- **Lớp phủ (Overlays):** Hình ảnh làm nền thường có lớp phủ đen (`bg-black/60`) hoặc gradient đỏ (`bg-gradient-to-t from-black/60 to-transparent` hoặc `bg-gradient-to-r from-red-900/80 to-transparent`) để đảm bảo chữ viết đè lên luôn rõ ràng.
- **Tỷ lệ (Aspect Ratio):** Sử dụng `aspect-video` (16:9) cho các thumbnail tin tức dạng ngang để tạo sự đồng nhất và dễ nhìn.

### Header & Navigation
- **Sticky Header:** Header cố định trên cùng. Khi cuộn trang (`isScrolled`), header chuyển sang nền trắng hoàn toàn `bg-white` và có bóng đổ `shadow-md` với padding nhỏ lại `py-2`. Khi ở trên cùng, header có nền trong suốt mờ `bg-white/90 backdrop-blur-sm` với padding lớn hơn `py-4`.
- **Dropdown:** Menu con xuất hiện khi hover, có đường viền đỏ ở trên cùng `border-t-2 border-red-600`.

## 5. Hiệu ứng & Chuyển động (Animations & Transitions)
Sử dụng thư viện `motion/react` (Framer Motion) để tạo các hiệu ứng mượt mà, tinh tế.

- **Fade In Up:** Các section hoặc phần tử thường trượt nhẹ từ dưới lên khi xuất hiện trong khung hình (`initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`).
- **Fade In Left/Right:** Sử dụng cho các bố cục chia cột (ví dụ: ảnh bên trái, chữ bên phải) trượt vào từ hai bên (`x: -30` và `x: 30`).
- **Thời lượng (Duration):** Thường là `0.4s` đến `0.8s` để tạo cảm giác trang trọng, có chủ đích.
- **Viewport Trigger:** Hiệu ứng chỉ chạy một lần khi cuộn tới (`viewport={{ once: true }}`).
- **Stagger (Độ trễ liên tiếp):** Khi hiển thị một danh sách các thẻ (ví dụ: danh sách tin tức, giá trị cốt lõi), sử dụng `transition={{ delay: index * 0.1 }}` để các thẻ xuất hiện lần lượt.

## 6. Iconography (Hệ thống biểu tượng)
- **Thư viện:** Sử dụng **Lucide React**.
- **Phong cách:** Các icon dạng nét (line icons), đơn giản, rõ ràng.
- **Màu sắc:** Icon chức năng thường có màu xám (`text-gray-400` hoặc `text-gray-500`). Icon trang trí hoặc điểm nhấn thường được đặt trong một vòng tròn nền đỏ nhạt (`bg-red-50`) và có màu đỏ (`text-red-600`).
