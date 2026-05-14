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
    <div className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
      <Header />
      <main role="main" aria-label="Main content">
        <Hero />
        <article itemScope itemType="https://schema.org/Service">
          <Solutions />
        </article>
        <article itemScope itemType="https://schema.org/SoftwareApplication">
          <Features />
        </article>
        <Partners />
        <article itemScope itemType="https://schema.org/Product">
          <Projects />
        </article>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
