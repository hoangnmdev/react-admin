import { Box, useTheme } from '@mui/material'
import { tokens } from '~/theme'

function Order() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      width={'calc(100% - 1000px)'}
      bgcolor={'#EEF7FF'}
      height={'calc(100vh - 70px)'}
    >
      {/*Header*/}
      {/*Details*/}

      {/*Content*/}

    </Box>
  )
}

export default Order