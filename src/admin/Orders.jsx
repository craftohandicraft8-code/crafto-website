import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  doc,
  updateDoc
} from "firebase/firestore";

import { db } from "../firebase/config";


function Orders() {


  const [orders, setOrders] = useState([]);

  const [filter, setFilter] = useState("new");




  const fetchOrders = async () => {


    const snapshot = await getDocs(
      collection(db, "orders")
    );


    const data = snapshot.docs.map((doc)=>({

      id: doc.id,

      ...doc.data()

    }));


    setOrders(data);


  };





  useEffect(()=>{

    fetchOrders();

  },[]);







  const completeOrder = async(id)=>{


    try{


      const orderRef = doc(
        db,
        "orders",
        id
      );


      await updateDoc(
        orderRef,
        {
          orderStatus:"Completed"
        }
      );


      fetchOrders();


    }
    catch(error){

      console.log(error);

    }


  };







  const filteredOrders = orders.filter(order=>{


    if(filter==="new"){

      return order.orderStatus !== "Completed";

    }


    else{

      return order.orderStatus === "Completed";

    }


  });








  return (

    <section className="bg-black min-h-screen text-white pt-28 pb-20">


      <div className="max-w-7xl mx-auto px-6">



        <h1 className="text-5xl font-black mb-10">

          🛒 Orders

        </h1>






        {/* FILTER BUTTONS */}


        <div className="flex gap-5 mb-10">


          <button

            onClick={()=>setFilter("new")}

            className={`px-6 py-3 rounded-xl font-bold ${
              filter==="new"
              ?"bg-green-500"
              :"bg-zinc-800"
            }`}

          >

            New Orders

          </button>





          <button

            onClick={()=>setFilter("complete")}

            className={`px-6 py-3 rounded-xl font-bold ${
              filter==="complete"
              ?"bg-green-500"
              :"bg-zinc-800"
            }`}

          >

            Completed

          </button>



        </div>








        {
          filteredOrders.length===0 ? (

            <p className="text-gray-400 text-xl">

              No Orders Found

            </p>


          ) : (


            <div className="space-y-6">


              {
                filteredOrders.map((order)=>(


                  <div

                    key={order.id}

                    className="bg-zinc-900 rounded-3xl p-8 border border-white/10"

                  >




                    <div className="flex justify-between items-center">


                      <h2 className="text-3xl font-bold text-green-400">

                        {order.customerName}

                      </h2>



                      <span className="text-yellow-400">

                        {order.orderStatus}

                      </span>


                    </div>







                    <div className="mt-5 text-gray-300 space-y-2">


                      <p>
                        📞 {order.phone}
                      </p>


                      <p>
                        📧 {order.email}
                      </p>


                      <p>
                        📍 {order.address}
                      </p>


                    </div>







                    <div className="mt-6 border-t border-zinc-700 pt-5">


                      <h3 className="font-bold text-xl">

                        Products

                      </h3>



                      {
                        order.products?.map((item,index)=>(

                          <p 
                            key={index}
                            className="text-gray-400 mt-2"
                          >

                            {item.title} × {item.quantity}

                          </p>

                        ))
                      }



                    </div>








                    <div className="flex justify-between items-center mt-6">


                      <h2 className="text-3xl font-black text-green-400">

                        ₹{order.totalAmount}

                      </h2>



                      {
                        order.orderStatus !== "Completed" && (

                          <button

                            onClick={()=>completeOrder(order.id)}

                            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-bold"

                          >

                            ✅ Complete Order

                          </button>

                        )
                      }



                    </div>






                  </div>


                ))
              }



            </div>


          )
        }





      </div>


    </section>

  );

}


export default Orders;