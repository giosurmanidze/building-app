import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import "../styles/PupUp.css";
import { useNavigate } from "react-router-dom";
const PopUp = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="nav__icon__1" onClick={() => navigate("/building-app")}>
        <HomeOutlinedIcon style={{fontSize:'30px'}}/>
        <p> მთავარი</p>
      </div>
      <div className="nav__icon__2" onClick={() => navigate("/product")}>
        <Inventory2OutlinedIcon style={{fontSize:'27px'}}/>
        <p> პროდუქცია</p>
      </div>
      <div className="nav__icon__3" onClick={() => navigate("/cart")}>
        <ShoppingCartOutlinedIcon style={{fontSize:'27px'}}/>
        <p> კალათი</p>
      </div>
      <div className="nav__icon__4">
        <LocalPhoneOutlinedIcon style={{fontSize:'27px'}}/>
        <p> კონტაქტი</p>
      </div>
    </nav>
  );
};

export default PopUp;
