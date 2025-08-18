import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: [
      "123 Industrial Boulevard",
      "Manufacturing District",
      "City, State 12345"
    ],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+1 (234) 567-8900",
      "+1 (234) 567-8901",
      "Emergency: +1 (234) 567-8999"
    ],
    color: "bg-green-500/10 text-green-600"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "info@tradingsana.com",
      "sales@tradingsana.com",
      "support@tradingsana.com"
    ],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 8:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 4:00 PM",
      "24/7 Emergency Support Available"
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

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <MessageCircle className="h-4 w-4" />
                Get In Touch
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Contact Our <span className="text-gradient">Expert Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to discuss your industrial ventilation and HVAC needs? Our experienced team 
                is here to provide expert guidance and tailored solutions.
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
                      <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="john@company.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="+1 (234) 567-8900" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input id="company" placeholder="Your Company" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
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
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" placeholder="Brief description of your inquiry" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Please provide details about your project requirements, specifications, timeline, or any other relevant information..."
                          className="min-h-32"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="btn-hero flex-1 group">
                          <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          Send Message
                        </Button>
                        <Button type="button" variant="outline" className="flex-1">
                          Schedule Call
                        </Button>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        By submitting this form, you agree to our privacy policy. We respect your privacy 
                        and will never share your information with third parties.
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
                    <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                    <p className="mb-6 opacity-90">
                      For urgent technical support or emergency services, call our 24/7 hotline.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="secondary" className="flex-1">
                        Emergency Support
                      </Button>
                      <Button variant="outline" className="flex-1 border-white text-white hover:bg-white hover:text-primary">
                        Live Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">Emergency Only</span>
                      </div>
                      <div className="pt-3 border-t border-border">
                        <div className="flex justify-between">
                          <span className="text-primary font-medium">Emergency Support</span>
                          <span className="font-semibold">24/7 Available</span>
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