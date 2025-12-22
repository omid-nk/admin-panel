import Sidebar from "../features/sidebar/Sidebar";
import Header from "../features/header/Header";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <aside className="rounded-lg bg-white p-3 shadow">
        <Sidebar />
      </aside>
      <main className="flex-1 rounded-lg bg-white p-3 shadow">
        <Header />
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
