import { useState } from "react";
import { Building2, Car, Factory, Wrench, Filter, MapPin, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = [
  { id: 'all', name: 'projects.allProjects', icon: Filter },
  { id: 'manufacturing', name: 'projects.manufacturing', icon: Factory },
  { id: 'commercial', name: 'projects.commercial', icon: Building2 },
  { id: 'automotive', name: 'projects.automotive', icon: Car },
  { id: 'infrastructure', name: 'projects.infrastructure', icon: Wrench },
];

const projects = [
  {
    id: 1,
    title: "Advanced Manufacturing Facility Ventilation",
    category: "manufacturing",
    client: "Global Electronics Corp",
    location: "Dubai, UAE",
    year: "2024",
    image: "/api/placeholder/600/400",
    description: "Complete HVAC and ventilation system design for a 50,000 sq ft manufacturing facility with specialized cleanroom requirements.",
    scope: ["Ventilation Design", "Cleanroom Systems", "Energy Recovery", "Controls Integration"],
    results: {
      energySavings: "35%",
      satisfaction: "100%",
      completion: "On Time"
    }
  },
  {
    id: 2,
    title: "Underground Parking Ventilation System",
    category: "commercial",
    client: "City Mall Complex",
    location: "Riyadh, Saudi Arabia",
    year: "2023",
    image: "/api/placeholder/600/400",
    description: "Jet fan ventilation system for 3-level underground parking with CO detection and emergency smoke evacuation.",
    scope: ["Jet Fan Installation", "CO Detection", "Emergency Systems", "Smart Controls"],
    results: {
      energySavings: "28%",
      satisfaction: "98%",
      completion: "Early"
    }
  },
  {
    id: 3,
    title: "Automotive Plant HVAC Solutions",
    category: "automotive",
    client: "Premium Auto Manufacturing",
    location: "Jeddah, Saudi Arabia",
    year: "2023",
    image: "/api/placeholder/600/400",
    description: "Industrial HVAC system for automotive assembly line with precise temperature and humidity control.",
    scope: ["Industrial HVAC", "Process Cooling", "Air Quality Control", "Maintenance Program"],
    results: {
      energySavings: "42%",
      satisfaction: "100%",
      completion: "On Time"
    }
  },
  {
    id: 4,
    title: "Critical Infrastructure Cooling",
    category: "infrastructure",
    client: "National Data Center",
    location: "Abu Dhabi, UAE",
    year: "2024",
    image: "/api/placeholder/600/400",
    description: "Mission-critical cooling system for tier-4 data center with redundant backup systems and 99.99% uptime requirement.",
    scope: ["Precision Cooling", "Redundant Systems", "24/7 Monitoring", "Emergency Backup"],
    results: {
      energySavings: "30%",
      satisfaction: "100%",
      completion: "On Time"
    }
  },
  {
    id: 5,
    title: "Commercial Complex Climate Control",
    category: "commercial",
    client: "Business District Tower",
    location: "Doha, Qatar",
    year: "2023",
    image: "/api/placeholder/600/400",
    description: "VRF system installation for 40-story commercial tower with zone-based climate control and energy management.",
    scope: ["VRF Installation", "Zone Control", "Energy Management", "Smart Building Integration"],
    results: {
      energySavings: "38%",
      satisfaction: "95%",
      completion: "On Time"
    }
  },
  {
    id: 6,
    title: "Industrial Fire Safety System",
    category: "manufacturing",
    client: "Petrochemical Plant",
    location: "Kuwait City, Kuwait",
    year: "2024",
    image: "/api/placeholder/600/400",
    description: "Comprehensive fire pump and safety system for high-risk petrochemical facility with specialized foam suppression.",
    scope: ["Fire Pump Systems", "Foam Suppression", "Safety Integration", "Emergency Response"],
    results: {
      energySavings: "N/A",
      satisfaction: "100%",
      completion: "Early"
    }
  }
];

export default function Projects() {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={`py-20 bg-gradient-to-br from-background via-muted/20 to-background ${isRTL ? 'rtl' : ''}`}>
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Building2 className="h-4 w-4" />
                {t('projects.badge')}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">{t('projects.title')}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('projects.description')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { value: t('common.1000Plus'), label: t('projects.projectCompleted') },
                { value: "98%", label: t('projects.clientSatisfaction') },
                { value: "35%", label: t('projects.energySavings') },
                { value: "15+", label: "Countries Served" }
              ].map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-soft bg-gradient-card">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-10 bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="gap-2"
                >
                  <category.icon className="h-4 w-4" />
                  {t(category.name)}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="card-hover border-0 shadow-soft bg-card/50 backdrop-blur-sm overflow-hidden group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {project.year}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Project Header */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {project.client}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Scope Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.scope.slice(0, 2).map((item, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                        {project.scope.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.scope.length - 2} more
                          </Badge>
                        )}
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
                        <div className="text-center">
                          <div className="text-sm font-semibold text-primary">{project.results.energySavings}</div>
                          <div className="text-xs text-muted-foreground">Energy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-primary">{project.results.satisfaction}</div>
                          <div className="text-xs text-muted-foreground">Satisfaction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-primary">{project.results.completion}</div>
                          <div className="text-xs text-muted-foreground">Delivery</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start p-0 h-auto text-primary hover:text-primary-hover font-medium"
                      >
                        {t('projects.viewProject')} →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Case Studies CTA */}
            <div className="text-center mt-16 p-12 bg-gradient-card rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">
                {t('projects.caseStudies')}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Interested in detailed case studies? Download our comprehensive project portfolio 
                with technical specifications, challenges overcome, and measured results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">
                  Download Case Studies
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Project Discussion
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