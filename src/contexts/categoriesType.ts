export interface CategoryProps {
    id: number;
    name: string;
    color: string;
}
export type CategoriesType = {
    cateList: CategoryProps[];
}