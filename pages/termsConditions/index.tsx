import Layout from '@/components/Layout';
import Terms from '@/components/Terms/Terms';
import Built from '@/components/Careers/Built';
export default function TermsConditions() {
    return (
        <div className='overflow-x-hidden bg-black font-Neue'>
            <Layout title="Terms & Conditions">
                <Terms />
                <Built />
            </Layout>
        </div>
    )
}