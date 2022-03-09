import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import theme from "../config/mui";
import { Paper } from '@mui/material';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  const [newTheme, setNewTheme] = useState(theme)

  const handleDarkModeChange = (value: boolean) => {
    console.log(value)
  
  }

  return (
          <ThemeProvider theme={theme}>
            <Paper elevation={0} square={true} style={{ minHeight: '100vh'}}>
              <Layout handleDarkModeChange={handleDarkModeChange}>
                  <Component {...pageProps} />
              </Layout>
            </Paper>
          </ThemeProvider>
        )
}

export default MyApp
