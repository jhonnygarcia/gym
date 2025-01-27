import './AuthLayout.scss';
import { Outlet } from 'react-router-dom';
import Banner from '@assets/images/banner.png';

const AuthLayout = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="auth-bg hidden flex-1 items-center justify-center custom-background bg-cover lg:flex">
        <div className="max-w-2xl space-y-4 p-8 text-center text-primary">
          <img src={Banner} alt="dashboard widget" />
          <h1 className="text-4xl font-bold">"Fast, Efficient and Productive"</h1>
          <p className="text-xs font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis
            <span className="cursor-pointer font-medium text-yellow-400">nostrud</span> exercitation ullamco laboris
            nisi ut aliquip ex ea commodo <span className="cursor-pointer font-medium text-yellow-400">consequat.</span>{' '}
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background">
        <div className="max-w-md overflow-y-auto px-4 sm:w-[500px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
