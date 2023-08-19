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

export default function Home() {
  const iconStyle = {
    margin: "0.5rem",
    opacity: "0.75",
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
    height: "250px",
    background: "#ececec",
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
          <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
            Hey there.
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom>
            I'm Haewook Lee. I'm a software developer that likes to make things.
          </Typography>
        </Box>
        <Box>
          <Grid
            sx={{
              maxWidth: 920,
              mx: "auto",
              pb: "150px",
            }}
            container
            spacing={0}
            style={{ overflowX: "hidden" }}
          >
            <Grid item sx={{ pl: "0 !important", mx: "auto" }} xs={10} sm={4}>
              <Box sx={boxStyle} className="bubble">
                <Typography
                  variant="h6"
                  component="h1"
                  sx={typeStyle}
                  className="bubble-text"
                >
                  Company Site{"\n"}
                  <Typography component="p">
                    A mock-up of a modern company website.
                  </Typography>
                </Typography>

                <IconButton
                  style={{
                    color: "#112d32",
                    margin: "auto",
                    height: "100%",
                    width: "100%",
                  }}
                  disableRipple
                  href="https://company-site-xi.vercel.app"
                >
                  <WorkOutlined
                    sx={{ fontSize: "4rem" }}
                    className="bubble-icon"
                  />
                </IconButton>
              </Box>
            </Grid>
            <Grid sx={{ pl: "0 !important", mx: "auto" }} item xs={10} sm={4}>
              <Box sx={boxStyle} className="bubble">
                <Typography
                  variant="h6"
                  component="h1"
                  sx={typeStyle}
                  className="bubble-text"
                >
                  LiftingFit App{"\n"}
                  <Typography component="p">
                    A workout companion with video guides for exercises, along
                    with a workout tracker.
                  </Typography>
                </Typography>

                <IconButton
                  style={{
                    color: "#112d32",
                    margin: "auto",
                    height: "100%",
                    width: "100%",
                  }}
                  disableRipple
                  href="https://lifting-fit.vercel.app"
                >
                  <FitnessCenterOutlined
                    sx={{ fontSize: "4rem" }}
                    className="bubble-icon"
                  />
                </IconButton>
              </Box>
            </Grid>
            <Grid sx={{ pl: "0 !important", mx: "auto" }} item xs={10} sm={4}>
              <Box sx={boxStyle} className="bubble">
                <Typography
                  variant="h6"
                  component="h1"
                  sx={typeStyle}
                  className="bubble-text"
                >
                  Movies
                  <Typography component="p">
                    A database site for sci-fi movies.
                  </Typography>
                </Typography>
                <IconButton
                  style={{
                    color: "#112d32",
                    margin: "auto",
                    height: "100%",
                    width: "100%",
                  }}
                  disableRipple
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
        <Box
          sx={{
            mt: 2,
            mb: 2,
            mx: "auto",
            display: "flex",
            flexDirection: "row",
            maxWidth: 680,
          }}
          style={{ justifyContent: "center" }}
        >
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
      </Box>
    </>
  )
}
