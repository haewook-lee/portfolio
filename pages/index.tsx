import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

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

  return (
    <Box
      sx={{
        my: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fade cascade>
        <Typography variant="h2" component="h1" gutterBottom>
          HAEWOOK LEE.
        </Typography>
        <Typography variant="h5" component="h1" gutterBottom>
          Software Developer
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
      </Fade>
    </Box>
  )
}
