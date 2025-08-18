import { Fan, Zap, FireExtinguisher, Car, Wind, Thermometer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: Fan,
    title: "Fan Systems",
    description: "Premium Rosenberg ventilation fans for industrial and commercial applications",
    features: ["Axial Fans", "Centrifugal Fans", "Mixed Flow Fans", "EC Technology"],
    color: "bg-blue-500/10 text-blue-600",
    href: "/products/fans"
  },
  {
    icon: Thermometer,
    title: "VRF Units",
    description: "Variable Refrigerant Flow systems for efficient climate control",
    features: ["Energy Efficient", "Multi-Zone Control", "Heat Recovery", "Smart Controls"],
    color: "bg-green-500/10 text-green-600",
    href: "/products/vrf"
  },
  {
    icon: FireExtinguisher,
    title: "Fire Pumps",
    description: "Bristol firefighting pumps for critical safety applications",
    features: ["Electric Pumps", "Diesel Pumps", "Jockey Pumps", "Controllers"],
    color: "bg-red-500/10 text-red-600",
    href: "/products/fire-pumps"
  },
  {
    icon: Car,
    title: "Parking Ventilation",
    description: "Complete jet fan systems for underground parking facilities",
    features: ["Jet Fans", "CO Detection", "Control Systems", "Emergency Mode"],
    color: "bg-purple-500/10 text-purple-600",
    href: "/products/parking"
  },
  {
    icon: Wind,
    title: "Air Curtains",
    description: "Commercial air curtains for entrance protection and climate control",
    features: ["Door Air Curtains", "Industrial Models", "Heated Options", "Remote Control"],
    color: "bg-orange-500/10 text-orange-600",
    href: "/products/air-curtains"
  },
  {
    icon: Zap,
    title: "HVAC Solutions",
    description: "Complete heating, ventilation, and air conditioning systems",
    features: ["System Design", "Installation", "Maintenance", "Energy Audit"],
    color: "bg-cyan-500/10 text-cyan-600",
    href: "/products/hvac"
  }
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Product Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of industrial ventilation and HVAC solutions designed for 
            optimal performance and energy efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="card-hover group cursor-pointer border-0 shadow-soft bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start p-0 h-auto text-primary hover:text-primary-hover font-medium"
                    asChild
                  >
                    <a href={category.href}>
                      Learn More →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-semibold">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}