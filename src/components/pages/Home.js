import React from 'react';
import '../../App.css';
import Carousel from '../Carousel';
import Cards from '../Cards';
import Footer from '../Footer';
import Review from '../Review';

export default function Home() {
  return (
    <div>
      <Carousel/>
      <Cards/>
      <Review/>
      <Footer/>
    </div>
  )
}
