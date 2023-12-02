import { UserService } from "@/services/users";
import { redirect } from "next/navigation";

export default async function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    try {
        const res = await UserService.getUserInfo();
        // console.log(res);

        if (res.status === "401") {
            throw new Error("Unauthorize");
        }

        return (
            <section className="">
                <div className="">{children}</div>
            </section>
        );
    } catch (err) {
        redirect("/login");
    }
}
