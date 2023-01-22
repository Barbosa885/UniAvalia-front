import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@fontsource/poppins'

import { theme } from '../styles/theme'

import '../styles/globals.css'

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
})

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>UniAvalia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
