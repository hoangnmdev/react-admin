import { Box, useTheme } from '@mui/material'
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
      <Box
        bgcolor={'#FFF2D7'}
        height={'400px'}
      >
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