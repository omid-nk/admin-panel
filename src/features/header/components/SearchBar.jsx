import { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  const [isSearchbarFocus, setIsSearchbarFocus] = useState(false);

  return (
    <div
      className={`flex items-center justify-between gap-1 rounded-full border border-gray-400 px-2 py-0.5 dark:border-gray-400/20 dark:bg-blue-400/20 dark:text-gray-100 ${isSearchbarFocus && "border-gray-600 shadow"}`}
    >
      <input
        onFocus={() => setIsSearchbarFocus(true)}
        onBlur={() => setIsSearchbarFocus(false)}
        className="w-32 border-0 p-1 text-sm text-gray-600 outline-0 transition-all placeholder:text-gray-400 md:w-48 md:focus:w-64 dark:text-gray-100 dark:placeholder:text-gray-400"
        placeholder="Search..."
        type="text"
      />
      <HiOutlineMagnifyingGlass
        className={`h-5 w-5 cursor-pointer transition-all ${isSearchbarFocus && "text-blue-800 dark:text-gray-100"}`}
      />
    </div>
  );
}

export default SearchBar;
