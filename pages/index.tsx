import Layout from '@/components/Layout';
import Cregen from '@/components/Home/cregen';
export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Layout>
        {/* <SplashCursor /> */}
        <Cregen />
      </Layout>
    </div>
  );
}
