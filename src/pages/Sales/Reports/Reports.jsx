import React from "react";
import "./Reports.css";

function Reports() {
  return (
    <div className="report-container">
      <h1 className="report-title">Sales Report</h1>
      <div className="section">
        <h2>Daily Sales Report</h2>
        <p>Orders Today: 120</p>
        <p>Top Product: Coffee Mug - Minimal</p>
      </div>
      <div className="section">
        <h2>Weekly Sales Report</h2>
        <p>Orders: 920</p>
        <p>Top Performing Day: Wednesday (Rs 75,00)</p>
        <div className="placeholder"></div>
      </div>
      <div className="section">
        <h2>Monthly Summary</h2>
        <p>Total Sales in May: Rs12,30,000</p>
        <p>
          Growth compared to April: <span className="highlight">+18%</span>
        </p>
        <p>Top Category: Apparel</p>
      </div>
      {/* <div className="section">
        <h2>Sales by Payment Method</h2>
        <p>Online Payments: 68%</p>
        <p>Cash on Delivery: 25%</p>
        <p>Others: 7%</p>
      </div> */}
    </div>
  );
}

export default Reports;
