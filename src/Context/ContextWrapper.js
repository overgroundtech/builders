import ProductsProvider from './ProductContext';
import CategoryProvider from './CategoryContext';
import CartProvider from "./CartContext";
import AlertProvider from './alertContext';
import UserProvider from './UserContext';

export default function ContextProvider({children}){

    return (
        <ProductsProvider>
            <CartProvider>
                <CategoryProvider>
                    <UserProvider>
                    <AlertProvider>
                        {children}
                    </AlertProvider>
                    </UserProvider>
                </CategoryProvider>
            </CartProvider>
        </ProductsProvider>
    )
}