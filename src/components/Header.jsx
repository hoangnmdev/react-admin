import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../theme'

const Header = ({ title, subtitle }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box mb="30px">
      <Typography
        // variant="h3"
        fontSize={'30px'}
        fontWeight={'bold'}
        // color={colors.grey[100]}
        sx={{ m: '5px 0 5px 2rem' }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default Header // Export Header as default
