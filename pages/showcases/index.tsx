import Layout from '@/components/Layout';
import OurShowCase from '@/components/ShowCase/OurShowCase';
import Discover from '@/components/ShowCase/Discover';
import Companies from '@/components/Companies';
export default function Showcases() {
    return (
        <div className='overflow-x-hidden bg-black font-Neue'>
            <Layout title='Showcases' >
                <OurShowCase />
                <Discover />
                <Companies />
            </Layout>
        </div>
    )
}