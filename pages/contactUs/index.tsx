import Layout from '@/components/Layout';
import Contact from '@/components/ContactUs/Contact';
import ContactFormLayout from '@/components/ContactUs/ContactFormLayout';
import OurVision from '@/components/ContactUs/OurVision';
export default function ContactUs() {
    return (
        <div className='overflow-x-hidden bg-black font-Neue'>
            <Layout title="Contact Us">
                <Contact />
                <ContactFormLayout />
                <OurVision />
            </Layout>
        </div>
    )           
}