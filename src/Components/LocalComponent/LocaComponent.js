import React from 'react'
import { styled } from '@mui/material/styles';

export default function LocalComponent(props) {
  const CustomComponent=styled(props.variant)``
  return (
    <CustomComponent {...props}>{props.children}</CustomComponent>
  )
}
