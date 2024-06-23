export enum AppRoles {
  ADMIN = 'admin',
}

export type AppRolesKeys = keyof typeof AppRoles;

interface AppSettings {
  apiUrl: string;
  storageTokenKey: string;
  storageMenuKey: string;
  language: string;
  development: boolean;
  recaptcha_public_key: string;
  cultureNumber: string;
}

let environment = {
  storageTokenKey: 'token',
  storageMenuKey: 'menu',
  development: import.meta.env.DEV,
  cultureNumber: 'es-ES',
} as AppSettings;

const getEnvironment = async (): Promise<string | null> => {
  try {
    const response = await fetch(`${window.location.origin}/api/env`);
    const env = await response.text();
    return env;
  } catch (error) {
    return '';
  }
};

export const loadAppSettings = async () => {
  let env: string | null = '';
  let settingsFile = '';

  if (import.meta.env.PROD) {
    env = await getEnvironment();
    settingsFile = env ? `appsettings.${env}` : 'appsettings';
  } else {
    settingsFile = 'appsettings.local';
  }

  const response = await fetch(`/${settingsFile}.json`);
  const config = await response.json();
  environment = { ...environment, ...config };
  if (import.meta.env.PROD) {
    environment.apiUrl = window.location.origin;
  }
  if (import.meta.env.VITE_API_URL) {
    environment.apiUrl = import.meta.env.VITE_API_URL;
  }
  if (config.apiUrl) {
    environment.apiUrl = config.apiUrl;
  }
  Object.freeze(environment);
};

export { environment as appSetting };
