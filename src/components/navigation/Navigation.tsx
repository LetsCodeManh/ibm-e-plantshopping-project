import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const totalItems = cartItems.reduce((total: string[], item: any) => {
    if (!total.includes(item.name)) {
      total.push(item.name);
    }
    return total;
  }, []).length;

  return (
    <nav>
      <Link to="/" className="link">
        <img
          src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
          alt="Logo"
          className="logo"
        />
        <div className="logo-text">
          <h3>Paradise Nursery</h3>
          <span>Where Green Meets Serenity</span>
        </div>
      </Link>
      <Link to="/shoppingpage" className="link bold">
        Plants
      </Link>
      <Link to="/cartpage" className="link bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          id="IconChangeColor"
          height="68"
          width="68"
        >
          <rect width="156" height="156" fill="none"></rect>
          <circle cx="80" cy="216" r="12"></circle>
          <circle cx="184" cy="216" r="12"></circle>
          <path
            d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
            fill="none"
            stroke="#faf9f9"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            id="mainIconPathAttribute"
          ></path>
        </svg>
        <span className="product-count">{totalItems}</span>
      </Link>
    </nav>
  );
};

export default Navigation;
