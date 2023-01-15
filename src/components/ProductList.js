import React from "react";
import {data} from "./models/data.json";


function Productlist(props) {
    return (
      <div>
        <h1>Tammy's Music library</h1>
        <input type="text" placeholder="Search ..." classname="search" />
        <ul className="list">
          {Data.map((data) =>(
            <li className="listItem">{props.product.artistName}</li>
          ))}
        </ul>
        <div className="productlist-container">{props.children}</div>
      </div>
    );
  }
  export default Productlist;