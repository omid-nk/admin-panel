import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate(-1, {
      replace: true,
    });
  };

  return (
    <div>
      <h2>Page NotFound Error 404</h2>
      <button
        className="bg-black rounded text-white px-2 py-1"
        onClick={goToHome}
      >
        Back To Home
      </button>
    </div>
  );
}

export default NotFound;
