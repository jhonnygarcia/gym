/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from 'react';
import { Loader } from '@components/Loader';

const Loadable = (Component: any) => (props: any) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
