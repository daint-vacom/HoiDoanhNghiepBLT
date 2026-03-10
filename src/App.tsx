import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Placeholder components for other pages
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-[60vh]">
    <h1 className="text-4xl font-bold text-red-700 mb-6">{title}</h1>
    <p className="text-gray-600">Nội dung trang đang được cập nhật...</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hoi-vien" element={<PlaceholderPage title="Hội viên" />} />
          
          <Route path="tin-tuc">
            <Route index element={<PlaceholderPage title="Tin tức" />} />
            <Route path="hoat-dong" element={<PlaceholderPage title="Tin hoạt động hội" />} />
            <Route path="giao-thuong" element={<PlaceholderPage title="Tin giao thương" />} />
            <Route path="doi-tac" element={<PlaceholderPage title="Tin hội viên đối tác" />} />
          </Route>

          <Route path="gioi-thieu">
            <Route index element={<PlaceholderPage title="Giới thiệu" />} />
            <Route path="bltba" element={<PlaceholderPage title="Giới thiệu về hội doanh nghiệp BLTBA" />} />
            <Route path="ban-chap-hanh" element={<PlaceholderPage title="Ban chấp hành" />} />
            <Route path="van-phong" element={<PlaceholderPage title="Văn phòng BLTBA" />} />
            <Route path="dieu-le" element={<PlaceholderPage title="Điều lệ hội" />} />
          </Route>

          <Route path="lien-he" element={<PlaceholderPage title="Liên hệ" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
