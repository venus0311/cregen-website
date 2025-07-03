import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default function Layout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <>
      {/* <Header /> */}
      <SideBar />
      <Header title={title} />
      <main className="overflow-hidden overflow-x-hidden w-full font-Neue lg:pl-[114px]">
        {children}
        <Footer />
      </main>

    </> 
  );
}