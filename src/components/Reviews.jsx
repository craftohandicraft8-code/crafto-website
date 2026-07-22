function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      city: "Delhi",
      review:
        "Amazing quality and beautiful handmade products. Highly recommended!",
    },
    {
      name: "Priya Verma",
      city: "Delhi",
      review:
        "I love the eco-friendly concept. The planter looks fantastic on my desk.",
    },
    {
      name: "Aman Singh",
      city: "Delhi",
      review:
        "Excellent texture and affordable price. Will definitely buy again.",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          What Our Customers Say
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          Trusted by people who love sustainable products.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-8 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-yellow-400 text-2xl mb-5">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300 leading-7">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="text-xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-green-400">
                  {item.city}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Reviews;