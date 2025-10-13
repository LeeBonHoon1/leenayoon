import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 아카데미 정보 */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              이나윤 헤어메이크업 아카데미
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              아름다운 꿈을 향해 나아가는 모든 분을 위해 이나윤 헤어메이크업
              아카데미가 함께합니다. 진정한 미용 전문가로 성장할 수 있도록
              최적의 교육 환경과 아낌없는 지원을 약속드립니다.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">연락처 정보</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-slate-400 mr-3" />
                <span className="text-gray-300">010-1234-5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-slate-400 mr-3" />
                <span className="text-gray-300">info@leenayoon.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-slate-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  서울시 강남구 테헤란로 123
                  <br />
                  이나윤 헤어메이크업 아카데미
                </span>
              </div>
            </div>
          </div>

          {/* 운영 시간 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">운영 시간</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-slate-400 mr-3" />
                <div>
                  <div className="text-gray-300">평일: 09:00 - 18:00</div>
                  <div className="text-gray-300">토요일: 09:00 - 15:00</div>
                  <div className="text-gray-300">일요일: 휴무</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 이나윤 헤어메이크업 아카데미. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 text-sm transition-colors"
              >
                개인정보처리방침
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 text-sm transition-colors"
              >
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



