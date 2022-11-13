import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { Provider } from "react";
import { AppContext } from "./utils/context";
import {MainContent,Product,Cards,ItemDetails,Cart,} from './components'



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

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <BrowserRouter>
        <AppContext.Provider value={{ cart, setCart }}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product" element={<Product />} />
            <Route path="product/:id" element={<Cards />} />
            <Route path="product/table/:category" element={<ItemDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
