import { SERVER_BASE_URL } from "@/lib/utils/constant";

export const userLogin = async (data: { email: string; password: string }) => {
    const res = await fetch(`${SERVER_BASE_URL}/auth/login`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        body: JSON.stringify({
            email: data.email,
            password: data.password,
        }),
    });
    return await res.json();
};
