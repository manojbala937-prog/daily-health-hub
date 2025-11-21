import { Card } from "@/components/ui/card";
import { Heart, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Daily Health Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're dedicated to making health and wellness accessible, understandable, and achievable for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in-up">
          <Card className="p-8 text-center border-none shadow-[var(--shadow-card)] bg-card">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower individuals with the knowledge and tools they need to live healthier, happier lives through evidence-based health information.
            </p>
          </Card>

          <Card className="p-8 text-center border-none shadow-[var(--shadow-card)] bg-card">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground">
              A world where everyone has access to reliable health information and the resources to make informed decisions about their wellbeing.
            </p>
          </Card>

          <Card className="p-8 text-center border-none shadow-[var(--shadow-card)] bg-card">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Our Community</h3>
            <p className="text-muted-foreground">
              Join thousands of individuals on their wellness journey, sharing experiences and supporting each other towards better health.
            </p>
          </Card>
        </div>

        <Card className="p-8 md:p-12 border-none shadow-[var(--shadow-card)] bg-card animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-foreground">What We Offer</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Daily Health Care is your comprehensive platform for wellness information and tracking. We combine the latest health research with practical, actionable advice that fits into your daily life.
              </p>
              <p>
                From nutrition tips and exercise guides to mental health resources and sleep optimization strategies, we cover all aspects of holistic wellness. Our health tracker helps you monitor your progress and stay motivated on your journey.
              </p>
              <p>
                Whether you're just starting your health journey or looking to optimize your current routine, we're here to support you every step of the way with trusted, science-backed information and tools.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;