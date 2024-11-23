"use client";
import { PropsWithChildren, useEffect, useState } from "react";

const LoadProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadFn = () => {
      setLoading(false);
      console.log("loading ...");
    };
    window.addEventListener("load", loadFn);

    return () => {
      window.removeEventListener("load", loadFn);
    };
  }, []);
  return loading ? (
    <p style={{ fontSize: "30px" }}>Loading ...</p>
  ) : (
    <>{children}</>
  );
};

export default LoadProvider;
