/* eslint-disable no-console */
import { Box } from '@mui/material'
import Content from './content/Content'
import { useState, useEffect } from 'react'
import Footer from './footer/Footer'
import { getPhoBoMenu, getPhoGaMenu, getComNieuMenu, getMonThemMenu } from '~/apis/menu'

function MenuList({ selectedItem, setSelectedItem, FilteredMenuList, setFilteredMenuList, setSearchPerformed, searchPerformed, selectedTable }) {
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
        setFilteredMenuList([])
        setSearchPerformed(false)
      } catch (error) {
        console.log('There was an error fetching the menu', error)
      }
    }

    fetchData()
  }, [selectedMenu, setFilteredMenuList, setSearchPerformed])

  return (
    <Box width={'1000px'} borderRight='2px solid rgba(0, 0, 0, 0.1)'>
      {/* Content */}
      <Content
        selectedTable={selectedTable}
        menuList={menuList}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        FilteredMenuList={FilteredMenuList}
        setFilteredMenuList={setFilteredMenuList}
        searchPerformed={searchPerformed}
      />
      {/* Footer */}
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
