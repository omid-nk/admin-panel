import SearchBar from "./components/SearchBar";

function Header({ title }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4 sm:gap-6 md:justify-start">
      <div className="line-clamp-1 max-w-52 cursor-default text-lg font-bold sm:text-xl">
        {title}
      </div>
      <SearchBar />
    </div>
  );
}

export default Header;
