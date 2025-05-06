import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 100,
      duration: 1500,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);
  return <Component {...pageProps} />
}
