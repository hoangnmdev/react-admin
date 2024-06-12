import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export default function MediaControlCard() {
  const [data, setData] = useState([
    {
      itemName: 'Cheesy Chicken Pasta',
      amount: '$100',
      quantity: 2,
      price: '70.000Đ'
    },
    {
      itemName: 'Cheesy Chicken Pasta',
      amount: '$200',
      quantity: 4,
      price: '$200.000'
    },
    {
      itemName: 'Cheesy Chicken Pasta',
      amount: '$75',
      quantity: 3,
      price: '$350'
    },
    {
      itemName: 'Cheesy Chicken Pasta',
      amount: '$200',
      quantity: 1,
      price: '$600'
    }
  ])

  const handleQuantityChange = (index, change) => {
    const newData = [...data]
    const newQuantity = newData[index].quantity + change
    newData[index].quantity = newQuantity < 1 ? 1 : newQuantity
    setData(newData)
  }

  return (
    <Box justifyContent={'center'} justifyItems={'center'} display={'flex'} width={'420px'}>
      <Box sx={{ overflowY: 'auto', overflowX: 'hidden' }}
        justifyContent={'center'}
        justifyItems={'center'}
        display={'flex'}
        width={'480px'}
        maxWidth={'1000px'}
        height={'250px'}
        border='3px dashed rgba(0, 0, 0, 0.1)'
        borderRadius={'10px'}
      >
        <div style={{ display: 'block', width: '100%' }}>
          {data.map((item, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '60px',
                width: '100%',
                bgcolor: '#F1F2EB',
                '&.MuiPaper-root': {
                  boxShadow: 'none'
                },
                borderRadius: '10px',
                mb: '10px',
                p: '10px'
              }}
            >
              <Box display={'inline-block'}>
                <Box display={'flex'} alignItems={'center'}>
                  <Typography fontSize={'14px'} color="initial" fontWeight={'510'}>
                    {item.itemName}
                  </Typography>
                  <IconButton size="small" sx={{ p: 0.5 }}>
                    <OpenInNewIcon sx={{ fontSize: '15px' }} />
                  </IconButton>
                </Box>
                <Typography fontSize={'12px'} color="initial" fontWeight={'600'}>
                  Amount {item.amount}
                </Typography>
              </Box>
              <Box textAlign={'center'} sx={{ display: 'flex', alignItems: 'center', bgcolor: '#4F6F52', borderRadius: '5px', marginLeft: 'auto' }}>
                <Button
                  onClick={() => handleQuantityChange(index, -1)}
                  variant="outlined"
                  size="small"
                  sx={{
                    minWidth: '20px',
                    borderRadius: '5px',
                    borderStyle: 'none',
                    '&:hover':{
                      bgcolor: '#4F6F52',
                      boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                      transform: 'translateY(-2px)',
                      '& .MuiTypography-root': {
                        color: 'white'
                      },
                      '&:active': {
                        boxShadow: 'none',
                        transform: 'translateY(0)'
                      }
                    }
                  }}>
                  <Typography color={'white'}>-</Typography>
                </Button>
                <Typography color={'white'} mx={2}>{item.quantity}</Typography>
                <Button
                  onClick={() => handleQuantityChange(index, 1)}
                  variant="outlined"
                  size="small"
                  sx={{
                    minWidth: '20px',
                    borderRadius: '5px',
                    borderStyle: 'none',
                    '&:hover':{
                      bgcolor: '#4F6F52',
                      boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                      transform: 'translateY(-2px)',
                      '& .MuiTypography-root': {
                        color: 'white'
                      },
                      '&:active': {
                        boxShadow: 'none',
                        transform: 'translateY(0)'
                      }
                    }
                  }}>
                  <Typography color={'white'}>+</Typography>
                </Button>
              </Box>
              <Box justifyContent={'space-between'} display={'flex'} alignItems={'center'} ml={'auto'}>
                <Typography variant='h6' fontWeight={'600'} sx={{ minWidth: '80px', textAlign: 'center' }}>
                  {item.price}
                </Typography>
                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Card>
          ))}
        </div>
      </Box>
    </Box>
  )
}
