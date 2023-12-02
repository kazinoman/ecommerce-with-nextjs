import { SERVER_BASE_URL } from "@/lib/utils/constant";
import { getCookie } from "cookies-next";

export const getUserInfo = async () => {
    const res = await fetch(`${SERVER_BASE_URL}/auth/profile`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${getCookie("auth_token")}`,
        },
    });
    return await res.json();
};
