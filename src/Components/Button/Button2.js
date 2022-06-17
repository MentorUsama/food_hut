import React from 'react'
import Play from '../../assets/icons/play'
import Paper from '@mui/material/Paper';
import Typography from "../Typography/Typography"
import Box from '@mui/material/Box'
export default function Button2() {
    return (
        <Box sx={{display:'flex',alignItems:'center'}}>
            <Paper sx={styles.container}>
                <Play />
            </Paper>
            <Typography variant='subtitle3' color="text.grey" sx={{marginInlineStart:'20px',fontWeight:'bold'}}>Play Now</Typography>
        </Box>

    )
}

const styles = {
    container: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 15px 30px rgba(223, 105, 81, 0.3)'

    }
}