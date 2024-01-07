import '../styles/globals.scss'
import React, { useEffect } from 'react'
import Head from "next/head";
import UserProvider from '@/store/userContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    })
  }, [])

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