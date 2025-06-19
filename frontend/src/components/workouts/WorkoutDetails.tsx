import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Paper, Tabs, Tab, useTheme } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

interface WorkoutProgram {
  id: number;
  name: string;
  description: string;
  duration: string;
  difficulty: string;
  equipment: string[];
  days: {
    day: number;
    exercises: {
      name: string;
      sets: number;
      reps: string;
      notes: string;
    }[];
  }[];
  benefits: string[];
  tips: string[];
}

const workoutPrograms: WorkoutProgram[] = [
  {
    id: 1,
    name: 'Muscle Building Program',
    description: 'A comprehensive program designed to build muscle mass and strength',
    duration: '12 weeks',
    difficulty: 'Intermediate',
    equipment: ['Dumbbells', 'Barbell', 'Bench', 'Pull-up Bar'],
    days: [
      {
        day: 1,
        exercises: [
          {
            name: 'Bench Press',
            sets: 4,
            reps: '8-10',
            notes: 'Focus on form and control'
          },
          {
            name: 'Pull-ups',
            sets: 3,
            reps: 'Max',
            notes: 'Use assistance if needed'
          },
          {
            name: 'Barbell Rows',
            sets: 3,
            reps: '8-10',
            notes: 'Keep back straight'
          }
        ]
      },
      {
        day: 2,
        exercises: [
          {
            name: 'Squats',
            sets: 4,
            reps: '8-10',
            notes: 'Keep knees behind toes'
          },
          {
            name: 'Deadlifts',
            sets: 3,
            reps: '6-8',
            notes: 'Focus on form'
          },
          {
            name: 'Leg Press',
            sets: 3,
            reps: '12-15',
            notes: 'Control the movement'
          }
        ]
      },
      {
        day: 3,
        exercises: [
          {
            name: 'Shoulder Press',
            sets: 4,
            reps: '8-10',
            notes: 'Use proper form'
          },
          {
            name: 'Lateral Raises',
            sets: 3,
            reps: '12-15',
            notes: 'Control the movement'
          },
          {
            name: 'Face Pulls',
            sets: 3,
            reps: '12-15',
            notes: 'Focus on rear delts'
          }
        ]
      }
    ],
    benefits: [
      'Increased muscle mass',
      'Improved strength',
      'Better posture',
      'Enhanced athletic performance'
    ],
    tips: [
      'Warm up properly before each workout',
      'Focus on form over weight',
      'Progress gradually',
      'Stay hydrated and eat well'
    ]
  }
];

const WorkoutDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const theme = useTheme();
  const program = workoutPrograms.find(p => p.id === Number(id));

  if (!program) {
    return (
      <Container sx={{ py: 0 }}>
        <Typography variant="h4" align="center">
          Workout Program Not Found
        </Typography>
      </Container>
    );
  }

  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container sx={{ py: 0 }}>
      <Box sx={{ mb: 4, pt: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {program.name}
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          {program.description}
        </Typography>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={{ mb: 3 }}
        >
          <Tab label="Overview" />
          <Tab label="Workout Plan" />
          <Tab label="Benefits" />
          <Tab label="Tips" />
        </Tabs>

        {activeTab === 0 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              Program Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                    Duration:
                  </Typography>
                  <Typography variant="body1">{program.duration}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                    Difficulty:
                  </Typography>
                  <Typography variant="body1">{program.difficulty}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                    Equipment:
                  </Typography>
                  <Typography variant="body1">
                    {program.equipment.join(', ')}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        {activeTab === 1 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              Workout Plan
            </Typography>
            {program.days.map((day, index) => (
              <Card key={index} sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Day {day.day}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {day.exercises.map((exercise, exIndex) => (
                      <Box
                        key={exIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                          p: 1,
                          borderRadius: 1,
                          bgcolor: 'background.paper',
                        }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 2 }}>
                          {exercise.name}
                        </Typography>
                        <Typography variant="body1">
                          {exercise.sets}x{exercise.reps}
                        </Typography>
                        <Typography variant="body1" sx={{ ml: 2, color: 'text.secondary' }}>
                          {exercise.notes}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}

        {activeTab === 2 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              Benefits
            </Typography>
            <Box sx={{ mt: 2 }}>
              {program.benefits.map((benefit, index) => (
                <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                  <Box component="span" sx={{ display: 'inline-block', mr: 1 }}>
                    •
                  </Box>
                  {benefit}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        {activeTab === 3 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              Tips
            </Typography>
            <Box sx={{ mt: 2 }}>
              {program.tips.map((tip, index) => (
                <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                  <Box component="span" sx={{ display: 'inline-block', mr: 1 }}>
                    •
                  </Box>
                  {tip}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/workouts')}
            sx={{ mr: 2 }}
          >
            Back to Programs
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/workout-routine')}
          >
            Start Program
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default WorkoutDetails;
