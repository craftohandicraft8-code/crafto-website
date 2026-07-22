import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <section className="bg-black min-h-screen pt-32 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-white text-center">
          ❤️ My Wishlist
        </h1>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Save your favourite handmade products
        </p>

        {wishlist.length === 0 ? (

          <div className="text-center py-24">

            <div className="text-7xl">💔</div>

            <h2 className="text-3xl font-bold text-white mt-6">
              Your Wishlist is Empty
            </h2>

            <p className="text-gray-400 mt-4">
              Add products to your wishlist.
            </p>

          </div>

        ) : (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {wishlist.map((item) => (

              <div
                key={item.id}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500 transition duration-300 hover:-translate-y-2"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">

                  <span className="text-green-400 text-sm">
                    {item.category}
                  </span>

                  <h2 className="text-white text-2xl font-bold mt-2">
                    {item.name}
                  </h2>

                  <p className="text-gray-400 mt-3 line-clamp-2">
                    {item.description}
                  </p>

                  <h3 className="text-3xl font-bold text-green-400 mt-5">
                    ₹{item.price}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 mt-6">

                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-500 hover:bg-green-600 py-3 rounded-xl font-bold"
                    >
                      🛒 Add
                    </button>

                    <button
                      onClick={() => toggleWishlist(item)}
                      className="bg-red-600 hover:bg-red-700 py-3 rounded-xl font-bold text-white"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default Wishlist;