import React from 'react';
import './App.css';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import routes from './utils/routes';
import LoginPage from './pages/login/loginPage';
import RegisterPage from './pages/register/registerPage';

function App() {
  // const [queryClient] = useState(
  //   new QueryClient({
  //     defaultOptions: {
  //       queries: {
  //         retry: false,
  //         refetchOnWindowFocus: false,
  //       },
  //       mutations: {
  //         retry: false,
  //       },
  //     },
  //   }),
  // );

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={routes.login} />} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.register} element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;
