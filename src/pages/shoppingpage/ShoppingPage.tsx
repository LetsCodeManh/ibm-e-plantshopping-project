import React from "react";
import Navigation from "../../components/navigation/Navigation";
import "./ShoppingPage.css";
import ProductList from "../../components/product-list/ProductList";

const ShoppingPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <ProductList />
    </>
  );
};

export default ShoppingPage;
