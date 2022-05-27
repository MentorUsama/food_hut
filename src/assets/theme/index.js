/**
  Main Theme provider
 */
import { createTheme } from "@mui/material/styles";
import { breakpoints, palette, typography, zIndex } from './base/index'
import {components} from './components/index'

const theme=(mode,direction,language)=> createTheme({
  breakpoints: { ...breakpoints },
  components: { ...components },
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
