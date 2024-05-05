import './LoginPage.scss';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@components/Button';
import GoogleLogo from '@assets/icons/google-logo.svg?react';
import EyeOff from '@assets/icons/heroicons/outline/eye-off.svg?react';
import Eye from '@assets/icons/heroicons/outline/eye.svg?react';
import { useNavigate } from 'react-router-dom';

type LoginForm = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const [passwordType, setPasswordType] = useState(true);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
    // Aquí puedes manejar la autenticación
  };
  return (
    <form className="my-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center">
        <h2 className="mb-1 text-3xl font-semibold text-foreground">
          Hello Again <span className="text-primary">!</span>
        </h2>
        <p className="text-sm text-muted-foreground">Enter your credential to access your account.</p>
      </div>

      <div>
        <Button full impact={'bold'} tone={'light'} shape={'rounded'} size={'medium'}>
          <GoogleLogo className="h-6 w-6 mr-2" />
          Log in with Google
        </Button>
      </div>

      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-muted after:mt-0.5 after:flex-1 after:border-t after:border-muted">
        <p className="mx-4 mb-0 text-center text-sm text-muted-foreground">or</p>
      </div>

      <div className="space-y-3 text-left">
        <div className="form__group">
          <div className="relative">
            <input
              type="text"
              id="email"
              className={'peer block' + (errors.email?.message ? ' is__invalid-input' : '')}
              placeholder=" "
              {...register('email', {
                required: 'Este campo es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Dirección de correo inválida',
                },
              })}
            />
            <label
              htmlFor="email"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-95 transform bg-background px-2 text-sm text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-95 peer-focus:px-2 peer-focus:text-primary">
              Email address
            </label>
          </div>
          {errors.email && (
            <div className="is__invalid-error">
              <div>{errors.email.message}</div>
            </div>
          )}
        </div>

        <div className="form__group">
          <div className="relative">
            <input
              type={passwordType ? 'password' : 'text'}
              id="password"
              className={'peer block' + (errors.password?.message ? ' is__invalid-input' : '')}
              placeholder=" "
              {...register('password', {
                required: 'Este campo es requerido',
              })}
            />
            <label
              htmlFor="password"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-95 transform bg-background px-2 text-sm text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-95 peer-focus:px-2 peer-focus:text-primary">
              Password
            </label>
            <span
              className="absolute top-2.5 right-5 cursor-pointer text-muted-foreground"
              onClick={() => setPasswordType((value) => !value)}>
              {passwordType ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </span>
          </div>
          {errors.password && (
            <div className="is__invalid-error">
              <div>{errors.password.message}</div>
            </div>
          )}
        </div>
      </div>

      <div className="mb-2 flex items-center justify-between space-x-3">
        <div className="flex items-center">
          <input name="remember-me" type="checkbox" />
          <label className="ml-2 block text-sm text-muted-foreground"> Remember me </label>
        </div>

        <Button
          impact="none"
          tone="primary"
          shape="rounded"
          size="small"
          onClick={() => {
            navigate('/forgot');
          }}>
          Forgot your password?
        </Button>
      </div>

      <div>
        <Button full impact="bold" tone="primary" shape="rounded" size="medium">
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default LoginPage;
