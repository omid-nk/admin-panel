import MenuItems from "./components/MenuItems";
import UserCard from "./components/UserCard";
import Accessibility from "./components/Accessibility";
import HamburgerButton from "./components/HamburgerButton";

function Sidebar() {
  return (
    <>
      <HamburgerButton />

      <div className="glass-border hidden rounded-lg bg-white/80 p-3 shadow-md sm:block dark:bg-gray-800/70">
        <UserCard />
        <MenuItems />
        <Accessibility />
      </div>
    </>
  );
}

export default Sidebar;
