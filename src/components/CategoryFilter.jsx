function CategoryFilter({ category, setCategory }) {
  const categories = ["All", "Cup", "Decor"];

  return (
    <div className="flex justify-center gap-4 py-6 flex-wrap">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            category === item
              ? "bg-green-500 text-white"
              : "bg-zinc-900 text-white hover:bg-zinc-800"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;