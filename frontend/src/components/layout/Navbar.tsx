import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Badge,
  IconButton 
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="sticky" sx={{ 
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      width:'100vw',
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      top: 0,
      zIndex: 1000
    }}>
      <Toolbar sx={{ 
        width: '100%', 
        px: { xs: 1, sm: 2, md: 3, lg: 4, xlg:5, xxlg:6 },
        minHeight: { xs: 60, sm: 70, md: 80 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Typography 
          variant="h5" 
          component={RouterLink} 
          to="/"
          sx={{ 
            flexGrow: 1,
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: 1,
            display: { xs: 'block', sm: 'inline-block' }
          }}
        >
          Fitness Store
        </Typography>
        <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2, md: 3 } }}>
          {isAuthenticated ? (
            <>
              <Button 
                color="inherit" 
                component={RouterLink} 
                to="/supplements"
                sx={{ 
                  fontWeight: 500,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                Supplements
              </Button>
              <IconButton 
                color="inherit" 
                component={RouterLink} 
                to="/cart"
                sx={{ 
                  ml: 1,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                <Badge badgeContent={totalItems} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <Button 
                color="inherit" 
                onClick={handleLogout}
                sx={{ 
                  fontWeight: 500,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button 
                color="inherit" 
                component={RouterLink} 
                to="/login"
                sx={{ 
                  fontWeight: 500,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                Login
              </Button>
              <Button 
                color="inherit" 
                component={RouterLink} 
                to="/register"
                sx={{ 
                  fontWeight: 500,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
