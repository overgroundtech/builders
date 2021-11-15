import {gql} from '@apollo/client';

export const ADD_ITEM = gql`
mutation($cartId: String! $productId: Int! $quantity: Int!){
    addItem(cartId: $cartId productId: $productId quantity: $quantity){
        success
        cart{
            items{
                product{
                    id
                    name
                    price
                }
                unitPrice
                quantity
                total
            }
            summary
            count
        }
    }
}
`