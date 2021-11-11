import ProductsProvider from './ProductContext';
import CategoryProvider from './CategoryContext';

export default function ContextProvider({children}){

    return (
        <ProductsProvider>
            <CategoryProvider>
                {children}
            </CategoryProvider>
        </ProductsProvider>
    )
}