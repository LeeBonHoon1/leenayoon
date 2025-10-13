"use client";

import { Award, BookOpen, Users, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Certification() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const certifications = [
    {
      icon: Award,
      title: "헤어 국가자격증",
      description:
        "미용사(일반) 국가자격증 취득을 위한 필기 및 실기 전 과정을 체계적으로 교육하여 높은 합격률을 자랑합니다.",
      features: [
        "필기 시험 대비",
        "실기 시험 대비",
        "개별 맞춤 지도",
        "높은 합격률",
      ],
    },
    {
      icon: BookOpen,
      title: "메이크업 국가자격증",
      description:
        "메이크업 국가자격증 취득을 목표로 하는 분들을 위해, 각 과제별 맞춤형 집중 지도로 합격의 문턱을 넘도록 지원합니다.",
      features: [
        "과제별 맞춤 지도",
        "실전 연습",
        "개인별 피드백",
        "합격률 향상",
      ],
    },
    {
      icon: Users,
      title: "이용사 국가자격증",
      description:
        "이용 분야의 전문성을 인정받는 이용사 자격증 취득을 위한 이론 및 실기 과정을 전문적으로 지도합니다.",
      features: ["이론 교육", "실기 연습", "전문 지도", "자격증 취득"],
    },
  ];

  return (
    <section id="certification" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium mb-6">
            Certification
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            국가자격증 취득 과정
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            미용 분야의 전문가로서 첫발을 내딛는 데 필수적인 국가자격증 취득을
            위한 완벽 대비 과정입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="webzine-card p-8"
            >
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={
                  isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 text-white rounded-lg mb-6"
              >
                <cert.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {cert.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {cert.description}
              </p>
              <ul className="space-y-2">
                {cert.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + 0.5 + featureIndex * 0.1,
                    }}
                    className="flex items-center text-slate-600"
                  >
                    <CheckCircle className="w-5 h-5 text-slate-800 mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              이나윤 헤어메이크업 아카데미는 여러분의 빛나는 미래를 위한 가장
              확실한 선택이 될 것입니다.
            </h3>
            <p className="text-lg mb-6">
              지금 바로 저희 아카데미와 함께 도전하십시오. 여러분의 열정을 항상
              응원하며 기다리겠습니다.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="webzine-button-outline inline-flex items-center"
            >
              지금 시작하기
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



