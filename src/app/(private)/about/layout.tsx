import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

export const metadata = {
    title: "about page",
    description: "This is a about page.",
    keywords: "about us, web development, web design, javascript",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="">
            <Header />
            <div className="mb-auto h-full">{children}</div>
            <Footer />
        </section>
    );
}
