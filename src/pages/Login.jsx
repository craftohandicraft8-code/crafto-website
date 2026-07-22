import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);

      alert("Login Successful ✅");

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-6">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-center mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-800 mb-4 outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-800 mb-6 outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold"
        >
          Login
        </button>

        <p className="text-center mt-5 text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-green-400"
          >
            Signup
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Login;