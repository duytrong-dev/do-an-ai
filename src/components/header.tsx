'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Cổ phiếu", href: "/stocks" },
  { label: "Phân tích", href: "/analysis" },
  { label: "Tin tức", href: "/news" },
  { label: "Dự đoán với LSTM", href: "http://localhost:8501" },
];

export default function Header() {
  const pathname = usePathname(); 

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl gradient-text">📊</span>
              <span className="ml-2 text-xl font-bold text-gray-800">StockAI</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
