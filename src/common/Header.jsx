import SearchBar from "../components/modules/SearchBar";
import Notification from "../components/modules/notification";

function Header() {
  return (
    <div className="flex items-center justify-between gap-2 md:pl-2">
      <h1 className="hidden cursor-default text-xl font-bold text-blue-600 md:block">
        My Store
      </h1>
      <SearchBar />
      <Notification />
    </div>
  );
}

export default Header;
