import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

export const metadata = {
    title: "about page",
    description: "This is a about page.",
    keywords: "about us, web development, web design, javascript",
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="">
            <Header />
            <div className="">{children}</div>
            <Footer />
        </section>
    );
}
