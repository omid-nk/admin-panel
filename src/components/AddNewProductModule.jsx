import MainImageUpload from "./modules/MainImageUpload";
import ProductDescriptionEditor from "./modules/ProductDescriptionEditor";
import ProductGalleryUpload from "./modules/ProductGalleryUpload";

function AddNewProductModule({ setIsAddNewProductOpen }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="m-2 flex w-full max-w-2xl flex-col rounded-xl bg-white shadow-xl"
      >
        {/* header */}
        <div className="relative flex items-center justify-center border-b p-4">
          <h3 className="text-xl font-black">Add New Product</h3>
        </div>

        {/* scrollable content */}
        <div className="max-h-[70dvh] overflow-y-auto p-6">
          <form className="flex flex-col gap-4">
            {/* title */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Title</label>
              <input
                type="text"
                placeholder="Product title"
                className="rounded border border-gray-300 bg-gray-50 p-2 outline-none focus:border-blue-500"
              />
            </div>

            {/* url */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">URL Slug</label>
              <input
                type="text"
                placeholder="product-url"
                className="rounded border border-gray-300 bg-gray-50 p-2 outline-none focus:border-blue-500"
              />
            </div>

            {/* price */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Price - $</label>
              <input
                type="text"
                placeholder="product-price"
                className="rounded border border-gray-300 bg-gray-50 p-2 outline-none focus:border-blue-500"
              />
            </div>

            <ProductDescriptionEditor />
            {/* images */}
            <MainImageUpload />
            <ProductGalleryUpload />
          </form>
        </div>

        {/* footer */}
        <div className="flex justify-center gap-1 border-t p-4">
          <button
            onClick={() => setIsAddNewProductOpen(false)}
            className="rounded-l-xl bg-gray-300 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-400"
          >
            Cancel
          </button>

          <button className="bg-gray-400 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-500">
            Save as Draft
          </button>

          <button className="rounded-r-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewProductModule;
