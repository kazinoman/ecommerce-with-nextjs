import { ProductsService } from "@/services/products";
import type { Metadata } from "next";

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

// set metaData dynamically
export async function generateMetadata({
    params,
    searchParams,
}: Props): Promise<Metadata> {
    // read route params
    const id = params.slug;

    // fetch data
    const SingleProduct = await ProductsService.getSingleProduct(id);

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []

    return {
        title: SingleProduct.title,
        description: SingleProduct.description,
    };
}

export default async function SingleProductPage({
    params,
}: {
    params: { slug: string };
}) {
    const SingleProduct = await ProductsService.getSingleProduct(params.slug);

    const metadata: Metadata = {
        title: SingleProduct.title,
        description: SingleProduct.description,
    };

    return (
        <div className="max-w-6xl mx-auto p-10 flex flex-row gap-20">
            {/* Image */}
            <div className="w-[50%]">
                <img
                    alt={`${SingleProduct.title}`}
                    src={`${SingleProduct.images[0]}`}
                    className="h-[30rem] w-[25rem] rounded-lg"
                />
                <div className="flex flex-row gap-5 mt-5">
                    {SingleProduct.images.map((data: any, id: number) => {
                        return (
                            <img
                                src={`${data}`}
                                className="h-[7rem] w-[7rem] rounded-lg"
                            />
                        );
                    })}
                </div>
            </div>
            <div className="text-white flex flex-col gap-8 w-[50%]">
                <h1 className="text-2xl font-bold uppercase">
                    Name : {SingleProduct.title}
                </h1>
                <h1>Price : {SingleProduct.price} BDT</h1>
                <p className="text-sm text-gray-400 uppercase">
                    Description : {SingleProduct.description}
                </p>
                <div className="flex flex-col gap-5">
                    <p className="text-white font-bold text-lg underline">
                        Category
                    </p>
                    <p>Name : {SingleProduct.category.name}</p>
                    <img
                        alt=""
                        src={`${SingleProduct.category.image}`}
                        className="h-[4rem] w-[4rem] rounded-lg"
                    />
                </div>
                <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row mt-auto">
                    {/* <p className="text-xl font-bold">{price} BDT</p> */}
                    <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-white rounded-full hover:bg-gray-800 text-white focus:outline-none">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
