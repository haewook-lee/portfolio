import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import React from "react"
import Grid from "@mui/material/Grid"
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined"
import { FitnessCenterOutlined } from "@mui/icons-material"
import { WorkOutlined } from "@mui/icons-material"
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
    pl: "0 !important",
    mt: 6,
    mx: "auto",
    display: "flex",
    flexDirection: "column",
    height: "100px",
    width: "60%",
    borderRadius: "40%",
    background: "#ececec",
    transition: "all 0.7s",
    "&:hover": {
      borderRadius: "3%",
      boxShadow: "5px 5px 7px 5px #88bdbc",
      width: "90%",
      height: "150px",
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
      <Box>
        <Box
          sx={{
            mt: 8,
            mb: 2,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            maxWidth: 680,
          }}
        >
          <Typography variant="h2" component="h1">
            HAEWOOK LEE
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom>
            Software Developer
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom>
            Hi, there! I'm a self-taught software developer and ex-lawyer. I
            love building web apps and messing around with new tech.
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
        </Box>
        <Box
        // sx={{
        //   mt: 16,
        //   mx: "auto",
        //   display: "flex",
        //   flexDirection: "column",
        //   maxWidth: 680,
        // }}
        >
          {/* <Typography variant="h3" component="h1" gutterBottom>
            Works
          </Typography> */}
          <Grid
            sx={{
              maxWidth: 680,
              mx: "auto",
              pb: "150px",
            }}
            container
            spacing={2}
          >
            <Grid
              item
              sx={{ pl: "0 !important" }}
              xs={12}
              sm={4}
              // md={3}
              className="bubble"
            >
              <Box sx={boxStyle}>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={typeStyle}
                  className="bubble-text"
                >
                  Company Site{" "}
                </Typography>

                <IconButton
                  style={{
                    color: "#112d32",
                    margin: "auto",
                  }}
                  href="https://company-site-xi.vercel.app"
                >
                  <WorkOutlined
                    sx={{ fontSize: "4rem" }}
                    className="bubble-icon"
                  />
                </IconButton>
              </Box>
            </Grid>
            <Grid
              sx={{ pl: "0 !important" }}
              item
              xs={12}
              sm={4}
              // md={3}
              className="bubble"
            >
              <Box sx={boxStyle}>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={typeStyle}
                  className="bubble-text"
                >
                  Workout Database & Tracker{" "}
                </Typography>

                <IconButton
                  style={{
                    color: "#112d32",
                    margin: "auto",
                  }}
                  href="https://lifting-fit.vercel.app"
                >
                  <FitnessCenterOutlined
                    sx={{ fontSize: "4rem" }}
                    className="bubble-icon"
                  />
                </IconButton>
              </Box>
            </Grid>
            <Grid
              sx={{ pl: "0 !important" }}
              item
              xs={12}
              sm={4}
              // md={3}
              className="bubble"
            >
              <Box sx={boxStyle}>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={typeStyle}
                  className="bubble-text"
                >
                  Movie Database Site{" "}
                </Typography>
                <IconButton
                  style={{
                    color: "#112d32",
                    margin: "auto",
                  }}
                  href="https://haewook-lee.github.io/movie-site"
                >
                  <TheatersOutlinedIcon
                    sx={{ fontSize: "4rem" }}
                    className="bubble-icon"
                  />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
