import '../styles/globals.css'
import { useMemo, createContext, useContext } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import cx from 'classnames'

import { Menu } from '../components/Menu/Menu'

import cm from '../styles/Home.module.css'

export enum THEMES {
  WHITE = 'white',
  BLACK = 'black',
}

const AppContext = createContext({
  theme: THEMES.BLACK,
})

export function useAppContext() {
  return useContext(AppContext)
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const theme = useMemo(() => {
    if (router.pathname.includes('project')) return THEMES.WHITE
    return THEMES.BLACK
  }, [router.pathname])

  return (
    <AppContext.Provider value={{ theme }}>
      <main className={cx(cm.container, cm[theme])}>
        <div className={cm.main}>
          <Menu />
          <Component {...pageProps} />
        </div>
      </main>
    </AppContext.Provider>
  )
}
