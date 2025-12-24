import { createHashRouter } from "react-router";
import RootLayout from "./routes/root";
import Dashboard from "./routes/home/dashboard/dashboard";
import Analytics from "./routes/home/analytics";
import EcommerceOverview from "./routes/ecommerce/overview";
import Products from "./routes/ecommerce/products/products";
import NewProduct from "./routes/ecommerce/NewProduct";
import Orders from "./routes/ecommerce/orders";
import PagesOverview from "./routes/pages/overview";
import Users from "./routes/pages/users";
import Account from "./routes/pages/account";
import Notification from "./routes/pages/notification";
import Chat from "./routes/pages/chat";
import NotFound from "./routes/notFound";

const router = createHashRouter([
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
          { path: "new-product", element: <NewProduct /> },
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
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
