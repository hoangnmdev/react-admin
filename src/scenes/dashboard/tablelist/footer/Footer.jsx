import { Box, Button } from '@mui/material'
import TableBarIcon from '@mui/icons-material/TableBar'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import Typography from '@mui/material/Typography'
import { capitalizeLetter } from '~/utils/formatter'

const GUEST_TITLE = 'guest:'
const TABLE_TITLE = 'table:'

function Footer({ selectedTable }) {
  return (
    <Box
      bgcolor={'white'}
      height={'calc(100vh - 70px - 60px - 400px)'}
      display={'flex'}
      justifyContent={'space-between'}
      sx={{ borderTop: '2px solid rgba(0, 0, 0, 0.1)' }}
    >
      {/**Table and Guest Quantity in Footer*/}
      <Box
        display={'flex'}
        p={'30px 0px 0px 15px'}
        width={'220px'}
        height={'40px'}
      >
        <Box display={'flex'} alignItems={'center'} mr={'40px'}>
          <TableBarIcon sx={{ fontSize: '20px', mr: '10px' }} />
          <Typography fontSize={'15px'} color="initial">
            {capitalizeLetter(TABLE_TITLE)}
          </Typography>
          <Typography
            fontWeight={'600'}
            fontSize={'22px'}
            color={'#F0B86E'}
            ml={'5px'}>
            {selectedTable ? `${selectedTable.tableId}` : ''}
          </Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <SupervisorAccountIcon sx={{ fontSize: '20px', mr: '10px' }} />
          <Typography
            fontSize={'15px'}
            color="initial"
          >
            {capitalizeLetter(GUEST_TITLE)}
          </Typography>
          <Typography
            fontWeight={'600'}
            fontSize={'22px'}
            color={'#F0B86E'}
            ml={'5px'}
          >
            {selectedTable ? selectedTable.numberOfGuest : ''}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: '15px 15px 0px 0px' }}>
        {/** Select and Continue Button */}
        <Button
          sx={{
            mr: '10px',
            '&.MuiButton-containedPrimary': {
              bgcolor: '#4F6F52',
              boxShadow: 'none',
              width: '200px',
              height: '50px'
            }
          }} variant="contained">
          <Typography sx={{
            fontSize: '14px',
            '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
          }}
          color="white">
            SELECT AND CONTINUE
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default Footer
