import axios from "axios";
import { Product, ProductsResponse } from "../types/product";

const BASE_URL = '/products';

export const getAllProducts = async (): Promise<ProductsResponse> => {
    try{
        const response = await axios.get<ProductsResponse>(`${BASE_URL}?limit=194`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch products: ${error}`);
    }
}

export const getProductById = async (id: number): Promise<Product> => {
    try {
        const response = await axios.get<Product>(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch products: ${error}`);
    }
}