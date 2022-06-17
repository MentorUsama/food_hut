import React from 'react'
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { get_text } from '../../assets/languages/index'

export default function MyTypography(props) {
    const theme = useTheme();
    return (
        <Typography {...props}>{get_text(theme.language, props.children) ? get_text(theme.language, props.children) : props.children}</Typography>
    )
}
