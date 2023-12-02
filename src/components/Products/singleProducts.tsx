import React from "react";
import { ProductsType } from "@/lib/types/productsTypes";

const SingleProducts = ({
    id,
    category,
    creationAt,
    description,
    images,
    price,
    title,
    updatedAt,
}: ProductsType) => {
    return (
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a
                href={`/products/${id}`}
                className="block w-full h-full">
                {images.length > 0 && (
                    <img
                        alt="blog photo"
                        src={`${images[0]}`}
                        className="object-cover w-full max-h-40 h-40"
                        loading="lazy"
                    />
                )}

                <div className="w-full p-4 bg-white dark:bg-gray-800">
                    <p className="font-medium text-indigo-500 text-md"></p>
                    <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        {title}
                    </p>
                    <p className="font-light text-gray-400 dark:text-gray-300 text-md h-40">
                        {description}
                    </p>
                    <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                        <p className="text-xl font-bold">{price} BDT</p>
                        <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                            Add to cart
                        </button>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default SingleProducts;
