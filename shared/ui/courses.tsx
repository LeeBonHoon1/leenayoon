"use client";

import { Scissors, Palette, Sparkles, Crown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const courses = [
    {
      icon: Scissors,
      title: "반영구/SMP",
      description:
        "섬세한 디자인 감각과 전문적인 기술력을 바탕으로 반영구 화장 및 두피 문신 전문가로서의 길을 제시합니다. 아름다움을 디자인하는 정교한 기술을 배우실 수 있습니다.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Crown,
      title: "헤어 실무",
      description:
        "최신 트렌드를 반영한 헤어 스타일링부터 기본적인 컷, 펌, 컬러링까지, 실전에서 바로 통하는 헤어 기술을 익혀 숙련된 헤어 전문가로 거듭나도록 지도합니다.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Palette,
      title: "메이크업 실무",
      description:
        "개인별 맞춤 메이크업, 웨딩 메이크업, 무대/방송 메이크업 등 다양한 분야를 아우르는 전문 메이크업 아티스트를 양성하며, 창의적인 감각을 키워드립니다.",
      color: "from-orange-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "업스타일",
      description:
        "특별한 날을 더욱 빛내줄 우아하고 세련된 업스타일 연출 기술을 마스터하여, 어떤 상황에서도 완벽한 스타일을 구현할 수 있도록 지도합니다.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="courses" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium mb-6">
            Our Courses
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            전문 교육 과정
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            현장에서 즉시 활용 가능한 실질적인 기술을 익히는 전문 실무
            과정입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="webzine-card p-6 group"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={
                  isInView
                    ? { scale: 1, rotate: 0 }
                    : { scale: 0, rotate: -180 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 text-white rounded-lg mb-6 group-hover:scale-110 transition-transform"
              >
                <course.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {course.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {course.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



