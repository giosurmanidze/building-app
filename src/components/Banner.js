import React from "react";
import "./styles/Banner.css";
import bg_img from "../assets/images/wallpaper-1920.jpg";

const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${bg_img})`,
        backgroundColor: "rgba(0,0,0,0.3)",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h2>კავკას მეტალი</h2>
        <h1>მეტალის სამშენებლო მასალები</h1>
        <p className="banner__description">
          კომპანიის ორიენტირი უმაღლესი ხარისხის პროდუქციის წარმოება, იმპორტი და
          დისტრიბუციაა ოპტიმალურ ფასად
        </p>
          <button className="banner__btn"> გაიგე მეტი</button>
      </div>
      <div className="banner__fadeEffect"></div>
    </div>
  );
};

export default Banner;
