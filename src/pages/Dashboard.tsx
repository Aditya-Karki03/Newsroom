import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Dashboard;
