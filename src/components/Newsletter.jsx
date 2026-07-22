function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 py-24">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold text-black">
          Join Crafto Community
        </h1>

        <p className="text-black text-xl mt-6">
          Subscribe to receive updates, offers and new handmade products.
        </p>


        <form
          action= "https://formspree.io/f/mvzebqpp"
          method="POST"
          className="flex flex-col md:flex-row gap-4 mt-10"
        >

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-5 rounded-xl outline-none text-black bg-white"
          />


          <button
            type="submit"
            className="bg-black hover:bg-zinc-900 text-white px-10 py-4 rounded-xl font-bold transition"
          >
            Subscribe
          </button>


        </form>


      </div>

    </section>
  );
}

export default Newsletter;