import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleOrder = () => {
        navigate('/all-items');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    
    return (
        <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'black' }}>
            <Toolbar>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    Pickle Delight
                </Typography>
                <Box textAlign="center">
                    <IconButton color="inherit" aria-label="wishlist">
                        <FavoriteIcon />
                    </IconButton>
                    <Typography variant="caption">Wishlist</Typography>
                </Box>
                <Box textAlign="center">
                    <IconButton color="inherit" aria-label="login" onClick={handleLogin}>
                        <PersonIcon />
                    </IconButton>
                    <Typography variant="caption" onClick={handleLogin}>Login</Typography>
                </Box>
                <Box textAlign="center">
                    <IconButton color="inherit" aria-label="card">
                        <ShoppingCartIcon />
                    </IconButton>
                    <Typography variant="caption">Card</Typography>
                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default Header;
