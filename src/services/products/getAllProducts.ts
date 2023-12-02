import { SERVER_BASE_URL } from "@/lib/utils/constant";

export const getAllProducts = async () => {
    const res = await fetch(`${SERVER_BASE_URL}/products`, {
        cache: "no-cache",
    });
    return res.json();
};
