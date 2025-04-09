import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Products } from "./pages/Products";
import { ProductById } from "./pages/ProductById";
import { NotFound } from "./components/NotFound";

const App: React.FC = () => {
  return(
    <BrowserRouter>
    <div style={{display: "flex", height: "100vh", width: "100vw"}}>
      <div style={{flex: 1, overflow: "auto", padding: "1rem", borderRight: "1px solid #ccc", boxSizing: "border-box"}}>
        <Routes>
          <Route path="/product/:id" element={<ProductById/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </div>
      <div style={{flex: 1, overflow: "auto", padding: "1rem", boxSizing: "border-box"}}>
        <Products/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;