import { HiOutlineChevronDown } from "react-icons/hi2";

function FilterBtn() {
  return (
    <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-400/40 active:translate-y-0 active:scale-95 dark:border-gray-200/20 dark:bg-blue-200/20 dark:text-gray-200 dark:hover:bg-blue-100/20 dark:hover:shadow-gray-600/60">
      Filter
      <HiOutlineChevronDown className="h-4 w-4" />
    </button>
  );
}

export default FilterBtn;
