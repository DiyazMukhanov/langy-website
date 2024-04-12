import "../styles/globals.scss";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import UserProvider from "@/store/userContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "../lib/react-query-config";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient(config));

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Langy - Онлайн платформа для изучения английского языка</title>
      </Head>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
