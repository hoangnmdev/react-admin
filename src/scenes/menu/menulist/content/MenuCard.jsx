import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, CardActions, Typography, Box } from '@mui/material'

function MenuCard() {
  return (
    <Card
      sx={{
        maxWidth: 300,
        bgcolor:'#E3F4F4',
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
            <Typography variant='h5' fontWeight={'600'}>CHIKCEN WING</Typography>
          </Box>
          <Box p={'15px 0 0px 0px'}>
            <Typography fontSize={'12px'} fontWeight={'450'} color="initial">CATEGORY:</Typography>
          </Box>
        </Box>
      </CardActions>
    </Card>
  )
}

export default MenuCard