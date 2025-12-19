import { Outlet } from "react-router";
import Sidebar from "../common/Sidebar";
import Headers from "../common/Header";

function RootLayout() {
  return (
    <>
      {" "}
      <nav className="w-fit rounded bg-white p-2 shadow">
        <Sidebar />
      </nav>
      <main className="flex-1 rounded bg-white p-2 shadow">
        <Headers />
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
