import { createContext, useState } from "react";
import { products } from "./ProductsData";

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
    const {children} = props;

    const contextData = {
        ...products
    }

    return (
        <ProductsContext.Provider value={contextData}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;