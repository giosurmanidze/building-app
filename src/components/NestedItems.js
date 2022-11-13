import React from "react";
import { Link } from "react-router-dom";
import "./styles/Cards.css";

const NestedItems = ({ data2}) => {
  
  return (
    <div className="card__items">
      {data2.map((data) => {
        return (
          <Link key={data.categoryId} to={`/product/table/${data.category_name}`}>
            <div key={Math.random() * 10000}>
              <img  className="card__item" src={data.url} />
              <h2>{data.category_name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NestedItems;
