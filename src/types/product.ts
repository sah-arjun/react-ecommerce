export interface Product {
    id: number;
    title: string;
    availabilityStatus: string;
    brand: string;
    category: string;
    minimumOrderQuantity: number;
    price: number;
    discountPercentage: number;
    discountedPrice: number;
    rating: number;
    stock: number;
    thumbnail: string;
    reviews: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
    }[];
}

export interface ProductsResponse {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}