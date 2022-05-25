/**
  Main Theme provider
 */
import { createTheme } from "@mui/material/styles";
import { breakpoints, palette, typography, zIndex } from './base/index'
import {components} from './components/index'

export default createTheme({
  breakpoints: { ...breakpoints },
  components: { ...components },
  direction: "rtl",
  // mixins:{},
  palette: { ...palette },
  // shadows:[],
  shape: { borderRadius: 4 },
  // spacing: ƒ ()
  // transitions:{},
  typography: { ...typography },
  zIndex: { ...zIndex }
})
