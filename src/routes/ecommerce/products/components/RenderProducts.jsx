import { useMemo, useEffect } from "react";
import products from "../../../../data/products";
import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router";

function RenderProducts() {
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
  }, [currentPage]);

  const handlePageChange = (page) => {
    setSearchParams({ page });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div className="mt-2">
      <DesktopTable products={pageInatedProducts} />
      <MobileTable products={pageInatedProducts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default RenderProducts;
