import { CheckCircle, Globe, Wrench, Users, Award, Shield, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Shield,
    title: "Quality Excellence",
    description: "We maintain the highest standards in every product and service we deliver, ensuring reliability and performance that exceeds expectations."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously advancing our solutions through cutting-edge technology and engineering expertise to meet evolving industry needs."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our clients' success drives everything we do. We provide personalized solutions and exceptional support throughout every project."
  },
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Every system is precisely designed and engineered to deliver optimal performance, efficiency, and long-term reliability."
  }
];

const milestones = [
  { year: "2008", event: "Founded TradingSANA with focus on industrial ventilation" },
  { year: "2012", event: "Became authorized Rosenberg distributor for the region" },
  { year: "2015", event: "Expanded into fire safety systems and Bristol pumps" },
  { year: "2018", event: "Launched comprehensive HVAC solutions division" },
  { year: "2020", event: "Achieved ISO 9001:2015 certification" },
  { year: "2024", event: "Over 1000 successful projects completed" }
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "UL Listed Product Authorization",
  "TÜV SÜD Approved Supplier",
  "AMCA Certified Testing",
  "CE Marking Compliance",
  "NFPA Standards Compliance"
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Award className="h-4 w-4" />
                About TradingSANA
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Engineering <span className="text-gradient">Excellence</span> Since 2008
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                For over 15 years, we've been delivering world-class industrial ventilation and HVAC solutions 
                that power critical infrastructure and commercial facilities worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    TradingSANA was founded with a simple yet ambitious vision: to provide the highest quality 
                    industrial ventilation and HVAC solutions to businesses across diverse industries. What started 
                    as a specialized ventilation equipment supplier has evolved into a comprehensive industrial 
                    solutions provider.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our partnership with world-renowned manufacturers like Rosenberg, Bristol, and other industry 
                    leaders allows us to offer cutting-edge technology and unmatched reliability. We don't just 
                    supply equipment – we engineer complete solutions tailored to each client's unique requirements.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we're proud to have completed over 1000 projects across manufacturing, automotive, 
                    commercial, and critical infrastructure sectors, establishing ourselves as a trusted partner 
                    for industrial excellence.
                  </p>
                </div>
              </div>

              <div className="space-y-6 animate-slide-up">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="text-center p-6 border-0 shadow-soft bg-gradient-card">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </Card>
                  <Card className="text-center p-6 border-0 shadow-soft bg-gradient-card">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </Card>
                  <Card className="text-center p-6 border-0 shadow-soft bg-gradient-card">
                    <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </Card>
                  <Card className="text-center p-6 border-0 shadow-soft bg-gradient-card">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our <span className="text-gradient">Core Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do and drive our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="card-hover border-0 shadow-soft bg-card/80 backdrop-blur-sm text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-card-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Key milestones in our growth and evolution as an industry leader
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start gap-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      {/* Timeline Dot */}
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-medium">
                        {milestone.year}
                      </div>
                      
                      {/* Content */}
                      <Card className="flex-1 border-0 shadow-soft bg-gradient-card">
                        <CardContent className="p-6">
                          <p className="text-card-foreground leading-relaxed">{milestone.event}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Quality <span className="text-gradient">Certifications</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our commitment to quality is validated by industry-leading certifications and standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="card-hover border-0 shadow-soft bg-card/80 backdrop-blur-sm p-6 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-card-foreground font-medium">{cert}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Work <span className="text-gradient">Together?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Let's discuss how our expertise and solutions can help optimize your industrial operations 
                and achieve your project goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}