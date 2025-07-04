import Layout from '@/components/Layout';
import Cregen from '@/components/Home/cregen';
import DiamondCard from '@/components/Home/diamond';
import Solutions from '@/components/Home/Solutions';
import Projects from '@/components/Home/Projects';
import Companies from '@/components/Companies';
import Footer from '@/components/Home/Footer';
export default function Home() {
  return (
    <div className='overflow-x-hidden bg-black font-Neue'>
      <Layout title="">
        {/* <SplashCursor /> */}
        <Cregen />
        <DiamondCard />
        <Solutions />
        <Projects />
        <Companies />
        <Footer />
      </Layout>
    </div>
  );
}
