import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined"
import IconButton from "@mui/material/IconButton"

export default function Portfolio() {
  const boxStyle = {
    my: 4,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "5vh 5vw",
    borderRadius: "3%",
    background: "#fef9f3",
    transition: "all 0.7s",
    margin: "5vh auto",
    maxWidth: "764px",
    "&:hover": {
      marginTop: "4.5vh",
      marginBottom: "5.5vh",
      boxShadow: "2px 2px 3px 2px grey",
    },
  }

  const typeStyle = {
    color: "#363636",
  }

  const imgStyle = {
    borderRadius: "3%",
    maxHeight: "100%",
    maxWidth: "100%",
  }

  const imgContainerStyle = {
    height: "70%",
  }

  return (
    <>
      <Grid spacing={4}>
        <Grid sx={boxStyle} xs={12} sm={6} md={4}>
          <Typography variant="subtitle1" component="h1" sx={typeStyle}>
            Web App (NextJS + CMS)
          </Typography>
          <Typography variant="h4" component="h1" sx={typeStyle}>
            Movie Database Site
          </Typography>
          <IconButton
            style={{
              color: "rgba(0, 0, 0, 0.87)",
              margin: "auto",
            }}
            href="https://haewook-lee.github.io/movie-site"
          >
            <TheatersOutlinedIcon sx={{ fontSize: "14rem" }} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}
