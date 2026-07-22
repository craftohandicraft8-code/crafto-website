import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Signup() {
  const { signup } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password);

      alert("Account Created ✅");

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
          Signup
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
          Signup
        </button>

        <p className="text-center mt-5 text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-400"
          >
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Signup;