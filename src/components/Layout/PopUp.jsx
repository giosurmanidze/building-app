import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import "../styles/PupUp.css";
const PopUp = () => {
  return (
    <nav className="nav">
      <div className="nav__icon__1">
        <HomeOutlinedIcon style={{fontSize:'30px'}}/>
        <p> მთავარი</p>
      </div>
      <div className="nav__icon__2">
        <Inventory2OutlinedIcon style={{fontSize:'27px'}}/>
        <p> პროდუქცია</p>
      </div>
      <div className="nav__icon__3">
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
