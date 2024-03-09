import React from "react";
import Banner from "../components/Banner";
import banner_home from "../assets/banner_home.png";
import Gallery from "../components/Gallery";


const Home = () => {
  return (
    <div>
      <Banner image={banner_home} texte={<p><span>Chez vous,</span><span>partout et ailleurs</span></p>}/>
      <Gallery/>
    </div>
  );
};

export default Home;
