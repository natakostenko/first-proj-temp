import { useContext } from "react";
import { ProductsContext } from "./ProductsProvider";

export const useProductsContext = () => {
    const context = useContext(ProductsContext);

    return context;
}