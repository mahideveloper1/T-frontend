import { graphql } from "@/gql"



export const verifyUserGoogleToken =graphql(`
#graphql
query  VerifyUserGoogleToken($token:String!){
    verifyGoogleToken(token: $token)
}
`)
export const getCurrentUserQuery =graphql(`
  query GetCurrentUser {
    getCurrentUser {
      id
      firstName
      email
      profileImageUrl
      lastName
      tweets{
        id
        content 
        author{
          firstName
          lastName
          profileImageUrl

        }
      }
    }
  }
`)
export const getUserByIdQuery =graphql(`
query GetUserById($id: ID!) {
  getUserById(id: $id) {
    profileImageUrl
    lastName
    id
    firstName
    tweets {
      imageUrl
      content
      author {
        lastName
        profileImageUrl
        firstName
      }
    }
  }
}
`)



