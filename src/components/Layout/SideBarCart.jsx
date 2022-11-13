import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import "./SideBarCart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../utils/context";

const SideBarCart = ({ setShowCart, category }) => {
  const {cart} = useContext(AppContext)

  const [totalPrice, setTotalPrice] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    let total = 0;
      cart.map(data => {
        total += data.sum
      })
      setTotalPrice(total)
  }, [cart])
  return (
    <div className="sidebar_cart">
      <div className="header_cart">
        <div className="icons_cart">
          <ShoppingCartOutlinedIcon />
          <div onClick={() => setShowCart(false)}>
            <ClearIcon className="clear_cart" />
          </div>
        </div>
        <div className="line_cart"></div>
      </div>
      <div className="content_cart">
        {cart.map((data) => {
          return (
            <div className="card_in_cart">
              <img src={data.url} alt="item_img" />
              <div className="description_of_item">
                <h1>{category}</h1>
                <p>მწარმოებელი: {data.manufacturer}</p>
                {data.size && <p>სიგრძე: {data.size}</p>}
                {data.Class && <p>კლასი: {data.Class}</p>}
                <p>რაოდენობა: {data.quantity}</p>
                <p>დიამეტრი მმ: {data.diameter}</p>
                <p className="sum">
                  ჯამში: <span>{data.sum}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="line_cart2"></div>
      <div className="items_sum_cart">
        <span>ჯამში</span>
        <span className="sum_money">{totalPrice}</span>
      </div>
      <div className="cart_btn"  onClick={() => navigate("/cart")}>
        <p>კალათის ნახვა</p>
      </div>
    </div>
  );
};

export default SideBarCart;
