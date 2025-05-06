
import Header from '@/components/Header';
import Description from '@/components/Description';
import Footer from '@/components/Footer';
import Solutions from '@/components/Solutions';
import Projects from '@/components/Projects';
import SplashCursor from '@/components/SplashCursor';

export default function Home() {
  return (
    <>
      <main className="overflow-hidden w-full bg-black font-Neue">
        <SplashCursor />
        <Header />
        <Description />
        <Solutions />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
