import { Box, Grid } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

function Content({ tableList }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))

  return (
    <Box
      height={'400px'}
      sx={{ overflowY: 'auto' }} // Add overflow styling for vertical scrollbar
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {/* Map through the tableList array and render each table */}
          {tableList.map((table, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item sx={{ height:'150px' }}>{table}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>

  )
}

export default Content