import React, { useEffect, useState } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Container, 
  Button,
  CircularProgress,
  Alert,
  Box,
  Rating,
  Chip,
  Divider,
  Snackbar,
  IconButton
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../../context/CartContext';
import { styled } from '@mui/material/styles';
import axios from 'axios';

interface Supplement {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  brand: string;
  usage: string;
  benefits: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const SupplementList = () => {
  const [supplements, setSupplements] = useState<Supplement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchSupplements = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('http://localhost:8080/api/supplements');
        setSupplements(response.data);
      } catch (error) {
        console.error('Error fetching supplements:', error);
        setError('Failed to load supplements. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSupplements();
  }, []);

  if (loading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
          <CircularProgress size={60} thickness={4} />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Box mt={4}>
          <Alert severity="error" variant="filled">
            {error}
          </Alert>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 6, lg: 8, xl: 10 } }}>
      <Box py={4}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 6,
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Premium Supplements
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center',
            width: '100%',
            p: 3,
            maxWidth: '1600px',
            margin: '0 auto'
          }}
        >
          {supplements.map((supplement) => (
            <Box
              key={supplement.id}
              sx={{
                flex: '1 1 300px',
                maxWidth: { xs: '400px', sm: '45%', md: '30%', lg: '23%', xl: '20%' },
                minWidth: { xs: '280px', sm: '320px' }
              }}
            >
              <StyledCard>
                <CardMedia
                  component="img"
                  height="260"
                  image={supplement.imageUrl || 'https://via.placeholder.com/400'}
                  alt={supplement.name}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: '1px solid rgba(0,0,0,0.1)'
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box mb={2}>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                      {supplement.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                      {supplement.brand}
                    </Typography>
                  </Box>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {supplement.description}
                  </Typography>
                  
                  <Box display="flex" flexWrap="wrap" mb={2}>
                    <StyledChip label={supplement.category} color="primary" variant="outlined" />
                    <StyledChip label={supplement.usage} color="secondary" variant="outlined" />
                  </Box>
                  
                  <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                      ${supplement.price}
                    </Typography>
                    <Rating value={4} readOnly size="small" />
                  </Box>
                  
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    onClick={() => {
                      addToCart({
                        id: supplement.id,
                        name: supplement.name,
                        price: supplement.price,
                        quantity: 1,
                        imageUrl: supplement.imageUrl
                      });
                      setSnackbarOpen(true);
                    }}
                    startIcon={<AddShoppingCartIcon />}
                    sx={{ 
                      mt: 2,
                      py: 1.5,
                      textTransform: 'none',
                      fontWeight: 'bold',
                      borderRadius: 2,
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1976D2 30%, #1CACF3 90%)',
                      }
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </StyledCard>
            </Box>
          ))}
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message="Item added to cart"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Container>
  );
};

export default SupplementList;