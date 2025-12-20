import { HiOutlineChevronDown } from "react-icons/hi2";
import AddNewProductModule from "../components/AddNewProductModule";
import { useState } from "react";

function Products() {
  const [isAddNewProductOpen, setIsAddNewProductOpen] = useState(false);
  return (
    <>
      <div>
        <header className="flex items-center justify-between rounded bg-gray-50 p-1">
          <button
            onClick={() => setIsAddNewProductOpen(true)}
            className="flex cursor-pointer items-center rounded bg-green-500 px-2 py-1 text-white transition-all hover:bg-green-600"
          >
            New Product
          </button>
          <button className="flex cursor-pointer items-center gap-1 rounded border bg-white px-2 py-1 text-gray-600 transition-all">
            Filter
            <HiOutlineChevronDown className="h-4 w-4" />
          </button>
        </header>
        <div></div>
      </div>
      {isAddNewProductOpen && (
        <AddNewProductModule setIsAddNewProductOpen={setIsAddNewProductOpen} />
      )}
    </>
  );
}

export default Products;
