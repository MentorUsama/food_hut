import React from 'react'
// MUI Imports
import { ThemeProvider } from '@mui/material/styles';
import CacheProvider from './Components/CacheProvider/CacheProvicer';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// My Imports
import theme from './assets/theme/index'
import Header from './Components/Header/Header';
import HeroContainer from './Components/HeroContainer/HeroContainer';

function App() {
  const [mode, setMode] = React.useState('light');
  const [direction, setDirection] = React.useState("ltr");
  const [language, setLanguage] = React.useState("en");
  var selectedTheme = React.useMemo(() => theme(mode, direction, language), [mode, language, direction]);

  return (
    // <CacheProvider>
      <div className="App" dir={direction}>
        <ThemeProvider theme={selectedTheme}>
          <CssBaseline />
          <Paper elevation={0} sx={{ borderRadius: 0 }}>
            <Box sx={{ minHeight: '100vh', backgroundImage: (theme) => theme.palette.gradient.primary, paddingTop: '32px',paddingLeft:'70px',paddingRight:'70px' }}>
              <Header
                setLanguage={setLanguage}
                language={language}
                setDirection={setDirection}
                setMode={() => setMode(mode === 'light' ? 'dark' : 'light')}
              />
              <HeroContainer />
            </Box>
          </Paper>
        </ThemeProvider>
      </div>
    // </CacheProvider>
  );
}

export default App;