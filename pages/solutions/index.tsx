import Layout from '@/components/Layout';
import OurSolutions from '@/components/Solutions/OurSolutions';
import Cards from '@/components/Solutions/Cards';
import Companies from '@/components/Companies';
export default function Solutions() {
    return (
        <div className='overflow-x-hidden bg-black font-Neue'>
            <Layout title="Solutions">
                <OurSolutions />
                <Cards />
                <Companies />
            </Layout>
        </div>
    )
}