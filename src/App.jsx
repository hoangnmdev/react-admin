import { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ColorModeContext, useMode } from './theme'
import Topbar from './components/Topbar'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Dashboard from './scenes/dashboard/Dashboard'
import Sidebar from './components/Sidebar'
import { SnackbarProvider } from 'notistack'
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
  const [total, setTotal] = useState(0)
  const [FilteredMenuList, setFilteredMenuList] = useState([])
  const [FilterOrderList, setFilterOrderList] = useState([])
  const [searchPerformed, setSearchPerformed] = useState(false)
  // Hide sidebar and topbar on the login page
  const isLoginPage = location.pathname === '/login'
  const isSignupPage = location.pathname === '/signup'
  const shouldDisplaySidebar = !isLoginPage && !isSignupPage && isSideBar
  const shouldDisplayTopbar = !isLoginPage && !isSignupPage

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          {shouldDisplaySidebar && <Sidebar isSideBar={isSideBar} />}
          <main className='content'>
            {shouldDisplayTopbar && <Topbar
              setIsSideBar={setIsSideBar}
              setFilteredMenuList={setFilteredMenuList} FilteredMenuList={FilteredMenuList}
              searchPerformed={searchPerformed} setSearchPerformed={setSearchPerformed}
              FilterOrderList={FilterOrderList} setFilterOrderList={setFilterOrderList}
            />}
            {/* Step 4: Wrap your Routes with SnackbarProvider */}
            <SnackbarProvider maxSnack={3}>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard
                  selectedTable={selectedTable} setSelectedTable={setSelectedTable}
                  selectedItem={selectedItem}
                />} />
                <Route path="/menu" element={<Menu
                  selectedTable={selectedTable} setSelectedTable={setSelectedTable}
                  selectedItem={selectedItem} setSelectedItem={setSelectedItem}
                  subTotal={subTotal} setSubTotal={setSubTotal}
                  total={total} setTotal={setTotal}
                  FilteredMenuList={FilteredMenuList} setFilteredMenuList={setFilteredMenuList}
                  searchPerformed={searchPerformed} setSearchPerformed={setSearchPerformed}
                />}/>
                <Route path="/payment" element={<Payment selectedTable={selectedTable} setSelectedTable={setSelectedTable} selectedItem={selectedItem} setSelectedItem={setSelectedItem} total={total} subTotal={subTotal} />} />
                <Route path="/orders" element={<Orders
                  FilterOrderList={FilterOrderList} setFilterOrderList={setFilterOrderList}
                  searchPerformed={searchPerformed} setSearchPerformed={setSearchPerformed}
                />} />
                <Route path="/bar" element={<BarChart />} />
                <Route path="/line" element={<LineChart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </SnackbarProvider>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
