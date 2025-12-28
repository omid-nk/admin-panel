import Sidebar from "../features/sidebar/Sidebar";
import Header from "../features/header/Header";
import { Outlet } from "react-router";
import usePageTitle from "../hooks/usePageTitle";
import BackGround from "../features/BackGround";

function RootLayout() {
  const title = usePageTitle();
  return (
    <div className="mx-auto flex max-w-7xl p-1 sm:gap-2 sm:p-2">
      <BackGround />
      <aside>
        <Sidebar />
      </aside>
      <main className="flex-1 rounded-lg bg-white/80 p-3 shadow-md dark:bg-gray-800/70">
        <Header title={title} />
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
