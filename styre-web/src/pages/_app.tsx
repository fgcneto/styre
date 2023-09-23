import '../styles/globals.scss'
import '../styles/lds/index.scss'
import type { AppProps } from 'next/app'
import Contexts from '../contexts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Contexts>
      <Component {...pageProps} />
    </Contexts>
  )
}

export default MyApp
