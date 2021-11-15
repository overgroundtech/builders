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
        }
    }
`

export const CATEGORY_PRODUCTS = gql`
    {
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
            }
        }
    }
`
export const PRODUCT = gql`
query($productId:Int!) {
    product(productId:$productId) {
      id
      name
      price
      description
      images
    }  
  }
`