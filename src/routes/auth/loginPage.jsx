import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { loginUser } from "../../api/auth";
import useInput from "../../hooks/useInput";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const userNameInput = useInput();
  const passInput = useInput();

  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    const username = userNameInput.value;
    const password = passInput.value;

    try {
      const data = await loginUser(username, password);

      // توجه: اینجا هم توکن هم user رو به Context میفرستیم
      login(data.token, data.user);

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-blue-100">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <form onSubmit={submitHandler} className="flex min-w-60 flex-col gap-2">
          <h2 className="text-center text-lg font-bold text-gray-800">
            Admin Panel
          </h2>

          <label className="mt-2 text-sm text-gray-800" htmlFor="username">
            Username:
          </label>
          <input
            placeholder="donero"
            className="rounded-lg bg-gray-50 p-2 text-gray-600 outline-0 placeholder:text-gray-400"
            {...userNameInput}
            id="username"
            name="username"
            type="text"
          />

          <label className="mt-2 text-sm text-gray-800" htmlFor="password">
            Password:
          </label>
          <input
            placeholder="ewedon"
            className="rounded-lg bg-gray-50 p-2 text-gray-600 outline-0 placeholder:text-gray-400"
            {...passInput}
            id="password"
            name="password"
            type="password"
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="mt-2 w-full cursor-pointer rounded-lg bg-blue-600 p-2 text-white transition-all hover:bg-blue-700 active:scale-95"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
