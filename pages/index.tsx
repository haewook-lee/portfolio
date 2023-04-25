import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import React from "react"
import Grid from "@mui/material/Grid"
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined"
import { FitnessCenterOutlined } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import Head from "next/head"

import { SocialIcon } from "react-social-icons"
import Fade from "react-awesome-reveal"

export default function Home() {
  const iconStyle = {
    margin: "0.5rem",
    opacity: "0.75",
    "&:hover": {
      opacity: "1",
    },
  }

  const iconStyle2 = {
    margin: "0.5rem",
    opacity: "0.75",
    height: 30,
    width: 30,
    "&:hover": {
      opacity: "1",
    },
  }
  const boxStyle = {
    my: 12,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "5vh 5vw",
    borderRadius: "3%",
    background: "#ececec",
    transition: "all 0.7s",
    margin: "5vh auto",
    maxWidth: "800px",
    "&:hover": {
      boxShadow: "5px 5px 7px 5px #88bdbc",
    },
  }

  const typeStyle = {
    color: "#112d32",
  }

  return (
    <>
      <Head>
        <title>Haewook Lee</title>
      </Head>
      <Box
        sx={{
          my: 8,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          maxWidth: 680,
        }}
      >
        {/* <Image src="/compy.png" alt="Hero picture" width={400} height={300} /> */}
        {/* <Fade> */}
        <Typography variant="h3" component="h1">
          HAEWOOK LEE.
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Software Developer
        </Typography>
        <Typography component="p" gutterBottom>
          Hi, there! I'm a self-taught software developer and ex-lawyer. I love
          building web apps and messing around with new tech.
        </Typography>
        <Box>
          <SocialIcon
            url="https://github.com/haewook-lee"
            style={iconStyle}
            bgColor="#112d32"
            fgColor="#fef9f3"
          />
          <SocialIcon
            url="https://linkedin.com/in/haewook-lee-232bba4a"
            style={iconStyle}
            bgColor="#112d32"
            fgColor="#fef9f3"
          />
          <SocialIcon
            url="mailto:20hwlee@gmail.com"
            style={iconStyle}
            bgColor="#112d32"
            fgColor="#fef9f3"
          />
        </Box>
        {/* </Fade> */}
      </Box>
      <Grid sx={{ pt: "10vh" }} spacing={4}>
        <Fade cascade damping={0.1}>
          <Grid sx={boxStyle} xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" component="h1" sx={typeStyle}>
              Web App (NextJS + MongoDB)
            </Typography>
            <Typography variant="h4" component="h1" sx={typeStyle}>
              Workout Database & Tracker (WIP){" "}
              <SocialIcon
                url="https://github.com/haewook-lee/lifting-fit"
                style={iconStyle2}
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
        </Fade>
        <Fade>
          <Grid sx={boxStyle} xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" component="h1" sx={typeStyle}>
              Web App (NextJS + CMS)
            </Typography>
            <Typography variant="h4" component="h1" sx={typeStyle}>
              Movie Database Site{" "}
              <SocialIcon
                url="https://github.com/haewook-lee/movie-site"
                style={iconStyle2}
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
        </Fade>
      </Grid>
    </>
  )
}
