import "./Table.css";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../utils/context";

const Table = ({ details, category,itemNumber, setItemNumber }) => {
  const {cart,setCart} = useContext(AppContext)
    
  const [price, setPrice] = useState(0);
  const [cart2, setCart2] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) === -1) {
      setItemNumber(itemNumber => itemNumber+1)
      setCart([...cart,item])
    }else if (cart.indexOf(item) === 1)return;
  };

  const handleChange = (item, d, mm,prc) => {
    const ind = details.details.indexOf(item);
    const arr = details.details;
    arr[ind].quantity += d;
    arr[ind].sum += prc;

    if (arr[ind].quantity >= 1) {
      arr[ind].meter += mm;
    }

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart2([...arr]);
  };


  const test = () => {
    if (details.id && details.id === category) {
      for (let i = 0; i < details.details.length; i++) {
        return (
          <>
            {details.details.map((data) => {
              return (
                <tr key={Math.random() * 1000}>
                  {data.Standard && <td>{data.Standard}</td>}
                  {data.Class && <td>{data.Class}</td>}
                  {data.Length && <td>{data.Length}</td>}
                  {data.manufacturer && <td>{data.manufacturer}</td>}
                  {data.diameter && <td>{data.diameter}</td>}
                  {data.FinalDiameter && <td>{data.FinalDiameter}</td>}
                  {data.size && <td>{data.size}</td>}
                  {data.price && <td>{data.price}GEL</td>}
                  <td className="counter">
                    <button
                      className="btn__2"
                      onClick={() => handleChange(data, -1, -data.size,-(data.price))}
                    >
                      -
                    </button>

                    <input type="number" value={data.quantity} readOnly/>
                    <button
                      className="btn__1"
                      onClick={() => {
                        handleChange(data, 1, data.size,data.price);
                      }}
                    >
                      +
                    </button>
                  </td>
                  {details.input && (
                    <td>
                      <input className="input__amount" value={data.meter} readOnly />
                    </td>
                  )}
                  <td>
                    <button
                      className="add__to__cart"
                      onClick={() => handleClick(data)}
                    >
                      Add to cart
                    </button>
                  </td>
                </tr>
              );
            })}
          </>
        );
      }
    }
  };
  return (
    <>
      {
        <table>
          <tr>
            {details.id &&
              details.id === category &&
              details.header.map((data) => {
                return <th key={Math.random() * 1000}>{data}</th>;
              })}
          </tr>
          {test()}
        </table>
      }
    </>
  );
};

export default Table;
