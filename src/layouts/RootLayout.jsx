import { Outlet } from "react-router";
import Sidebar from "../common/Sidebar";
import Headers from "../common/Header";
import Footer from "../common/Footer";

function RootLayout() {
  return (
    <>
      <nav>
        <Sidebar />
      </nav>
      <main className="flex flex-1 flex-col justify-between rounded bg-white p-1 shadow transition-all sm:p-2">
        <div>
          <Headers />
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default RootLayout;
