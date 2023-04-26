import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#88bdbc",
      }}
    >
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#88bdbc",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box sx={{ display: "block" }}>
            <Button sx={{ color: "#fff" }} href="/">
              Home
            </Button>
            <Button sx={{ color: "#fff" }} href="/blog">
              Blog
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
