"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import NavigationCategory from "./navigation-category";

const slides = [
  {
    id: 1,
    title: "전문 미용 교육의 새로운 기준",
    subtitle: "이나윤 헤어메이크업 아카데미",
    description:
      "아름다운 꿈을 향해 나아가는 모든 분을 위해 이나윤 헤어메이크업 아카데미가 함께합니다.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=600&fit=crop&crop=center",
  },
  {
    id: 2,
    title: "소수 정예 1:1 집중 강의",
    subtitle: "개인 맞춤형 교육",
    description:
      "숙련된 전문 강사진이 소수 인원으로 수업을 진행하며, 수강생 개개인에게 밀착된 1:1 지도를 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=600&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "체계적인 커리큘럼",
    subtitle: "이론부터 현장 실무까지",
    description:
      "탄탄하고 검증된 커리큘럼을 통해 미용 분야의 기본기를 확실히 다지고, 빠르게 전문 기술을 습득할 수 있도록 돕습니다.",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&h=600&fit=crop&crop=center",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* 카테고리 네비게이션 오버레이 */}
      <NavigationCategory />
      
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* 배경 이미지 */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* 그라데이션 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-700/50" />

            {/* 콘텐츠 */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                  ✨ {slide.subtitle}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#courses"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
                  >
                    교육 과정 보기
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-800 transition-colors"
                  >
                    상담 문의하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 하단 인디케이터 */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`슬라이드 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
