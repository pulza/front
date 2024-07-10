import axios from '@/api/axios';

type SignUpRequestType = {
  username: string;
  email: string;
  password: string;
};

const requestSignUp = async (signUpData: SignUpRequestType): Promise<void> => {
  await axios.post<void>('/auth/signup', { ...signUpData });
};

type SignInRequestType = {
  id: string;
  password: string;
};

const requestSignIn = async (signInData: SignInRequestType): Promise<string> => {
  const { data } = await axios.post<string>('/auth/login', { ...signInData });
  const username = data;

  return username;
};

export { requestSignUp, requestSignIn };
