import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/globals.css"

// Step 1️⃣: UI Implementation - App Component
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
