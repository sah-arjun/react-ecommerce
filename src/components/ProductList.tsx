import React, { useEffect, useState } from "react"
import { getAllProducts } from "../api/product"
import { Product } from "../types/product";
import { Table } from "./Table/Table";
import { Column } from "../types/table";
import { LoadingSpinner } from "./LoadingSpinner";

interface ProductListProps {
  onSelectProduct: (product: Product) => void;
}

const productColumns: Column<Product>[] = [
  {key: 'title', label: 'Title', sortable: true},
  {key: 'availabilityStatus', label: 'Availability', sortable: true},
  {key: 'brand', label: 'Brand', sortable: true},
  {key: 'category', label: 'Category', sortable: true},
  {key: 'minimumOrderQuantity', label: 'Minimun Order Quantity', sortable: true},
  {key: 'price', label: 'Price', sortable: true},
  {key: 'discountedPrice', label: 'Discounted Price', sortable: true},
  {key: 'rating', label: 'Rating', sortable: true},
  {key: 'stock', label: 'Stock', sortable: true},
  {key: 'thumbnail', label: 'Thumbnail', sortable: true},
];

export const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchAllProducts = async () => {
        try {
          const allProducts = await getAllProducts();
          console.log('allProducts ', allProducts);
          const listProducts = allProducts?.products?.map(product => {
            const discountedPrice: number = Number((product.price * (1 - product.discountPercentage / 100)).toFixed(2));
            return {
              ...product,
              discountedPrice
            }
          })

          console.log('listProducts ', listProducts);
          setAllProducts(listProducts);
          setLoading(false);
        } catch (error) {
          console.error("Failed to fetch products:", error);
          setLoading(false); // Set loading to false if there's an error
        }        
      }  

      fetchAllProducts();
    }, []);

    return(
      <div>
        <h2>Product List</h2>
        {
          loading ? (
            <LoadingSpinner/>
          ) : (
            <Table data={allProducts} columns={productColumns} rowsPerPage={25} onRowClick={onSelectProduct}/>
          )
        }
      </div>
    )
}