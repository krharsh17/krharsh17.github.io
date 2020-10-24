import { createMuiTheme } from "@material-ui/core/styles"


// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00AC95",
      light: "#00BFA6",
    },
    secondary: {
      main: "#3A3768",
    },
    text: {
      primary: "#000000",
      secondary: "rgba(25,26,31,0.50)"
    },
    background: {
      default: "#fafafa",
      paper: "#fafafa"
    },
  }
})

export default theme
