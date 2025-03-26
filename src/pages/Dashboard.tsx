import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen ">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Dashboard;
