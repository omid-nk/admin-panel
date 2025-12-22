import { useLocation } from "react-router";

export default function usePageTitle() {
  const location = useLocation();

  const validTitles = [
    "dashboard",
    "analytics",
    "products",
    "orders",
    "overview",
    "users",
    "account",
    "notification",
    "chat",
  ];

  const getTitleFromPath = (path) => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length === 0) return "Dashboard";

    const lastSegment = segments[segments.length - 1].toLowerCase();

    if (!validTitles.includes(lastSegment)) return "Dashboard";

    // تبدیل از kebab-case به Title Case
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return getTitleFromPath(location.pathname);
}
