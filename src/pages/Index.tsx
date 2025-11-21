import Hero from "@/components/Hero";
import DailyTips from "@/components/DailyTips";
import HealthTracker from "@/components/HealthTracker";
import BlogSection from "@/components/BlogSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DailyTips />
      <HealthTracker />
      <BlogSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;