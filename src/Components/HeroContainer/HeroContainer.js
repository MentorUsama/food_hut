import React from 'react'
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '../Typography/Typography';
import { useTheme } from '@mui/material/styles';
import heroImage from '../../assets/Images/hero_image.png'
import Grid from '@mui/material/Grid';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import Button2 from '../Button/Button2';
import { get_text } from '../../assets/languages';
export default function HeroContainer() {
  const theme = useTheme();
  return (
    <Box sx={styles.container}>
      <Grid container align="stretch" justifyContent='space-between' alignItems="center">
        <Grid item flex={1} xs={4}>
          <Stack spacing={1.5} direction="row" sx={{ flexWrap: 'wrap' }}>
            <Typography color="text.ternary" variant="h1">We're</Typography>
            <Typography variant="h1"></Typography>
            <Typography variant="h1">Serious</Typography>
            <Typography variant="h1" color="text.ternary">For</Typography>
            <Typography variant="h1">Food</Typography>
            <Typography variant="h1" color="text.ternary">&</Typography>
            <Typography variant="h1" color="text.secondary">Delivery</Typography>
            <Typography variant="h1" color="text.ternary">.</Typography>
          </Stack>
          <Box sx={{ marginTop: '29px' }}>
            <Typography variant='p' color='text.ternary' sx={{ opacity: 0.8 }}>
              Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
            </Typography>
          </Box>
          <Box sx={{ marginTop: '29px' }}>
            <SearchBar placeholder={get_text(theme.language, "search")} />
          </Box>
          <Box sx={{ marginTop: '34px', display: 'flex' }}>
            <Button sx={{ marginRight: 10 }}>{get_text(theme.language, "Downlaod App")}</Button>
            <Button2>Watch Video</Button2>
          </Box>
        </Grid>
        <Grid item flex={1} xs={8} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <img alt="logo" style={{ borderWidth: 10 }} src={heroImage} />
        </Grid>
      </Grid>
    </Box>
  )
}

const styles = {
  container: {
    width: '100%',
    paddingTop: '49px'
  }
}