import Layout from '@/components/Layout';
import Careers from '@/components/Careers/Careers';
import Expect from '@/components/Careers/Expect';
import OpenPosition from '@/components/Careers/OpenPosition';
import Built from '@/components/Careers/Built';
export default function careers() {
    return (
        <div className='overflow-x-hidden bg-black font-Neue'>
            <Layout title="Careers">
                <Careers />
                <Expect />
                <OpenPosition />
                <Built  />
            </Layout>
        </div>
    )
}