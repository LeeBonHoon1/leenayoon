"use client";

import { Users, BookOpen, Heart, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const features = [
    {
      icon: Users,
      title: "소수 정예 1:1 집중 강의",
      description:
        "숙련된 전문 강사진이 소수 인원으로 수업을 진행하며, 수강생 개개인에게 밀착된 1:1 지도를 제공합니다. 궁금한 점은 즉시 해소하고, 개인의 눈높이에 맞춘 섬세한 코칭으로 탄탄한 실력을 다질 수 있습니다.",
    },
    {
      icon: BookOpen,
      title: "체계적인 커리큘럼",
      description:
        "이론부터 현장 실무까지, 탄탄하고 검증된 커리큘럼을 통해 미용 분야의 기본기를 확실히 다지고, 빠르게 전문 기술을 습득할 수 있도록 돕습니다.",
    },
    {
      icon: Heart,
      title: "성장을 위한 지원",
      description:
        "저희는 여러분의 재능과 열정을 가장 중요하게 생각합니다. 각자의 목표에 맞는 맞춤형 교육으로 잠재력을 최대한 이끌어내어 빛나는 미래를 함께 만들어 나갑니다.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium mb-6">
            Why Choose Us
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            이나윤 아카데미의 차별점
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            저희 아카데미가 자랑하는 특별한 강점들을 소개합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="webzine-card text-center p-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 text-white rounded-lg mb-6"
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



