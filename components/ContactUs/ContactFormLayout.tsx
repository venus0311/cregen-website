import React from 'react';


export default function ContactFormLayout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center bg-black text-white font-Neue px-4 sm:px-20 py-12 md:py-24 gap-20">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start w-[350px] sm:w-[500px]">
        <h1 className={`text-4xl md:text-5xl font-bold mb-8 text-[#B8E43F]`}>REACH OUT<br />DIRECTLY</h1>
        <div className="mb-12 text-base">
          <p className="mb-2">Email: <a href="mailto:hello@cregen.io" className={``}>hello@cregen.io</a></p>
          <p className="mb-2">Phone: <a href="tel:+971501234567" className={``}>+971 50 123 4567</a></p>
          <p>Office: Dubai, UAE (Working globally)</p>
        </div>
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 text-[#B8E43F]`}>TELL US WHAT YOU&apos;RE<br />DREAMING OF</h2>
        <p className="mb-2">We&apos;re all ears. Fill out the form, and our team will get back to you within 24 hours.</p>
        <p className="mb-2">Not a fan of forms? Reach out via email or phone—whatever suits your creative flow.</p>
      </div>
      {/* Right Section (Form) */}
      <div className="flex flex-col items-start justify-center w-[350px] sm:w-[500px]">
        <form className="w-full max-w-md flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className={`bg-black border rounded-md px-4 py-2 outline-none`} />
          <input type="email" placeholder="Email" className={`bg-black border rounded-md px-4 py-2 outline-none `} />
          <input type="tel" placeholder="Phone" className={`bg-black border rounded-md px-4 py-2 outline-none `} />
          <input type="text" placeholder="Subject" className={`bg-black border rounded-md px-4 py-2 outline-none `} />
          <textarea placeholder="We'd love to hear what you're planning" rows={5} className={`bg-black border rounded-md px-4 py-2 outline-none`} />
          <button type="submit" className="mt-4 bg-[#D4FF4B] text-black font-bold py-2 rounded-md transition hover:bg-[#b6e63b]">Submit</button>
        </form>
      </div>
    </div>
  );
} 