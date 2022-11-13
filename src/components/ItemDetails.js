import {useState } from "react";
import { useParams } from "react-router-dom";
import db_1 from "../data/db_1.json";
import db_2 from "../data/db_2.js";
import Table from "./Layout/Table";
import SideBar from "./Layout/SideBar";
import SideBarCart from "./Layout/SideBarCart";
import {Footer,Header,NoNestedCards,} from '../components'


const ItemDetails = () => {
  const [itemNumber, setItemNumber] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const { category } = useParams();

  return (
    <>
      <Header itemNumber={itemNumber} setShowCart={setShowCart} />
      {showCart && (
        <SideBarCart category={category} setShowCart={setShowCart} />
      )}

      <NoNestedCards dataa={db_1} category={category} />
      <div className="main__divvv">
        <aside className="sideBar">
          <SideBar id="შავიმავთული" />
          <SideBar id="მოთუთიებულიმავთული" />
          <SideBar id="პევეცე" />
          <SideBar id="არმატურა" />
          <SideBar id="გლინურა" />
          <SideBar id="მავთულისბადე" />
        </aside>
        <div>
          {db_2.map((details) => {
            return (
              <Table
                key={details.id}
                details={details}
                category={category}
                itemNumber={itemNumber}
                setItemNumber={setItemNumber}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemDetails;
