import { Box, Card, Typography, Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import { useState } from 'react'
import AlertDialog from '~/components/AlertDialog'

export default function OrderCard({ selectedItem, setSelectedItem }) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const handleQuantityChange = (index, change) => {
    const newData = [...selectedItem]
    const newQuantity = newData[index].quantity + change
    newData[index].quantity = newQuantity < 1 ? 1 : newQuantity
    setSelectedItem(newData)
  }

  const handleDelete = (index) => {
    const newData = [...selectedItem]
    newData.splice(index, 1)
    setSelectedItem(newData)
    handleDialogClose()
  }
  const handleDialogClose = () => {
    setDialogOpen(false)
  }
  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  return (
    <Box justifyContent={'center'} justifyItems={'center'} display={'flex'} width={'420px'}>
      <Box
        sx={{ overflowY: 'auto', overflowX: 'hidden' }}
        justifyContent={'center'}
        justifyItems={'center'}
        display={'flex'}
        width={'480px'}
        maxWidth={'1000px'}
        height={'250px'}
        border='3px dashed rgba(0, 0, 0, 0.1)'
        borderRadius={'10px'}
      >
        {selectedItem.length === 0 ? (
          <Box
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
          >
            <Box>
              <Box textAlign="center">
                <FastfoodIcon sx={{ fontSize: '100px', color: '#7AB2B2' }} />
              </Box>
              <Box textAlign="center" p={'20px 0px 0px 0px '} width={'150px'}>
                <Typography variant="h5" color="initial">
                  NO ITEM IN THIS MOMENT ADDED
                </Typography>
              </Box>
            </Box>
          </Box>
        ) : (
          <div style={{ display: 'block', width: '100%' }}>
            {selectedItem.map((item, index) => (
              <Card
                key={item.menuId}
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
                <Box display={'inline-block'} marginRight={'auto'}>
                  <Box display={'flex'} alignItems={'center'}>
                    <Typography fontSize={'14px'} color="initial" fontWeight={'510'}>
                      {item.itemName}
                    </Typography>
                    <IconButton size="small" sx={{ p: 0.5 }}>
                      <OpenInNewIcon sx={{ fontSize: '15px' }} />
                    </IconButton>
                  </Box>
                  <Typography fontSize={'12px'} color="initial" fontWeight={'600'}>
                    Amount {item.price}
                  </Typography>
                </Box>
                <Box marginLeft={'auto'}>
                  <Box
                    textAlign={'center'}
                    sx={{ display: 'flex', alignItems: 'center', bgcolor: '#4F6F52', borderRadius: '5px' }}
                  >
                    <Button
                      onClick={() => handleQuantityChange(index, -1)}
                      variant="outlined"
                      size="small"
                      sx={{
                        minWidth: '20px',
                        borderRadius: '5px',
                        borderStyle: 'none',
                        '&:hover': {
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
                      }}
                    >
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
                        '&:hover': {
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
                      }}
                    >
                      <Typography color={'white'}>+</Typography>
                    </Button>
                  </Box>
                </Box>
                <Box justifyContent={'space-between'} display={'flex'} alignItems={'center'}>
                  <Typography variant='h6' fontWeight={'600'} sx={{ minWidth: '80px', textAlign: 'center' }}>
                    {item.itemName === 'Quẩy Nhà Làm' || item.itemName === 'Phở Chiên Phồng' || item.itemName === 'Phở Cuốn'
                      ? `${item.price}` : `${item.price}Đ`}
                  </Typography>
                  <IconButton color="error"
                    sx={{
                      '&.MuiIconButton-root': {
                        boxShadow: 'none',
                        borderRadius: '10px',
                        willChange: 'transform',
                        '&:hover':{
                          transform: 'translateY(-2px)',
                          '&:active': {
                            boxShadow: 'none',
                            transform: 'translateY(0)'
                          }
                        }
                      }
                    }}
                    onClick={handleDialogOpen}>
                    <DeleteIcon/>
                  </IconButton>
                </Box>
              </Card>
            ))}
          </div>
        )}
      </Box>
      <AlertDialog open={dialogOpen} handleClose={handleDialogClose}
        title={'Delete item?'} contentText={'Do you want delete item from list?'}
        cancelLabel={'Cancel'} confirmLabel={'Delete'} handleConfirm={handleDelete}
      />
    </Box>
  )
}
