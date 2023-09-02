import '../styles/globals.scss'
import React from 'react'
import Head from "next/head";
import UserProvider from '@/store/userContext';

function MyApp({ Component, pageProps }) {
 
  return (
      <>
          <Head>
              <title>Langy - Онлайн платформа для изучения английского языка</title>
              <meta name="описание" content="Онлайн уроки английского языка"/>
          </Head>  
              <UserProvider>
                 <Component {...pageProps} />
              </UserProvider> 
      </>
        )
}

export default MyApp