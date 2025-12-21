function ProductDescriptionEditor() {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium" htmlFor="">
        Description
      </label>
      <textarea
        className="rounded border border-gray-300 bg-gray-50 p-2 outline-none focus:border-blue-500"
        name=""
        id=""
        rows={8}
      ></textarea>
    </div>
  );
}

export default ProductDescriptionEditor;
