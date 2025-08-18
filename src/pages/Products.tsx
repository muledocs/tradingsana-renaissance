import { Fan, Thermometer, FireExtinguisher, Car, Wind, Zap, ArrowRight, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const productCategories = [
  {
    icon: Fan,
    title: "Ventilation Fan Systems",
    description: "Premium Rosenberg fans engineered for optimal air movement and energy efficiency",
    products: [
      { name: "Axial Fans", specs: "Up to 50,000 m³/h", features: ["Low noise", "High efficiency", "Robust design"] },
      { name: "Centrifugal Fans", specs: "Up to 100,000 m³/h", features: ["High pressure", "Versatile mounting", "EC motors"] },
      { name: "Mixed Flow Fans", specs: "Up to 75,000 m³/h", features: ["Compact design", "Low vibration", "Easy maintenance"] }
    ],
    color: "bg-blue-500/10 text-blue-600 border-blue-200"
  },
  {
    icon: Thermometer,
    title: "VRF Systems",
    description: "Variable Refrigerant Flow systems for precise climate control and energy optimization",
    products: [
      { name: "Outdoor Units", specs: "8-64 HP capacity", features: ["Inverter technology", "Heat recovery", "Quiet operation"] },
      { name: "Indoor Units", specs: "Various capacities", features: ["Ceiling cassette", "Wall mounted", "Ducted types"] },
      { name: "Control Systems", specs: "Smart controls", features: ["Zone control", "Remote monitoring", "Energy management"] }
    ],
    color: "bg-green-500/10 text-green-600 border-green-200"
  },
  {
    icon: FireExtinguisher,
    title: "Fire Fighting Pumps",
    description: "Bristol fire pumps designed for critical life safety applications and emergency response",
    products: [
      { name: "Electric Fire Pumps", specs: "50-5000 GPM", features: ["UL listed", "Reliable start", "Low maintenance"] },
      { name: "Diesel Fire Pumps", specs: "100-5000 GPM", features: ["Emergency backup", "Auto start", "Weather resistant"] },
      { name: "Jockey Pumps", specs: "10-100 GPM", features: ["Pressure maintenance", "Variable speed", "Compact design"] }
    ],
    color: "bg-red-500/10 text-red-600 border-red-200"
  },
  {
    icon: Car,
    title: "Parking Ventilation",
    description: "Complete jet fan systems for underground and enclosed parking facility ventilation",
    products: [
      { name: "Reversible Jet Fans", specs: "1000-6000 m³/h", features: ["Bidirectional flow", "Emergency mode", "CO detection"] },
      { name: "Impulse Fans", specs: "Up to 50N thrust", features: ["High efficiency", "Low noise", "Long service life"] },
      { name: "Control Systems", specs: "Smart monitoring", features: ["CO/NO sensors", "Fire mode", "Variable speed"] }
    ],
    color: "bg-purple-500/10 text-purple-600 border-purple-200"
  },
  {
    icon: Wind,
    title: "Air Curtains",
    description: "Commercial and industrial air curtains for entrance protection and climate separation",
    products: [
      { name: "Commercial Air Curtains", specs: "1-3 meter width", features: ["Energy saving", "Heated options", "Quiet operation"] },
      { name: "Industrial Models", specs: "Up to 6 meter width", features: ["Heavy duty", "High velocity", "Weather resistant"] },
      { name: "Specialized Units", specs: "Custom sizes", features: ["Food service", "Cold storage", "Clean rooms"] }
    ],
    color: "bg-orange-500/10 text-orange-600 border-orange-200"
  },
  {
    icon: Zap,
    title: "HVAC Solutions",
    description: "Complete heating, ventilation, and air conditioning systems for commercial applications",
    products: [
      { name: "System Design", specs: "Custom solutions", features: ["Energy modeling", "Load calculations", "3D design"] },
      { name: "Installation Services", specs: "Professional setup", features: ["Certified technicians", "Quality assurance", "Commissioning"] },
      { name: "Maintenance Programs", specs: "Ongoing support", features: ["Preventive care", "Emergency service", "Parts warranty"] }
    ],
    color: "bg-cyan-500/10 text-cyan-600 border-cyan-200"
  }
];

export default function Products() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Filter className="h-4 w-4" />
                Complete Product Range
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Industrial <span className="text-gradient">Products & Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive range of premium ventilation, HVAC, and fire safety equipment 
                from world-leading manufacturers
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { value: "6", label: "Product Categories" },
                { value: "50+", label: "Product Lines" },
                { value: "1000+", label: "Successful Installations" },
                { value: "24/7", label: "Technical Support" }
              ].map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-soft">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container">
            <div className="space-y-16">
              {productCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${category.color} mb-4`}>
                      <category.icon className="h-5 w-5" />
                      <span className="font-medium">{category.title}</span>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  {/* Products Grid */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {category.products.map((product, productIndex) => (
                      <Card 
                        key={productIndex} 
                        className="card-hover border-0 shadow-soft bg-card/50 backdrop-blur-sm group"
                      >
                        <CardContent className="p-8">
                          <div className="space-y-6">
                            {/* Product Header */}
                            <div className="space-y-3">
                              <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                                {product.name}
                              </h3>
                              <Badge variant="outline" className="text-xs">
                                {product.specs}
                              </Badge>
                            </div>

                            {/* Features */}
                            <div className="space-y-2">
                              {product.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                  {feature}
                                </div>
                              ))}
                            </div>

                            {/* CTA */}
                            <div className="flex gap-3 pt-4">
                              <Button size="sm" variant="outline" className="flex-1">
                                View Details
                              </Button>
                              <Button size="sm" className="flex-1 group">
                                Get Quote
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-20 p-12 bg-gradient-card rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our engineering team can design and supply custom ventilation and HVAC solutions 
                tailored to your specific requirements and applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">
                  Contact Engineering Team
                </Button>
                <Button variant="outline" size="lg">
                  Download Technical Catalogs
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