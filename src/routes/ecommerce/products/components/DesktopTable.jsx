function DesktopTable({ products }) {
  return (
    <div className="hidden lg:block">
      <table className="bg- w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-200 dark:border-blue-200/30">
            <th className="cursor-default px-2 py-3 text-left font-medium">
              Product
            </th>
            <th className="cursor-default px-2 py-3 text-left font-medium">
              Category
            </th>
            <th className="cursor-default px-2 py-3 text-left font-medium">
              QTY
            </th>
            <th className="cursor-default px-2 py-3 text-left font-medium">
              Sku
            </th>
            <th className="cursor-default px-2 py-3 text-left font-medium">
              Salary
            </th>
            <th className="cursor-default px-2 py-3 text-left font-medium">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-blue-200/10">
          {products.map((item) => (
            <tr
              className="hover:bg-blue-50 dark:hover:bg-blue-200/10"
              key={item.id}
            >
              <td className="flex cursor-default items-center gap-2 px-2 py-3 text-left">
                <img
                  className="hidden h-10 w-10 rounded-lg md:block"
                  src={item.cover}
                  alt=""
                />
                <p className="cursor-pointer hover:text-blue-600 hover:underline dark:hover:text-blue-400">
                  {item.name}
                </p>
              </td>
              <td className="cursor-default px-1 py-3 text-left">
                {item.category}
              </td>
              <td className="cursor-default px-1 py-3 text-left">
                {item.quantity}
              </td>
              <td className="cursor-default px-1 py-3 text-left">{item.sku}</td>
              <td className="cursor-default px-1 py-3 text-left">
                {`$${item.price}`}
              </td>
              <td className="cursor-default px-1 py-3 text-left">
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DesktopTable;
