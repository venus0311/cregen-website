import React from "react";
export default function Privacy() {
    return (
        <div className="relative pb-20 lg:pb-[270px]">

            <div className="relative flex flex-col items-start justify-center text-white font-Neue sm:pt-40 pl-10 sm:pl-[100px] gap-6 sm:gap-10 pr-10">
                <p className="text-[40px] lg:text-[112px] font-Neue leading-none uppercase tracking-[0%]">Privacy</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">Policy</p>
                <div className="max-w-[600px] text-white">
                    <p className="text-base mb-10">At Cregen, your privacy matters. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website, contact us, or use our services.</p>
                    <ol className="list-decimal pl-5 space-y-4">
                        <li>
                            <span className="font-semibold">Information We Collect</span>
                            <ul className="list-disc pl-5">
                                <li><span className="font-semibold">Personal Information:</span> Name, email address, company name, and any other details submitted via our forms.</li>
                                <li><span className="font-semibold">Usage Data:</span> IP address, browser type, device information, and site behavior for analytics and performance.</li>
                                <li><span className="font-semibold">Files & Media:</span> Any documents or attachments voluntarily uploaded through contact or career forms.</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-semibold">How We Use Your Information</span>
                            <ul className="list-disc pl-5">
                                <li>To communicate with you about your inquiry or project</li>
                                <li>To improve our website and services</li>
                                <li>To send updates or marketing (only with your consent)</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-semibold">Data Protection</span>
                            <p>We follow industry-standard security protocols to protect your information. Your data is never sold or shared with third parties unless required by law or with your direct consent.</p>
                        </li>
                        <li>
                            <span className="font-semibold">Cookies</span>
                            <p>We use cookies for analytics, user experience optimization, and performance tracking. You can adjust cookie preferences in your browser settings.</p>
                        </li>
                        <li>
                            <span className="font-semibold">Third-Party Tools</span>
                            <p>We may use trusted third-party services (e.g., analytics, email tools) that adhere to strict privacy standards.</p>
                        </li>
                        <li>
                            <span className="font-semibold">Your Rights</span>
                            <p>You may request access, correction, or deletion of your data at any time by contacting us at: <span className="text-[#B8E43F]">privacy@cregen.tech</span></p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="circle"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
        </div>
    );
}
