import React from 'react'
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { get_text } from '../../assets/languages/index'
import { useTheme } from '@mui/material/styles';
import heroImage from '../../assets/Images/hero_image.png'

export default function HeroContainer() {
    const theme = useTheme();
  return (
    <Stack direction={"row"}>
    <Box sx={{ width: '100%' }}>
      <Typography variant="h1">{get_text(theme.language, "We're")}</Typography>
      <Typography variant="h1">{get_text(theme.language, "Serious")}</Typography>
      <Typography variant="h1">{get_text(theme.language, "For")}</Typography>
      <Typography variant="h1">{get_text(theme.language, "Food")}</Typography>
      <Typography variant="h1">{get_text(theme.language, "&")}</Typography>
      <Typography variant="h1">{get_text(theme.language, "Delivery.")}</Typography>
      <Typography variant="h1">{get_text(theme.language, ".")}</Typography>
    </Box>
    <Box sx={{ width: '100%' }}>
      <img alt="logo" src={heroImage} />
    </Box>
  </Stack>
  )
}
