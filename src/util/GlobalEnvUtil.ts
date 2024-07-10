export const GlobalEnvUtil = {
  BACKEND_URL: import.meta.env.VITE_BACKEND_BASE_URL || '',
  DEV_MODE: import.meta.env.DEV,
};
