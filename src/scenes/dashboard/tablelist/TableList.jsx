/* eslint-disable no-console */
import { Box } from '@mui/material'
import Header from './header/Header'
import Content from './content/Content'
import Footer from './footer/Footer'
import { useState, useEffect } from 'react'
import { getTableList } from '~/apis/tablelist'

function TableList({ setSelectedTable, selectedTable }) {
  const [tableList, setTableList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTableList()
        setTableList(data)
      } catch (error) {
        console.error('There was an error fetching the tables', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Box width={'1000px'} borderRight='2px solid rgba(0, 0, 0, 0.1)'>
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
