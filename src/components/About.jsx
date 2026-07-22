function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 py-24 px-8"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <h4 className="text-green-400 text-xl font-bold mb-4">
            ABOUT US
          </h4>

          <h2 className="text-5xl font-bold text-white leading-tight">
            Transforming Waste
            <br />
            Into Beautiful
            <span className="text-green-400">
              {" "}Handicrafts
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-8">

            Crafto is an eco-friendly startup that creates
            premium handmade products from recycled paper.
            Every bowl, planter, desk organizer and decorative
            item is carefully handcrafted to reduce paper waste
            while promoting sustainable living.

          </p>

          <button
            className="mt-10 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-xl font-bold transition"
          >
            Explore Products
          </button>

        </div>

        <div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-zinc-900 rounded-2xl p-8 text-center">

              <h2 className="text-5xl font-bold text-green-400">
                ♻️
              </h2>

              <h3 className="text-2xl font-bold mt-4">
                Recycled
              </h3>

              <p className="text-gray-400 mt-3">
                100% Waste Paper
              </p>

            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 text-center">

              <h2 className="text-5xl font-bold text-green-400">
                🌱
              </h2>

              <h3 className="text-2xl font-bold mt-4">
                Eco Friendly
              </h3>

              <p className="text-gray-400 mt-3">
                Sustainable Products
              </p>

            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 text-center">

              <h2 className="text-5xl font-bold text-green-400">
                🎨
              </h2>

              <h3 className="text-2xl font-bold mt-4">
                Handmade
              </h3>

              <p className="text-gray-400 mt-3">
                Crafted with Care
              </p>

            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 text-center">

              <h2 className="text-5xl font-bold text-green-400">
                ❤️
              </h2>

              <h3 className="text-2xl font-bold mt-4">
                Quality
              </h3>

              <p className="text-gray-400 mt-3">
                Premium Finish
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;