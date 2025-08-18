import { CheckCircle, Globe, Wrench, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients worldwide with premium industrial solutions"
  },
  {
    icon: Wrench,
    title: "Expert Engineering",
    description: "15+ years of experience in HVAC and ventilation systems"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 technical support and maintenance services"
  }
];

const certifications = [
  "ISO 9001:2015 Certified",
  "UL Listed Products",
  "TÜV SÜD Approved",
  "AMCA Certified",
  "CE Marking Compliance"
];

export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                Industry Leader Since 2008
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold">
                Engineering Excellence in 
                <span className="text-gradient"> Industrial Solutions</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                TradingSANA has been at the forefront of industrial ventilation and HVAC solutions 
                for over 15 years. We specialize in providing cutting-edge equipment from world-renowned 
                manufacturers including Rosenberg, Bristol, and other premium brands.
              </p>

              <p className="text-muted-foreground">
                Our expertise spans across multiple sectors including manufacturing, automotive, 
                commercial buildings, and critical infrastructure. We don't just supply equipment – 
                we provide comprehensive solutions tailored to your specific requirements.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Quality Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                Learn More About Us
              </Button>
              <Button variant="outline" size="lg">
                Download Company Profile
              </Button>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6 animate-slide-up">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-hover border-0 shadow-soft bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-card-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Stats Card */}
            <Card className="bg-primary text-primary-foreground border-0 shadow-medium">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-xs opacity-90">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-xs opacity-90">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs opacity-90">Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}