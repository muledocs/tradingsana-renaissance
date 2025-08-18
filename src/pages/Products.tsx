import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductCategories from "@/components/ProductCategories";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Filter, ArrowRight } from "lucide-react";

export default function Products() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Filter className="h-4 w-4" />
                {t('productsPage.badge')}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('productsPage.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('productsPage.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Translated Product Categories */}
        <ProductCategories />

        {/* CTA Section */}
        <section className="py-20">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-4">
              {t('productsPage.customSolutionTitle')}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('productsPage.customSolutionDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero group">
                {t('productsPage.contactEngineering')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                {t('productsPage.downloadCatalogs')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}