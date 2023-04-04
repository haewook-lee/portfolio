import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { SocialIcon } from "react-social-icons"
import FadeIn from "../components/FadeIn"

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
      <FadeIn>
        <Typography variant="h2" component="h1" gutterBottom>
          Haewook Lee.
        </Typography>
      </FadeIn>
      <FadeIn delay={0.5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Software Developer.
        </Typography>
      </FadeIn>
      <FadeIn delay={1}>
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
      </FadeIn>
    </Box>
  )
}
