import { useState, useEffect } from "react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState();

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, []);

  return (
    <div className="w-fit rounded bg-white p-1.5 shadow transition-all sm:p-2">
      <div
        className={`${isSidebarOpen ? "flex-row gap-2 sm:gap-6" : "flex-col-reverse gap-2 sm:gap-4"} flex items-center justify-between`}
      >
        <UserCard isSidebarOpen={isSidebarOpen} />
        <HiOutlineChevronLeft
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={` ${isSidebarOpen ? "h-9 w-6 p-0.5" : "h-9 w-9 rotate-180 p-1.5"} cursor-pointer rounded bg-blue-100 text-blue-500 transition-all`}
        />
      </div>

      <ul className="my-2 flex flex-col gap-1 sm:my-4">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex cursor-pointer items-center gap-2 rounded transition-all ${isSidebarOpen ? "px-2 py-1" : "justify-center p-2"} ${isActive ? "bg-blue-600 text-blue-50" : "hover:bg-blue-50"} `
            }
          >
            <HiOutlineSquares2X2
              className={`${isSidebarOpen ? "h-5 w-5" : "h-6 w-6"}`}
            />
            <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Dashboard</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              `flex cursor-pointer items-center gap-2 rounded transition-all ${isSidebarOpen ? "px-2 py-1" : "justify-center p-2"} ${isActive ? "bg-blue-600 text-blue-50" : "hover:bg-blue-50"} `
            }
          >
            <HiOutlineShoppingBag
              className={`${isSidebarOpen ? "h-5 w-5" : "h-6 w-6"}`}
            />
            <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Products</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              `flex cursor-pointer items-center gap-2 rounded transition-all ${isSidebarOpen ? "px-2 py-1" : "justify-center p-2"} ${isActive ? "bg-blue-600 text-blue-50" : "hover:bg-blue-50"} `
            }
          >
            <HiOutlineUsers
              className={`${isSidebarOpen ? "h-5 w-5" : "h-6 w-6"}`}
            />
            <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Users</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/setting"}
            className={({ isActive }) =>
              `flex cursor-pointer items-center gap-2 rounded transition-all ${isSidebarOpen ? "px-2 py-1" : "justify-center p-2"} ${isActive ? "bg-blue-600 text-blue-50" : "hover:bg-blue-50"} `
            }
          >
            <HiOutlineCog6Tooth
              className={`${isSidebarOpen ? "h-5 w-5" : "h-6 w-6"}`}
            />
            <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Setting</p>
          </NavLink>
        </li>
        <li
          className={`${isSidebarOpen ? "px-2 py-1" : "justify-center p-2"} flex cursor-pointer items-center gap-2 rounded transition-all hover:text-red-500`}
        >
          <HiOutlinePower
            className={`${isSidebarOpen ? "h-5 w-5" : "h-6 w-6"}`}
          />
          <p className={`${isSidebarOpen ? "block" : "hidden"}`}>Log Out</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
