import { LineProgress } from 'keep-react';

const Loader = () => (
  <div className="fixed top-0 left-0 z-50 w-full">
    <LineProgress size="md" />
  </div>
);

export default Loader;
