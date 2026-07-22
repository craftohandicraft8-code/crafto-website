function Stats() {
  return (
    <section className="bg-green-600 py-20">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          <div>
            <h1 className="text-5xl font-bold text-white">
              30+
            </h1>

            <p className="text-green-100 mt-3 text-xl">
              Products Made
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-white">
              20kg
            </h1>

            <p className="text-green-100 mt-3 text-xl">
              Paper Recycled
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-white">
              10+
            </h1>

            <p className="text-green-100 mt-3 text-xl">
              Happy Customers
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-white">
              99%
            </h1>

            <p className="text-green-100 mt-3 text-xl">
              Eco Friendly
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;