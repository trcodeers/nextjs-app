import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import theme from "../config/mui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
          <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        )
}

export default MyApp
