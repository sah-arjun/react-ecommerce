import React, { useEffect } from "react"
import { getAllProducts } from "../api/product.api"

export const ProductList: React.FC = () => {
    useEffect(() => {
      const fetchAllProducts = async () => {
        const products = await getAllProducts();
        console.log(products);
      }  

      fetchAllProducts();
    }, []);
    
    return(
        <div>
            Product List
        </div>
    )
}