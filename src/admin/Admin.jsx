import { Link } from "react-router-dom";


function Admin(){


  return(


    <section className="min-h-screen bg-black text-white pt-28 pb-20">


      <div className="max-w-7xl mx-auto px-6">



        <h1 className="text-5xl font-black mb-12">

          Crafto Admin Panel

        </h1>





        <div className="grid md:grid-cols-4 gap-8">






          <Link

            to="/admin/add-product"

            className="bg-zinc-900 hover:bg-zinc-800 rounded-3xl p-8 transition"

          >

            <h2 className="text-3xl font-bold text-green-400">

              ➕ Add Product

            </h2>


            <p className="text-gray-400 mt-4">

              Add new handmade products.

            </p>


          </Link>







          <Link

            to="/admin/products"

            className="bg-zinc-900 hover:bg-zinc-800 rounded-3xl p-8 transition"

          >


            <h2 className="text-3xl font-bold text-blue-400">

              📦 Products

            </h2>


            <p className="text-gray-400 mt-4">

              View, Edit & Delete products.

            </p>



          </Link>








          <Link

            to="/admin/orders"

            className="bg-zinc-900 hover:bg-zinc-800 rounded-3xl p-8 transition"

          >


            <h2 className="text-3xl font-bold text-yellow-400">

              🛒 Orders

            </h2>



            <p className="text-gray-400 mt-4">

              Manage customer orders.

            </p>



          </Link>









          <div className="bg-zinc-900 rounded-3xl p-8">


            <h2 className="text-3xl font-bold text-purple-400">

              📈 Analytics

            </h2>



            <p className="text-gray-400 mt-4">

              Coming Soon...

            </p>



          </div>







        </div>




      </div>



    </section>


  );

}



export default Admin;