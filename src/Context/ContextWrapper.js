import ProductsProvider from './ProductContext';
import CategoryProvider from './CategoryContext';
import CartProvider from "./CartContext";

export default function ContextProvider({children}){

    return (
        <ProductsProvider>
            <CartProvider>
                <CategoryProvider>
                    {children}
                </CategoryProvider>
            </CartProvider>
        </ProductsProvider>
    )
}