import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link crossOrigin="true" rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      
        </Head>
      <body>
        <Main />
        <NextScript />
        
         <script dangerouslySetInnerHTML={ {
          __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
       
          ym(94815906, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true
          }););`,
      } }
/>
      

      {<noscript>
        <div><img src="https://mc.yandex.ru/watch/94815906" style={{ position: 'absolute', left: '-9999px' }} alt="" /></div>
    </noscript>
      }
      </body>
    </Html>
  )
}

