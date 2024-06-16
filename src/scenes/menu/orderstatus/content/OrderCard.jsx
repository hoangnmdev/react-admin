/* eslint-disable no-console */
import { Box, Card, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import { useState, useEffect } from 'react'
import AlertDialog from '~/components/AlertDialog'

export default function OrderCard({ selectedItem, setSelectedItem, setSubTotal }) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageTitle, setSelectedImageTitle] = useState(null)
  const [itemRemove, setItemRemove] = useState(null) // State to store item name to remove

  useEffect(() => {
    const subtotal = selectedItem.reduce((sum, item) => sum + parseFloat(item.totalPrice), 0).toFixed(3)
    setSubTotal(subtotal)
    console.log('selectedItem', selectedItem)
  }, [selectedItem, setSubTotal])

  const handleQuantityChange = (index, change) => {
    const newData = [...selectedItem]
    const newQuantity = newData[index].quantity + change

    if (newQuantity < 1) {
      newData[index].quantity = 1
    } else {
      newData[index].quantity = newQuantity
      const pricePerItem = parseFloat(newData[index].price)
      newData[index].totalPrice = (newQuantity * pricePerItem).toFixed(3)
    }

    setSelectedItem(newData)
  }

  const handleRemove = () => {
    const indexToDelete = selectedItem.findIndex(item => item.itemName === itemRemove)
    if (indexToDelete !== -1) {
      const newData = [...selectedItem]
      newData.splice(indexToDelete, 1)
      setSelectedItem(newData)
    }
    handleDialogClose() // Close the dialog
  }
  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const handleDialogOpen = (itemName) => {
    setItemRemove(itemName) // Set the itemName to state variable
    setDialogOpen(true) // Open the dialog
  }

  const handleImageOpen = (image, title) => {
    setSelectedImage(image)
    setSelectedImageTitle(title)
    setImageOpen(true)
  }

  const handleImageClose = () => {
    setImageOpen(false)
    setSelectedImage('')
    setSelectedImageTitle('')
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
          <Box justifyContent={'center'} alignItems={'center'} display={'flex'}>
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
                    <IconButton
                      size="small"
                      sx={{
                        '&.MuiIconButton-root': {
                          boxShadow: 'none',
                          borderRadius: '10px',
                          willChange: 'transform',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            color: '#1A2130',
                            '&:active': {
                              boxShadow: 'none',
                              transform: 'translateY(0)'
                            }
                          }
                        }
                      }}
                      onClick={() => handleImageOpen(item.itemImage, item.itemName)}
                    >
                      <OpenInNewIcon sx={{ fontSize: '15px' }} />
                    </IconButton>
                  </Box>
                  <Typography fontSize={'12px'} color="initial" fontWeight={'600'}>
                    Amount {item.price}Đ
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
                    <Typography color={'white'} mx={2}>
                      {item.quantity}
                    </Typography>
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
                  <Typography variant="h6" fontWeight={'600'} sx={{ minWidth: '80px', textAlign: 'center' }}>
                    {item.totalPrice ? `${item.totalPrice}Đ` : `${item.price}Đ`}
                  </Typography>
                  <IconButton
                    color="error"
                    sx={{
                      '&.MuiIconButton-root': {
                        boxShadow: 'none',
                        borderRadius: '10px',
                        willChange: 'transform',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          '&:active': {
                            boxShadow: 'none',
                            transform: 'translateY(0)'
                          }
                        }
                      }
                    }}
                    onClick={() => handleDialogOpen(item.itemName)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Card>
            ))}
          </div>
        )}
      </Box>
      <AlertDialog
        open={dialogOpen}
        handleClose={handleDialogClose}
        title={'Remove item?'}
        contentText={'Do you want remove item from list?'}
        cancelLabel={'Cancel'}
        confirmLabel={'Remove'}
        handleConfirm={handleRemove}
      />
      <Dialog open={imageOpen} onClose={handleImageClose}>
        <DialogTitle>
          <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>{selectedImageTitle}</Typography>
        </DialogTitle>
        <DialogContent>
          <img src={selectedImage} alt={selectedImageTitle} style={{ width: '300px' }} />
        </DialogContent>
      </Dialog>
    </Box>
  )
}
