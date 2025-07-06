import React from "react";
export default function Terms() {
    return (
        <div className="relative pb-20 lg:pb-[270px]">

            <div className="relative flex flex-col items-start justify-center text-white font-Neue sm:pt-40 pl-10 sm:pl-[100px] gap-6 sm:gap-10 pr-10">
                <p className="text-[40px] lg:text-[112px] font-Neue leading-none uppercase tracking-[0%]">Terms &</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">Condition</p>
                <div className="max-w-[600px] text-white">
                    <ol className="list-decimal pl-5 space-y-4">
                        <li>
                            <span className="font-semibold">Use of Our Services</span>
                            <p>All content, media, and technology solutions provided by Cregen are intended for legal, ethical, and professional use only. Misuse of services may result in termination of collaboration.</p>
                        </li>
                        <li>
                            <span className="font-semibold">Intellectual Property</span>
                            <p>All materials on this website — including visuals, text, code, and branding — are the intellectual property of Cregen unless stated otherwise. Unauthorized use or reproduction is prohibited.</p>
                        </li>
                        <li>
                            <span className="font-semibold">User Submissions</span>
                            <p>Any information or files submitted through our website (such as project briefs, job applications, or inquiries) are considered confidential. By submitting, you grant us permission to review and respond.</p>
                        </li>
                        <li>
                            <span className="font-semibold">Service Terms</span>
                            <p>All project agreements, deliverables, and timelines are governed by individually signed contracts. These Terms serve as a general guideline and do not override project-specific agreements.</p>
                        </li>
                        <li>
                            <span className="font-semibold">Liability</span>
                            <p>Cregen is not liable for any direct or indirect damages resulting from the use or inability to use our website, or from reliance on any content therein.</p>
                        </li>
                        <li>
                            <span className="font-semibold">Changes</span>
                            <p>We may update these Terms or our Privacy Policy from time to time. Continued use of our site signifies acceptance of any revisions.</p>
                        </li>
                    </ol>
                    <p className="mt-6">For questions about these terms, contact us at: <span className="text-[#B8E43F]">legal@cregen.tech</span></p>
                </div>
            </div>
            <div className="circle"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
        </div>
    );
}
