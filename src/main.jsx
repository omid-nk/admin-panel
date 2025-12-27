import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router.jsx";
import { AuthProvider } from "./context/AuthProvider";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);
