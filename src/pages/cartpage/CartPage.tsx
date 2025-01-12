import React from "react";
import Navigation from "../../components/navigation/Navigation";
import "./CartPage.css";
import CartList from "../../components/cart-list/CartList";
import { Link } from "react-router-dom";

const CartPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <CartList />
      <div className="button-container">
        <Link to="/shoppingpage" className="continue-button">
          Continue Shopping
        </Link>
        <button
          className="continue-button"
          onClick={() => alert("Coming Soon!")}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default CartPage;
