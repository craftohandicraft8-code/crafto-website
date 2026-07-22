import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Logo */}

        <div>

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="Crafto"
              className="w-14 h-14 rounded-full"
            />

            <h2 className="text-3xl font-bold">
              Crafto
            </h2>

          </div>

          <p className="text-gray-400 mt-5 leading-7">
            Handmade eco-friendly products created with love and sustainability.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Home</li>

            <li>Products</li>

            <li>About</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Contact
          </h3>

          <p className="text-gray-400">
            crafto.handicraft8@gmail.com
          </p>

          <p className="text-gray-400 mt-2">
            +91 9999230726
          </p>

          <p className="text-gray-400 mt-2">
            India
          </p>

        </div>

        {/* Team */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Team Crafto
          </h3>

          <p className="text-gray-400">
            CEO : Rakshit Bhardwaj
          </p>

          <p className="text-gray-400">
            COO : coming soon
          </p>

          <p className="text-gray-400">
            CMO : Satyam
          </p>

          <p className="text-gray-400">
            CFO : Ashutosh
          </p>

          <p className="text-gray-400">
            Product Design & HR :  coming soon
          </p>

        </div>

      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-gray-500">

        © 2026 Crafto. Made with ❤️ by Team Crafto.

      </div>

    </footer>
  );
}

export default Footer;