import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    image: "",
    stock: 1,
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "products"), {
        title: product.title,
        category: product.category.toLowerCase(),
        description: product.description,
        price: Number(product.price),
        image: product.image,
        stock: Number(product.stock),
      });

      alert("✅ Product Added Successfully");

      setProduct({
        title: "",
        category: "",
        description: "",
        price: "",
        image: "",
        stock: 1,
      });

    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white pt-28 pb-20">

      <div className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-2xl">

        <h1 className="text-4xl font-bold mb-8">
          Add Product
        </h1>

        <form onSubmit={addProduct} className="space-y-5">

          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={product.title}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-zinc-800"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="home decor / planters / stationery"
            value={product.category}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-zinc-800"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-zinc-800"
            rows="4"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-zinc-800"
            required
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-zinc-800"
          />

          <input
            type="text"
            name="image"
            placeholder="/products/product.jpg"
            value={product.image}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-zinc-800"
            required
          />

          <button className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold text-xl">
            Add Product
          </button>

        </form>

      </div>

    </section>
  );
}

export default AddProduct;