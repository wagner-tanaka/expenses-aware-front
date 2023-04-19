import { useMutation } from '@tanstack/react-query';
import http, { ApiError } from '../../services/http';

export default function useLoginApi() {
  return useMutation(http.auth.login);
}
