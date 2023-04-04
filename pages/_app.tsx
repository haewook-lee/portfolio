import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../src/Layout"
import ButtonAppBar from "../src/SimpleNavBar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ButtonAppBar />
      <Component {...pageProps} />
    </Layout>
  )
}
