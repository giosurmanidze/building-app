import React from "react";
import '../styles/CardTemplate.css'

const CardTemplate = ({icon,title,desc, style}) => {
  return (
    <div className={`card ${style}`}>
      <div className="head">
        {icon}
        <h1> {title} </h1>
        <p>{desc}</p>
      </div>
      <button className="btn"> შეიტყვეთ მეტი </button>
    </div>
  );
};

export default CardTemplate;
