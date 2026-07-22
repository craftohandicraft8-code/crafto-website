import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductModal({ product, close }) {
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  return (
    <div
      onClick={close}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-zinc-900 rounded-3xl overflow-hidden max-w-6xl w-full grid lg:grid-cols-2 border border-zinc-700"
      >
        {/* Image */}

        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full min-h-[500px] object-cover"
          />

          <span className="absolute top-6 left-6 bg-green-500 text-black px-4 py-2 rounded-full font-bold">
            {product.category}
          </span>

          <span className="absolute bottom-6 left-6 bg-black/70 px-4 py-2 rounded-full text-yellow-400">
            ⭐⭐⭐⭐⭐ 5.0
          </span>
        </div>

        {/* Content */}

        <div className="p-10 flex flex-col justify-between">

          <div>

            <h1 className="text-5xl font-bold text-white">
              {product.title}
            </h1>

            <h2 className="text-4xl text-green-400 font-bold mt-6">
              ₹{product.price}
            </h2>

            <p className="text-gray-300 leading-8 mt-8">
              {product.description}
            </p>

            <div className="mt-8">

              <p className="text-white">
                <span className="text-green-400 font-bold">
                  Stock :
                </span>{" "}
                {product.stock}
              </p>

              <p className="text-white mt-3">
                <span className="text-green-400 font-bold">
                  Category :
                </span>{" "}
                {product.category}
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 hover:bg-green-600 py-4 rounded-xl text-white font-bold text-lg"
            >
              🛒 Add To Cart
            </button>

            <button
              onClick={close}
              className="bg-zinc-800 hover:bg-zinc-700 py-4 rounded-xl text-white font-bold text-lg"
            >
              Close
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductModal;