import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { Provider } from "react";
import { AppContext } from "./utils/context";
import {
  MainContent,
  Product,
  Cards,
  ItemDetails,
  Cart,
  Header,
  Footer,
} from "./components";
import PopUp from "./components/Layout/PopUp";

// const MainContent = lazy(() => import("./components/MainContent"));
// const Product = lazy(() => import("./components/Product"));
// const Cards = lazy(() => import("./components/Cards"));
// const ItemDetails = lazy(() => import("./components/ItemDetails"));
// const Cart = lazy(() => import("./components/Cart"));

const getItems = () => {
  const data = localStorage.getItem("items");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const App = () => {
  const [cart, setCart] = useState(getItems);
  const [itemNumber, setItemNumber] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [size, setSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart]);

  /// get screen size every changes
  const updateSize = () =>
    setSize({
      width: window.innerWidth,
    });
  useEffect(() => (window.onresize = updateSize), []);

  return (
    <div className="App">
      <BrowserRouter>
        {size.width < 600 ? (
          <PopUp />
        ) : (
          <Header setShowCart={setShowCart} itemNumber={itemNumber} setItemNumber={setItemNumber} />
        )}
        <AppContext.Provider
          value={{ cart, setCart, itemNumber, setItemNumber, showCart,setShowCart }}
        >
          {/* <Suspense fallback={<h1>Loading...</h1>}> */}
          <Routes>
            <Route path="/building-app" element={<MainContent />} />
            <Route path="/product" element={<Product />} />
            <Route path="product/:id" element={<Cards />} />
            <Route path="product/table/:category" element={<ItemDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          {/* </Suspense> */}
        </AppContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
