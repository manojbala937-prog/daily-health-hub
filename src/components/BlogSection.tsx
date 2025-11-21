import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    title: "5 Morning Habits for a Healthier You",
    excerpt: "Start your day right with these simple yet effective morning routines that can transform your health and productivity.",
    date: "May 15, 2024",
    category: "Wellness"
  },
  {
    title: "The Science of Sleep: Why Quality Matters",
    excerpt: "Discover the latest research on sleep and learn how to optimize your rest for better health and mental clarity.",
    date: "May 12, 2024",
    category: "Sleep Health"
  },
  {
    title: "Nutrition 101: Building a Balanced Plate",
    excerpt: "Learn the fundamentals of nutrition and how to create meals that nourish your body and support your goals.",
    date: "May 10, 2024",
    category: "Nutrition"
  },
  {
    title: "Stress Management Techniques That Work",
    excerpt: "Evidence-based strategies to reduce stress and improve your mental wellbeing in today's fast-paced world.",
    date: "May 8, 2024",
    category: "Mental Health"
  },
  {
    title: "Staying Active: Finding Exercise You Love",
    excerpt: "Movement doesn't have to be a chore. Explore different types of physical activity and find what makes you feel great.",
    date: "May 5, 2024",
    category: "Fitness"
  },
  {
    title: "Hydration: More Than Just Water",
    excerpt: "Understanding the role of proper hydration in your body and creative ways to stay hydrated throughout the day.",
    date: "May 3, 2024",
    category: "Wellness"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Health Articles & Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest articles on health, wellness, and living your best life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 animate-fade-in-up">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className="border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 bg-card group"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-primary mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {article.category}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:bg-transparent">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="shadow-lg">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;