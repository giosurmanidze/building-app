import { Link } from "react-router-dom";
import db_1 from "../data/db_1.json";
import "./styles/Items.css";

const Items = () => {
  return (
    <div className="items">
      {db_1.map((data) => {
        return (
          <Link 
            to={`/product/${data.types.length >= 1 ? data.id :"table/" + data.category}`}
          >
            <div key={data.id}>
              <img className="item__img" src={data.url} alt="img"/>
              <h1>{data.category}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Items;
