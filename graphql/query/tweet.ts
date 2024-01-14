import { graphql } from "@/gql";

export const getAllTweetQuery =graphql(`
 #graphql
 query GetAllTweets {
    getAllTweets {
      imageUrl
      id
      content
      author {
        firstName
        lastName
        profileImageUrl
      }
    }
  }
`)