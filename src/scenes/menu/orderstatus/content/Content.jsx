import { Box } from '@mui/material'
import MediaControlCard from './OrderCard'
import Price from './Price'

function Content() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <MediaControlCard
      />
      <Price/>
    </Box>
  )
}

export default Content