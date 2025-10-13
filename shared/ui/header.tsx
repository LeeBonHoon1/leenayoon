"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* 로고 */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-800">
              이나윤 헤어메이크업 아카데미
            </h1>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-slate-600 hover:text-slate-800 transition-colors font-medium"
            >
              홈
            </a>
            <a
              href="#about"
              className="text-slate-600 hover:text-slate-800 transition-colors font-medium"
            >
              아카데미 소개
            </a>
            <a
              href="#courses"
              className="text-slate-600 hover:text-slate-800 transition-colors font-medium"
            >
              교육 과정
            </a>
            <a
              href="#certification"
              className="text-slate-600 hover:text-slate-800 transition-colors font-medium"
            >
              자격증 과정
            </a>
            <a
              href="#contact"
              className="text-slate-600 hover:text-slate-800 transition-colors font-medium"
            >
              문의하기
            </a>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              <a
                href="#home"
                className="block px-3 py-2 text-slate-600 hover:text-slate-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                홈
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-slate-600 hover:text-slate-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                아카데미 소개
              </a>
              <a
                href="#courses"
                className="block px-3 py-2 text-slate-600 hover:text-slate-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                교육 과정
              </a>
              <a
                href="#certification"
                className="block px-3 py-2 text-slate-600 hover:text-slate-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                자격증 과정
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-slate-600 hover:text-slate-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                문의하기
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}



