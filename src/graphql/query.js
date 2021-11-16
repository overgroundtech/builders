import { gql } from '@apollo/client';

export const PRODUCTS_QUERY = gql`
    query{
        products{
            id
            name
            price
            offer
            discount
            images
            categoryId
        }
    }
`

export const CART_QUERY = gql`
query($cartId: String!){
    cart(cartId: $cartId){
        items{
            product{
                id
                name
                price
                images
            }
            unitPrice
            quantity
            total
        }
        summary
        count
    }
}
`


export const CATEGORY_PRODUCTS = gql`
query($cartId: String!){
    categoryProducts{
        category{
            id
            name
            image
        }
        products{
            id
            name
            price
            offer
            discount
            images
            categoryId
        }
    }
    cart(cartId: $cartId){
        items{
            product{
                id
                name
                price
                images
            }
            unitPrice
            quantity
            total
        }
        summary
        count
    }
  }
`
