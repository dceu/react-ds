import react from 'react'
import Paper from '@mui/material/Paper'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/material/Menu'
import Menu from '@mui/material/Menu'
import Toolbar from '@mui/material/Toolbar'

const test = (props) => (
    <>
    <Box >
        <Drawer elevation={1} anchor='left'>
        <p> DRAWER! </p>
        </Drawer>
        <AppBar elevation={2} >
        <Toolbar>
            <MenuIcon />
        </Toolbar>
                
            
        </AppBar>
    </Box>
    </>
    )
    
export default test;