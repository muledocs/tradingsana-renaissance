import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  const navigation = [
    { name: t('header.home'), href: "/" },
    { name: t('header.products'), href: "/products" },
    { name: t('header.about'), href: "/about" },
    { name: t('header.projects'), href: "/projects" },
    { name: t('header.contact'), href: "/contact" },
  ];

  return (
    <header className={cn("bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50", isRTL && "rtl")}>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${t('header.phone')}`} className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Phone className="h-4 w-4" />
              {t('header.phone')}
            </a>
            <a href={`mailto:${t('header.email')}`} className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Mail className="h-4 w-4" />
              {t('header.email')}
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>{t('header.tagline')}</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gradient">{t('header.company')}</span>
                <p className="text-xs text-muted-foreground">{t('header.subtitle')}</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="outline" size="sm">
              {t('header.getQuote')}
            </Button>
            <Button className="btn-hero">
              {t('header.contactUs')}
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
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <LanguageSwitcher />
              <Button variant="outline" className="w-full">
                {t('header.getQuote')}
              </Button>
              <Button className="btn-hero w-full">
                {t('header.contactUs')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}