import Container from "@/components/container";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 relative">
      <Container>
        <Navbar />
        <Hero />
        <Footer />
      </Container>
    </div>
  );
}

