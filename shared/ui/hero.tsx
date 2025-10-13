"use client";

import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium">
              ✨ 전문 미용 교육의 새로운 기준
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight"
          >
            이나윤 헤어메이크업
            <br />
            <span className="text-slate-600">아카데미</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            아름다운 꿈을 향해 나아가는 모든 분을 위해 이나윤 헤어메이크업
            아카데미가 함께합니다. 진정한 미용 전문가로 성장할 수 있도록 최적의
            교육 환경과 아낌없는 지원을 약속드립니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#courses"
              className="webzine-button inline-flex items-center"
            >
              교육 과정 보기
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="webzine-button-outline inline-flex items-center"
            >
              상담 문의하기
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



