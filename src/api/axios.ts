import axios from 'axios';
import { actions } from '@/store';
import { GlobalEnvUtil } from '@/util/GlobalEnvUtil';

const backendAxios = axios.create({
  baseURL: GlobalEnvUtil.BACKEND_URL,
});

backendAxios.interceptors.response.use(
  (resposne) => resposne,
  (error) => {
    if (error.response.status === 401) {
      actions.userSessionDeleteAction();
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

export default backendAxios;
