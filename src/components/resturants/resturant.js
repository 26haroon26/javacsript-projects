import React, { useState } from "react";
import "./style.css";
import Menu from "./Menu";
import Menucart from "./Menucart";

export const Index = () => {
  // line 7 me hooks he
  const [MenuData, setMenuData] = useState(Menu);
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-item" value={"Breakfast"}>
            Breakfast
          </button>
          <button className="btn-item" value={"Lunch"}>
            Lunch
          </button>
          <button className="btn-item" value={"Dinner"}>
            Dinner
          </button>
        </div>
      </nav>
      <Menucart Data={MenuData} />
    </>
  );
};
// export default index ; ye bhi krsakhte hen or function me he export lkhden
