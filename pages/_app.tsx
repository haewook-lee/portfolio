import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import ButtonAppBar from "../components/SimpleNavBar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ButtonAppBar />
      <Component {...pageProps} />
    </Layout>
  )
}
