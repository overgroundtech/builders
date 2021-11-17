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
  }
`
export const REMOVE_ITEM = gql`
mutation($cartId: String! $productId: Int!){
    removeItem(cartId: $cartId productId: $productId){
        success
        cart{
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
  }
`

export const UPDATE_ITEM = gql`
mutation($cartId: String! $productId: Int! $quantity: Int!){
    updateItem(cartId: $cartId productId: $productId quantity: $quantity){
      success
          cart{ 
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
  }
`
