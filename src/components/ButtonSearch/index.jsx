import React from 'react'

import { ButtonStyled } from './styles'

const ButtonSearch = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
)


export default ButtonSearch