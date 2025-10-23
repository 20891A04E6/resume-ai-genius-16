import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Shield, Download } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Content",
    description: "Get intelligent suggestions for professional phrasing and formatting that makes your resume stand out.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Create a complete, professional resume in under 5 minutes with our streamlined builder.",
  },
  {
    icon: Shield,
    title: "ATS-Friendly",
    description: "All templates are optimized for Applicant Tracking Systems to ensure your resume gets seen.",
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description: "Download your resume as PDF or share it directly with potential employers.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Why Choose Our Builder?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you create the perfect resume
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
