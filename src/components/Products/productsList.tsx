import React from "react";
import { ProductsType } from "@/lib/types/productsTypes";
import SingleProducts from "./singleProducts";

type ProductsListProps = {
    products: ProductsType[];
};

const ProductsList = ({ products }: ProductsListProps) => {
    return (
        <div className="bg-slate-400 flex flex-row gap-10 flex-wrap p-10 items-center justify-start">
            {products.map((data: ProductsType, id: number) => {
                return (
                    <SingleProducts
                        category={data.category}
                        creationAt={data.creationAt}
                        description={data.description}
                        id={data.id}
                        images={data.images}
                        price={data.price}
                        title={data.title}
                        updatedAt={data.updatedAt}
                        key={id}
                    />
                );
            })}
        </div>
    );
};

export default ProductsList;
