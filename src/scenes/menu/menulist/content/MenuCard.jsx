import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, CardActions, Typography, Box } from '@mui/material'
import { capitalizeLetter } from '~/utils/formatter'

function MenuCard({ itemName, price, itemImage }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        bgcolor: '#EEF7FF',
        borderRadius: '20px',
        willChange: 'transform',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
          transform: 'translateY(-2px)',
          backgroundColor: '#CDE8E5'
        },
        '&:active': {
          boxShadow: 'none',
          transform: 'translateY(0)'
        }
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={itemImage}
          alt={itemName}
        />
      </CardActionArea>
      <CardActions>
        <Box width={'300px'}>
          <Box justifyContent={'center'} justifyItems={'center'} display={'flex'}>
            <Typography variant='h5' fontWeight={'600'}>{capitalizeLetter(itemName)}</Typography>
          </Box>
          <Box p={'5px 0 0px 0px'} display={'flex'} justifyContent={'center'}>
            <Typography variant='h5' fontWeight={'600'} color="initial">{price}</Typography>
          </Box>
        </Box>
      </CardActions>
    </Card>
  )
}

export default MenuCard
