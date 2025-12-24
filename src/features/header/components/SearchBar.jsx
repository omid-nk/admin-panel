import { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import useInput from "../../../hooks/useInput";

function SearchBar() {
  const [isSearchbarFocus, setIsSearchbarFocus] = useState(false);
  const searchInput = useInput("");

  const handleSearch = () => {
    if (searchInput.value.trim() === "") return;
    console.log(searchInput.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className={`flex items-center justify-between gap-1 rounded-full border border-gray-200 px-2 py-0.5 dark:border-gray-400/20 dark:bg-blue-400/10 dark:text-gray-100 ${isSearchbarFocus && "border-gray-400 dark:border-gray-400/40"}`}
    >
      <input
        {...searchInput}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsSearchbarFocus(true)}
        onBlur={() => setIsSearchbarFocus(false)}
        className="w-32 border-0 p-1 text-sm text-gray-600 outline-0 transition-all placeholder:text-gray-400 md:w-48 dark:text-gray-100 dark:placeholder:text-gray-400"
        placeholder="Search..."
        type="text"
      />
      <HiOutlineMagnifyingGlass
        onClick={handleSearch}
        className={`h-5 w-5 cursor-pointer transition-all ${isSearchbarFocus && "text-blue-800 dark:text-gray-100"}`}
      />
    </div>
  );
}

export default SearchBar;
