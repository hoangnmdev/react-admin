import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ColorModeContext, useMode } from './theme'
import Topbar from './components/Topbar'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Dashboard from './scenes/dashboard/Dashboard'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import Menu from './scenes/menu/Menu'
import Payment from '~/scenes/payment/Payment'
import Orders from './scenes/orders/Orders'
import BarChart from './scenes/barchart/BarChart'
import LineChart from './scenes/linechart/LineChart'
import Login from './scenes/auth/login/Login'
import Signup from './scenes/auth/signup/Signup'

function App() {
  const [theme, colorMode] = useMode()
  const [isSideBar, setIsSideBar] = useState(true)
  const location = useLocation()
  const [selectedTable, setSelectedTable] = useState(null) // State to store selected table details
  const [selectedItem, setSelectedItem] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  // Hide sidebar and topbar on the login page
  const isLoginPage = location.pathname === '/login'
  const isSignupPage = location.pathname === '/signup'
  const shouldDisplaySidebar = !isLoginPage && !isSignupPage && isSideBar
  const shouldDisplayTopbar = !isLoginPage && !isSignupPage

  return (
    // Step 3: Provide the context
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className='app'>
          {/* Conditional rendering of sidebar */}
          {shouldDisplaySidebar && <Sidebar isSideBar={isSideBar} />}
          <main className='content'>
            {/* Conditional rendering of topbar */}
            {shouldDisplayTopbar && <Topbar setIsSideBar={setIsSideBar} />}
            <Routes>
              {/* Redirect from root to /dashboard */}
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/dashboard" element={<Dashboard selectedTable={selectedTable} setSelectedTable={setSelectedTable}/>} />
              <Route path="/menu" element={<Menu selectedTable={selectedTable} selectedItem={selectedItem} setSelectedItem={setSelectedItem}
                subTotal={subTotal} setSubTotal={setSubTotal}
              />}/>
              <Route path="/payment" element={<Payment />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/bar" element={<BarChart />} />
              <Route path="/line" element={<LineChart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
