import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

function Categories() {
  const { category, setCategory } = useContext(CategoryContext);

  const categories = [
    "All",
    "home decor",
  ];

  return (
    <section className="py-8">
      <div className="flex flex-wrap justify-center gap-4">

        {categories.map((item) => (

          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-6 py-3 rounded-full font-semibold transition duration-300 border ${
              category === item
                ? "bg-green-500 text-black border-green-500 shadow-lg shadow-green-500/30"
                : "bg-zinc-900 text-white border-zinc-700 hover:bg-green-500 hover:text-black hover:border-green-500"
            }`}
          >
            {item === "home decor" ? "Home Decor" : item}
          </button>

        ))}

      </div>
    </section>
  );
}

export default Categories;