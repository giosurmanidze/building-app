import React, { useEffect, useState } from "react";
import "./styles/Header.css";
import logo from "../assets/images/logo1.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Header = ({ itemNumber,setShowCart }) => {
  const [show, setShow] = useState(false);

  // header background
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <header className={`heading ${show && "heading__bg"}`}>
      <div className="left--side">
        <img className="logo" src={logo} />
      </div>
      <div className="nav__links">
        <Link to="/">მთავარი</Link>
        <Link to="/product">პროდუქცია</Link>
        <h1>კონტაქტი</h1>
      </div>
      <div className="right--side">
        <h1>ENGLISH</h1>
          <div className="icon__div" onClick={() => setShowCart(true)}>
            <ShoppingCartOutlinedIcon />
            <span className="item__amount">{itemNumber}</span>
          </div>
      </div>
    </header>
  );
};

export default Header;
