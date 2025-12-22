import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="my-22 flex flex-col items-center justify-center gap-2">
      <p className="text-7xl font-black text-gray-800 dark:text-gray-200">
        404
      </p>
      <p className="text-md">Page not Found!</p>
      <button
        onClick={handleBack}
        className="mt-1 cursor-pointer rounded bg-gray-800 px-1.5 py-1 text-gray-200 transition-all hover:scale-105 dark:bg-blue-400/20"
      >
        Back
      </button>
    </div>
  );
}

export default NotFound;
