import {
  Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from './loginPage.module.css';

function LoginPage() {
  // states
  const [showPassword, setShowPassword] = useState(false);

  // methods
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.mainContainer}>
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
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )}
              label="Password"
            />
          </FormControl>
          <Button
            variant="contained"
            sx={{ width: '100%', fontSize: '1.2rem', fontWeight: 'bold' }}
            size="large"
          >
            Log In
          </Button>
          <div className={styles.signUpContainer}>
            <Link href="www.google.com" underline="hover">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
