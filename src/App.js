import React from 'react'
// MUI Imports
import { ThemeProvider } from '@mui/material/styles';
import CacheProvider from './Components/CacheProvider/CacheProvicer';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
// My Imports
import theme from './assets/theme/index'

function App() {
  const [mode, setMode] = React.useState('light');
  const [direction, setDirection] = React.useState("ltr");
  const [language, setLanguage] = React.useState("en");
  const toggleLanguage = () => {
    const prev_language = language;
    setLanguage(prev_language === "en" ? "ur" : "en");
    setDirection(direction === "rtl" ? "ltr" : "rtl")
  }
  var selectedTheme = React.useMemo(() => theme(mode, direction, language), [mode, language, direction]);

  return (
    <CacheProvider>
      <div className="App" dir={direction}>
        <ThemeProvider theme={selectedTheme}>
          <CssBaseline />
          <Paper elevation={0} setMode={setMode} toggleLanguage={toggleLanguage} to sx={{ borderRadius: 0, minHeight: '100vh' }}>

          </Paper>
        </ThemeProvider>
      </div>
    </CacheProvider>
  );
}

export default App;