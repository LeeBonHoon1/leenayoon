import Header from "../../../shared/ui/header";
import Footer from "../../../shared/ui/footer";
import CourseDetail from "../../../shared/ui/course-detail";

export default function MakeupCertificationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CourseDetail
        title="메이크업 국가자격증"
        subtitle="메이크업국가자격증 3개월 과정"
        description="메이크업 국가자격증 취득을 목표로 하는 분들을 위해, 각 과제별 맞춤형 집중 지도로 합격의 문턱을 넘도록 지원합니다."
        educationContent={[
          "뷰티메이크업(웨딩로멘틱/클래식, 한복, 내추럴)",
          "시대메이크업(그레타가르보, 마릴린먼로, 트위기, 펑크)",
          "캐릭터메이크업(레오파드, 한국무용, 발레, 노인)",
          "속눈썹 익스텐션 (왼쪽/오른쪽), 미디어 수염",
        ]}
        overview="메이크업에 관한 숙련기능을 가지고 현장업무를 수용할 수 있는 능력을 가진 전문기능인력을 양성하고자 자격제도를 제정"
        duties="특정한 상황과 목적에 맞는 이미지, 캐릭터 창출을 목적으로 이미지분석, 디자인, 메이크업, 뷰티코디네이션, 후속관리 등을 실행함으로서 얼굴·신체를 표현하는 업무 수행"
        careerItems={[
          "메이크업아티스트",
          "메이크업강사",
          "화장품 관련 회사",
          "메이크업 미용업 창업, 고등 기술학교 등",
        ]}
        features={[
          "과제별 맞춤 지도",
          "실전 연습",
          "개인별 피드백",
          "합격률 향상",
        ]}
      />
      <Footer />
    </div>
  );
}

