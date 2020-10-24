import CustomThemeProvider from './src/theme/CustomThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'

export const wrapRootElement = ({ element }) => {
  return <CustomThemeProvider>
    <CssBaseline />
    {element}
  </CustomThemeProvider>
}

require('typeface-roboto')
