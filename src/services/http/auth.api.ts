import axios from 'axios';

interface LoginForm {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export default {
  async login(form: LoginForm) {
    const res = await axios.post<LoginResponse>('/login', form);
  },
};
