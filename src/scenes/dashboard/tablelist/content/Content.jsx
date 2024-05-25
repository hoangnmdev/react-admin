import { Box, Grid } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { mockData } from '~/apis/mock_data'

function Content({ tableList, setSelectedTable }) {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '20px',
    cursor: 'pointer',
    willChange: 'transform',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
      transform: 'translateY(-2px)',
      backgroundColor: '#F1F1F1'
    },
    '&:active': {
      boxShadow: 'none',
      transform: 'translateY(0)'
    }
  }))

  const handleTableClick = (table) => {
    const selected = mockData.table.find(t => t.table_name === table)
    setSelectedTable(selected)
  }

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
              <Item
                sx={{ height: '150px' }}
                onClick={() => handleTableClick(table)}
              >
                {table}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Content
