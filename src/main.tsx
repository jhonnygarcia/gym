import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { loadAppSettings } from '@config/environment.ts';

async function bootstrap() {
  await loadAppSettings();
  const App = (await import('./App')).default;

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

bootstrap();
