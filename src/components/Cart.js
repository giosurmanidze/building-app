import React, { useContext } from "react";
import { AppContext } from "../utils/context";
import "./styles/cart.css";
import {Header} from '../components'


const Cart = () => {
  const { cart, setCart } = useContext(AppContext);

  const deleteHandler = (idx) => {
    setCart(cart.filter((data) => data.id !== idx));
  };

  return (
    <>
      <Header />
      <div className="cart_screen">
        {!cart.length ? (
          <h1 className="empty_cart">
            კალათი ცარიელია, აირჩიეთ სასურველი პროდუქცია
          </h1>
        ) : (
          cart.map((data) => {
            return (
              <>
                <div>
                  <img src={data.url} />
                  <div className="description_cart_items">
                    <p>მწარმოებელი: {data.manufacturer}</p>
                    {data.size && <p>სიგრძე: {data.size}</p>}
                    {data.Class && <p>კლასი: {data.Class}</p>}
                    <p>დიამეტრი მმ: {data.diameter}</p>
                    <p className="sum">
                      ჯამში: <span>{data.sum}</span>
                    </p>
                    <p>რაოდენობა: {data.quantity}</p>
                  </div>
                  <span
                    className="delete_btn"
                    onClick={() => deleteHandler(data.id)}
                  >
                    X
                  </span>
                </div>
                <div className="line"></div>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default Cart;
