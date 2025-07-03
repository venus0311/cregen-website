import Layout from '@/components/Layout';
import OurStory from '@/components/AboutUs/OurStory';
import CregenHistory from '@/components/AboutUs/CregenHistory';
import WhatDriveUs from '@/components/AboutUs/WhatDriveUs';
import TheVision from '@/components/AboutUs/TheVision';
export default function ContactUs() {
    return (
        <Layout title="Contact Us">
            <OurStory />
            <CregenHistory />
            <WhatDriveUs />
            <TheVision />
        </Layout>
    )
}