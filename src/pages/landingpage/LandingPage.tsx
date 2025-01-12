import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";

const LandingPage: React.FC = () => {
  return (
    <>
      <img
        src="https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg"
        alt="Landing Page Background Image"
        className="background-image"
      />
      <main className="flex gap-4">
        <section className="flex gap-2">
          <div className="flex gap-1">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
          </div>

          <Link to="/shoppingpage" className="button">
            Get Started
          </Link>
        </section>

        <AboutUs />
      </main>
    </>
  );
};

export default LandingPage;
