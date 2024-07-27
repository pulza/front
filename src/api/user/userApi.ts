import axios from '@/api/axios';
import type { User } from '@/domain/user';

const requestUserInfo = async (userToken: string): Promise<User> => {
  const userInfoResponse = await axios.get<User>('/users', {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  return userInfoResponse.data;
};

export { requestUserInfo };
