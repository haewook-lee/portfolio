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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Hi, I'm Haewook
      </Typography>
      <Typography variant="h5" component="h1" gutterBottom>
        I'm a frontend developer that likes to dabble in all parts of a tech
        stack. Technology should be something that makes our lives a little
        easier; I develop with that in mind.
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
