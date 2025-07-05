import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

export default function Layout({ children, title }: { children: React.ReactNode, title: string }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200); // Show after scrolling 200px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* <Header /> */}
      <SideBar />
      <Header title={title} />
      <main className="overflow-hidden overflow-x-hidden w-full font-Neue lg:pl-[114px]">
        {children}
        <Footer />
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-[#D4FF4B] opacity-80 text-black px-4 py-2 rounded-full shadow-lg hover:bg-[#b6e63b] transition"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </main>
    </>
  );
}