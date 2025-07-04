import Layout from '@/components/Layout';
import Privacy from '@/components/Privacy/Privacy';
import Built from '@/components/Careers/Built';
export default function PrivacyPage() {
    return (
        <div className='overflow-x-hidden bg-black font-Neue'>
            <Layout title="Privacy">
                <Privacy />
                <Built />
            </Layout>
        </div>
    )
}