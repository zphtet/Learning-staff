"use client";

import { fetchWithRetry, getAllProducts } from "@/test";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Products = () => {
  //   const { isLoading, isError, data } = useQuery({
  //     queryKey: ["products"],
  //     queryFn: () =>
  //       getAllProducts({ category: "general", limit: 10 }, "unauthorized"),
  //   });

  //   if (isLoading) return <div>Loading...</div>;
  //   if (isError) return <div>Error</div>;

  //   return <div>Products : {JSON.stringify(data)}</div>;
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetchWithRetry(
      () => getAllProducts({ category: "general", limit: 10 }, "expired"),
      {
        retries: 3,
        delayMs: 1000,
      },
    )
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((err) => {
        console.error(`Final failure: ${err.message} (status: ${err.status})`);
      });
  }, []);
  return <div>Products {success ? "Success" : "Error"}</div>;
};

export default Products;
