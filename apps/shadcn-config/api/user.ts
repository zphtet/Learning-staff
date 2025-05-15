import { graphql } from "@/gql";
import { LocationsQueryVariables } from "@/gql/graphql";
import { GraphQLClient } from "graphql-request";
const url = "http://localhost:4000/pos";

const client = new GraphQLClient(url);

const token =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU5MWYxNWRlZTg0OTUzNjZjOTgyZTA1MTMzYmNhOGYyNDg5ZWFjNzIiLCJ0eXAiOiJKV1QifQ.eyJlbnYiOiJkZXYiLCJyb2xlcyI6WyJVU0VSIl0sInByb2plY3RzIjpbeyJpZCI6ImNtN25rZ3d0NDAwMDZxbmIzeGt3MGdhYXEiLCJwcm9qZWN0X2lkIjoiY203bmtnd21hMDAwNjR2OWZ2ZGUyOXJoOSIsInJvbGUiOiJPV05FUiIsImFjdGl2ZSI6dHJ1ZSwidXNlcl9pZCI6ImNtN25rZ3drOTAwMDJxbmIzYThtZTJuenUiLCJwcm9qZWN0X3R5cGVfaWQiOiJwb3MiLCJjcmVhdGVkX2F0IjoiMjAyNS0wMi0yN1QxNjozNjoyOS41MjNaIiwidXBkYXRlZF9hdCI6IjIwMjUtMDItMjdUMTY6MzY6MjkuNTIzWiIsInByb2plY3RfdHlwZSI6eyJpZCI6InBvcyIsIm5hbWUiOiJQaXRpWCBQT1MiLCJkZXNjcmlwdGlvbiI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjUtMDItMjdUMTY6MzI6MTguMjcyWiIsInVwZGF0ZWRfYXQiOiIyMDI1LTAyLTI3VDE2OjMyOjE4LjI3MloifX0seyJpZCI6ImNtOGZnMHRwejAwMDExNG40eG4zNzIyYmIiLCJwcm9qZWN0X2lkIjoiY204ZmcwdGtwMDAwMXo4MndpdnQ4dGRuaSIsInJvbGUiOiJPV05FUiIsImFjdGl2ZSI6dHJ1ZSwidXNlcl9pZCI6ImNtN25rZ3drOTAwMDJxbmIzYThtZTJuenUiLCJwcm9qZWN0X3R5cGVfaWQiOiJhcHBvaW50bWVudCIsImNyZWF0ZWRfYXQiOiIyMDI1LTAzLTE5VDA0OjQ5OjMzLjgxNFoiLCJ1cGRhdGVkX2F0IjoiMjAyNS0wMy0xOVQwNDo0OTozMy44MTRaIiwicHJvamVjdF90eXBlIjp7ImlkIjoiYXBwb2ludG1lbnQiLCJuYW1lIjoiUGl0aVggQXBwb2ludG1lbnQiLCJkZXNjcmlwdGlvbiI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjUtMDItMjdUMTY6MzI6MTguMjcyWiIsInVwZGF0ZWRfYXQiOiIyMDI1LTAyLTI3VDE2OjMyOjE4LjI3MloifX1dLCJ1c2VySWQiOiJjbTdua2d3azkwMDAycW5iM2E4bWUybnp1IiwidXNlcm5hbWUiOiJQaXRpIiwicHJvamVjdExpbmtzIjpbeyJpZCI6IjEiLCJuYW1lIjoiU3RvcmUgTG9jYXRpb24gTWFwcGluZyIsImNvZGUiOiJwb3Nfc3RvcmUiLCJzb3VyY2VfaWQiOiJjbTdua2d3cGgwMDBhNHY5Zmc5b2R5aHNuIiwidGFyZ2V0X2lkIjoiY204ZmcwdGx4MDAwM3o4MndvMjY5Y3R2MiIsInNvdXJjZV9uYW1lIjpudWxsLCJ0YXJnZXRfbmFtZSI6bnVsbCwidXNlcl9pZCI6ImNtN25rZ3drOTAwMDJxbmIzYThtZTJuenUifSx7ImlkIjoiMiIsIm5hbWUiOiJCdXNpbmVzcyBNYXBwaW5nIiwiY29kZSI6InBvc19hcHBvaW50bWVudF9idXNpbmVzcyIsInNvdXJjZV9pZCI6ImNtOGZnMHRrcDAwMDF6ODJ3aXZ0OHRkbmkiLCJ0YXJnZXRfaWQiOiJjbTdua2d3bWEwMDA2NHY5ZnZkZTI5cmg5Iiwic291cmNlX25hbWUiOm51bGwsInRhcmdldF9uYW1lIjpudWxsLCJ1c2VyX2lkIjoiY203bmtnd2s5MDAwMnFuYjNhOG1lMm56dSJ9LHsiaWQiOiIzIiwibmFtZSI6IlN0b3JlIExvYWN0aW9uIE1hcHBpbmciLCJjb2RlIjoicG9zX2FwcG9pbnRtZW50X3N0b3JlIiwic291cmNlX2lkIjoiY203bmtnd3BoMDAwYTR2OWZnOW9keWhzbiIsInRhcmdldF9pZCI6ImNtOGZnMHRseDAwMDN6ODJ3bzI2OWN0djIiLCJzb3VyY2VfbmFtZSI6bnVsbCwidGFyZ2V0X25hbWUiOm51bGwsInVzZXJfaWQiOiJjbTdua2d3azkwMDAycW5iM2E4bWUybnp1In0seyJpZCI6ImNtYWJ5eGswaTAwMDBuamc0azk3b3d4bW0iLCJuYW1lIjoiWWFuZ29uX05hcHlpVGF3IiwiY29kZSI6InBvc19hcHBvaW50bWVudF9zdG9yZSIsInNvdXJjZV9pZCI6ImNtN3d0NXlzaTAwMDAydnhvZjE0Z3Fyc3QiLCJ0YXJnZXRfaWQiOiJjbThoM3F6Mm0wMDBkcW9pcjZ2anh3djJvIiwic291cmNlX25hbWUiOiJZR04gU1RPUkUiLCJ0YXJnZXRfbmFtZSI6Ik5heXB5aXRhdyAiLCJ1c2VyX2lkIjoiY203bmtnd2s5MDAwMnFuYjNhOG1lMm56dSJ9XSwiZXhwaXJ5RGF0ZSI6IjIwMjUtMDUtMzBUMDU6MjU6MjcuMDcxWiIsInVzZXJMZXZlbCI6MCwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BpdGktYWkiLCJhdWQiOiJwaXRpLWFpIiwiYXV0aF90aW1lIjoxNzQ2ODczMzkyLCJ1c2VyX2lkIjoiY203bmtnd2s5MDAwMnFuYjNhOG1lMm56dSIsInN1YiI6ImNtN25rZ3drOTAwMDJxbmIzYThtZTJuenUiLCJpYXQiOjE3NDY4NzMzOTIsImV4cCI6MTc0Njg3Njk5MiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJjdXN0b20ifX0.H_hI6UfNhFbrYG3s2ZOEUgIbczXWcOOEs-A4mAmGyFrCG8XcQe-2_I3rBdXtk2pJqRhee9UGMEnkx6BLVYrOI6UVDbBpJX543oU46VbndyRuEql1Z2WJJCE6LIP1qiEPZQ8-s-c71MJg8S7taJ5lt8G6xvzTIZ_3p3HwOPw3Un0sxe3zRvKMnLqTfxw2yCqorPdmX2xr1nS-MVzjbHVXHCSHOOLlvU3NomfbZh3ByIT4nI2F2KLmu52X6mdTHzkwIgz0sGLQ9dqEIGIbFcCNejdNf-7tGnRC_5v5P6MEn2R4HFX9F9QREFHIPfb8gBXxIUgOQNsujiIvRmdmHegedQ";

// export const getAllUsers = async () => {
//   client.setHeader("Authorization", `Bearer ${token}`);
//   client.setHeader("x-project-id", "cm8fg0tkp0001z82wivt8tdni");
//   return await client.request(GET_ALL_USERS_QUERY, {});
// };

const LOCATIONS_QUERY = graphql(`
  query Locations(
    $where: LocationWhereInput
    $orderBy: [LocationOrderByWithRelationInput!]
    $take: Int
    $skip: Int
  ) {
    locations(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      id
      name
      address_id
      business_id
      address {
        id
        type
      }
    }
  }
`);

export const getAllLocations = async (variables: LocationsQueryVariables) => {
  client.setHeader("Authorization", `Bearer ${token}`);
  client.setHeader("x-project-id", "cm7nkgwma00064v9fvde29rh9");
  return await client.request(LOCATIONS_QUERY, variables);
};

const GET_ALL_PRODUCTS_QUERY = graphql(`
  query Products {
    products {
      id
      name
      type
      active
      sku
    }
  }
`);

export const getAllProducts = async () => {
  client.setHeader("Authorization", `Bearer ${token}`);
  client.setHeader("x-project-id", "cm7nkgwma00064v9fvde29rh9");
  return client.request(GET_ALL_PRODUCTS_QUERY, {});
};

export type SingleProduct = Awaited<
  ReturnType<typeof getAllProducts>
>["products"][number];

// const getProductById = async (id: string) => {
//   const products = await getAllProducts();
//   return products.products.find((product) => product.id === id);
// };
