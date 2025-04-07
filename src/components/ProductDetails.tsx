import React from "react"
import { Product } from "../types/product"

interface ProductProps {
    product?: Product | null
}
export const ProductDetails: React.FC<ProductProps> = ({ product }) => {
    console.log('product ', product?.title);
    return(
        <div>
            {!product ? (
                <h2>Please select a product from the list.</h2>
            ) : (
                <span>Product title is {product?.title}</span>
            )}
        </div>
    )
}