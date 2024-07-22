import { useNavigate } from 'react-router-dom';
import { requestSignIn } from '@/api/user';
import { atoms } from '@/store';
import type { SignInFormType } from '@/feature/SignIn/SignIn.constants';
import { requestUserInfo } from '@/api/user/userApi';
import { useAtom } from 'jotai';

type useSignUpType = () => {
  signInAndGoToHomepage: (form: SignInFormType) => Promise<void>;
};

const useSignIn: useSignUpType = () => {
  const navigate = useNavigate();
  const [, setUserAtom] = useAtom(atoms.userAtom);

  const signInAndGoToHomepage = async (form: SignInFormType) => {
    const loginToken = await requestSignIn({ ...form });
    localStorage.setItem('PULZA_TK', loginToken);

    const user = await requestUserInfo(loginToken);
    setUserAtom(user);

    navigate('/');
  };

  return {
    signInAndGoToHomepage,
  };
};

export { useSignIn };
