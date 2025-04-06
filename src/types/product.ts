export interface Product {
    id: number;
    title: string;
    availabilityStatus: string;
    brand: string;
    category: string;
    minimumOrderQuantity: number;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    thumbnail: string;
}

export interface ProductsResponse {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}