import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { HiChevronLeft } from "react-icons/hi2";
import menuItems from "../../../data/menu";
import { motion as Motion, AnimatePresence } from "framer-motion";

function MenuItems() {
  const { pathname } = useLocation();

  const [openMenus, setOpenMenu] = useState({});

  useEffect(() => {
    menuItems.forEach((item) => {
      if (item.child.some((c) => pathname.startsWith(c.link))) {
        setOpenMenu({ [item.id]: true });
      }
    });
  }, [pathname]);

  const toggleMenu = (id) => {
    setOpenMenu((prev) => (prev[id] ? {} : { [id]: true }));
  };

  return (
    <>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <div
              onClick={() => toggleMenu(item.id)}
              className={`flex cursor-pointer items-center justify-between gap-6 rounded-lg px-3 py-1.5 transition-all lg:gap-12 ${
                openMenus[item.id]
                  ? "bg-blue-200/60 text-blue-600 dark:bg-blue-400/20 dark:text-gray-100"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2">
                {item.icon && <item.icon className="h-5 w-5" />}
                <p className="text-md">{item.title}</p>
              </div>
              <HiChevronLeft
                className={`h-4 w-4 transition-transform duration-200 ${
                  openMenus[item.id] ? "-rotate-90" : "rotate-0"
                }`}
              />
            </div>
            <AnimatePresence initial={false}>
              {openMenus[item.id] && (
                <Motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="my-2 flex flex-col gap-2 overflow-hidden"
                >
                  {item.child.map((child) => (
                    <li key={child.id}>
                      <NavLink
                        to={child.link}
                        end={child.end}
                        className={({ isActive }) =>
                          `px-4 text-sm transition-all ${
                            isActive
                              ? "text-blue-600 dark:text-blue-400"
                              : "hover:text-blue-600 dark:hover:text-blue-400"
                          }`
                        }
                      >
                        - {child.name}
                      </NavLink>
                    </li>
                  ))}
                </Motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MenuItems;
