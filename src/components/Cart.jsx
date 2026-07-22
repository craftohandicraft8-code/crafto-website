import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext);

  return (
    <>
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
          onClick={() => setCartOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-zinc-950 border-l border-zinc-800 z-[9999] shadow-2xl transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b border-zinc-800">

          <h2 className="text-3xl font-bold text-white">
            🛒 Shopping Cart
          </h2>

          <button
            onClick={() => setCartOpen(false)}
            className="text-4xl text-white hover:text-red-500 transition"
          >
            ✕
          </button>

        </div>

        {/* Products */}

        <div className="p-5 h-[68vh] overflow-y-auto">

          {cart.length === 0 ? (

            <div className="text-center mt-20">

              <h2 className="text-3xl">
                🛒
              </h2>

              <p className="text-gray-400 mt-5">
                Your Cart is Empty
              </p>

            </div>

          ) : (

            cart.map((item) => (

              <div
                key={item.id}
                className="bg-zinc-900 rounded-2xl overflow-hidden mb-6 border border-zinc-800"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-44 object-cover"
                />

                <div className="p-5">

                  <h3 className="text-2xl font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-green-400 text-xl mt-2">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center mt-5">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-red-500 hover:bg-red-600 w-10 h-10 rounded-lg text-white text-xl"
                    >
                      −
                    </button>

                    <span className="mx-5 text-xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-green-500 hover:bg-green-600 w-10 h-10 rounded-lg text-white text-xl"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

        {/* Footer */}

        <div className="absolute bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 p-6">

          <div className="flex justify-between text-2xl font-bold">

            <span>Total</span>

            <span className="text-green-400">
              ₹{totalPrice}
            </span>

          </div>

          <Link to="/checkout">

            <button
              onClick={() => setCartOpen(false)}
              className="w-full mt-6 bg-green-500 hover:bg-green-600 py-4 rounded-xl text-xl font-bold"
            >
              Proceed To Checkout
            </button>

          </Link>

        </div>

      </div>
    </>
  );
}

export default Cart;