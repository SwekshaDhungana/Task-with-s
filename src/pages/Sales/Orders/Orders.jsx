import "./Orders.css";

const Orders = () => {
  return (
    <div className="orders-container">
      <h1 className="orders-title">Sales Orders</h1>

      <div className="section">
        <h2>Overview</h2>
        <p>Total Sales: Rs 2,300,000 (+15% vs last month)</p>
        <p>Total Orders Placed: 3,400 orders</p>
        <p>Average Order Value: Rs 353</p>
      </div>

      <div className="section">
        <h2>Top Selling Product</h2>
        <p>Product: Airmax Pro shoes</p>
      </div>

      <div className="section">
        <h2>Sales Trend</h2>
        <p>Positive Growth in the last quarter</p>
        <div className="placeholder"></div>
      </div>
    </div>
  );
};

export default Orders;
