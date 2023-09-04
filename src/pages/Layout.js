import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import "../styles/Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="background">
      <header>
        <Navigation />
      </header>
      <Outlet />
      <footer>Created by Adam Mills</footer>
    </div>
  );
};

export default Layout;
