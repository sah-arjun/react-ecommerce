import React from "react"
import { Product } from "../types/product"

interface ProductProps {
    product: Product | null
}
export const ProductDetails: React.FC<ProductProps> = ({ product }) => {
    if(!product ) return <h2>Please select a product from the list.</h2>;
    console.log('product ', product?.title);
    const discountedPrice = (product?.price * (1 - product?.discountPercentage / 100)).toFixed(2) ?? 0;

    return(
        <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto", border: "1px solid #ccc" }}>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} width="100%" height="400px" style={{ borderRadius: 8 }} />
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Availability Status:</strong> {product.availabilityStatus}</p>
            <p><strong>Minimum order quantity:</strong> {product.minimumOrderQuantity}</p>
            <p><strong>Rating:</strong> ⭐ {product.rating}</p>
            <p>
                <strong>Price:</strong> <s>${product.price}</s> → <span style={{ color: "green" }}>${discountedPrice}</span>
                <span style={{ color: "orangered", fontSize: "0.7rem" }}>{' '}({product.discountPercentage}% off)</span>
            </p>

            <hr />

            <h3>Reviews</h3>
        </div>
    )
}