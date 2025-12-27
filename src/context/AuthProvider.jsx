import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const storedToken = localStorage.getItem("token");

  let parsedUser = null;
  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      parsedUser = JSON.parse(storedUser);
    }
  } catch (err) {
    console.warn("Error parsing user from localStorage:", err);
    parsedUser = null;
  }

  const [token, setToken] = useState(storedToken);
  const [user, setUser] = useState(parsedUser);
  const [isAuth, setIsAuth] = useState(!!storedToken);

  const login = (newToken, userData) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ token, user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
