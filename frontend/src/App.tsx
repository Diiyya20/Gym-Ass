import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import SupplementList from './components/supplements/SupplementList';
import SupplementDetail from './components/supplements/SupplementDetail';
import Cart from './components/cart/Cart';
import Navbar from './components/layout/Navbar';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/supplements" />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/supplements" />} />
        <Route path="/supplements" element={isAuthenticated ? <SupplementList /> : <Navigate to="/login" />} />
        <Route path="/supplements/:id" element={isAuthenticated ? <SupplementDetail /> : <Navigate to="/login" />} />
        <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/supplements" />} />
      </Routes>
    </>
  );
};

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <CartProvider>
          <Router>
            <AppRoutes />
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
