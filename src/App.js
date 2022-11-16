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

const getItems = () => {
  const data = localStorage.getItem("items");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  const [cart, setCart] = useState(getItems);
  const [itemNumber, setItemNumber] = useState(0);
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
          <Header itemNumber={itemNumber} setItemNumber={setItemNumber} />
        )}
        <AppContext.Provider
          value={{ cart, setCart, itemNumber, setItemNumber }}
        >
          <Routes>
            <Route path="/building-app" element={<MainContent />} />
            <Route path="/product" element={<Product />} />
            <Route path="product/:id" element={<Cards />} />
            <Route path="product/table/:category" element={<ItemDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
