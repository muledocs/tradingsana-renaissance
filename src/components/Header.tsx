import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Phone className="h-4 w-4" />
              +1 (234) 567-8900
            </a>
            <a href="mailto:info@tradingsana.com" className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Mail className="h-4 w-4" />
              info@tradingsana.com
            </a>
          </div>
          <div className="hidden md:block">
            <span>Professional Industrial Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gradient">TradingSANA</span>
                <p className="text-xs text-muted-foreground">Industrial Solutions</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Get Quote
            </Button>
            <Button className="btn-hero">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            mobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full">
                Get Quote
              </Button>
              <Button className="btn-hero w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}