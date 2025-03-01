import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import '../../styles/HeaderStyles.css'
import LOGO from '../../images/logo.svg'
const Header = () => {
    const [menustatus, setMenuStatus] = useState(false);

    //menuIcon click handler
    const handleDrawerToggle = () => {
        setMenuStatus(!menustatus);
    }

    //drawer's ItemList
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: '220px' }} >
            <Typography
                color={"goldenrod"}
                variant="h6"
                component={"div"}
                sx={{ flexGrow: 1, fontWeight: "bold", my: '24px' }}
            >
                <img src={LOGO} alt="logo" height={55} width={200} />
            </Typography>
            <Divider />
            <ul className='mobile-navigation'>
                <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
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
                            <img src={LOGO} alt="logo" height={55} width={250} />
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='navigation-menu'>
                                <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                                <li><NavLink to="/menu">Menu</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
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
                <Box>
                    <Toolbar />
                </Box>
            </Box >
        </>
    )
}

export default Header
