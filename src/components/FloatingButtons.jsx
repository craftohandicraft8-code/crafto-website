function FloatingButtons() {
  const whatsapp =
    "https://wa.me/919999230726?text=Hello%20Crafto";

  return (
    <>
      {/* WhatsApp */}

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition z-[999]"
      >
        💬
      </a>

      {/* Scroll Top */}

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 text-black text-3xl shadow-2xl hover:scale-110 transition z-[999]"
      >
        ↑
      </button>
    </>
  );
}

export default FloatingButtons;