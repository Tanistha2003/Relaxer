import React from 'react'

import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

import '../../styles/common/CustomLoader.css';

export default function CustomLoader() {
    return (
        <Box style={{ display: 'flex'}} className='center-loader'>
            <CircularProgress style={{ color: 'rgb(167, 4, 167)' }}/>
        </Box>       
    )
}
