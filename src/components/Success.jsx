import { Link } from "react-router-dom";

function Success() {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center px-6">

      <div className="bg-zinc-900 rounded-3xl p-12 text-center max-w-xl">

        <div className="text-7xl">
          🎉
        </div>

        <h1 className="text-5xl font-bold text-green-400 mt-6">
          Order Successful!
        </h1>

        <p className="text-gray-400 mt-6 text-lg leading-8">
          Thank you for choosing Crafto.
          <br />
          Your eco-friendly handmade products will be delivered soon.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-xl font-bold text-white"
        >
          Continue Shopping
        </Link>

      </div>

    </section>
  );
}

export default Success;