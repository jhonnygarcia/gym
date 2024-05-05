import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@routes/AppRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
export default App;
