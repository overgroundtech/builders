import ProductsProvider from './ProductContext';
import CategoryProvider from './CategoryContext';
import CartProvider from "./CartContext";
import AlertProvider from './alertContext';

export default function ContextProvider({children}){

    return (
        <ProductsProvider>
            <CartProvider>
                <CategoryProvider>
                    <AlertProvider>
                        {children}
                    </AlertProvider>
                </CategoryProvider>
            </CartProvider>
        </ProductsProvider>
    )
}