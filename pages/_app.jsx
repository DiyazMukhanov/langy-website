import '../styles/globals.scss'
import React from 'react'
import Head from "next/head";
import UserProvider from '@/store/userContext';

function MyApp({ Component, pageProps }) {
 
  return (
      <>
          <Head>
          <title>Langy - Онлайн платформа для изучения английского языка</title>
          </Head>  
              <UserProvider>
                 <Component {...pageProps} />
              </UserProvider> 
      </>
        )
}

export default MyApp