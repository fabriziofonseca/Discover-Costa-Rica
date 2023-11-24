import React from 'react';
import HeroHome from "../Heros/HeroHome";
import Categories from "../Categories";
import Footer from "../Footer";
import Carousel from "../Carrousel"; 

const imageData = [
  { src: "images/carusel1.jpeg", text: "Today in unmissable places: Coco Island" },
  { src: "images/carusel2.jpg", text: "Places you can not miss: Monteverde" },
  { src: "images/carusel3.jpg", text: "Explore the jungle in Corcovado" },
  { src: "images/carusel4.jpg", text: "Ready for a hike?" },
];

function Home() {
  return (
    <>
      <HeroHome />
      <Carousel images={imageData} /> 
      <Categories />
      <Footer />
    </>
  );
}

export default Home;
