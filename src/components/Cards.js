import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db_1 from "../data/db_1.json";
import PopUp from "./Layout/PopUp";
import "./styles/Cards.css";
import {Footer,Header,NestedItems} from '../components'


const Cards = () => {
  const { id } = useParams();

  const [size, setSize] = useState({
    width: window.innerWidth,
  });

  /// get screen size every changes
  const updateSize = () =>
    setSize({
      width: window.innerWidth,
    });
  useEffect(() => (window.onresize = updateSize), []);

  return (
    <>
      {/*  conditional rendering  */}
      {size.width < 600 ? <PopUp /> : <Header />}
      {/*  conditional rendering  */}

      <div className="card__items">
        {db_1
          .filter((data) => data.id === Number(id))
          .map((data2) => {
            return <NestedItems key={data2.id}  data2={data2.types} />;
          })}
      </div>
      <Footer />
    </>
  );
};

export default Cards;
