import { NavLink } from "react-router";
import UserCard from "../components/modules/UserCard";
import {
  HiOutlineSquares2X2,
  HiOutlineShoppingBag,
  HiOutlinePower,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
  HiOutlineChevronLeft,
} from "react-icons/hi2";

function Sidebar() {
  return (
    <div>
      <div className="flex items-center justify-between gap-6">
        <UserCard />
        <HiOutlineChevronLeft className="h-9 w-6 cursor-pointer rounded bg-blue-100 p-0.5 text-blue-500" />
      </div>

      <ul className="my-4 flex flex-col gap-1">
        <li>
          <NavLink
            to={"/"}
            className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 transition-all hover:bg-blue-50"
          >
            <HiOutlineSquares2X2 className="h-5 w-5" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/products"}
            className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 transition-all hover:bg-blue-50"
          >
            <HiOutlineShoppingBag className="h-5 w-5" />
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/users"}
            className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 transition-all hover:bg-blue-50"
          >
            <HiOutlineUsers className="h-5 w-5" />
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/setting"}
            className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 transition-all hover:bg-blue-50"
          >
            <HiOutlineCog6Tooth className="h-5 w-5" />
            Setting
          </NavLink>
        </li>
        <li className="flex cursor-pointer items-center gap-2 px-2 py-1 transition-all hover:text-red-600">
          <HiOutlinePower className="h-5 w-5" />
          Log out
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
