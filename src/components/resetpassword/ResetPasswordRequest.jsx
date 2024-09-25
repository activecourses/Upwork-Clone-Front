import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ResetPasswordRequest = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate email format
    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }

    // Send reset email
    await sendResetEmail(email);
    // Navigate to the success page regardless of the sending result
    navigate('/password-sent');
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const sendResetEmail = async (email) => {
    try {
      const response = await fetch('/api/request-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      return data.success; // Optional, for logging success
    } catch (error) {
      console.error('Error sending reset email:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full height of the viewport
        backgroundColor: 'white', // Light background for contrast
      }}
    >
      <div
        style={{
          width: '100vw', // Full width of the viewport
          height: '100vh', // Full height of the viewport
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          maxWidth="xs"
          style={{
            height:'400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
            border: 'solid 2px  #4CAF50', 
            backgroundColor: '#fff', // White background
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Shadow
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            style={{
              color: '#4CAF50',
              paddingTop: '40px',
              paddingBottom: '50px',
            }}
          >
            Reset Password
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error}
              helperText={error}
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '16px', backgroundColor: '#4CAF50' }}
            >
              Next
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default ResetPasswordRequest;
