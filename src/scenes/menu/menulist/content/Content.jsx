/* eslint-disable no-console */
import { Box, Grid, Typography } from '@mui/material'
import MenuCard from './MenuCard'
import NoFoodIcon from '@mui/icons-material/NoFood'

function Content({ menuList, setSelectedItem, FilteredMenuList, searchPerformed }) {
  const handleAddItem = (item) => {
    setSelectedItem((prevItems) => {
      const existingItem = prevItems.find((i) => i.menuId === item.menuId)
      if (existingItem) {
        return prevItems.map((i) =>
          i.menuId === item.menuId ? { ...i, quantity: i.quantity + 1, totalPrice: (parseFloat(i.price) * (i.quantity + 1)).toFixed(3) } : i
        )
      } else {
        return [...prevItems, { ...item, quantity: 1, totalPrice: item.price }]
      }
    })
  }

  const itemsToDisplay = FilteredMenuList.length > 0 ? FilteredMenuList : menuList
  console.log('searchperform', searchPerformed)
  console.log('FilteredMenuList', FilteredMenuList)
  return (
    <Box height={'460px'} sx={{ overflowY: 'auto' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} columns={{ xs: 6, sm: 12, md: 16 }} sx={{ '&.MuiGrid-root': { padding: '30px 30px 30px 30px' } }}>
          {searchPerformed && FilteredMenuList.length === 0 ? (
            <Box justifyContent={'center'} alignItems={'center'} display={'flex'} width={'100%'} mt={'140px'} >
              <Box>
                <Box textAlign="center">
                  <NoFoodIcon sx={{ fontSize: '100px', color: '#7AB2B2' }} />
                </Box>
                <Box textAlign="center" p={'20px 0px 0px 0px '} width={'180px'}>
                  <Typography variant="h5" color="initial">
                   ITEM IS NOT FOUNDED
                  </Typography>
                </Box>
              </Box>
            </Box>
          ) : (
            itemsToDisplay.map((menu) => (
              <Grid item xs={2} sm={4} md={4} key={menu.menuId}>
                <MenuCard
                  itemName={menu.itemName}
                  price={menu.price}
                  itemImage={menu.itemImage}
                  onItemClick={() => handleAddItem(menu)}
                  setSelectedItem={setSelectedItem}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  )
}

export default Content
