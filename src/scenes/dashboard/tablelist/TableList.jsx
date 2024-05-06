import { Box, useTheme, Typography } from '@mui/material'
import { tokens } from '~/theme'
import Header from './header/Header'

function TableList() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box width={'1000px'}>
      {/**Header */}
      <Header/>
      {/*Content*/}
      <Box height={'400px'}
                bgcolor={'#FFF2D7'}

>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 1</Typography></Box>
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 2</Typography></Box>
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 3</Typography></Box>
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 4</Typography></Box>
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 5</Typography></Box>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 1</Typography></Box>
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 2</Typography></Box>
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 3</Typography></Box>
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 4</Typography></Box>
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 5</Typography></Box>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 1</Typography></Box>
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 2</Typography></Box>
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 3</Typography></Box>
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 4</Typography></Box>
          <Box height={'120px'} width={'200px'} bgcolor={'#32012F'}><Typography color="white">Table 5</Typography></Box>
        </Box>
      </Box>
      

      {/*Footer*/}
      <Box
        bgcolor={'#CDE8E5'}
        height={'calc(100vh - 70px - 60px - 400px)'}
      >

      </Box>
    </Box>
  )
}

export default TableList