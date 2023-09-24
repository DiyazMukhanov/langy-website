import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
 
export default function Document() {
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev' ? 'dev' : `production`
  
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link crossOrigin="true" rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      <meta name="description" content="Уроки английского языка онлайн"/>
      <meta name="описание" content="Онлайн уроки английского языка"/>
      {process.env.NEXT_PUBLIC_ENVIRONMENT === `production` && (
          <Script
          id='yandex'
          strategy="beforeInteractive"
            >
          {`  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(94815906, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
          });`}  
          </Script>
      )}

      {process.env.NEXT_PUBLIC_ENVIRONMENT === `production` && (
          <Script
          async src="https://www.googletagmanager.com/gtag/js?id=G-BD995SMJR5"
            ></Script>
      )}
      {process.env.NEXT_PUBLIC_ENVIRONMENT === `production` && (
          <Script>
           { `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BD995SMJR5')`}
          </Script>
      )}			
     
        </Head>
      <body>
        <Main />
        {<noscript>
        <div><img src="https://mc.yandex.ru/watch/94815906" style={{ position: 'absolute', left: '-9999px' }} alt="" /></div>
        </noscript>
      }
        <NextScript />
      </body>
    </Html>
  )
}

