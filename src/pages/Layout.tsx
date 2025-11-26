import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
