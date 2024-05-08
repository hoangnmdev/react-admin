import { Box } from '@mui/material'

import Header from './header/Header'
import Title from './header/Title'
import Content from './content/Content'

function OrderStatus() {
  return (
    <Box
      width={'calc(100% - 1000px)'}
      bgcolor={'white'}
      height={'calc(100vh - 70px)'}
    >
      {/*Header*/}
      <Header/>
      {/*Title*/}
      <Title/>
      {/*Content*/}
      <Content/>
    </Box>
  )
}

export default OrderStatus