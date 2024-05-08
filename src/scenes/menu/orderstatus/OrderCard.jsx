import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'


export default function MediaControlCard() {

  return (
    <Box
      justifyContent={'center'}
      justifyItems={'center'}
      display={'flex'}
    >
      <Box sx={{ overflowY: 'auto' }}
        justifyContent={'center'}
        justifyItems={'center'}
        display={'flex'}
        width={'400px'}
        height={'200px'}
        border= '3px dashed rgba(0, 0, 0, 0.1)'
      >
        <div style={{ display:  'block' }}>
          <Card
            sx={{
              display: 'flex',
              justifyContent:'space-between',
              height: '70px',
              width: '350px',
              bgcolor:'#F1F2EB',
              '&.MuiPaper-root': {
                boxShadow: 'none'
              },
              borderRadius: '15px',
              mb: '10px'
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CardMedia
                component="img"
                sx={{
                  width: 55,
                  height: 55,
                  m: ' 4px 0 4px 12px',
                  borderRadius:'8px'
                }}
                image="https://thumbs.dreamstime.com/z/white-chocolate-chip-cookies-keyboard-computer-background-copy-space-website-internet-homepage-policy-accpeted-blocks-252209597.jpg?ct=jpeg"
                alt="Live from space album cover"
              />
              <Box pl ={'18px'}>
                <Typography fontSize={'13px'} color="initial" fontWeight={'510'}>CHICKEN WINGS</Typography>
                <Typography variant='h2'>$10</Typography>
              </Box>
            </Box>
            <Box textAlign={'center'} sx={{ m: ' 4px 20px 4px 12px' }}>
              <Typography fontSize={'13px'} fontWeight={'510'} color="initial">QUANTITY</Typography>
              <Typography variant='h2'>1</Typography>
            </Box>
          </Card>
          <Card
            sx={{
              display: 'flex',
              justifyContent:'space-between',
              height: '70px',
              width: '350px',
              bgcolor:'#F1F2EB',
              '&.MuiPaper-root': {
                boxShadow: 'none'
              },
              borderRadius: '15px',
              mb: '10px'
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CardMedia
                component="img"
                sx={{
                  width: 55,
                  height: 55,
                  m: ' 4px 0 4px 12px',
                  borderRadius:'8px'
                }}
                image="https://thumbs.dreamstime.com/z/white-chocolate-chip-cookies-keyboard-computer-background-copy-space-website-internet-homepage-policy-accpeted-blocks-252209597.jpg?ct=jpeg"
                alt="Live from space album cover"
              />
              <Box pl ={'18px'}>
                <Typography fontSize={'13px'} color="initial" fontWeight={'510'}>CHICKEN WINGS</Typography>
                <Typography variant='h2'>$10</Typography>
              </Box>
            </Box>
            <Box textAlign={'center'} sx={{ m: ' 4px 20px 4px 12px' }}>
              <Typography fontSize={'13px'} fontWeight={'510'} color="initial">QUANTITY</Typography>
              <Typography variant='h2'>1</Typography>
            </Box>
          </Card>
          <Card
            sx={{
              display: 'flex',
              justifyContent:'space-between',
              height: '70px',
              width: '350px',
              bgcolor:'#F1F2EB',
              '&.MuiPaper-root': {
                boxShadow: 'none'
              },
              borderRadius: '15px',
              mb: '10px'
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CardMedia
                component="img"
                sx={{
                  width: 55,
                  height: 55,
                  m: ' 4px 0 4px 12px',
                  borderRadius:'8px'
                }}
                image="https://thumbs.dreamstime.com/z/white-chocolate-chip-cookies-keyboard-computer-background-copy-space-website-internet-homepage-policy-accpeted-blocks-252209597.jpg?ct=jpeg"
                alt="Live from space album cover"
              />
              <Box pl ={'18px'}>
                <Typography fontSize={'13px'} color="initial" fontWeight={'510'}>CHICKEN WINGS</Typography>
                <Typography variant='h2'>$10</Typography>
              </Box>
            </Box>
            <Box textAlign={'center'} sx={{ m: ' 4px 20px 4px 12px' }}>
              <Typography fontSize={'13px'} fontWeight={'510'} color="initial">QUANTITY</Typography>
              <Typography variant='h2'>1</Typography>
            </Box>
          </Card>
        </div>
      </Box>
    </Box>

  )
}
