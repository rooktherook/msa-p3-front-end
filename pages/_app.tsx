import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@mui/material";
import { theme } from '../src/themes';


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} sx = {{bgcolor : ''}}/>
  </ThemeProvider>
  );
}

export default MyApp
