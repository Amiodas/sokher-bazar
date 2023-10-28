import React from "react";
import Banner from "../../components/Banner/Banner";
import FeatureCategory from "../../components/FeatureCategory/FeatureCategory";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureCategory></FeatureCategory>
      <Products></Products>
    </div>
  );
};

export default Home;
