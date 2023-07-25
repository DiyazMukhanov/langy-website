import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link crossOrigin="true" rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link crossOrigin="true" rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

