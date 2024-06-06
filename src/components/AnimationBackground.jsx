import Box from '@mui/material/Box'
import { GradientCircleOne, GradientCircleTwo, GradientCircleThree, GradientCircleFour } from '~/utils/animation'
function AnimationBackground() {
  return (
    <Box height={'100vh'}
      justifyContent={'center'}
      display={'flex'}
      alignItems={'center'}>
      <Box
        m={'0rem 0 10rem 0rem'}>
        <GradientCircleThree />
      </Box>
      <Box
        m={'0 0 25rem 0rem'}>
        <GradientCircleOne />
      </Box>
      <Box
        m={'25rem 0rem 0rem 0rem'}>
        <GradientCircleTwo />
      </Box>
      <Box
        m={'10rem 0rem 0rem 0rem'}>
        <GradientCircleFour />
      </Box>
    </Box>
  )
}

export default AnimationBackground