import { graphql } from "@/gql";

export const getAllTweetQuery =graphql(`
 #graphql
 query GetAllTweets {
    getAllTweets {
      imageUrl
      id
      content
      author {
        id
        firstName
        lastName
        profileImageUrl
      }
    }
  }
`)