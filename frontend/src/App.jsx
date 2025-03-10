import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import About from './pages/About';
import Contact from './pages/Contact';
import ForgotPassword from "./pages/ForgotPassword";
import Payment from "./pages/Payment";  // New Payment Page

// Load Stripe with your Publishable Key
const stripePromise = loadStripe("pk_test_51R0mUvAQQkEOGaMTJvGEbxnSF1ZClVbNli9XVbDeQfrrwMotP5gZbsOqCuQJ92pKolArwf3PdLITl4DQyPIckvrq00XrKoV8qJ");

const App = () => {
  return (
    <main className='overflow-hidden text-[#404040]'>
      <ToastContainer />
      <Header />
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/collection' element={<Collection/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product/:productId' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/place-order' element={<PlaceOrder/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/payment' element={<Payment/>} />  {/* New Payment Page */}
        </Routes>
      </Elements>
    </main>
  );
};

export default App;
