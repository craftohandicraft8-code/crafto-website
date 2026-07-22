import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

function EditProduct() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {

    const loadProduct = async () => {

      const ref = doc(db, "products", id);

      const snap = await getDoc(ref);

      if (snap.exists()) {

        setProduct(snap.data());

      }

    };

    loadProduct();

  }, [id]);

  const handleChange = (e) => {

    setProduct({

      ...product,

      [e.target.name]: e.target.value,

    });

  };

  const saveProduct = async (e) => {

    e.preventDefault();

    await updateDoc(doc(db, "products", id), {

      ...product,

      price: Number(product.price),

    });

    alert("Product Updated Successfully");

    navigate("/admin/products");

  };

  return (

    <section className="min-h-screen bg-black text-white pt-28 pb-20">

      <div className="max-w-2xl mx-auto bg-zinc-900 rounded-2xl p-8">

        <h1 className="text-4xl font-bold mb-8">

          Edit Product

        </h1>

        <form
          onSubmit={saveProduct}
          className="space-y-5"
        >

          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-zinc-800"
          />

          <input
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-zinc-800"
          />

          <textarea
            rows="4"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-zinc-800"
          />

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-zinc-800"
          />

          <input
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-zinc-800"
          />

          <button
            className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold text-xl"
          >
            Save Changes
          </button>

        </form>

      </div>

    </section>

  );

}

export default EditProduct;