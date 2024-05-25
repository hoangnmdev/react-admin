import { Box } from '@mui/material'
import Header from './header/Header'
import Content from './content/Content'
import Footer from './footer/Footer'
import { useState } from 'react'
import { mockData } from '~/apis/mock_data'

function TableList({ setSelectedTable, selectedTable }) {
  const [tableList, setTableList] = useState(generateTableList('Table'))

  function generateTableList(table) {
    if (table === 'Table') {
      return mockData.table.map((_, index) => {
        return `${table} ${index + 1}`
      })
    } else {
      return [] // Default to empty array if floor is not recognized
    }
  }

  return (
    <Box
      width={'1000px'}
      borderRight='2px solid rgba(0, 0, 0, 0.1)'
    >
      {/* Header */}
      <Header />
      {/* Content */}
      <Content tableList={tableList} setSelectedTable={setSelectedTable} />
      {/* Footer */}
      <Footer selectedTable={selectedTable} />
    </Box>
  )
}

export default TableList
