import { Box, useTheme } from '@mui/material'
import { tokens } from '~/theme'
import Content from './content/Content'
import { useState } from 'react'
import Footer from './footer/Footer'

function MenuList() {
  // const theme = useTheme()
  // const colors = tokens(theme.palette.mode)
  const [currentFloor, setCurrentFloor] = useState('First floor')
  const [tableList, setTableList] = useState(generateTableList(currentFloor))// Initial table list based on current floor

  // Function to generate table list for different floors
  function generateTableList(floor) {
    if (floor === 'First floor') {
      return Array.from(Array(10)).map((_, index) => {
        return `${floor} - Table ${index + 1}`
      })
    } else if (floor === 'Second floor') {
      return Array.from(Array(5)).map((_, index) => {
        return `${floor} - Table ${index + 1}`
      })
    } else {
      return [] // Default to empty array if floor is not recognized
    }
  }

  const handleFloorSelect = (floor) => {
    setCurrentFloor(floor)
    setTableList(generateTableList(floor)) // Generate new table list based on selected floor
  }

  return (
    <Box
      maxWidth={'1000px'}
      borderRight= '2px solid rgba(0, 0, 0, 0.1)'
    >
      {/*Content*/}
      <Content tableList={tableList}/>
      {/*Footer*/}
      <Footer/>
    </Box>
  )
}

export default MenuList