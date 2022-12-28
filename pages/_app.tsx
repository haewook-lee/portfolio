import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../src/Layout"
import NavBar from "../src/NavBar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NavBar />
      <Component {...pageProps} />
    </Layout>
  )
}
