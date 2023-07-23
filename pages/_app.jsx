import '../styles/globals.scss'
import React from 'react'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <title>Langy</title>
              <meta name="описание" content="Уроки английского языка"/>
          </Head>
      <Component {...pageProps} />
      </>
        )
}

export default MyApp