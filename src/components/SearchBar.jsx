import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchBar() {

  const { search, setSearch } = useContext(SearchContext);

  return (

    <section className="bg-black py-14">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">

          Find Your Favourite Craft

        </h2>

        <div className="max-w-3xl mx-auto">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Search Handmade Products..."
            className="
            w-full
            p-5
            rounded-2xl
            bg-zinc-900
            border
            border-zinc-700
            text-white
            text-xl
            outline-none
            focus:border-green-500
            focus:ring-2
            focus:ring-green-500
            transition-all
            duration-300
            "
          />

        </div>

      </div>

    </section>

  );

}

export default SearchBar;