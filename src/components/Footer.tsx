import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { name: t('header.home'), href: "/" },
    { name: t('header.about'), href: "/about" },
    { name: t('header.products'), href: "/products" },
    { name: t('header.projects'), href: "/projects" },
    { name: t('header.contact'), href: "/contact" }
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
  return (
    <footer className={`bg-secondary-dark text-primary-foreground ${isRTL ? 'rtl' : ''}`}>
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
                <span className="text-xl font-bold text-white">{t('header.company')}</span>
                <p className="text-xs text-primary-foreground/70">{t('header.subtitle')}</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 leading-relaxed">
              {t('footer.description')}
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
            <h3 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">{t('footer.products')}</h3>
            <div className="space-y-3">
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={product.href}
                  className="block text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">{t('footer.contact')}</h3>
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
                <a href={`tel:${t('header.phone')}`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t('header.phone')}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href={`mailto:${t('header.email')}`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t('header.email')}
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
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.stayUpdated')}</h3>
            <p className="text-secondary-foreground/80 mb-4">
              {t('footer.newsletterDescription')}
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')}
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-white placeholder:text-secondary-foreground/50"
              />
              <Button className="btn-hero px-6">
                {t('footer.subscribe')}
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
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="/terms" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                {t('footer.terms')}
              </a>
              <a href="/sitemap" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                {t('footer.sitemap')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}