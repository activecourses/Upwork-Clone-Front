import { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

const ResetPasswordConfirm = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    const success = await updatePassword(password);
    if (success) {
      // Handle success (e.g., navigate to login page)
    }
  };

  const updatePassword = async (password) => {
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, token }),
      });
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error updating password:', error);
      return false;
    }
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          textAlign: 'center',
          padding: '20px',
          maxWidth: 400,
          height: '400px',
        }}
      >
        <Typography
          variant='h4'
          component='h1'
          gutterBottom
          style={{ paddingTop: '20px', color: '#4CAF50' }}
        >
          Set New Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label='New Password'
            type={showPassword ? 'text' : 'password'}
            variant='outlined'
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(''); // Clear error when typing
            }}
            margin='normal'
            required
            helperText='Minimum 6 characters'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button
                    onClick={() => setShowPassword((prev) => !prev)}
                    style={{ color: '#4CAF50' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label='Confirm Password'
            type={showConfirmPassword ? 'text' : 'password'}
            variant='outlined'
            fullWidth
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError(''); // Clear error when typing
            }}
            margin='normal'
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    style={{ color: '#4CAF50' }}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />

          <Typography color='error'>{error}</Typography>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            style={{ marginTop: '30px', background: '#4CAF50' }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default ResetPasswordConfirm;
