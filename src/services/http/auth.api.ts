import axios from 'axios';

export interface LoginForm {
  email?: string;
  password?: string;
}

interface LoginResponse {
  token: string;
}

const login = (form: LoginForm) => axios.post<LoginResponse>('/login', form);

export default {
  login,
};
