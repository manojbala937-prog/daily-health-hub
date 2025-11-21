import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Droplets, Moon, FootprintsIcon } from "lucide-react";

const trackerData = [
  {
    icon: Droplets,
    title: "Water Intake",
    current: 6,
    goal: 8,
    unit: "glasses",
    color: "bg-blue-500"
  },
  {
    icon: Moon,
    title: "Sleep",
    current: 7,
    goal: 8,
    unit: "hours",
    color: "bg-purple-500"
  },
  {
    icon: FootprintsIcon,
    title: "Steps",
    current: 7500,
    goal: 10000,
    unit: "steps",
    color: "bg-green-500"
  }
];

const HealthTracker = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Track Your Progress
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your daily health metrics and stay on top of your wellness goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in-up">
          {trackerData.map((item, index) => {
            const Icon = item.icon;
            const percentage = (item.current / item.goal) * 100;
            
            return (
              <Card 
                key={index}
                className="border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 bg-card"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {item.current.toLocaleString()}
                    <span className="text-lg text-muted-foreground ml-2">
                      / {item.goal.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.unit}</p>
                </CardHeader>
                <CardContent>
                  <Progress value={percentage} className="h-3" />
                  <p className="text-sm text-muted-foreground mt-2">
                    {percentage.toFixed(0)}% of daily goal
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HealthTracker;