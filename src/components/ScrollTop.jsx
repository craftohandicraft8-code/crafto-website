import { useEffect, useState } from "react";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white text-2xl shadow-lg z-50"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollTop;
