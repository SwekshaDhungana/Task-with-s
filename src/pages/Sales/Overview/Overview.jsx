import React from "react";
import "./Overview.css";
function Overview() {
  return (
    <div className="overview-container">
      <h1 className="overview-title">Sales Overview</h1>
      <div className="section">
        <h2>Total Sales</h2>
        <p>
          Rs 2,300,000 <span className="highlight">(+15% vs last month)</span>
        </p>
      </div>
      <div className="section">
        <h2>Total Orders Placed</h2>
        <p>3,400 orders placed.</p>
        <p>Average Order Value: Rs 353</p>
      </div>
      <div className="section">
        <h2>Top Selling Product</h2>
        <p>Airmax Pro shoes</p>
      </div>
      <div className="section">
        <h2>Sales Trend</h2>
        <div className="placeholder"></div>
      </div>
    </div>
  );
}

export default Overview;
