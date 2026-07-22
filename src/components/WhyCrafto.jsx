function WhyCrafto() {
  const features = [
    {
      icon: "♻️",
      title: "100% Recycled",
      desc: "Every product is handmade using recycled paper, helping reduce waste."
    },
    {
      icon: "🌱",
      title: "Eco-Friendly",
      desc: "Our products promote sustainable living and environmental awareness."
    },
    {
      icon: "🎨",
      title: "Handcrafted",
      desc: "Each item is carefully crafted with creativity and attention to detail."
    },
    {
      icon: "💰",
      title: "Affordable",
      desc: "Premium handmade products at prices everyone can afford."
    },
    {
      icon: "❤️",
      title: "Made with Love",
      desc: "Every product is created with passion by our team."
    },
    {
      icon: "🏆",
      title: "Quality Assured",
      desc: "Strong, durable and beautifully finished products."
    }
  ];

  return (
    <section className="bg-black py-24 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Why Choose
          <span className="text-green-400"> Crafto?</span>
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-16 text-lg">
          Sustainability meets creativity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-8 hover:-translate-y-3 hover:shadow-green-500/20 hover:shadow-xl transition duration-300"
            >

              <div className="text-6xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyCrafto;
