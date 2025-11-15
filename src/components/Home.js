// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Welcome to Your Task Manager
      </Typography>

      <Card 
        sx={{ 
          p: 3, 
          boxShadow: 5, 
          borderRadius: 3,
          mb: 4,
          transition: "0.3s",
          "&:hover": { transform: "scale(1.03)" }
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Create New Tasks
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            onClick={() => navigate("/add")}
          >
            Add Task
          </Button>
        </CardContent>
      </Card>

      <Card 
        sx={{ 
          p: 3, 
          boxShadow: 5, 
          borderRadius: 3,
          transition: "0.3s",
          "&:hover": { transform: "scale(1.03)" }
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            View / Manage Tasks
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            onClick={() => navigate("/view")}
          >
            View Tasks
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Home;
