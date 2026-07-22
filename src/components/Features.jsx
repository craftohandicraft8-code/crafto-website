function Features() {
  const features = [
    {
      icon: "🌱",
      title: "Eco Friendly",
      text: "All our products are made from recycled paper and sustainable materials.",
    },
    {
      icon: "🎨",
      title: "Handmade",
      text: "Every product is handcrafted with care and creativity.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Quick and secure delivery across India.",
    },
    {
      icon: "💚",
      title: "Quality",
      text: "Premium quality products designed to last.",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-center text-5xl font-bold">
          Why Customers Love Crafto
        </h1>

        <p className="text-center text-gray-400 mt-5">
          We believe in sustainability, creativity and quality.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item) => (

            <div
              key={item.title}
              className="bg-zinc-900 rounded-3xl p-8 text-center hover:-translate-y-3 hover:border-green-500 border border-zinc-800 transition-all duration-500"
            >

              <div className="text-6xl">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold mt-6">
                {item.title}
              </h2>

              <p className="text-gray-400 mt-4 leading-7">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;