function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[99999]">

      <div className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

      <h1 className="text-4xl font-bold text-green-400 mt-8">
        Crafto
      </h1>

      <p className="text-gray-400 mt-3">
        Loading Amazing Handmade Products...
      </p>

    </div>
  );
}

export default Loader;