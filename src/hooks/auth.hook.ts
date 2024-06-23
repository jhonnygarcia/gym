import { authService } from '@services/auth/auth.service';
import { useMutation } from '@tanstack/react-query';

export const HOOK_AUTH_KEY = {
  userInfo: 'userinfo',
};

export const useLoginMutation = () =>
  useMutation({
    mutationFn: (data: { username: string; password: string }) =>
      authService.loginInterno(data.username, data.password),
  });

export const useForgotMutation = () =>
  useMutation({
    mutationFn: (data: { email: string }) => authService.forgot(data.email),
  });

export const useSetPasswordMutation = () =>
  useMutation({
    mutationFn: (data: { userId: string; password: string }) => authService.setPassword(data.userId, data.password),
  });
