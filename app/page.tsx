import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
