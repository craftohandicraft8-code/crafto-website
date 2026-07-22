import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import ProductCard from "./ProductCard";
import Categories from "./Categories";

import { SearchContext } from "../context/SearchContext";
import { CategoryContext } from "../context/CategoryContext";

import { db } from "../firebase/config";

function Products() {
  const { search } = useContext(SearchContext);
  const { category } = useContext(CategoryContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(data);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      product.category?.toLowerCase().trim() ===
        category.toLowerCase().trim();

    return matchSearch && matchCategory;
  });

  return (
    <section
      id="products"
      className="relative bg-black py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-2 rounded-full font-semibold">

            Premium Collection

          </span>

          <h2 className="text-5xl lg:text-6xl font-black text-white mt-8">

            Our Handmade Products

          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-8">

            Every Crafto product is handcrafted using recycled paper,
            combining sustainability, creativity and premium craftsmanship.

          </p>

          <div className="mt-8">

            <span className="bg-zinc-900 border border-green-500/20 text-green-400 px-6 py-3 rounded-full font-bold">

              {filteredProducts.length} Products Available

            </span>

          </div>

        </div>

        {/* Categories */}

        <div className="mt-16">
          <Categories />
        </div>

        {/* Loading */}

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">

            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (

              <div
                key={item}
                className="h-[470px] rounded-3xl bg-zinc-900 animate-pulse"
              />

            ))}

          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-32">

            <h2 className="text-4xl font-bold text-white">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Try another search or category.
            </p>

          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default Products;