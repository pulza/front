import { requestLogout } from '@/api/user';
import { requestUserInfo } from '@/api/user';
import { userAtom } from '@/store/authAtom';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const [, setUserAtom] = useAtom(userAtom);
  const token = localStorage.getItem('PULZA_TK') || '';

  return {
    logout: async () => {
      await requestLogout(token);

      localStorage.removeItem('PULZA_TK');
      setUserAtom({ email: '', id: 0, name: '', role: 0 });
    },
  };
};

export const useAutoLogin = () => {
  const navigate = useNavigate();
  const [, setUserAtom] = useAtom(userAtom);

  return {
    autoLogin: async () => {
      const token = localStorage.getItem('PULZA_TK');

      if (token) {
        const user = await requestUserInfo(token);

        setUserAtom(user);
      } else {
        setUserAtom({ email: '', id: 0, name: '', role: 0 });
        navigate('/sign-in');
      }
    },
  };
};
