function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Contact <span className="text-green-400">Crafto</span>
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          We'd love to hear from you.
        </p>


        <div className="grid lg:grid-cols-2 gap-12">


          {/* Left */}

          <div className="bg-zinc-900 rounded-2xl p-10">

            <h3 className="text-3xl font-bold text-white mb-8">
              Get In Touch
            </h3>


            <div className="space-y-8">

              <div>
                <h4 className="text-green-400 font-bold text-xl">
                  📍 Address
                </h4>
                <p className="text-gray-400 mt-2">
                  Delhi, India
                </p>
              </div>


              <div>
                <h4 className="text-green-400 font-bold text-xl">
                  📞 Phone
                </h4>
                <p className="text-gray-400 mt-2">
                  +91 9999230726
                </p>
              </div>


              <div>
                <h4 className="text-green-400 font-bold text-xl">
                  📧 Email
                </h4>
                <p className="text-gray-400 mt-2">
                  craftoofficial@gmail.com
                </p>
              </div>


              <div>
                <h4 className="text-green-400 font-bold text-xl">
                  🌍 Instagram
                </h4>
                <p className="text-gray-400 mt-2">
                  @craftoofficial
                </p>
              </div>


            </div>

          </div>



          {/* Form */}

          <form
            action="https://formspree.io/f/xnjebvep"
            method="POST"
            className="bg-zinc-900 rounded-2xl p-10"
          >


            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-zinc-800 mb-5 text-white"
            />


            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-4 rounded-xl bg-zinc-800 mb-5 text-white"
            />


            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl bg-zinc-800 text-white"
            ></textarea>


            <button
              type="submit"
              className="w-full mt-6 bg-green-500 hover:bg-green-600 py-4 rounded-xl text-xl font-bold"
            >
              Send Message
            </button>


          </form>


        </div>


      </div>
    </section>
  );
}

export default Contact;