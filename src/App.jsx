import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ColorModeContext, useMode } from './theme'
import Topbar from './scenes/global/Topbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './scenes/dashboard/Dashboard'
import Sidebar from './scenes/global/Sidebar'
import { useState } from 'react'
import Menu from './scenes/menu/Menu'

function App() {
  const [theme, colorMode] = useMode()
  const [isSideBar, setIsSideBar] = useState(true)

  return (
    // Step 3: Provide the context
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className='app'>
          <Sidebar isSideBar = {isSideBar}/>
          <main className='content'>
            <Topbar setIsSideBar= {setIsSideBar}/>
            <BrowserRouter>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path='/menu' element={<Menu/>}/>
              </Routes>
            </BrowserRouter>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
