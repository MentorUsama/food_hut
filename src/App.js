import React from 'react'
// MUI Imports
import { ThemeProvider } from '@mui/material/styles';
import CacheProvider from './Components/CacheProvider/CacheProvicer';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
// My Imports
import theme from './assets/theme/index'
import Header from './Components/Header/Header';

function App() {
  const [mode, setMode] = React.useState('light');
  const [direction, setDirection] = React.useState("ltr");
  const [language, setLanguage] = React.useState("en");
  var selectedTheme = React.useMemo(() => theme(mode, direction, language), [mode, language, direction]);

  return (
    <CacheProvider>
      <div className="App" dir={direction}>
        <ThemeProvider theme={selectedTheme}>
          <CssBaseline />
          <Paper elevation={0} sx={{ borderRadius: 0, minHeight: '100vh' }}>
            <Header setLanguage={setLanguage} language={language} setDirection={setDirection} setMode={() => setMode(mode === 'light' ? 'dark' : 'light')} />
          </Paper>
        </ThemeProvider>
      </div>
    </CacheProvider>
  );
}

export default App;