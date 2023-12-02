import ProductsList from "@/components/Products/productsList";
import { ProductsService } from "@/services/products";
import React from "react";

const Products = async () => {
    const products = await ProductsService.getAllProducts();

    return (
        <div className="max-w-6xl mx-auto">
            <ProductsList products={products} />
        </div>
    );
};

export default Products;
