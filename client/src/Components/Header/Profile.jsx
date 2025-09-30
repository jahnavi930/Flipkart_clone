import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Menu, MenuItem, Box, styled } from '@mui/material';
import { PowerSettingsNew, FavoriteBorder, Person as PersonIcon } from '@mui/icons-material';

const Component = styled(Menu)`
    margin-top: 5px;
`;

const LogoutText = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        setAccount('');
        handleClose();
    };

    return (
        <>
            <Box onClick={handleClick} sx={{ cursor: 'pointer' }}>
                <Typography style={{ marginTop: 2 }}>{account}</Typography>
            </Box>
            <Component
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={logout}>
                    <PowerSettingsNew fontSize='small' color='primary' />
                    <LogoutText>Logout</LogoutText>
                </MenuItem>

                <MenuItem component={Link} to="/wishlist" onClick={handleClose}>
                    <FavoriteBorder fontSize='small' color='secondary' />
                    <LogoutText>Wishlist</LogoutText>
                </MenuItem>

                <MenuItem component={Link} to="/profile" onClick={handleClose}>
                    <PersonIcon fontSize='small' color='secondary' />
                    <LogoutText>My Profile</LogoutText>
                </MenuItem>
            </Component>
        </>
    );
};

export default Profile;
