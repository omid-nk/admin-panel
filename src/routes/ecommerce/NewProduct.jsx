import { useState } from "react";

function NewProduct() {
  const [cover, setCover] = useState(null);
  const coverPreview = cover ? URL.createObjectURL(cover) : null;

  return (
    <div className="mx-auto flex flex-col gap-4 p-2">
      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
          htmlFor="title"
        >
          Title
        </label>
        <input
          id="title"
          placeholder="Enter product title"
          className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-800 transition outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
          htmlFor="title"
        >
          Url
        </label>
        <input
          id="title"
          placeholder="Enter product url"
          className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-800 transition outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Product Cover
        </label>

        <label className="relative flex h-40 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-dashed border-gray-300 bg-gray-50 transition hover:border-blue-400 hover:bg-blue-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setCover(e.target.files[0])}
          />

          {coverPreview ? (
            <img
              src={coverPreview}
              alt="Product fill preview"
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Click to upload cover image
            </span>
          )}
        </label>
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
          htmlFor="title"
        >
          SKU
        </label>
        <input
          id="title"
          placeholder="Enter product sku"
          className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-800 transition outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
          htmlFor="price"
        >
          Price
        </label>
        <input
          id="price"
          placeholder="Enter product price"
          className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-800 transition outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
          type="number"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
          htmlFor="price"
        >
          QTY
        </label>
        <input
          id="price"
          placeholder="Enter product QTY"
          className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-800 transition outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
          type="number"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          placeholder="Enter product description"
          rows={4}
          className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-800 transition outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
        />
      </div>

      <button className="mt-4 cursor-pointer rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
        Add Product
      </button>
    </div>
  );
}

export default NewProduct;
