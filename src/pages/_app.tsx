/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import "../styles/index.css";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken && router.pathname !== "/auth") {
      router.replace("/auth");
    } else if (
      accessToken &&
      (router.pathname === "/auth" || router.pathname === "/")
    ) {
      router.replace("/feed");
    }
  }, [router, router.pathname]);
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
