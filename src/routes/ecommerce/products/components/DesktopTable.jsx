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
              Salary
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
                  className="hidden h-14 w-14 rounded-lg object-contain md:block"
                  src={item.image}
                  alt=""
                />
                <p className="line-clamp-2 cursor-pointer hover:text-blue-600 hover:underline dark:hover:text-blue-400">
                  {item.title}
                </p>
              </td>
              <td className="cursor-default px-2 py-3 text-left">
                {item.category}
              </td>
              <td className="cursor-default px-2 py-3 text-left">
                {item.rating.count}
              </td>
              <td className="cursor-default px-2 py-3 text-left">
                {`$${item.price}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DesktopTable;
