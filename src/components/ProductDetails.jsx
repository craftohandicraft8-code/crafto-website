import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../firebase/config";
import { CartContext } from "../context/CartContext";


function ProductDetails() {

  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  const [quantity, setQuantity] = useState(1);



  useEffect(() => {

    const loadProduct = async () => {

      try {

        const docRef = doc(db, "products", id);

        const snap = await getDoc(docRef);


        if (snap.exists()) {

          setProduct({
            id: snap.id,
            ...snap.data(),
          });

        }


      } catch(error) {

        console.log(error);

      }

    };


    loadProduct();

  }, [id]);




  if (!product) {

    return (

      <div className="bg-black min-h-screen flex items-center justify-center text-green-500 text-4xl font-bold">

        Loading Product...

      </div>

    );

  }




  return (

    <section className="bg-black min-h-screen py-28 px-6">


      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">



        {/* IMAGE */}


        <div className="relative">


          <div className="absolute inset-0 bg-green-500/20 blur-[120px] rounded-full" />


          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">


            <img
              src={product.image}
              alt={product.title}
              className="w-full rounded-3xl object-cover"
            />


          </div>


        </div>






        {/* DETAILS */}



        <div className="text-white">



          <span className="inline-block bg-green-500/20 text-green-400 px-5 py-2 rounded-full">

            {product.category}

          </span>




          <h1 className="text-4xl md:text-6xl font-black mt-6">

            {product.title}

          </h1>




          <p className="text-gray-400 text-lg leading-8 mt-6">

            {product.description}

          </p>





          {/* PRICE */}



          <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6">


            <p className="text-gray-400">
              Price
            </p>


            <h2 className="text-5xl font-black text-green-400">

              ₹{product.price}

            </h2>


          </div>






          {/* QUANTITY */}



          <div className="flex items-center gap-5 mt-8">


            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="w-12 h-12 rounded-xl bg-white/10 text-2xl"
            >

              -

            </button>



            <span className="text-2xl font-bold">

              {quantity}

            </span>



            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-12 h-12 rounded-xl bg-white/10 text-2xl"
            >

              +

            </button>


          </div>






          {/* ADD CART */}



          <button

            onClick={() => addToCart({
              ...product,
              quantity
            })}

            className="mt-10 w-full py-5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-bold hover:scale-105 transition"

          >

            Add To Cart 🛒

          </button>








          {/* IMPACT */}



          <div className="mt-10 bg-green-500/10 border border-green-500/20 rounded-3xl p-6">


            <h3 className="text-2xl font-bold text-green-400">

              🌱 Sustainability Impact

            </h3>



            <div className="grid grid-cols-3 gap-4 mt-6 text-center">


              <div>

                <h4 className="text-xl font-bold text-white">
                  ♻️ 200g
                </h4>

                <p className="text-gray-400 text-sm">
                  Paper Recycled
                </p>

              </div>



              <div>

                <h4 className="text-xl font-bold text-white">
                  🌳 0.2
                </h4>

                <p className="text-gray-400 text-sm">
                  Tree Saved
                </p>

              </div>




              <div>

                <h4 className="text-xl font-bold text-white">
                  🌍 100%
                </h4>

                <p className="text-gray-400 text-sm">
                  Eco Friendly
                </p>

              </div>


            </div>


          </div>



        </div>


      </div>


    </section>

  );

}


export default ProductDetails;