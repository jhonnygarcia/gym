import './LoginPage.scss';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@components/Button';
import EyeOff from '@assets/icons/heroicons/outline/eye-off.svg?react';
import Eye from '@assets/icons/heroicons/outline/eye.svg?react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '@hooks/auth.hook';
import { Spinner } from 'keep-react';

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
  const { mutate, isPending } = useLoginMutation();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    mutate({
      username: data.email,
      password: data.password,
    });
  };
  return (
    <form className="my-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center">
        <h2 className="mb-1 text-3xl font-semibold text-foreground">Iniciar Sesión</h2>
        <p className="text-sm text-muted-foreground">Ingresar tus credenciales para acceder a tu cuenta.</p>
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
              Email
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
              Contraseña
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
          <label className="ml-2 block text-sm text-muted-foreground"> Recordar </label>
        </div>

        <Button
          impact="none"
          tone="primary"
          shape="rounded"
          size="small"
          onClick={() => {
            navigate('/forgot');
          }}>
          Olvidaste tu contraseña?
        </Button>
      </div>

      <div>
        <Button full impact="bold" tone="primary" shape="rounded" size="medium">
          {isPending ? <Spinner color="info" size="lg" /> : 'Ingresar'}
        </Button>
      </div>
    </form>
  );
};

export default LoginPage;
