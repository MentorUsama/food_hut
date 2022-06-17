import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


// import * as React from 'react';
// import Slider from '@mui/material/Slider';

const StyledButton = styled(Button)(({ theme }) => ({
    minWidth: "162px",
    backgroundColor: theme.palette.primary.main,
    borderRadius:25,
    height: '45px',
    paddingLeft:20,
    paddingRight:20,
    fontSize: 18,
    fontWeight: '400',
    color:theme.palette.text.ternary_reverse
}));


export default function MyButton(props) {
    return (
        <StyledButton {...props} disableElevation variant='contained' >{props.children}</StyledButton>
    )
}
