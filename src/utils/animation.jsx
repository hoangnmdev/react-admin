import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
// Define keyframes for the floating animation
const floatingOne = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(40px, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
`
const floatingTwo = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, 40px);
  }
  100% {
    transform: translate(0, 0);
  }
  `
const floatingThree = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(40px, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
  `
const floatingFour = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, 40px);
  }
  100% {
    transform: translate(0, 0);
  }
  `
// Styled component for the animated circle
const FloatingCircleOne = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  animation: ${floatingOne} 7s infinite;
`
const FloatingCircleTwo = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  animation: ${floatingTwo} 7s infinite;
`
const FloatingCircleThree = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: ${floatingThree} 5s infinite;
`
const FloatingCircleFour = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: ${floatingFour} 5s infinite;
`
// Styled component for the first circle with gradient background
export const GradientCircleOne = styled(FloatingCircleOne)`
  background: linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%);
`
export const GradientCircleTwo = styled(FloatingCircleTwo)`
  background: linear-gradient(-135deg, #899FD4 0%, #A389D4 100%);
`
export const GradientCircleThree = styled(FloatingCircleThree)`
  background: #04a9f5;
`
export const GradientCircleFour = styled(FloatingCircleFour)`
  background: #1de9b6;
`