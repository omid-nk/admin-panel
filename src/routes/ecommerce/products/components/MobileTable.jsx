import { Link } from "react-router";

function MobileTable({ products }) {
  return (
    <div className="block lg:hidden">
      {products.map((item) => (
        <div
          key={item.id}
          className="my-2 rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-800/60 dark:bg-blue-400/5"
        >
          <header className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-lg object-contain sm:h-16 sm:w-16"
              src={item.image}
              alt=""
            />
            <div>
              <p className="font-medium">
                <Link to={`/e-commerce/products/${item.id}`}>{item.title}</Link>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.category}
              </p>
            </div>
          </header>
          <div className="mt-3 grid grid-cols-2 gap-2 px-2 text-xs">
            <div className="flex gap-2">
              <span className="text-gray-400">QTY:</span>
              <p className="font-medium">{item.rating.count}</p>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-400">Price:</span>
              <p className="font-medium">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MobileTable;
