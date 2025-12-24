import { HiBars3 } from "react-icons/hi2";
import MenuItems from "../components/MenuItems";
import UserCard from "../components/UserCard";
import Accessibility from "../components/Accessibility";
import { useState } from "react";

function HamburgerButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed right-6 bottom-6 z-50 flex cursor-pointer items-center justify-center rounded-lg bg-blue-600 p-1 text-gray-200 shadow shadow-black/40 transition-all hover:scale-110 md:hidden"
      >
        <HiBars3 className="h-10 w-10" />
      </div>
      <div
        className={`fixed top-0 bottom-0 z-40 flex h-full w-fit flex-col justify-between bg-white p-4 shadow-2xl transition-all md:hidden dark:bg-gray-900 ${isMenuOpen ? "left-0" : "-left-72"}`}
      >
        <div>
          <UserCard />
          <MenuItems />
        </div>
        <Accessibility />
      </div>
    </>
  );
}

export default HamburgerButton;
