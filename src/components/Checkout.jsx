import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {

  const { cart, totalPrice } = useContext(CartContext);

  const navigate = useNavigate();


  const [customer, setCustomer] = useState({

    name: "",
    phone: "",
    email: "",
    address: "",

  });



  const handleChange = (e) => {

    setCustomer({

      ...customer,
      [e.target.name]: e.target.value,

    });

  };



  const continuePayment = () => {


    if (
      !customer.name ||
      !customer.phone ||
      !customer.email ||
      !customer.address
    ) {

      alert("Please fill all details.");

      return;

    }



    if (cart.length === 0) {

      alert("Your cart is empty.");

      return;

    }



    localStorage.setItem("customerName", customer.name);
    localStorage.setItem("customerPhone", customer.phone);
    localStorage.setItem("customerEmail", customer.email);
    localStorage.setItem("customerAddress", customer.address);


    navigate("/payment");


  };




  return (

    <section className="bg-black min-h-screen py-28 px-6">


      <div className="max-w-6xl mx-auto">


        <h1 className="text-5xl font-black text-white mb-12 text-center">

          Complete Your Order 🛒

        </h1>




        <div className="grid lg:grid-cols-2 gap-10">





          {/* CUSTOMER DETAILS */}


          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">


            <h2 className="text-3xl font-bold text-white mb-8">

              Customer Details

            </h2>




            <input

              type="text"

              name="name"

              placeholder="Full Name"

              onChange={handleChange}

              className="w-full mb-5 p-4 rounded-2xl bg-zinc-900 border border-white/10 text-white outline-none focus:border-green-500"

            />



            <input

              type="text"

              name="phone"

              placeholder="Phone Number"

              onChange={handleChange}

              className="w-full mb-5 p-4 rounded-2xl bg-zinc-900 border border-white/10 text-white outline-none focus:border-green-500"

            />



            <input

              type="email"

              name="email"

              placeholder="Email Address"

              onChange={handleChange}

              className="w-full mb-5 p-4 rounded-2xl bg-zinc-900 border border-white/10 text-white outline-none focus:border-green-500"

            />




            <textarea

              name="address"

              placeholder="Delivery Address"

              rows="5"

              onChange={handleChange}

              className="w-full p-4 rounded-2xl bg-zinc-900 border border-white/10 text-white outline-none focus:border-green-500"

            />



          </div>







          {/* ORDER SUMMARY */}



          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">


            <h2 className="text-3xl font-bold text-white mb-8">

              Order Summary

            </h2>




            <div className="space-y-5">


              {cart.map((item)=>(


                <div

                  key={item.id}

                  className="flex items-center justify-between bg-zinc-900 rounded-2xl p-4"

                >



                  <div className="flex items-center gap-4">


                    <img

                      src={item.image}

                      alt={item.title}

                      className="w-16 h-16 rounded-xl object-cover"

                    />



                    <div>


                      <h3 className="text-white font-bold">

                        {item.title}

                      </h3>


                      <p className="text-gray-400">

                        Qty : {item.quantity}

                      </p>


                    </div>


                  </div>





                  <p className="text-green-400 font-bold">

                    ₹{item.price * item.quantity}

                  </p>



                </div>



              ))}



            </div>





            <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-3xl p-6">


              <div className="flex justify-between items-center">


                <span className="text-xl text-white">

                  Total

                </span>



                <span className="text-4xl font-black text-green-400">

                  ₹{totalPrice}

                </span>


              </div>


            </div>






            <button

              onClick={continuePayment}

              className="w-full mt-8 py-5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-bold hover:scale-105 transition shadow-xl shadow-green-500/30"

            >

              Continue To Payment →

            </button>



          </div>



        </div>


      </div>



    </section>

  );

}


export default Checkout;