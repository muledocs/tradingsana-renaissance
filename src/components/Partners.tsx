import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "Rosenberg",
    description: "The Air Movement Group",
    logo: "/api/placeholder/120/60",
    specialty: "Ventilation Fans"
  },
  {
    name: "Bristol",
    description: "Firefighting Solutions",
    logo: "/api/placeholder/120/60",
    specialty: "Fire Pumps"
  },
  {
    name: "ECOFIT",
    description: "EC Technology",
    logo: "/api/placeholder/120/60",
    specialty: "Energy Efficient"
  },
  {
    name: "UL",
    description: "Safety Certification",
    logo: "/api/placeholder/120/60",
    specialty: "Quality Assurance"
  },
  {
    name: "TÜV SÜD",
    description: "Testing & Certification",
    logo: "/api/placeholder/120/60",
    specialty: "Standards Compliance"
  },
  {
    name: "AMCA",
    description: "Air Movement & Control",
    logo: "/api/placeholder/120/60",
    specialty: "Industry Standards"
  }
];

export default function Partners() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with world-leading manufacturers and certification bodies 
            to ensure the highest quality standards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card 
              key={index}
              className="card-hover group border-0 shadow-soft bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  {/* Logo Placeholder */}
                  <div className="w-full h-16 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-300">
                    <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                      {partner.name}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm text-card-foreground group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {partner.description}
                    </p>
                    <div className="inline-block px-2 py-1 bg-primary/10 rounded text-xs text-primary font-medium">
                      {partner.specialty}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in becoming a partner? We're always looking for innovative companies to collaborate with.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors"
          >
            Partner With Us →
          </a>
        </div>
      </div>
    </section>
  );
}