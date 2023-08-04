import '../styles/globals.scss'
import React, {useState, useEffect} from 'react'
import Head from "next/head";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { isTouchDevice } from "../utils/helpers";

function MyApp({ Component, pageProps }) {
    const [isClient, setIsClient] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setIsTouch(isTouchDevice());
      }, []);

  let dndBackend = HTML5Backend;

  if (isTouchDevice) {
    dndBackend = TouchBackend;
  }

  return (
      <>
          <Head>
              <title>Langy</title>
              <meta name="описание" content="Уроки английского языка"/>
          </Head>
          {isClient && (
            <DndProvider backend={isTouch ? TouchBackend : HTML5Backend}>    
               <Component {...pageProps} />
          </DndProvider>
          )}
      
      </>
        )
}

export default MyApp