/**
  Main Theme provider
 */
import { createTheme } from "@mui/material/styles";
import { breakpoints, palette, typography, zIndex } from './base/index'

const theme=(mode,direction,language)=> createTheme({
  breakpoints: { ...breakpoints },
  direction: direction,
  language: language,
  palette: { 
    mode: mode,
    ...palette(mode) 
  },
  typography: { ...typography },
  zIndex: { ...zIndex }
})
export default theme
