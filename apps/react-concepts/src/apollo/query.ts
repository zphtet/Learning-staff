import { gql } from "@apollo/client";


export const GET_QUERY = gql`

query Users {
  users {
     email
     password  
  }
}
`