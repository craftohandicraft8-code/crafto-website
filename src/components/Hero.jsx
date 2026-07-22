import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-green-950" />

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[180px] rounded-full" />


      <div className="relative max-w-7xl mx-auto px-8 pt-36 pb-24 grid lg:grid-cols-2 gap-20 items-center">


        {/* LEFT */}


        <div>

          <span className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 px-6 py-3 rounded-full font-semibold">

            🌱 Eco Friendly • Handmade • Sustainable

          </span>



          <h1 className="mt-8 text-2xl md:text-3xl xl:text-4xl font-black leading-tight text-white">


            Premium


            <br />


            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 bg-clip-text text-transparent">

              Paper Crafts

            </span>


          </h1>




          <p className="mt-8 text-gray-300 text-xl leading-9 max-w-2xl">


            Discover handcrafted home decor made from recycled paper.
            Every product is carefully designed to combine sustainability,
            elegance and creativity.


          </p>




          <div className="flex flex-wrap gap-5 mt-12">


            <a
              href="#products"
              className="px-9 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-green-500/30"
            >

              Shop Collection

            </a>



            <Link
              to="/contact"
              className="px-9 py-4 rounded-2xl border border-green-500 text-green-400 font-bold text-lg hover:bg-green-500 hover:text-white transition duration-300"
            >

              Contact Us

            </Link>


          </div>





          <div className="grid grid-cols-3 gap-8 mt-16">


            <div>

              <h2 className="text-4xl font-black text-green-400">
                50+
              </h2>

              <p className="text-gray-400 mt-2">
                Handmade Products
              </p>

            </div>



            <div>

              <h2 className="text-4xl font-black text-green-400">
                100%
              </h2>

              <p className="text-gray-400 mt-2">
                Eco Friendly
              </p>

            </div>



            <div>

              <h2 className="text-4xl font-black text-green-400">
                4.9★
              </h2>

              <p className="text-gray-400 mt-2">
                Customer Rating
              </p>

            </div>


          </div>


        </div>





        {/* RIGHT LOGO */}



        <div className="relative flex justify-center">


          <div className="absolute w-[430px] h-[430px] bg-green-500/20 blur-[120px] rounded-full" />



          <img
            src={logo}
            alt="Crafto"
            className="relative w-[350px] lg:w-[450px] drop-shadow-[0_0_70px_rgba(34,197,94,.45)]"
          />




          <div className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">


            <h3 className="text-white text-xl font-bold">

              Premium Quality

            </h3>


            <p className="text-gray-300 mt-2">

              Handmade with Love ❤️

            </p>


          </div>


        </div>



      </div>



      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">


        <div className="w-8 h-14 border-2 border-green-500 rounded-full flex justify-center">


          <div className="w-2 h-2 bg-green-400 rounded-full mt-3 animate-bounce" />

        </div>


      </div>



    </section>
  );
}

export default Hero;