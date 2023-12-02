import { UserService } from "@/services/users";
import { redirect } from "next/navigation";
import { hasCookie } from "cookies-next";

export default async function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    try {
        const res = await UserService.getUserInfo();

        if (res.statusCode === "401") {
            throw new Error("Unauthorize");
        }

        // if (!hasCookie("auth_token")) {
        //     redirect("/");
        // }

        return (
            <section className="">
                <div className="">{children}</div>
            </section>
        );
    } catch (err) {
        redirect("/");
    }
}
