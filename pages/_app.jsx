import '../styles/globals.scss'
import React from 'react'
import Head from "next/head";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";


function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <title>Langy</title>
              <meta name="описание" content="Уроки английского языка"/>
          </Head>
      <DndProvider backend={TouchBackend}>    
        <Component {...pageProps} />
      </DndProvider>
      </>
        )
}

export default MyApp