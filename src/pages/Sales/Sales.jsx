import React from "react";
import "./Sales.css";
// import hero from "../../images/grocery.jpg";
import dress from "../../images/dress.jpg";
import makeup from "../../images/makeup.jpg";
import sale from "../../images/sale-one.jpg";
import shoes from "../../images/shoes.jpg";
import perfume from "../../images/perfume.jpeg";
import skincare from "../../images/skincare.jpg";
import hero from "../../images/hero-two.jpg";
import { Link } from "react-router-dom";
function Sales() {
  return (
    <div className="sales-container">
      <section class="hero">
        <div class="hero-overlay">
          <div class="hero-content">
            <h1>Unleash Your Potential</h1>
            <p>
              Your journey to success starts here. Discover, learn, and grow
              with us.
            </p>
            <a href="#" class="hero-button">
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* <section>
        <h1 className="sales-text">Welcome to sales</h1>
        <div className="hero-image">
          <img className="hero-image-main" src={hero} alt="grocery image" />
          <div className="hero-right">
            <div className="hero-right-photo">
              <img className="right-img one" src={sale} alt="sale" />
            </div>
            <div className="hero-right-photo">
              {" "}
              <img className="right-img two" src={dress} alt="dress" />
            </div>
            <div className="hero-right-photo">
              <img className="right-img three" src={shoes} alt="shoes" />
            </div>
            <div className="hero-right-photo">
              <img className="right-img five" src={makeup} alt="makeup" />
            </div>

            <div className="hero-right-photo">
              <img className="right-img four" src={perfume} alt="perfume" />
            </div>
            <div className="hero-right-photo">
              <img className="right-img six" src={skincare} alt="skincare" />
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <nav className="sales-nav">
          <ul className="sales-list">
            <li>
              <Link to="/sales">Overview</Link>
            </li>
            <li>
              <Link to="/sales/analytics">Analytics</Link>
            </li>

            <li>
              <Link to="/sales/profits">Profits</Link>
            </li>
            <li>
              <Link to="/sales/orders">Orders</Link>
            </li>
            <li>
              <Link to="/sales/reports">Reports</Link>
            </li>
          </ul>
        </nav>
        <hr />
      </section>
    </div>
  );
}

export default Sales;
