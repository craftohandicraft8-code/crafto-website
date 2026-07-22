import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <div className="group bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-green-500/40 hover:shadow-[0_20px_60px_rgba(34,197,94,.25)] flex flex-col">

      {/* Image */}

      <div className="relative overflow-hidden">

        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl text-2xl flex items-center justify-center hover:scale-110 transition"
        >
          {isWishlisted ? "❤️" : "🤍"}
        </button>

        <Link to={`/product/${product.id}`}>

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
          />

        </Link>

        <div className="absolute top-4 left-4">

          <span className="bg-green-500 text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">

            {product.category}

          </span>

        </div>

      </div>

      {/* Body */}

      <div className="flex flex-col flex-1 p-6">

        <Link to={`/product/${product.id}`}>

          <h2 className="text-2xl font-bold text-white group-hover:text-green-400 transition line-clamp-2">

            {product.title}

          </h2>

        </Link>

        <p className="text-gray-400 mt-4 leading-7 line-clamp-3 flex-1">

          {product.description}

        </p>

        {/* Bottom */}

        <div className="flex items-center justify-between mt-8">

          <div>

            <p className="text-sm text-gray-500">

              Starting From

            </p>

            <h3 className="text-3xl font-black text-green-400">

              ₹{product.price}

            </h3>

          </div>

          <button
            onClick={() => addToCart(product)}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:scale-105 transition duration-300 shadow-xl shadow-green-500/30"
          >
            Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;