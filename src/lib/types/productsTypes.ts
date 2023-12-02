export interface ProductsType {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: Date;
    updatedAt: Date;
    category: Category;
}

export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}
