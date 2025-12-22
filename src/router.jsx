import { createBrowserRouter } from "react-router";
import RootLayout from "./routes/root";
import Dashboard from "./routes/home/dashboard";
import Analytics from "./routes/home/analytics";
import EcommerceOverview from "./routes/ecommerce/overview";
import Products from "./routes/ecommerce/products";
import Orders from "./routes/ecommerce/orders";
import PagesOverview from "./routes/pages/overview";
import Users from "./routes/pages/users";
import Account from "./routes/pages/account";
import Notification from "./routes/pages/notification";
import Chat from "./routes/pages/chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "analytics", element: <Analytics /> },
      {
        path: "e-commerce",
        children: [
          { index: true, element: <EcommerceOverview /> },
          { path: "products", element: <Products /> },
          { path: "orders", element: <Orders /> },
        ],
      },
      {
        path: "pages",
        children: [
          { index: true, element: <PagesOverview /> },
          { path: "users", element: <Users /> },
          { path: "account", element: <Account /> },
          { path: "notification", element: <Notification /> },
          { path: "chat", element: <Chat /> },
        ],
      },
    ],
  },
]);

export default router;
