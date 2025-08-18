import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <About />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
