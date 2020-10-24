import { createMuiTheme } from "@material-ui/core/styles"


// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00AC95",
      light: "#00BFA6",
    },
    secondary: {
      main: "#3A3768",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.50)"
    },
    background: {
      default: "#212121",
      paper: "#424242"
    },
  }
})

export default theme
