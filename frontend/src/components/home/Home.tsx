import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Link, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WorkoutRoutines from '../workouts/WorkoutRoutines';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'transparent',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlJTIwZ3ltfGVufDB8fDB8fHww"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.7,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2rem', md: '4rem' } }}>
              Your Journey to Fitness Starts Here
            </Typography>
            <Typography variant="h5" component="h2" paragraph sx={{ mb: 4 }}>
              Premium supplements and expert training programs for your fitness goals
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.95)' },
                }}
                onClick={() => navigate('/workouts')}
              >
                Start Your Workout
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { borderColor: 'rgba(255, 255, 255, 0.8)', color: 'rgba(255, 255, 255, 0.8)' },
                }}
                onClick={() => navigate('/supplements')}
              >
                Shop Supplements
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Workout Routines Section */}
      <WorkoutRoutines />

      {/* Supplements Section */}
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, bgcolor: 'background.paper' }}>
        <Container>
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            Premium Supplements
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Protein Powder
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Premium whey protein for muscle recovery and growth
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Pre-Workout
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Energy and focus for your training sessions
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    BCAAs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Essential amino acids for muscle recovery
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Trainer Recommendations Section */}
      <Container sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 1, sm: 2, md: 3, lg: 4 }, bgcolor: 'background.paper' }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Expert Trainer Recommendations
        </Typography>
        <Typography variant="h6" component="h3" paragraph align="center">
          Get personalized training advice from our expert trainers
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Coming soon: Deepseek AI-powered training recommendations
          </Typography>
          <Button variant="contained" color="primary">
            Coming Soon
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
