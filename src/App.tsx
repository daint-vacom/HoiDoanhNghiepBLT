import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MembersPage from './pages/MembersPage';
import MemberSearchPage from './pages/MemberSearchPage';

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
          <Route path="/hoi-vien">
            <Route index element={<MembersPage />} />
            <Route path="tra-cuu" element={<MemberSearchPage />} />
          </Route>
          
          <Route path="/tin-tuc">
            <Route index element={<NewsPage />} />
            <Route path="hoat-dong" element={<NewsPage />} />
            <Route path="giao-thuong" element={<NewsPage />} />
            <Route path="doi-tac" element={<NewsPage />} />
          </Route>

          <Route path="/gioi-thieu">
            <Route index element={<AboutPage />} />
            <Route path="bltba" element={<AboutPage />} />
            <Route path="ban-chap-hanh" element={<PlaceholderPage title="Ban chấp hành" />} />
            <Route path="van-phong" element={<PlaceholderPage title="Văn phòng BLTBA" />} />
            <Route path="dieu-le" element={<PlaceholderPage title="Điều lệ hội" />} />
          </Route>

          <Route path="/lien-he" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
