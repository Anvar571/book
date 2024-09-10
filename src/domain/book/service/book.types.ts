import { Author } from "../../author/author";
import { Category } from "../../category/category";

export type BookModel = {
    title: string;
    author: Author;
    category: Category;
    description: string;
    published_year: number;
    updated_at?: Date;
};
