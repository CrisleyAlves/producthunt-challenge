import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/posts/queries";

/**
 * Custom React hook to fetch posts using Apollo Client's `useQuery` hook.
 *
 * @param {Object} params - The parameters for querying posts.
 * @param {number} params.first - The number of posts to fetch.
 * @param {string} params.order - The order in which to fetch posts (e.g., "ASC", "DESC").
 * @param {Date} params.postedBefore - Fetch posts posted before this date.
 * @param {Date} params.postedAfter - Fetch posts posted after this date.
 * @param {string} [params.topic] - (Optional) Filter posts by topic.
 * @param {string | null} [params.after] - (Optional) Cursor for pagination.
 * @returns {{ loading: boolean, data: any, refetch: Function }} An object containing the loading state, fetched data, and a refetch function.
 *
 * @example
 * const { loading, data, refetch } = usePostsQuery({
 *   first: 10,
 *   order: "DESC",
 *   postedBefore: new Date(),
 *   postedAfter: new Date("2023-01-01"),
 *   topic: "technology",
 *   after: null,
 * });
 */
export default function usePostsQuery({
  first,
  order,
  postedBefore,
  postedAfter,
  topic,
  after,
}: {
  first: number;
  order: string;
  postedBefore: Date;
  postedAfter: Date;
  topic?: string;
  after?: string | null;
}) {
  const { loading, data, refetch } = useQuery(GET_POSTS, {
    variables: {
      first,
      order,
      postedBefore,
      postedAfter,
      topic,
      after,
    },
  });

  return { loading, data, refetch };
}
