import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase/config";

function ProductList() {

  const [products, setProducts] = useState([]);

  const loadProducts = async () => {

    const snapshot = await getDocs(collection(db, "products"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProducts(data);

  };

  useEffect(() => {
    loadProducts();
  }, []);

  const removeProduct = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    await deleteDoc(doc(db, "products", id));

    loadProducts();

  };

  return (

    <section className="min-h-screen bg-black text-white pt-28 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          All Products
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold">
                  {product.name}
                </h2>

                <p className="text-green-400 mt-2">
                  {product.category}
                </p>

                <p className="text-gray-400 mt-4">
                  {product.description}
                </p>

                <h3 className="text-3xl text-green-400 mt-5">
                  ₹{product.price}
                </h3>

                <button
                  onClick={() => removeProduct(product.id)}
                  className="w-full mt-6 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-bold"
                >
                  Delete Product
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default ProductList;