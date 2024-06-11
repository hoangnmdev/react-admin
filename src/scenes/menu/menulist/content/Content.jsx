/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import MenuCard from './MenuCard'
import { getMenuList } from '~/apis/menu' // Make sure the path is correct

function Content() {
  const [menuList, setMenuList] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenuList()
        setMenuList(data)
      } catch (error) {
        console.error('Error fetching menu:', error)
      }
    }
    fetchMenu()
  }, [])

  return (
    <Box height={'460px'} sx={{ overflowY: 'auto' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} columns={{ xs: 6, sm: 12, md: 16 }}
          sx={{
            '&.MuiGrid-root': {
              padding: '30px 30px 30px 30px'
            }
          }}>
          {menuList.map((menu) => (
            <Grid item xs={2} sm={4} md={4} key={menu.menuId}>
              <MenuCard
                itemName={menu.itemName}
                price={menu.price}
                itemImage={menu.itemImage}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Content
