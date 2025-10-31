"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-800">
              이나윤 헤어메이크업 아카데미
            </h1>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-800 hover:text-slate-600 transition-colors"
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
