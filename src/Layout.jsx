import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
