import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { gql, GraphQLClient } from 'graphql-request';

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Create a GraphQL client
export const createGraphQLClient = (url: string, headers?: HeadersInit) => {
  return new GraphQLClient(url, { headers });
};

// Custom hook to use the generated GraphQL queries with TanStack Query
export function useGraphQLQuery<TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: {
    endpoint?: string;
    headers?: HeadersInit;
    queryOptions?: Parameters<typeof useQuery>[2];
  }
) {
  const endpoint = options?.endpoint || '/api/graphql';
  const client = createGraphQLClient(endpoint, options?.headers);
  
  return useQuery({
    queryKey: [document.toString(), variables],
    queryFn: async () => {
      const result = await client.request(document, variables);
      return result;
    },
    ...options?.queryOptions,
  });
}

// Custom hook for mutations
export function useGraphQLMutation<TData, TVariables>(
  document: TypedDocumentNode<TData, TVariables>,
  options?: {
    endpoint?: string;
    headers?: HeadersInit;
    mutationOptions?: Parameters<typeof useMutation>[1];
  }
) {
  const endpoint = options?.endpoint || '/api/graphql';
  const client = createGraphQLClient(endpoint, options?.headers);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (variables: TVariables) => {
      const result = await client.request(document, variables);
      return result;
    },
    ...options?.mutationOptions,
  });
}

// Export components for easy setup
export { QueryClientProvider, ReactQueryDevtools };


import { graphql } from "@/gql";


const GET_PRODUCTS_QUERY = graphql(`
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


// Example of using the query hook with proper typing
export function useGetUser(id: string) {
  return useGraphQLQuery(
    GET_PRODUCTS_QUERY,
    {
      where: {
        active: true,
      },
    },
    {
      enabled: !!id,
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );
}

// Usage example
// const { data, isLoading, error } = useGetUser('123');