import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Utensils, Moon, Dumbbell, Brain, Droplets } from "lucide-react";

const tips = [
  {
    icon: Droplets,
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water daily to keep your body functioning optimally.",
    color: "text-blue-500"
  },
  {
    icon: Utensils,
    title: "Balanced Diet",
    description: "Include a variety of fruits, vegetables, and whole grains in your meals.",
    color: "text-green-500"
  },
  {
    icon: Dumbbell,
    title: "Regular Exercise",
    description: "Aim for 30 minutes of physical activity most days of the week.",
    color: "text-orange-500"
  },
  {
    icon: Moon,
    title: "Quality Sleep",
    description: "Get 7-9 hours of sleep each night for optimal health and recovery.",
    color: "text-purple-500"
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description: "Practice mindfulness and meditation to reduce stress and improve focus.",
    color: "text-teal-500"
  },
  {
    icon: Heart,
    title: "Heart Health",
    description: "Monitor your cardiovascular health and maintain regular check-ups.",
    color: "text-red-500"
  }
];

const DailyTips = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Daily Health Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, actionable tips to help you maintain a healthy lifestyle every day
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className={`h-6 w-6 ${tip.color}`} />
                    </div>
                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DailyTips;