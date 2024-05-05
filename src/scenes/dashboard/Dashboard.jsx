import { Box, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '~/components/Header'

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box>
      {/* HEADER */}
      <Header title="TABLE LIST" />
    </Box>
  )
}

export default Dashboard