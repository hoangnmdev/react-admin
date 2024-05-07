import { Box, Grid } from '@mui/material'
import MenuCard from './MenuCard'

function Content({ tableList }) {

  return (
    <Box
      height={'460px'}
      sx={{ overflowY: 'auto' }} // Add overflow styling for vertical scrollbar
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} columns={{ xs: 6, sm: 12, md: 16 }}
          sx={{
            '&.MuiGrid-root': {
              padding: '30px 30px 30px 30px'
            }
          }}>
          {/* Map through the tableList array and render each cuisine */}
          {tableList.map((table, index) => (
            <Grid
              item xs={2}
              sm={4}
              md={4}
              key={index}
            >
              <MenuCard {...table}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>

  )
}

export default Content