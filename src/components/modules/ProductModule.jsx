function ProductModule({ id, title, img, category, price, qty }) {
  return (
    <div className="flex items-center gap-2 px-1 py-3">
      <div className="h-full w-36 rounded object-fill">
        <img className="rounded" src={img} alt="" />
      </div>
      <div>
        <p className="cursor-default text-sm">Id: {id}</p>
        <h3 className="text-md cursor-default font-bold">{title}</h3>
        <p className="cursor-default text-sm">Category: Product</p>
        <p className="cursor-default text-sm">
          Price: {price.toLocaleString()}$
        </p>
        <p className="cursor-default text-sm">QTY: {qty}</p>
        <div className="mt-2 flex">
          <button className="cursor-pointer rounded-l bg-yellow-500 px-2 py-1 text-white hover:bg-yellow-600">
            Edit
          </button>
          <button className="cursor-pointer rounded-r bg-red-500 px-2 py-1 text-white hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModule;
