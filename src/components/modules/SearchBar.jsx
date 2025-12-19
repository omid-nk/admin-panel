import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
function SearchBar() {
  return (
    <div className="flex w-fit items-center rounded bg-blue-50 px-1">
      <div className="flex cursor-pointer items-center justify-center rounded p-1">
        <HiOutlineMagnifyingGlass className="h-5 w-5 text-blue-600" />
      </div>
      <input
        placeholder="Search ..."
        type="text"
        className="w-32 border-0 px-2 py-1 outline-0 transition-all focus:text-gray-600 md:w-56 md:focus:w-64"
      />
    </div>
  );
}

export default SearchBar;
