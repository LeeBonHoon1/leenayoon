"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const handleLinkClick = () => {
    onClose();
    setOpenSubmenu(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onClose}
          />
          {/* 사이드 메뉴 */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* 헤더 */}
              <div className="flex justify-between items-center p-6 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-800">메뉴</h2>
                <button
                  onClick={onClose}
                  className="text-slate-600 hover:text-slate-800 transition-colors"
                  aria-label="메뉴 닫기"
                >
                  <X size={24} />
                </button>
              </div>

              {/* 메뉴 아이템 */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1">
                  {/* 홈 */}
                  <motion.a
                    href="#home"
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="block px-6 py-4 text-lg font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                  >
                    홈
                  </motion.a>

                  {/* 아카데미 소개 */}
                  <motion.a
                    href="#about"
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="block px-6 py-4 text-lg font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                  >
                    아카데미 소개
                  </motion.a>

                  {/* 교육 과정 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <button
                      onClick={() => toggleSubmenu("courses")}
                      className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                    >
                      <span>교육 과정</span>
                      {openSubmenu === "courses" ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                    <AnimatePresence>
                      {openSubmenu === "courses" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="bg-slate-50 overflow-hidden"
                        >
                          <a
                            href="/courses/semi-permanent-smp"
                            onClick={handleLinkClick}
                            className="block px-10 py-3 text-slate-700 hover:bg-slate-100 transition-colors"
                          >
                            반영구/SMP
                          </a>
                          <a
                            href="/courses/wedding-makeup"
                            onClick={handleLinkClick}
                            className="block px-10 py-3 text-slate-700 hover:bg-slate-100 transition-colors"
                          >
                            웨딩메이크업 실무과정
                          </a>
                          <a
                            href="/courses/wedding-upstyle"
                            onClick={handleLinkClick}
                            className="block px-10 py-3 text-slate-700 hover:bg-slate-100 transition-colors"
                          >
                            웨딩업스타일 실무과정
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* 자격증 과정 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <button
                      onClick={() => toggleSubmenu("certification")}
                      className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                    >
                      <span>자격증 과정</span>
                      {openSubmenu === "certification" ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                    <AnimatePresence>
                      {openSubmenu === "certification" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="bg-slate-50 overflow-hidden"
                        >
                          <a
                            href="/courses/hair-certification"
                            onClick={handleLinkClick}
                            className="block px-10 py-3 text-slate-700 hover:bg-slate-100 transition-colors"
                          >
                            헤어 국가자격증
                          </a>
                          <a
                            href="/courses/makeup-certification"
                            onClick={handleLinkClick}
                            className="block px-10 py-3 text-slate-700 hover:bg-slate-100 transition-colors"
                          >
                            메이크업 국가자격증
                          </a>
                          <a
                            href="/courses/eyebrow-certification"
                            onClick={handleLinkClick}
                            className="block px-10 py-3 text-slate-700 hover:bg-slate-100 transition-colors"
                          >
                            이용사 국가자격증
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* 문의하기 */}
                  <motion.a
                    href="#contact"
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                    className="block px-6 py-4 text-lg font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                  >
                    문의하기
                  </motion.a>
                </nav>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

