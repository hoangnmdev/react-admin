/* eslint-disable no-console */
import { Box } from '@mui/material'
import Content from './content/Content'
import { useState, useEffect } from 'react'
import Footer from './footer/Footer'
import { getPhoBoMenu } from '~/apis/menu'
import { getPhoGaMenu } from '~/apis/menu'
import { getComNieuMenu } from '~/apis/menu'
import { getMonThemMenu } from '~/apis/menu'

function MenuList({ selectedItem, setSelectedItem }) {
  const [menuList, setMenuList] = useState([])
  const [selectedMenu, setSelectedMenu] = useState('PhoBo')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = selectedMenu === 'PhoBo'
          ? await getPhoBoMenu()
          : selectedMenu === 'PhoGa'
            ? await getPhoGaMenu()
            : selectedMenu === 'ComNieu'
              ? await getComNieuMenu()
              : selectedMenu === 'MonThem'
                ? await getMonThemMenu()
                : []
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
      <Content menuList={menuList} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
      {/*Footer*/}
      <Footer
        fetchPhoBoMenu={() => setSelectedMenu('PhoBo')}
        fetchPhoGaMenu={() => setSelectedMenu('PhoGa')}
        fetchComNieuMenu={() => setSelectedMenu('ComNieu')}
        fetchMonThemMenu={() => setSelectedMenu('MonThem')}
      />
    </Box>
  )
}

export default MenuList