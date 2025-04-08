import React, { useEffect, useState } from "react"
import { Product } from "../types/product"
import { LoadingSpinner } from "./LoadingSpinner";

interface ProductProps {
    product: Product | null
}
export const ProductDetails: React.FC<ProductProps> = ({ product }) => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if(product) setLoading(false);
    }, [product]);

    if(!product ) {
        return <h2 style={{ textAlign: 'center' }}>Please select a product from the list.</h2>;
    }

    console.log('product ', product?.title);
    const { 
        title,
        thumbnail,
        brand,
        category,
        stock,
        availabilityStatus,
        minimumOrderQuantity,
        rating,
        price = 0,
        discountPercentage = 0
    } = product;

    const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(2) ?? 0;

    return(
        <div>
            <h2>Product Details</h2>
            {loading ? (
                <LoadingSpinner/>
            ) : (
                <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto", border: "1px solid #ccc" }}>
                    <h2>{title}</h2>
                    <img src={thumbnail} alt={title} width="100%" height="400px" style={{ borderRadius: 8, objectFit: "cover" }} />
                    <p><strong>Brand:</strong> {brand}</p>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Stock:</strong> {stock}</p>
                    <p><strong>Availability Status:</strong> {availabilityStatus}</p>
                    <p><strong>Minimum order quantity:</strong> {minimumOrderQuantity}</p>
                    <p><strong>Rating:</strong> ⭐ {rating}</p>
                    <p>
                        <strong>Price:</strong> <s>${price}</s> → <span style={{ color: "green" }}>${discountedPrice}</span>
                        <span style={{ color: "orangered", fontSize: "0.7rem" }}>{' '}({discountPercentage}% off)</span>
                    </p>

                    <hr />

                    <h3>Reviews</h3>
                </div>
            )}
        </div>
    )
}