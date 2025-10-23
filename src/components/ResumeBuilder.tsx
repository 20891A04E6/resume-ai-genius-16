import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sparkles, Download } from "lucide-react";
import { toast } from "sonner";

interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  title: string;
  summary: string;
  experience: string;
  education: string;
  skills: string;
}

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    fullName: "",
    email: "",
    phone: "",
    title: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: keyof ResumeData, value: string) => {
    setResumeData(prev => ({ ...prev, [field]: value }));
  };

  const handleAISuggestion = async () => {
    setIsGenerating(true);
    
    // Simulate AI suggestion (will be replaced with real AI later)
    setTimeout(() => {
      toast.success("AI suggestions generated!", {
        description: "Your content has been enhanced with professional phrasing.",
      });
      setIsGenerating(false);
    }, 2000);
  };

  const handleDownload = () => {
    toast.success("Resume downloaded!", {
      description: "Your resume has been saved as PDF.",
    });
  };

  return (
    <section id="builder" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Build Your Resume</h2>
          <p className="text-xl text-muted-foreground">
            Fill in your details and let AI help you craft the perfect resume
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <Card className="p-6 md:p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Personal Information</h3>
              
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={resumeData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={resumeData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    value={resumeData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input
                  id="title"
                  placeholder="Senior Software Engineer"
                  value={resumeData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Professional Details</h3>
              
              <div className="space-y-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea
                  id="summary"
                  placeholder="Brief overview of your experience and expertise..."
                  rows={4}
                  value={resumeData.summary}
                  onChange={(e) => handleInputChange("summary", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Work Experience</Label>
                <Textarea
                  id="experience"
                  placeholder="List your relevant work experience..."
                  rows={4}
                  value={resumeData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Textarea
                  id="education"
                  placeholder="Your educational background..."
                  rows={3}
                  value={resumeData.education}
                  onChange={(e) => handleInputChange("education", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <Textarea
                  id="skills"
                  placeholder="List your key skills (separated by commas)..."
                  rows={3}
                  value={resumeData.skills}
                  onChange={(e) => handleInputChange("skills", e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                variant="hero" 
                onClick={handleAISuggestion}
                disabled={isGenerating}
                className="flex-1"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {isGenerating ? "Generating..." : "Enhance with AI"}
              </Button>
            </div>
          </Card>

          {/* Preview Section */}
          <Card className="p-6 md:p-8 bg-card sticky top-4 h-fit">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Preview</h3>
                <Button onClick={handleDownload} size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>

              {/* Resume Preview */}
              <div className="space-y-6 min-h-[600px] border rounded-lg p-6 bg-background">
                {resumeData.fullName ? (
                  <>
                    <div className="border-b pb-4">
                      <h2 className="text-3xl font-bold text-primary">{resumeData.fullName}</h2>
                      {resumeData.title && (
                        <p className="text-lg text-muted-foreground mt-1">{resumeData.title}</p>
                      )}
                      <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                        {resumeData.email && <span>{resumeData.email}</span>}
                        {resumeData.phone && <span>• {resumeData.phone}</span>}
                      </div>
                    </div>

                    {resumeData.summary && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Professional Summary</h3>
                        <p className="text-sm text-muted-foreground">{resumeData.summary}</p>
                      </div>
                    )}

                    {resumeData.experience && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">{resumeData.experience}</p>
                      </div>
                    )}

                    {resumeData.education && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Education</h3>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">{resumeData.education}</p>
                      </div>
                    )}

                    {resumeData.skills && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {resumeData.skills.split(",").map((skill, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                            >
                              {skill.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Start filling out the form to see your resume preview
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilder;
