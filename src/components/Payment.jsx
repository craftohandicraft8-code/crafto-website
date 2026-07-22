import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/config";

import { CartContext } from "../context/CartContext";

import qr from "../assets/qr.png";


function Payment() {


  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const navigate = useNavigate();


  const [method, setMethod] = useState("upi");




  const placeOrder = async () => {


    try {


      const orderData = {


        customerName:
          localStorage.getItem("customerName"),


        phone:
          localStorage.getItem("customerPhone"),


        email:
          localStorage.getItem("customerEmail"),


        address:
          localStorage.getItem("customerAddress"),



        products: cart.map((item)=>({

          id: item.id,

          title: item.title,

          price: item.price,

          quantity: item.quantity,

        })),



        totalAmount: totalPrice,



        paymentMethod: method,



        paymentStatus:
          method === "cod"
            ? "Cash On Delivery"
            : "Pending Verification",



        orderStatus: "New",



        createdAt: serverTimestamp(),


      };





      await addDoc(

        collection(db,"orders"),

        orderData

      );





      alert("Order Placed Successfully 🎉");



      clearCart();



      navigate("/success");



    }

    catch(error){


      console.log(
        "Order Error:",
        error
      );


      alert("Order Failed");


    }


  };







  return (

    <section className="bg-black min-h-screen pt-32 pb-20 px-6">


      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">






        {/* PAYMENT METHOD */}


        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">


          <h1 className="text-4xl font-black text-white mb-8">

            Payment Method

          </h1>




          <div className="space-y-4">



            <label className="flex gap-3 items-center bg-zinc-900 p-5 rounded-2xl text-white cursor-pointer">


              <input

                type="radio"

                checked={method==="upi"}

                onChange={()=>setMethod("upi")}

              />


              UPI Payment


            </label>






            <label className="flex gap-3 items-center bg-zinc-900 p-5 rounded-2xl text-white cursor-pointer">


              <input

                type="radio"

                checked={method==="card"}

                onChange={()=>setMethod("card")}

              />


              Debit / Credit Card


            </label>







            <label className="flex gap-3 items-center bg-zinc-900 p-5 rounded-2xl text-white cursor-pointer">


              <input

                type="radio"

                checked={method==="cod"}

                onChange={()=>setMethod("cod")}

              />


              Cash On Delivery


            </label>



          </div>








          {/* QR */}



          {method==="upi" && (


            <div className="mt-8 text-center bg-zinc-900 rounded-3xl p-6">


              <img

                src={qr}

                alt="QR"

                className="w-60 mx-auto rounded-xl"

              />



              <h3 className="text-white text-xl font-bold mt-5">

                Scan & Pay

              </h3>



              <p className="text-gray-400">

                Pay using any UPI App

              </p>



              <p className="text-green-400 font-bold mt-3">

                Amount ₹{totalPrice}

              </p>



            </div>


          )}








          {/* CARD */}



          {method==="card" && (


            <div className="mt-8 space-y-4">


              <input

                placeholder="Card Number"

                className="w-full bg-zinc-900 text-white p-4 rounded-xl"

              />


              <input

                placeholder="Card Holder Name"

                className="w-full bg-zinc-900 text-white p-4 rounded-xl"

              />



              <div className="grid grid-cols-2 gap-4">


                <input

                  placeholder="MM/YY"

                  className="bg-zinc-900 text-white p-4 rounded-xl"

                />



                <input

                  placeholder="CVV"

                  className="bg-zinc-900 text-white p-4 rounded-xl"

                />


              </div>


            </div>


          )}







          {/* COD */}



          {method==="cod" && (


            <div className="mt-8 bg-green-500/10 border border-green-500/20 p-6 rounded-3xl">


              <h2 className="text-white text-2xl font-bold">

                Cash On Delivery 📦

              </h2>


              <p className="text-gray-300 mt-2">

                Pay after receiving your product.

              </p>


            </div>


          )}



        </div>









        {/* ORDER SUMMARY */}





        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">



          <h2 className="text-3xl font-black text-white mb-8">

            Your Order

          </h2>





          {cart.map((item)=>(


            <div

              key={item.id}

              className="flex justify-between bg-zinc-900 rounded-2xl p-4 mb-4"

            >


              <div>


                <h3 className="text-white font-bold">

                  {item.title}

                </h3>


                <p className="text-gray-400">

                  Qty: {item.quantity}

                </p>


              </div>



              <p className="text-green-400 font-bold">

                ₹{item.price * item.quantity}

              </p>



            </div>



          ))}






          <div className="flex justify-between mt-8">


            <span className="text-white text-xl">

              Total

            </span>



            <span className="text-green-400 text-4xl font-black">

              ₹{totalPrice}

            </span>


          </div>






          <button

            onClick={placeOrder}

            className="w-full mt-10 py-5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-bold"

          >

            Place Order ✅

          </button>



        </div>





      </div>


    </section>

  );

}


export default Payment;