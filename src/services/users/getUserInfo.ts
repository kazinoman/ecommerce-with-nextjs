import { SERVER_BASE_URL } from "@/lib/utils/constant";
import { getCookie } from "cookies-next";

export const getUserInfo = async () => {
    console.log(getCookie("auth_token"));

    const res = await fetch(`${SERVER_BASE_URL}/auth/profile`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${getCookie("auth_token")}`,
        },
    });
    return await res.json();
};
