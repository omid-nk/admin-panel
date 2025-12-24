import { Link } from "react-router";

function NewProductBtn() {
  return (
    <Link
      to={"/"}
      className="relative cursor-pointer overflow-hidden rounded-lg bg-linear-to-r from-blue-600 to-sky-600 px-3 py-1.5 font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/50 active:scale-95 dark:hover:shadow-blue-400/30"
    >
      <span>New Product</span>
    </Link>
  );
}

export default NewProductBtn;
