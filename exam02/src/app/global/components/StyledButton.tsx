'use client'
import styled, { css } from 'styled-components'
const commonStyle = css`
  height: 80px;
  border: 0;
  color: white;
`
export const Button = styled.button`
  ${commonStyle}
  height: 80px;
  min-width: 200px;
  background: ${({ color }) => color ?? 'black'};
  ${({ border }) =>
    border &&
    css`
      border: 1px solid white;
      color: orange;
    `}
`
