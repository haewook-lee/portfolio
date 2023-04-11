import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined"
import { FitnessCenterOutlined } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import { SocialIcon } from "react-social-icons"

import FadeIn from "../../components/FadeIn"

export default function Portfolio() {
  const iconStyle = {
    margin: "0.5rem",
    opacity: "0.75",
    height: 30,
    width: 30,
    "&:hover": {
      opacity: "1",
    },
  }
  const boxStyle = {
    my: 4,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "5vh 5vw",
    borderRadius: "3%",
    background: "#ececec",
    // background: "#88bdbc",
    transition: "all 0.7s",
    margin: "5vh auto",
    maxWidth: "764px",
    "&:hover": {
      // marginTop: "4.5vh",
      // marginBottom: "5.5vh",
      boxShadow: "5px 5px 7px 5px #88bdbc",
    },
  }

  const typeStyle = {
    color: "#112d32",
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
      <FadeIn>
        <Grid spacing={4}>
          <Grid sx={boxStyle} xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" component="h1" sx={typeStyle}>
              Web App (NextJS + MongoDB)
            </Typography>
            <Typography variant="h4" component="h1" sx={typeStyle}>
              Workout Database/Tracker (WIP){" "}
              <SocialIcon
                url="https://github.com/haewook-lee/lifting-fit"
                style={iconStyle}
                bgColor="#112d32"
                fgColor="#fef9f3"
              />
            </Typography>

            <IconButton
              style={{
                color: "#112d32",
                margin: "auto",
              }}
              href="https://lifting-fit.vercel.app"
            >
              <FitnessCenterOutlined sx={{ fontSize: "14rem" }} />
            </IconButton>
          </Grid>
          <Grid sx={boxStyle} xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" component="h1" sx={typeStyle}>
              Web App (NextJS + CMS)
            </Typography>
            <Typography variant="h4" component="h1" sx={typeStyle}>
              Movie Database Site{" "}
              <SocialIcon
                url="https://github.com/haewook-lee/movie-site"
                style={iconStyle}
                bgColor="#112d32"
                fgColor="#fef9f3"
              />
            </Typography>
            <IconButton
              style={{
                color: "#112d32",
                margin: "auto",
              }}
              href="https://haewook-lee.github.io/movie-site"
            >
              <TheatersOutlinedIcon sx={{ fontSize: "14rem" }} />
            </IconButton>
          </Grid>
        </Grid>
      </FadeIn>
    </>
  )
}
