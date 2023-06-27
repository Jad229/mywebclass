"use client";
import "@/styles/global.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

const siteTitle = "MyWebClass.org";

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <Head>
        <title>{siteTitle}</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="keywords" content="mywebclass" />
        <meta name="author" content="NJIT" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Z5D34KTQ41"
      />

      {/* Using nextjs script Component for third party scripts 
      strategy prop is allowing all js and interactives to load before 
      trying to gather data */}

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Z5D34KTQ41');
      `}
      </Script>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
