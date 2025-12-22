import Sidebar from "../features/sidebar/Sidebar";
import Header from "../features/header/Header";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <aside className="glass-border rounded-lg bg-white/80 p-3 shadow-md dark:bg-gray-800/70">
        <Sidebar />
      </aside>
      <main className="glass-border flex-1 rounded-lg bg-white/80 p-3 shadow-md dark:bg-gray-800/70">
        <Header />
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
