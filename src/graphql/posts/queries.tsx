import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts(
    $first: Int
    $order: PostsOrder
    $postedAfter: DateTime
    $postedBefore: DateTime
    $after: String
    $topic: String
  ) {
    posts(
      first: $first
      order: $order
      postedAfter: $postedAfter
      postedBefore: $postedBefore
      after: $after
      topic: $topic
    ) {
      pageInfo {
        endCursor
        hasPreviousPage
        startCursor
        hasNextPage
      }
      totalCount
      edges {
        cursor
        node {
          id
          name
          description
          createdAt
          tagline
          url
          votesCount
          createdAt
          thumbnail {
            url
          }
          media {
            url
            type
          }
        }
      }
    }
  }
`;
