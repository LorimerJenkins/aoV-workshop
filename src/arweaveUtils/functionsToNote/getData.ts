// source: https://gql-guide.vercel.app
import { arGql } from "ar-gql";

export async function getData(tags: { name: string; values: string[] }[]) {
  const gql = arGql("https://arweave-search.goldsky.com/graphql");
  const query = `
    query GetTransactions($cursor: String, $latestBlock: Int, $tags: [TagFilter!]) {
      transactions(
        tags: $tags
        sort: HEIGHT_ASC
        first: 100
      ) {
        edges {
          node {
            id
            anchor
            signature
            recipient
            owner {
              address
              key
            }
            fee {
              winston
              ar
            }
            quantity {
              winston
              ar
            }
            data {
              size
              type
            }
            tags {
              name
              value
            }
            block {
              id
              timestamp
              height
              previous
            }
            parent {
              id
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `;

  const response = await gql.run(query, { tags });

  return response.data.transactions.edges;
}
