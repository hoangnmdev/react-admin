import { Box, Grid } from '@mui/material'
import MenuCard from './MenuCard'

function Content({ menuList, setSelectedItem }) {
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

  return (
    <Box height={'460px'} sx={{ overflowY: 'auto' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} columns={{ xs: 6, sm: 12, md: 16 }} sx={{ '&.MuiGrid-root': { padding: '30px 30px 30px 30px' } }}>
          {menuList.length > 0 && menuList.map((menu) => (
            <Grid item xs={2} sm={4} md={4} key={menu.menuId}>
              <MenuCard
                itemName={menu.itemName}
                price={menu.price}
                itemImage={menu.itemImage}
                onItemClick={() => handleAddItem(menu)}
                setSelectedItem={setSelectedItem}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Content
