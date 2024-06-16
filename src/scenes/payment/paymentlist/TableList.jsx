import { Box } from '@mui/material'
import Header from './header/Header'
import Content from './content/Content'
import Footer from './footer/Footer'

function TableList({ selectedTable, selectedItem }) {
  return (
    <Box
      width={'1000px'}
      borderRight= '2px solid rgba(0, 0, 0, 0.1)'
    >
      {/**Header */}
      {/* Pass the handleFloorSelect function as a prop */}
      <Header selectedTable={selectedTable}/>
      {/*Content*/}
      <Content selectedTable={selectedTable} selectedItem={selectedItem}/>
      {/*Footer*/}
      <Footer/>
    </Box>
  )
}

export default TableList