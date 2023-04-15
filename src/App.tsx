import React from 'react';
import './App.css';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import routes from './utils/routes';
import LoginPage from './pages/login/loginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={routes.login} />} />
        <Route path={routes.login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
