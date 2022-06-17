import React from 'react'
import Search from '../../assets/icons/search.js'
import { useTheme } from '@mui/material/styles';
import { Paper } from '@mui/material'
import LocalComponent from '../LocalComponent/LocaComponent.js'
import IconButton from '@mui/material/IconButton';


export default function SearchBar(props) {
    const theme = useTheme();
    return (
        <Paper sx={styles.container} elevation={0}>
            <Search fill={theme.palette.ternary.main} />
            <LocalComponent
                variant="input"
                type="text"
                sx={styles.inputStyles}
                placeholder={props.placeholder}
            />
            <IconButton sx={styles.IconButtonStyle}>
                <Search fill={theme.palette.ternary.main_reverse} />
            </IconButton>
        </Paper>
    )
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '54px',
        paddingLeft: '15px',
        paddingRight: '15px',
        borderRadius: '100px',
        border: 1,
        borderColor: 'ternary.main',
    },
    inputStyles: {
        height: '100%',
        border: 'none',
        width: '100%',
        ":focus": {
            outline: 'none',
        },
        marginRight: '10px',
        marginLeft: '10px',
        backgroundColor: 'transparent',
        color: 'text.ternary',
    },
    IconButtonStyle: {
        backgroundColor: 'secondary.main',
        ":hover": {
            backgroundColor: 'secondary.main',
        }
    }
}