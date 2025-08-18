import { CheckCircle, Globe, Wrench, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Globe,
      title: t('about.globalReach.title'),
      description: t('about.globalReach.description')
    },
    {
      icon: Wrench,
      title: t('about.expertEngineering.title'),
      description: t('about.expertEngineering.description')
    },
    {
      icon: Users,
      title: t('about.dedicatedSupport.title'),
      description: t('about.dedicatedSupport.description')
    }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "UL Listed Products",
    "TÜV SÜD Approved",
    "AMCA Certified",
    "CE Marking Compliance"
  ];
  return (
    <section className={`py-20 bg-background ${isRTL ? 'rtl' : ''}`}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                {t('about.badge')}
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold">
                {t('about.title')}
                <span className="text-gradient"></span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description1')}
              </p>

              <p className="text-muted-foreground">
                {t('about.description2')}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{t('about.certifications')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                {t('about.learnMore')}
              </Button>
              <Button variant="outline" size="lg">
                {t('about.downloadProfile')}
              </Button>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6 animate-slide-up">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-hover border-0 shadow-soft bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-card-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Stats Card */}
            <Card className="bg-primary text-primary-foreground border-0 shadow-medium">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">{t('common.500Plus')}</div>
                    <div className="text-xs opacity-90">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{t('common.15Plus')}</div>
                    <div className="text-xs opacity-90">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{t('common.24/7')}</div>
                    <div className="text-xs opacity-90">Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}