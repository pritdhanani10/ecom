import React from 'react'
import Hero from "../components/Hero";
import Features from "../components/Features";
import NewArrivals from "../components/NewArrivals";
import Banner from "../components/Banner";
import PopularProducts from "../components/PopularProducts";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Heroo from '../components/Heroo';
import Reveiw from '../components/Reveiw';

const Home = () => {
  return (
    <>
      <Heroo />
      <Features />
      <NewArrivals />
      <Banner />
      <PopularProducts />
      <Hero />
      <Blog />
      <Reveiw />
      <Footer />
    </>
  )
}

export default Home