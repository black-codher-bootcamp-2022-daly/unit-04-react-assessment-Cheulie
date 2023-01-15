

// import React from "react";
// import Product from "./Product";
// import BasketCount from "./BasketCount";
// import BasketTotal from "./BasketTotal";

// const Basket = ({basket,basketTotal,...props}) => {
//     const count = basket.length;
//     return (
//       <div id="basket">
//           <h1>Basket</h1>
//           <BasketCount basketCount={count}/>
//           { 
//             (count > 0 ? 
//             basket.map(item => <Product key={item.trackId} item={item} {...props}/>) : 
//             <div className="empty">No items to see here...</div>)
//           }
//           <BasketTotal basketTotal={basketTotal}/>
//       </div>
//     );
//   }

// export default Basket;