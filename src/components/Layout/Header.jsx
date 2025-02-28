import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Fastfood, Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import '../../styles/HeaderStyles.css'
const Header = () => {
    const [menustatus, setMenuStatus] = useState(false);

    //menuIcon click handler
    const handleDrawerToggle = () => {
        setMenuStatus(!menustatus);
    }

    //
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: '200px' }} >
            <Typography
                color={"goldenrod"}
                variant="h6"
                component={"div"}
                sx={{ flexGrow: 1, fontWeight: "bold", my: '24px' }}
            >
                <Fastfood />
                My Restaurant
            </Typography>
            <Divider />
            <ul className='mobile-navigation'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </Box>
    );


    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: '#000' }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2, display: { sm: "none" } }}
                            onClick={handleDrawerToggle}
                        >
                            <Menu />
                        </IconButton>
                        <Typography
                            color={"goldenrod"}
                            variant="h6"
                            component={"div"}
                            sx={{ flexGrow: 1, fontWeight: "bold" }}
                        >
                            <Fastfood />
                            My Restaurant
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='navigation-menu'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/menu">Menu</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component={"nav"}>
                    <Drawer
                        open={menustatus}
                        onClose={handleDrawerToggle}
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box sx={{ p: 1 }}>
                    <Toolbar />
                </Box>
            </Box >
        </>
    )
}

export default Header
