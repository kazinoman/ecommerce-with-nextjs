import { SERVER_BASE_URL } from "@/lib/utils/constant";

export const getSingleProduct = async (id: string) => {
    const res = await fetch(`${SERVER_BASE_URL}/products/${parseInt(id)}`, {
        cache: "no-cache",
    });
    return res.json();
};
