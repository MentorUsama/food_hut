import React from 'react'
import Logo from '../../assets/Images/Logo'
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import LogoDark from '../../assets/Images/LogoDark'
import MyButton from '../Button/Button';
import Typography from "../Typography/Typography";
import {get_text} from "../../assets/languages/index";
const pages = ['OUR POPULAR FOOD', 'OUR MENUES', 'WHY FOODHUT', 'TODAY SPECIAL OFFERS'];
export default function Header(props) {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const languageClickListener = (language) => {
        props.setDirection(language === 'en' ? 'ltr' : 'rtl')
        props.setLanguage(language);
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Left Container */}
                    <Box>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            {theme.palette.mode==="light"?<Logo />:<LogoDark />}
                        </Box>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    {/* Middle Container*/}
                    <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                variant="text"
                                color="ternary"
                                sx={{ color: 'text.ternary', fontSize: '18px', textTransform: 'capitalize' }}
                                onPress={null}
                            >
                                {get_text(theme.language, page)}
                            </Button>
                        ))}
                    </Box>
                    {/* Right Container*/}
                    <Box style={{ display: 'flex', flexDirection: 'row' }} xs={{ flexGrow: 1 }}>
                        <IconButton sx={{ ml: 1 }} onClick={props.setMode} color="primary">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon color="ternary" /> : <Brightness4Icon color="ternary" />}
                        </IconButton>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            variant="text"
                            color="ternary"
                        >{get_text(theme.language, theme.language)}</Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={() => setAnchorEl(null)}
                            sx={{ color: 'primary' }}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => languageClickListener('en')}><Typography color="text.ternary">English</Typography></MenuItem>
                            <MenuItem color="ternary" onClick={() => languageClickListener('ur')}><Typography color="text.ternary">اردو</Typography></MenuItem>
                        </Menu>
                        <MyButton sx={{marginInlineStart:5}}>{get_text(theme.language, 'Downlaod App')}</MyButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
