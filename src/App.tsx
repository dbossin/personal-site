import { ThemeProvider, Global } from '@emotion/react'
import { globalStyles } from './styles/globalStyles'
import { theme } from './styles/theme'
import { Header } from './components/Header'
import { Hero } from './components/Hero'


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Header />
        <Hero />
      </ThemeProvider>
    </>
  )
}

export default App
