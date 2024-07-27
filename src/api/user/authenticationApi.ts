import axios from '@/api/axios';

type SignUpRequestType = {
  name: string;
  email: string;
  password: string;
};

const requestSignUp = async (signUpData: SignUpRequestType): Promise<void> => {
  await axios.post<void>('/auth/signup', { ...signUpData });
};

type SignInRequestType = {
  email: string;
  password: string;
};

const requestSignIn = async (signInData: SignInRequestType): Promise<string> => {
  const { data } = await axios.post<string>('/auth/login', { ...signInData });
  const username = data;

  return username;
};

const requestLogout = async (token: string): Promise<void> => {
  await axios.post<string>('/auth/logout', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { requestSignUp, requestSignIn, requestLogout };
