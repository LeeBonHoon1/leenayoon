"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CourseDetailProps {
  title: string;
  subtitle?: string;
  description: string;
  educationContent?: string[];
  overview?: string;
  duties?: string;
  career?: string;
  careerItems?: string[];
  features: string[];
}

export default function CourseDetail({
  title,
  subtitle,
  description,
  educationContent,
  overview,
  duties,
  career,
  careerItems,
  features,
}: CourseDetailProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 뒤로가기 버튼 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            목록으로 돌아가기
          </Link>
        </motion.div>

        {/* 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-4">{title}</h1>
          {subtitle && (
            <p className="text-2xl font-semibold text-slate-700 mb-6">
              {subtitle}
            </p>
          )}
          <p className="text-xl text-slate-600 leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* 교육내용 */}
        {educationContent && educationContent.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">교육내용</h2>
            <ul className="space-y-4">
              {educationContent.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start text-lg text-slate-600"
                >
                  <span className="text-slate-800 mr-3 text-xl">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* 개요 */}
        {overview && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">개요</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{overview}</p>
          </motion.div>
        )}

        {/* 수행직무 */}
        {duties && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">수행직무</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{duties}</p>
          </motion.div>
        )}

        {/* 진로 및 전망 */}
        {(career || careerItems) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              진로 및 전망
            </h2>
            {careerItems && careerItems.length > 0 ? (
              <ul className="space-y-4">
                {careerItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start text-lg text-slate-600"
                  >
                    <span className="text-slate-800 mr-3 text-xl">-</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-lg text-slate-600 leading-relaxed">{career}</p>
            )}
          </motion.div>
        )}

        {/* 특징 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">과정 특징</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-center text-lg text-slate-600"
              >
                <CheckCircle className="w-6 h-6 text-slate-800 mr-4 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 문의하기 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="webzine-button inline-flex items-center"
          >
            상담 문의하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}

