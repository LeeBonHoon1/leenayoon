import Header from "../shared/ui/header";
import HeroCarousel from "../shared/ui/hero-carousel";
import Hero from "../shared/ui/hero";
import Features from "../shared/ui/features";
import Courses from "../shared/ui/courses";
import Certification from "../shared/ui/certification";
import Footer from "../shared/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <Hero />
      <Features />
      <Courses />
      <Certification />
      <Footer />
    </div>
  );
}
