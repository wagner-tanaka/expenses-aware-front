import {
  Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from './loginPage.module.css';
import useLoginApi from '../../hooks/api/auth.hook';
import { LoginForm } from '../../services/http/auth.api';

function LoginPage() {
  // queries
  const { mutate: loginRequest, isLoading: loginIsLoading } = useLoginApi();

  // states
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // methods
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

  const handleLogin = () => {
    loginRequest(loginForm, {
      onSuccess: () => {
        console.log('success');
      },
    });
  };

  const handleCreateAccount = () => console.log('create account');

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.logoContainer}>
        Money Wise
      </div>
      <div className={styles.mainContent}>
        <div className={styles.loginMessage}>
          Log Into Money Wise
        </div>
        <TextField
          label="Email"
          variant="outlined"
          sx={{ width: '100%' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            sx={{ width: '100%' }}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
              )}
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{ width: '100%', fontSize: '1.2rem', fontWeight: 'bold' }}
          size="large"
          color="primary"
          loading={loginIsLoading}
          onClick={handleLogin}
        >
          Log In
        </Button>
        <div className={styles.forgotPasswordContainer}>
          <Link href="www.google.com" underline="hover">
            Forgot Password
          </Link>
        </div>
        <Button
          variant="contained"
          color="success"
          sx={{
            width: '70%', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px',
          }}
          size="large"
          onClick={handleCreateAccount}
          disabled
        >
          Create Account
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
