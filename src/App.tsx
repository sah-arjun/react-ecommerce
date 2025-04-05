import React from "react";
import { ProductDetails } from "./components/ProductDetails";
import { ProductList } from "./components/ProductList";

const App: React.FC = () => {
  return(
    <div style={{display: "flex", height: "100vh", width: "100vw"}}>
      <div style={{flex: 1, padding: "1rem", borderRight: "1px solid #ccc", boxSizing: "border-box"}}>
        <ProductDetails/>
      </div>
      <div style={{flex: 1, padding: "1rem", boxSizing: "border-box"}}>
        <ProductList/>
      </div>
    </div>
  )
}

export default App;