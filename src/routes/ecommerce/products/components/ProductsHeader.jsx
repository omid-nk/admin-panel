import FilterBtn from "./FilterBtn";
import NewProductBtn from "./NewProductBtn";

function ProductsHeader() {
  return (
    <div className="flex justify-start gap-2">
      <NewProductBtn />
      <FilterBtn />
    </div>
  );
}

export default ProductsHeader;
