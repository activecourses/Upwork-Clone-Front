import { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
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
        <Paper
          elevation={3}
          style={{
            height: '400px',
            display: 'flex',
            width: 400,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#fff', // White background
          }}
        >
          <Typography
            variant='h6'
            gutterBottom
            sx={{
              textAlign: 'center',
              fontSize: 33,
              fontWeight: 'normal',
              color: '#129900',
              position: 'relative',
              display: 'inline-block',
              transform: 'translateX(-50%)',
              marginBottom: 11,
              left: '30%',

              '&::after': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: '#129900',
                margin: '8px auto 0',
              },
            }}
          >
            Reset Password
          </Typography>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error}
              helperText={error}
              margin='normal'
              required
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
              style={{ marginTop: '16px' }}
            >
              Next
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default ResetPasswordRequest;
