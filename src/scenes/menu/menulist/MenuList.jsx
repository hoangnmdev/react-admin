/* eslint-disable no-console */
import { Box } from '@mui/material'
import Content from './content/Content'
import { useState, useEffect } from 'react'
import Footer from './footer/Footer'
import { getMenuList } from '~/apis/menu'
function MenuList() {
  const [menuList, setMenuList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMenuList()
        setMenuList(data)
      } catch (error) {
        console.log('There was an error fetching the menu', error)
      }
    }

    fetchData()
  }, [])
  return (
    <Box
      width={'1000px'}
      borderRight= '2px solid rgba(0, 0, 0, 0.1)'
    >
      {/*Content*/}
      <Content menuList={menuList}/>
      {/*Footer*/}
      <Footer/>
    </Box>
  )
}

export default MenuList