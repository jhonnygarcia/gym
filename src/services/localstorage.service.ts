const get = (key: string): string | null => {
  if (key) {
    return localStorage.getItem(key);
  }
  return null;
};

const getObject = <T>(key: string): T | null => {
  if (key) {
    try {
      const value = localStorage.getItem(key);
      if (!value) return null;
      const object: T = JSON.parse(value);
      return object;
    } catch (error) {
      console.log('Error al intentar deserializar');
    }
  }
  return null;
};

const persistString = (key: string, value: string): void => {
  if (!key || !value) {
    return;
  }
  localStorage.setItem(key, value);
};

const persistObject = <T>(key: string, value: T | null): void => {
  if (!key || !value) {
    return;
  }
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

const remove = (key: string): void => {
  if (!key) {
    return;
  }
  localStorage.removeItem(key);
};

export const localStorageService = {
  get,
  getObject,
  persistString,
  persistObject,
  remove,
};
