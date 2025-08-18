import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
];

const products = [
  { name: "Ventilation Fans", href: "/products/fans" },
  { name: "VRF Systems", href: "/products/vrf" },
  { name: "Fire Pumps", href: "/products/fire-pumps" },
  { name: "Air Curtains", href: "/products/air-curtains" },
  { name: "HVAC Solutions", href: "/products/hvac" }
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" }
];

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-secondary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">TradingSANA</span>
                <p className="text-xs text-secondary-foreground/70">Industrial Solutions</p>
              </div>
            </div>
            
            <p className="text-secondary-foreground/80 leading-relaxed">
              Leading provider of industrial ventilation and HVAC solutions. 
              Engineering excellence for commercial and industrial applications worldwide.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Our Products</h3>
            <div className="space-y-3">
              {products.map((product, index) => (
                <a
                  key={index}
                  href={product.href}
                  className="block text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {product.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-secondary-foreground/80">
                  <p>123 Industrial Boulevard</p>
                  <p>Manufacturing District</p>
                  <p>City, State 12345</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@tradingsana.com" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  info@tradingsana.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-secondary-foreground/80">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Subscribe to our newsletter for the latest product updates and industry insights.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-white placeholder:text-secondary-foreground/50"
              />
              <Button className="btn-hero px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © 2024 TradingSANA. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}