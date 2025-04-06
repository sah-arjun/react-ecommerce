import React, { useEffect, useRef, useState } from "react"
import { getAllProducts } from "../api/product"
import { Product } from "../types/product";
import { Table } from "./Table/Table";
import { Column } from "../types/table";

export const ProductList: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([])
    useEffect(() => {
      const fetchAllProducts = async () => {
        const productList = await getAllProducts();
        const mappedProducts: Product[] = productList.products.map(product => ({
          id: product.id,
          title: product.title,
          availabilityStatus: product.availabilityStatus,
          brand: product.brand,
          category: product.category,
          minimumOrderQuantity: product.minimumOrderQuantity,
          price: product.price,
          discountPercentage: product.discountPercentage,
          rating: product.rating,
          stock: product.stock,
          thumbnail: product.thumbnail
        }));

        setAllProducts(mappedProducts);
      }  

      fetchAllProducts();
    }, []);

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

    const selectedProductRef = useRef<Product | null>(null);

    const handleRowClick = (product: Product) => {
      selectedProductRef.current = product;
      console.log('Selected ', selectedProductRef.current);
    }

    return(
        <div style={{ padding: '2rem'}}>
            <h2>Product List</h2>
            <Table data={allProducts} columns={productColumns} rowsPerPage={25} onRowClick={handleRowClick}/>
        </div>
    )
}