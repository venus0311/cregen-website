import React from 'react';

const accent = 'text-[#D4FF4B]';

export default function ReachOut() {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-start md:pr-16 mb-12 md:mb-0">
      <h1 className={`text-4xl md:text-5xl font-bold mb-8 ${accent}`}>REACH OUT<br />DIRECTLY</h1>
      <div className="mb-12">
        <p className="mb-2">Email: <a href="mailto:hello@cregen.io" className={accent}>hello@cregen.io</a></p>
        <p className="mb-2">Phone: <a href="tel:+971501234567" className={accent}>+971 50 123 4567</a></p>
        <p>Office: Dubai, UAE (Working globally)</p>
      </div>
      <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${accent}`}>TELL US WHAT YOU&apos;RE<br />DREAMING OF</h2>
      <p className="mb-2">We&apos;re all ears. Fill out the form, and our team will get back to you within 24 hours.</p>
      <p className="mb-2">Not a fan of forms? Reach out via email or phone—whatever suits your creative flow.</p>
    </div>
  );
}
