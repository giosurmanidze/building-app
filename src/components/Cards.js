import { useParams } from "react-router-dom";
import db_1 from "../data/db_1.json";
import "./styles/Cards.css";
import { Footer, NestedItems } from "../components";

const Cards = () => {
  const { id } = useParams();

  return (
    <>
      <div className="card__items">
        {db_1
          .filter((data) => data.id === Number(id))
          .map((data2) => {
            return <NestedItems key={data2.id} data2={data2.types} />;
          })}
      </div>
    </>
  );
};

export default Cards;
