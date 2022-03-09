import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import theme from "../config/mui";
import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import DarkModeContext from '../context/DarkModeContext';

function MyApp({ Component, pageProps }: AppProps) {

  const [newTheme, setNewTheme] = useState(theme)

  const handleDarkModeChange = () => {
    console.log('newTheme')
  
  }

  const [user, setUser] = useState("Jesse Hall");

  return (
          <DarkModeContext.Provider value={{user, handleDarkModeChange}}>
            <ThemeProvider theme={newTheme}>
                  <Paper elevation={0} square={true} style={{ minHeight: '100vh'}}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                  </Paper>
            </ThemeProvider>
          </DarkModeContext.Provider>
        )
}

export default MyApp
