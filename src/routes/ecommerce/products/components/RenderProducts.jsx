import { useMemo, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getProducts } from "../../../../api/products";
import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";
import Pagination from "./Pagination";

function RenderProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const ITEMS_PER_PAGE = 12;

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const currentPage = Math.min(
    Math.max(Number(searchParams.get("page")) || 1, 1),
    totalPages,
  );

  const pageInatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return products.slice(start, end);
  }, [currentPage, products]);

  const handlePageChange = (page) => {
    setSearchParams({ page });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await getProducts();
        setProducts(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="mt-2">
      {loading ? (
        <p className="mt-4 text-center">Loading products...</p>
      ) : error ? (
        <p className="mt-4 text-center text-red-500">Error: {error.message}</p>
      ) : (
        <>
          <DesktopTable products={pageInatedProducts} />
          <MobileTable products={pageInatedProducts} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default RenderProducts;
