import React, { ReactNode } from "react"
import Head from "next/head"
import Container from "@mui/material/Container"
import NavBar from "./HamburgerNavBar"
import ToolBar from "@mui/material/Toolbar"
import Box from "@mui/material/Box"
import ButtonAppBar from "./SimpleNavBar"

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Haewook Lee</title>
        <meta name="description" content="Haewook Lee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ToolBar />
      <Container
        maxWidth="lg"
        style={{
          marginBottom: 0,
          paddingBottom: 0,
        }}
      >
        <main>{children}</main>
      </Container>
    </>
  )
}
