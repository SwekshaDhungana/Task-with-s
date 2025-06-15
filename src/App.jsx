import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import About from "./pages/About";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import TaskManagement from "./pages/TaskManagement/TaskManagement";
import SalesLayout from "./layout/SalesLayout.jsx";
import Overview from "./pages/Sales/Overview/Overview.jsx";
import Analytics from "./pages/Sales/Analytics/Analytics.jsx";
import Orders from "./pages/Sales/Orders/Orders.jsx";
import Reports from "./pages/Sales/Reports/Reports.jsx";
import Profits from "./pages/Sales/Profits/Profits.jsx";
import Taskpage from "./pages/TaskPages/Taskpage.jsx";
import { checkIfLoggedIn, initiateDb } from "./lib/initiateDb.js";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    initiateDb();
    const isloggedin = checkIfLoggedIn();

    if (!isloggedin) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sales" element={<SalesLayout />}>
          <Route index element={<Overview />} />
          <Route path="/sales/analytics" element={<Analytics />} />
          <Route path="/sales/orders" element={<Orders />} />
          <Route path="/sales/reports" element={<Reports />} />
          <Route path="/sales/profits" element={<Profits />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/taskmanager" element={<TaskManagement />} />
        <Route path="/:section" element={<Taskpage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
