import { Box, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import { Card, IconButton } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { useState } from 'react'

function Content({ selectedItem }) {
  const [imageOpen, setImageOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageTitle, setSelectedImageTitle] = useState(null)

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
    <Box justifyContent={'center'} justifyItems={'center'} width={'100%'}>
      <Box
        height={'calc(100vh - 70px - 60px - 40px)'}
        sx={{ overflowY: 'auto', overflowX: 'hidden', width: '100%', position: 'relative' }}
        maxWidth={'1000px'}
        border='3px dashed rgba(0, 0, 0, 0.1)'
        borderRadius={'10px'}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            width: '100%',
            bgcolor: '#E5E5E5',
            position: 'sticky',
            top: 0,
            zIndex: 1
          }}
        >
          <Typography fontSize={'16px'} fontWeight={'600'} width={'50%'}>Item</Typography>
          <Typography fontSize={'16px'} fontWeight={'600'} width={'25%'} textAlign={'center'}>Quantity</Typography>
          <Typography fontSize={'16px'} fontWeight={'600'} width={'25%'} textAlign={'center'}>Subtotal</Typography>
        </Box>
        {selectedItem.length === 0 ? (
          <Box justifyContent={'center'} alignItems={'center'} display={'flex'} height={'100%'}>
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
          <>
            <Box>
              {selectedItem.map((item) => (
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
                  <Box width={'50%'} display={'inine-block'} alignItems={'center'}>
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
                  <Box width={'25%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box
                      textAlign={'center'}
                      sx={{ display: 'flex', alignItems: 'center', bgcolor: '#4F6F52', borderRadius: '5px' }}
                    >
                      <Typography color={'white'} mx={2}>
                        {item.quantity}
                      </Typography>
                    </Box>
                  </Box>
                  <Box width={'25%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Typography variant="h6" fontWeight={'600'} sx={{ minWidth: '80px', textAlign: 'center' }}>
                      {item.totalPrice ? `${item.totalPrice}Đ` : `${item.price}Đ`}
                    </Typography>
                  </Box>
                </Card>
              ))}
            </Box>
          </>
        )}
      </Box>
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

export default Content
