import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

import logo from "../assets/logo.png";

function Navbar() {
  const { cart, setCartOpen } = useContext(CartContext);
  const auth = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  if (!auth) {
    return (
      <div className="bg-red-600 text-white p-5">
        AuthContext Not Found
      </div>
    );
  }

  const { user, logout } = auth;

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl">

      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Crafto"
            className="w-14 h-14 rounded-full border-2 border-green-500 shadow-lg shadow-green-500/30"
          />

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Crafto
          </h1>
        </Link>

        {/* Desktop */}

        <div className="hidden lg:flex items-center gap-8">

          <Link
            to="/wishlist"
            className="text-gray-300 hover:text-green-400 transition font-medium"
          >
            ❤️ Wishlist
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="px-6 py-2 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transition shadow-lg shadow-green-500/30"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className="text-green-400 font-medium max-w-xs truncate">
                {user.email}
              </span>

              <button
                onClick={logout}
                className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}

          <button
            onClick={() => setCartOpen(true)}
            className="relative px-5 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:scale-105 transition shadow-xl"
          >
            🛒

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-zinc-900 border-t border-zinc-800">

          <div className="flex flex-col gap-5 p-6">

            <Link
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300"
            >
              ❤️ Wishlist
            </Link>

            {!user ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="bg-blue-600 rounded-xl py-3 text-center"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="bg-green-600 rounded-xl py-3 text-center"
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <span className="text-green-400 break-all">
                  {user.email}
                </span>

                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="bg-red-600 rounded-xl py-3"
                >
                  Logout
                </button>
              </>
            )}

            <button
              onClick={() => {
                setCartOpen(true);
                setMenuOpen(false);
              }}
              className="bg-yellow-500 text-black rounded-xl py-3 font-bold"
            >
              🛒 Cart ({totalItems})
            </button>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;