import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import styled from "@emotion/styled"

import { SocialIcon } from "react-social-icons"

export default function Home() {
  const iconStyle = {
    margin: "0.5rem",
    opacity: "0.75",
    "&:hover": {
      opacity: "1",
    },
  }

  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Haewook Lee.
      </Typography>
      <Typography variant="h2" component="h1" gutterBottom>
        Frontend Developer.
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom>
        I develop using a modern React/Typescript stack, but I also like to
        explore backend technologies as well. I strive to make apps that are
        simple and clean because in the end, apps should make our lives easier.
      </Typography>
      <Box>
        <SocialIcon
          url="https://github.com/haewook-lee"
          style={iconStyle}
          bgColor="white"
          fgColor="black"
        />
        <SocialIcon
          url="https://linkedin.com/in/haewook-lee-232bba4a"
          style={iconStyle}
          bgColor="white"
          fgColor="black"
        />
        <SocialIcon
          url="mailto:20hwlee@gmail.com"
          style={iconStyle}
          bgColor="white"
          fgColor="black"
        />
      </Box>
    </Box>
  )
}
