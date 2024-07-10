import axios from '@/api/axios';
import type { UserRole } from '@/store';

type SignUpRequestType = {
  username: string;
  email: string;
  password: string;
};

type SignUpResponse = {
  username: string;
  role: UserRole;
};

const requestSignUp = async (signUpData: SignUpRequestType) => {
  const { data } = await axios.post<SignUpResponse>('/sign-up', { ...signUpData });

  return data;
};

export { requestSignUp };
