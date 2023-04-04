import React, { FC } from "react"
import styled, { keyframes } from "styled-components"
import { ReactNode } from "react"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

interface FadeProps {
  duration?: number
  delay?: number
  children: ReactNode | ReactNode[]
}

const FadeIn: FC<FadeProps> = ({ duration = 3, delay = 0, children }) => {
  return (
    <Wrapper
      style={{
        animationDuration: duration + "s",
        animationDelay: delay + "s",
      }}
    >
      {children}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`
export default FadeIn
