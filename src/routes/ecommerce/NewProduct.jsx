import { useState } from "react";
import useInput from "../../hooks/useInput";
import { addProduct } from "../../api/products";

function NewProduct() {
  const [cover, setCover] = useState(null);
  const coverPreview = cover ? URL.createObjectURL(cover) : null;

  const titleInput = useInput();
  const priceInput = useInput();
  const descriptionInput = useInput();

  const addProductHandler = async () => {
    const product = {
      id: 0,
      title: titleInput.value,
      price: Number(priceInput.value),
      description: descriptionInput.value,
      category: "product",
      image: coverPreview,
    };
    try {
      const res = await addProduct(product);
      console.log("API Response:", res.data);
      alert("Product added successfully ✅");
      titleInput.setValue("");
      priceInput.setValue("");
      descriptionInput.setValue("");
      setCover(null);
    } catch (error) {
      console.error(error);
      alert("Add product failed ❌");
    }
  };

  return (
    <div className="mx-auto flex flex-col gap-4 p-2">
      {/* title */}
      <div className="flex flex-col gap-1">
        <label htmlFor="product-title" className="text-sm">
          Title:
        </label>
        <input
          {...titleInput}
          id="product-title"
          placeholder="Enter product title"
          type="text"
          className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm ring-blue-600 transition-all outline-none placeholder:text-gray-400 focus:ring-1 dark:border-gray-600 dark:bg-gray-700"
        />
      </div>

      {/* cover */}
      <div className="flex flex-col gap-1">
        <label htmlFor="product-cover" className="text-sm">
          Product Cover:
        </label>
        <label className="flex h-40 cursor-pointer items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
          <input
            id="product-cover"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setCover(e.target.files[0])}
          />
          {coverPreview ? (
            <img src={coverPreview} className="h-full w-full object-contain" />
          ) : (
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Click to Upload Cover Image
            </span>
          )}
        </label>
      </div>

      {/* price */}
      <div className="flex flex-col gap-1">
        <label htmlFor="product-price" className="text-sm">
          Price:
        </label>
        <input
          {...priceInput}
          id="product-price"
          placeholder="Enter product price"
          type="number"
          className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm ring-blue-600 transition-all outline-none placeholder:text-gray-400 focus:ring-1 dark:border-gray-600 dark:bg-gray-700"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1">
        <label htmlFor="product-description" className="text-sm">
          Description:
        </label>
        <textarea
          {...descriptionInput}
          id="product-description"
          placeholder="Enter product description"
          rows={4}
          className="rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm ring-blue-600 transition-all outline-none placeholder:text-gray-400 focus:ring-1 dark:border-gray-600 dark:bg-gray-700"
        />
      </div>

      <button
        onClick={addProductHandler}
        className="mt-4 cursor-pointer rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Add Product
      </button>
    </div>
  );
}

export default NewProduct;
