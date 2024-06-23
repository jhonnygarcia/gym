import axios from 'axios';
import { appSetting } from '@config/environment';

const http = axios.create({
  baseURL: appSetting.apiUrl,
});

const loginInterno = (username: string, password: string): Promise<any> => {
  console.log(appSetting);
  const api = `${appSetting.apiUrl}/api/auth/sign`;
  const payload = {
    username,
    password,
  };
  return http.post(api, payload);
};

const forgot = (email: string): Promise<any> => {
  const api = `${appSetting.apiUrl}/api/auth/forgot`;
  const payload: any = {};
  if (email) payload.email = email;
  return http.post(api, payload);
};

const setPassword = (userId: string, password: string): Promise<any> => {
  const api = `${appSetting.apiUrl}/api/auth/set-password`;
  const payload: any = {
    userId,
    password,
  };
  return http.post(api, payload);
};

export const authService = {
  loginInterno,
  forgot,
  setPassword,
};
