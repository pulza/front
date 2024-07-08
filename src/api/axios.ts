import axios from 'axios';

axios.interceptors.response.use(
  (resposne) => resposne,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/sign-in';
    }

    if (error.response.status === 403) {
      window.location.href = '/error?code=403';
    }

    if (error.response.status === 404) {
      window.location.href = '/error?code=404';
    }

    if (error.response.status >= 500) {
      window.location.href = '/error?code=500';
    }
  }
);

export default axios;
