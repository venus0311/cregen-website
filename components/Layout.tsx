import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Header /> */}
      <SideBar />
      <Header title="" />
      <main className="overflow-hidden overflow-x-hidden w-full bg-black font-Neue lg:pl-[114px]">
        {children}
        <Footer />
      </main>

    </>
  );
}