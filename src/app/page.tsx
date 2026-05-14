import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Features from '@/components/Features';
import Partners from '@/components/Partners';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <Partners />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
