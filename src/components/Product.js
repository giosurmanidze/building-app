import  { useState, useEffect } from "react";
import PopUp from "./Layout/PopUp";
import {Footer,Header,Items} from '../components'


const Product = () => {
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
    <div className="">
      {/*  conditional rendering  */}

      {size.width < 600 ? <PopUp /> : <Header />}

      {/*  conditional rendering  */}
      <Items />
      <Footer />
    </div>
  );
};

export default Product;
