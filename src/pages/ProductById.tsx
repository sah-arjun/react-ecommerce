import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Product } from "../types/product";
import { getProductById } from "../api/product";
import { ProductDetails } from "../components/ProductDetails"

export const ProductById: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProductById = async () => {
            if(!id) return null;
            const prod = await getProductById(Number(id));
            setProduct(prod);
        };

        fetchProductById();
    }, [id]);

    return(
        <div>
            <ProductDetails product={product}/>
        </div>
    )
}