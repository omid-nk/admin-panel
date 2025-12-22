import { useLocation } from "react-router";

export default function usePageTitle() {
  const location = useLocation();

  const getTitleFromPath = (path) => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length === 0) return "Dashboard";

    const lastSegment = segments[segments.length - 1];

    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return getTitleFromPath(location.pathname);
}
