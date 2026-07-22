import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

import About from "./components/About";
import WhyCrafto from "./components/WhyCrafto";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";


import ScrollTop from "./components/ScrollTop";
import Loader from "./components/Loader";
import FloatingButtons from "./components/FloatingButtons";


import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Success from "./components/Success";
import Wishlist from "./components/Wishlist";

import ProtectedRoute from "./components/ProtectedRoute";


import Login from "./pages/Login";
import Signup from "./pages/Signup";


// Admin

import Admin from "./admin/Admin";
import AddProduct from "./admin/AddProduct";
import ProductList from "./admin/ProductList";
import EditProduct from "./admin/EditProduct";
import Orders from "./admin/Orders";





function Home(){

  return(

    <>

      <Hero />

      <SearchBar />

      <Products />

      <About />

      <WhyCrafto />

      <Stats />

      <Features />

      <Reviews />

      <Contact />

      <Newsletter />

      <Footer />

    </>

  );

}






function App(){


  const [loading,setLoading] = useState(true);



  useEffect(()=>{


    const timer = setTimeout(()=>{

      setLoading(false);

    },1800);



    return ()=>clearTimeout(timer);



  },[]);




  if(loading){

    return <Loader />;

  }





  return(

    <>


      <Navbar />


      {/* Navbar space */}

      <div className="h-20"></div>



      <Cart />


      <FloatingButtons />


      <ScrollTop />




      <Routes>



        {/* HOME */}

        <Route

          path="/"

          element={<Home />}

        />





        {/* PRODUCT */}

        <Route

          path="/product/:id"

          element={<ProductDetails />}

        />






        {/* AUTH */}

        <Route

          path="/login"

          element={<Login />}

        />



        <Route

          path="/signup"

          element={<Signup />}

        />







        {/* WISHLIST */}

        <Route

          path="/wishlist"

          element={

            <ProtectedRoute>

              <Wishlist />

            </ProtectedRoute>

          }

        />







        {/* CHECKOUT */}

        <Route

          path="/checkout"

          element={

            <ProtectedRoute>

              <Checkout />

            </ProtectedRoute>

          }

        />








        {/* PAYMENT */}

        <Route

          path="/payment"

          element={

            <ProtectedRoute>

              <Payment />

            </ProtectedRoute>

          }

        />







        {/* SUCCESS */}

        <Route

          path="/success"

          element={

            <ProtectedRoute>

              <Success />

            </ProtectedRoute>

          }

        />









        {/* ADMIN */}

        <Route

          path="/admin"

          element={<Admin />}

        />



        <Route

          path="/admin/Add-product"

          element={<AddProduct />}

        />



        <Route

          path="/admin/products"

          element={<ProductList />}

        />



        <Route

          path="/admin/edit/:id"

          element={<EditProduct />}

        />



        <Route

          path="/admin/orders"

          element={<Orders />}

        />




      </Routes>



    </>

  );

}


export default App;