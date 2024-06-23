import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@routes/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { appSetting } from '@config/environment';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: Infinity,
      refetchOnWindowFocus: false,
      retry: 1,
      retryDelay: 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      {!appSetting.development && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
export default App;
