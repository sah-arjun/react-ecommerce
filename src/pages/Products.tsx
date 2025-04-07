import React from "react"
import { useNavigate } from "react-router"
import { ProductList } from "../components/ProductList";
import { Product } from "../types/product";

export const Products: React.FC = () => {
    const navigate = useNavigate();

    const handleSelect = (product: Product) => {
        navigate(`/product/${product.id}`);
    };

    return(
        <div>
            <ProductList onSelectProduct={handleSelect}/>
        </div>
    )
}
