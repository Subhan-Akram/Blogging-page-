import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import { Auth0Provider } from '@auth0/auth0-react'
import "../styles/Blog.css"
import "../styles/globals.css"
import "../components/header/Header.css"
import "../styles/Home.css"
import "../components/content-section/ContentSection.css"
import "../components/Footer/Footer.css"
import "../components/blog-card/BlogCards.css"
import "../styles/Faq.css"
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Clone and deploy your own Next.js portfolio in minutes."
        />
        <title>My awesome blog</title>
      </Head>

      <Header />

      <main >
        <Component {...pageProps} />
      </main>
    </Auth0Provider>
  )
}
