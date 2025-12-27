import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  getProductById,
  updateProduct,
  deleteProduct,
} from "../../api/products";
import useInput from "../../hooks/useInput";

function DetailProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [cover, setCover] = useState(null);
  const coverPreview = cover
    ? URL.createObjectURL(cover)
    : product?.image || null;

  const titleInput = useInput("");
  const priceInput = useInput("");
  const descriptionInput = useInput("");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await getProductById(productId);
        setProduct(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (product) {
      titleInput.setValue(product.title);
      priceInput.setValue(product.price);
      descriptionInput.setValue(product.description);
    }
  }, [product, titleInput, priceInput, descriptionInput]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateProduct(productId, {
        title: titleInput.value,
        price: priceInput.value,
        description: descriptionInput.value,
        image: coverPreview,
      });
      alert("Product updated successfully!");
      navigate(`/e-commerce/products/${productId}`);
    } catch (err) {
      setError(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?",
    );
    if (!confirm) return;

    setDeleting(true);
    try {
      await deleteProduct(productId);
      alert("Product deleted successfully!");
      navigate(`/e-commerce/products`);
    } catch (err) {
      setError(err);
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <p>Loading Product Details...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;
  if (!product) return null;

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4 p-2">
      {/* Title */}
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

      {/* Cover */}
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
            <img
              src={coverPreview}
              className="h-full w-full object-contain"
              alt="cover"
            />
          ) : (
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Click to Upload Cover Image
            </span>
          )}
        </label>
      </div>

      {/* Price */}
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

      {/* Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          type="submit"
          disabled={saving}
          className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {saving ? "Saving..." : "Update Product"}
        </button>

        <button
          type="button"
          onClick={handleDelete}
          disabled={deleting}
          className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 font-medium text-white shadow transition hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
        >
          {deleting ? "Deleting..." : "Delete Product"}
        </button>
      </div>
    </form>
  );
}

export default DetailProduct;
