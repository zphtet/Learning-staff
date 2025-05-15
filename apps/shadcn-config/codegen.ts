import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/pos",
  documents: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "lib/**/*.{ts,tsx}",
    "api/**/*.{ts,tsx}",
  ],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
    "./api/generated/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: {
          endpoint: "http://localhost:4000/pos",
          fetchParams: {
            headers: {
              "Content-Type": "application/json",
            },
          },
        },
        exposeQueryKeys: true,
        exposeFetcher: true,
        withHooks: true,
        dedupeFragments: true,
      },
    },
  },
};

export default config;
