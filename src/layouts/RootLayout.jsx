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
      <main className="flex flex-1 flex-col justify-between rounded bg-white p-1 shadow sm:p-2">
        <Headers />
        <div className="p-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default RootLayout;
