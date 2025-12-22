import SearchBar from "./components/SearchBar";

function Header({ title }) {
  return (
    <div className="flex items-center gap-6">
      <div className="cursor-default text-xl font-bold">{title}</div>
      <SearchBar />
    </div>
  );
}

export default Header;
