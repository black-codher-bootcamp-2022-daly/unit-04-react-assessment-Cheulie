import Product from "./components/Product";
import ProductList from "./components/ProductList";
import React,{ useState } from "react";
import data from "./models/data.json";



function App() {
  const [product, setProducts] = useState(data);
  return (

<div>
<ProductList>
        {product.map((item)=> (<Product
        key={item.trackId}
        product={item}/>

         ))}
      
      </ProductList>
</div>
  );
}

export default App;


