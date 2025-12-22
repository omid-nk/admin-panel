import {
  HiMiniHome,
  HiMiniShoppingBag,
  HiMiniDocumentText,
} from "react-icons/hi2";

const menuItems = [
  {
    id: 1,
    title: "Home",
    icon: HiMiniHome,
    child: [
      { id: 11, name: "Dashboard", link: "/", end: true },
      { id: 12, name: "Analytics", link: "/analytics", end: true },
    ],
  },
  {
    id: 2,
    title: "E-commerce",
    icon: HiMiniShoppingBag,
    child: [
      { id: 21, name: "Overview", link: "/e-commerce", end: true },
      { id: 22, name: "Products", link: "/e-commerce/products", end: true },
      { id: 23, name: "Orders", link: "/e-commerce/orders", end: true },
    ],
  },
  {
    id: 3,
    title: "Pages",
    icon: HiMiniDocumentText,
    child: [
      { id: 31, name: "Overview", link: "/pages", end: true },
      { id: 32, name: "Users", link: "/pages/users", end: true },
      { id: 33, name: "Account", link: "/pages/account", end: true },
      { id: 34, name: "Notification", link: "/pages/notification", end: true },
      { id: 35, name: "Chat", link: "/pages/chat", end: true },
    ],
  },
];

export default menuItems;
