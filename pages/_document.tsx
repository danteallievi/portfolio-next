import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=MonteCarlo&family=Poppins:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="author" content="Dante Allievi" />
        <meta name="copyright" content="Dante Allievi" />
        <meta
          name="keywords"
          content="html,css,javaScript,next.js,portfolio,react,dante,allievi,dante allievi,developer,full,stack,software,web"
        />
        <meta
          name="description"
          content="Dante Allievi portfolio, made with Next.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
