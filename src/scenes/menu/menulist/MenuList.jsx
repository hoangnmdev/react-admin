/* eslint-disable no-console */
import { Box } from '@mui/material'
import Content from './content/Content'
import { useState, useEffect } from 'react'
import Footer from './footer/Footer'
import { getPhoBoMenu } from '~/apis/menu'
import { getPhoGaMenu } from '~/apis/menu'

function MenuList() {
  const [menuList, setMenuList] = useState([])
  const [selectedMenu, setSelectedMenu] = useState('PhoBo')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = selectedMenu === 'PhoBo' ? await getPhoBoMenu() : await getPhoGaMenu()
        setMenuList(data)
      } catch (error) {
        console.log('There was an error fetching the menu', error)
      }
    }

    fetchData()
  }, [selectedMenu])
  return (
    <Box
      width={'1000px'}
      borderRight= '2px solid rgba(0, 0, 0, 0.1)'
    >
      {/*Content*/}
      <Content menuList={menuList}/>
      {/*Footer*/}
      <Footer
        fetchPhoBoMenu={() => setSelectedMenu('PhoBo')}
        fetchPhoGaMenu={() => setSelectedMenu('PhoGa')}
      />
    </Box>
  )
}

export default MenuList