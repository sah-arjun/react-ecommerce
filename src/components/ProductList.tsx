import React, { useEffect, useState } from "react"
import { getAllProducts } from "../api/product"
import { Product } from "../types/product";
import { Table } from "./Table/Table";
import { Column } from "../types/table";

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
  {key: 'discountPercentage', label: 'Discount Percentage', sortable: true},
  {key: 'rating', label: 'Rating', sortable: true},
  {key: 'stock', label: 'Stock', sortable: true},
  {key: 'thumbnail', label: 'Thumbnail', sortable: true},
];

export const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([])

  console.log('list');
    useEffect(() => {
      const fetchAllProducts = async () => {
        try {
          const productList = await getAllProducts();
          setAllProducts(productList.products);
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }        
      }  

      fetchAllProducts();
    }, []);

    return(
      <div style={{ padding: '2rem'}}>
        <h2>Product List</h2>
        <Table data={allProducts} columns={productColumns} rowsPerPage={25} onRowClick={onSelectProduct}/>
      </div>
    )
}