import React, { useState } from "react";
import { ProductDetails } from "./components/ProductDetails";
import { ProductList } from "./components/ProductList";
import { Product } from "./types/product";

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  return(
    <div style={{display: "flex", height: "100vh", width: "100vw"}}>
      <div style={{flex: 1, overflow: "auto", padding: "1rem", borderRight: "1px solid #ccc", boxSizing: "border-box"}}>
        <ProductDetails product={selectedProduct}/>
      </div>
      <div style={{flex: 1, overflow: "auto", padding: "1rem", boxSizing: "border-box"}}>
        <ProductList onSelectProduct={setSelectedProduct}/>
      </div>
    </div>
  )
}

export default App;