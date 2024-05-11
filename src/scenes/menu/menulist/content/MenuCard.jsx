import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, CardActions, Typography, Box } from '@mui/material'
import { capitalizeLetter } from '~/utils/formatter'

const FOOD_TITLE = 'chicken wing'
const FOOD_PRICE = 12

function MenuCard() {
  return (
    <Card
      sx={{
        maxWidth: 300,
        bgcolor:'#EEF7FF',
        borderRadius:'20px',
        '&.MuiPaper-root':{
          boxShadow: 'none'
        }
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="https://thumbs.dreamstime.com/z/pumpkin-curry-pumkin-cuta-seeds-46491356.jpg?ct=jpeg"
          alt="cuisine"
        />
      </CardActionArea>
      <CardActions>
        <Box width={'300px'}>
          <Box justifyContent={'center'} justifyItems={'center'} display={'flex'}>
            <Typography variant='h5' fontWeight={'600'}>{capitalizeLetter(FOOD_TITLE)}</Typography>
          </Box>
          <Box p={'5px 0 0px 0px'}
            display={'flex'}
            justifyContent={'center'}
          >
            <Typography variant='h5' fontWeight={'600'} color="initial">${FOOD_PRICE}</Typography>
          </Box>
        </Box>
      </CardActions>
    </Card>
  )
}

export default MenuCard