import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TutorialsSection from "../components/TutorialsSection";
import MembershipSection from "../components/MembershipSection";

const HomePage = () => {
  return (
    <main className="text-center">
      <HeroSection />
      <TestimonialsSection />
      <TutorialsSection />
      <MembershipSection />
    </main>
  );
};

export default HomePage;
