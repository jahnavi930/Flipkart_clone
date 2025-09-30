import React, { useState, useContext } from 'react';
import { ArrowDropDown } from '@mui/icons-material';

import {
    Box,
    Typography,
    Badge,
    Button,
    styled,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';

import {
    ShoppingCart,
    Notifications as NotificationsIcon,
    Campaign as CampaignIcon,
    PhoneAndroid as PhoneIcon,
    SupportAgent as SupportAgentIcon
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';
import LoginDialog from '../Login/LoginDialog';

// Styled Components
const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    alignItems: 'center',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));

// Component
const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const { account, setAccount } = useContext(LoginContext);
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const openDialog = () => setOpen(true);

    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    const openMenu = Boolean(anchorEl);

    return (
        <Wrapper>
            {account ? (
                <Profile account={account} setAccount={setAccount} />
            ) : (
                <LoginButton variant="contained" onClick={openDialog}>
                    Login
                </LoginButton>
            )}

            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>

<Typography
  onClick={handleMenuClick}
  style={{ 
    marginTop: 3, 
    display: 'flex', 
    alignItems: 'center', 
    cursor: 'pointer' 
  }}
>
  More <ArrowDropDown fontSize="small" />
</Typography>


            {/* Dropdown Menu */}
            <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                PaperProps={{
                    elevation: 2,
                    sx: {
                        mt: 1.5,
                        minWidth: 240,
                        '& .MuiMenuItem-root': {
                            fontSize: 14,
                            paddingY: 1
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {/* Menu Heading */}


                {/* Notification & Preference */}
                <MenuItem>
                    <ListItemIcon>
                        <NotificationsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Notification & Preference</ListItemText>
                </MenuItem>



                {/* Advertise */}
                <MenuItem>
                    <ListItemIcon>
                        <CampaignIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Advertise</ListItemText>
                </MenuItem>

                {/* Download App */}
                <MenuItem>
                    <ListItemIcon>
                        <PhoneIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Download App</ListItemText>
                </MenuItem>

                {/* 24x7 Customer Care */}
                <MenuItem>
                    <ListItemIcon>
                        <SupportAgentIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>24x7 Customer Care</ListItemText>
                </MenuItem>
            </Menu>

            {/* Cart */}
            <Container to="/cart">
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Container>

            {/* Login Dialog */}
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Wrapper>
    );
};

export default CustomButtons;
