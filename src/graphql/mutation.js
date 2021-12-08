import {gql} from '@apollo/client';

export const REGISTER = gql`
    mutation($username: String! $email: String! $password: String! $password1: String!){
        createUser(username: $username email: $email password: $password password1: $password1){
            success
        }
    }
`

export const TOKEN_AUTH = gql`
    mutation($username: String! $password: String! ){
        tokenAuth(username: $username password: $password){
            token
            user{
                id
                username
                email
            }
        }
    }
`

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
