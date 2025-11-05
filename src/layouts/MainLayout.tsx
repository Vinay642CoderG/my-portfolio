import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
