import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-industrial.jpg";

export default function Hero() {
  const { t, isRTL } = useLanguage();
  
  const stats = [
    { icon: Users, label: t('hero.clients'), value: t('common.500Plus') },
    { icon: Award, label: t('hero.experience'), value: t('common.15Plus') },
    { icon: Shield, label: t('hero.projects'), value: t('common.1000Plus') },
  ];

  return (
    <section className={`relative bg-gradient-to-br from-background via-muted/30 to-background min-h-[90vh] flex items-center ${isRTL ? 'rtl' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 industrial-pattern opacity-5"></div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Shield className="h-4 w-4" />
                {t('hero.badge')}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">{t('hero.title1')}</span>
                <br />
                <span className="text-foreground">{t('hero.title2')}</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                {t('hero.exploreProducts')}
                <ArrowRight className={`ml-2 h-5 w-5 transition-transform group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'}`} />
              </Button>
              <Button variant="outline" size="lg" className="font-semibold">
                {t('hero.downloadCatalog')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Industrial ventilation systems and HVAC solutions"
                className="w-full h-[600px] object-cover rounded-2xl shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute bottom-8 left-8 right-8 p-6 bg-card/95 backdrop-blur-sm border shadow-medium">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-card-foreground">{t('hero.fanCard')}</h3>
                  <p className="text-sm text-muted-foreground">{t('hero.fanSubtitle')}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}