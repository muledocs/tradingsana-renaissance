import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t, isRTL } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.visitOffice'),
      details: [
        "123 Industrial Boulevard",
        "Manufacturing District",
        "City, State 12345"
      ],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Phone,
      title: t('contact.callUs'),
      details: [
        t('header.phone'),
        "+1 (234) 567-8901",
        "Emergency: +1 (234) 567-8999"
      ],
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Mail,
      title: t('contact.emailUs'),
      details: [
        t('header.email'),
        "sales@tradingsana.com",
        "support@tradingsana.com"
      ],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Clock,
      title: t('contact.businessHours'),
      details: [
        `${t('contact.mondayFriday')}: 8:00 AM - 6:00 PM`,
        `${t('contact.saturday')}: 9:00 AM - 4:00 PM`,
        `${t('contact.available247')} ${t('contact.emergencySupport')}`
      ],
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  const inquiryTypes = [
    "General Information",
    "Product Inquiry", 
    "Technical Support",
    "Project Consultation",
    "Partnership Opportunity",
    "Maintenance Service",
    "Emergency Support"
  ];
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={`py-20 bg-gradient-to-br from-background via-muted/20 to-background ${isRTL ? 'rtl' : ''}`}>
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <MessageCircle className="h-4 w-4" />
                {t('contact.badge')}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">{t('contact.title')}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('contact.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="card-hover border-0 shadow-soft bg-card/50 backdrop-blur-sm text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-xl ${info.color} flex items-center justify-center mx-auto mb-6`}>
                      <info.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-card-foreground">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <Card className="border-0 shadow-medium bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-2">{t('contact.sendMessage')}</h2>
                      <p className="text-muted-foreground">
                        {t('contact.formDescription')}
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">{t('contact.firstName')} *</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">{t('contact.lastName')} *</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">{t('contact.email')} *</Label>
                          <Input id="email" type="email" placeholder="john@company.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">{t('contact.phone')}</Label>
                          <Input id="phone" type="tel" placeholder="+1 (234) 567-8900" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">{t('contact.company')}</Label>
                          <Input id="company" placeholder="Your Company" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">{t('contact.inquiryType')} *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type, index) => (
                                <SelectItem key={index} value={type.toLowerCase().replace(/\s+/g, '-')}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">{t('contact.subject')} *</Label>
                        <Input id="subject" placeholder="Brief description of your inquiry" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t('contact.message')} *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Please provide details about your project requirements, specifications, timeline, or any other relevant information..."
                          className="min-h-32"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="btn-hero flex-1 group">
                          <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          {t('contact.sendBtn')}
                        </Button>
                        <Button type="button" variant="outline" className="flex-1">
                          {t('contact.scheduleCall')}
                        </Button>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        {t('contact.privacyNote')}
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-8 animate-slide-up">
                {/* Map Placeholder */}
                <Card className="border-0 shadow-medium bg-card/80 backdrop-blur-sm overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-muted via-muted/50 to-background flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Find Our Location</h3>
                      <p className="text-muted-foreground text-sm">Interactive map coming soon</p>
                    </div>
                  </div>
                </Card>

                {/* Quick Response Card */}
                <Card className="border-0 shadow-soft bg-gradient-primary text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold mb-4">{t('contact.immediateAssistance')}</h3>
                    <p className="mb-6 opacity-90">
                      {t('contact.emergencyDesc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="secondary" className="flex-1">
                        {t('contact.emergencySupport')}
                      </Button>
                      <Button variant="outline" className="flex-1 border-white text-white hover:bg-white hover:text-primary">
                        {t('contact.liveChat')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">{t('contact.officeHours')}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t('contact.mondayFriday')}</span>
                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t('contact.saturday')}</span>
                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t('contact.sunday')}</span>
                        <span className="font-medium">{t('contact.emergencyOnly')}</span>
                      </div>
                      <div className="pt-3 border-t border-border">
                        <div className="flex justify-between">
                          <span className="text-primary font-medium">{t('contact.emergencySupport')}</span>
                          <span className="font-semibold">{t('contact.available247')}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}