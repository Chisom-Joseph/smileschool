import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TutorialsSection from "../components/TutorialsSection";
import MembershipSection from "../components/MembershipSection";
import FaqSection from "../components/FaqSection";

const HomePage = () => {
  return (
    <main className="text-center">
      <HeroSection />
      <TestimonialsSection />
      <TutorialsSection />
      <MembershipSection />
      <FaqSection />
    </main>
  );
};

export default HomePage;
